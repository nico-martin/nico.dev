"use client";

import { useEffect, useRef, useState } from "react";

import type {
  PressImage,
  PressImageFormat,
  PressImageSize,
} from "@/lib/press-images";
import { SegmentedControl, TablerIcon } from "@/theme";

import CopyTextButton from "./CopyTextButton";

const imageBaseUrl = "https://uploads.nico.dev/gen/";
const defaultRatio = "1-1";
const defaultSize = "large";
const defaultFormat = "jpg";

const sizeOrder = ["small", "medium", "large", "xlarge", "org"];
const subtleButtonClassName =
  "inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-ink/15 bg-white px-3 font-mono text-xs font-medium whitespace-nowrap text-body transition hover:border-ink/30 hover:bg-surface-muted";

function getFormat(size: PressImageSize, format: string) {
  return (
    size.formats.find((candidate) => candidate.format === format) ??
    size.formats[0]
  );
}

function getUrl(file?: PressImageFormat) {
  return file ? new URL(file.filename, imageBaseUrl).toString() : "";
}

function formatRatio(ratio: string) {
  return ratio.replace("-", ":");
}

function sizeLabel(size: string) {
  return (
    {
      small: "S",
      medium: "M",
      large: "L",
      xlarge: "XL",
      org: "Full",
    }[size] ?? size
  );
}

function formatFileSize(bytes: number) {
  if (bytes < 1_000_000) return `${Math.round(bytes / 1000)} KB`;
  return `${(bytes / 1_000_000).toFixed(1)} MB`;
}

async function convertToPng(image: Blob) {
  if (image.type === "image/png") return image;

  const bitmap = await createImageBitmap(image);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not create image canvas");
  context.drawImage(bitmap, 0, 0);
  bitmap.close();

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Could not convert image"));
    }, "image/png");
  });
}

function CopyImageButton({ url }: { url: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const resetTimeout = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (resetTimeout.current) window.clearTimeout(resetTimeout.current);
    },
    [],
  );

  async function copyImage() {
    try {
      if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") {
        throw new Error("Image clipboard is not supported");
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("Could not fetch image");
      const image = await convertToPng(await response.blob());
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": image }),
      ]);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    if (resetTimeout.current) window.clearTimeout(resetTimeout.current);
    resetTimeout.current = window.setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <button type="button" onClick={copyImage} className={subtleButtonClassName}>
      {status === "copied"
        ? "Image copied"
        : status === "error"
          ? "Could not copy"
          : "Copy image"}
    </button>
  );
}

function PressPhoto({ image }: { image: PressImage }) {
  const [ratioName, setRatioName] = useState(defaultRatio);
  const [sizeName, setSizeName] = useState(defaultSize);
  const [formatName, setFormatName] = useState(defaultFormat);

  const ratio =
    image.aspectRatios.find((item) => item.aspectRatio === ratioName) ??
    image.aspectRatios[0];
  const size =
    ratio?.sizes.find((item) => item.size === sizeName) ?? ratio?.sizes[0];
  const selectedFile = size ? getFormat(size, formatName) : undefined;
  const selectedUrl = getUrl(selectedFile);
  const previewSize =
    ratio?.sizes.find((item) => item.size === "small") ?? size;
  const previewJpg = previewSize ? getFormat(previewSize, "jpg") : undefined;
  const previewWebp = previewSize?.formats.find(
    (item) => item.format === "webp",
  );
  const previewAvif = previewSize?.formats.find(
    (item) => item.format === "avif",
  );
  const orderedSizes = [...ratio.sizes].sort(
    (first, second) =>
      sizeOrder.indexOf(first.size) - sizeOrder.indexOf(second.size),
  );

  if (!ratio || !size || !selectedFile || !previewJpg) return null;

  return (
    <div className="min-w-0 overflow-hidden rounded-tile border border-ink/10 bg-white">
      <div className="relative aspect-square overflow-hidden bg-surface-muted">
        <picture>
          {previewAvif && (
            <source type="image/avif" srcSet={getUrl(previewAvif)} />
          )}
          {previewWebp && (
            <source type="image/webp" srcSet={getUrl(previewWebp)} />
          )}
          <img
            src={getUrl(previewJpg)}
            width={previewJpg.width}
            height={previewJpg.height}
            alt={`${image.name} press photo`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-contain object-center"
          />
        </picture>
      </div>

      <div className="grid gap-4 p-3 sm:p-4">
        <div>
          <div className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
            Press photo
          </div>
          <SegmentedControl
            label="Aspect ratio"
            value={ratio.aspectRatio}
            setValue={setRatioName}
            className="mt-2"
            compact
            options={image.aspectRatios.map((item) => ({
              value: item.aspectRatio,
              label: formatRatio(item.aspectRatio),
            }))}
          />
        </div>

        <div>
          <span className="font-mono text-[0.65rem] tracking-[0.08em] text-muted uppercase">
            Size
          </span>
          <SegmentedControl
            label="Image size"
            value={size.size}
            setValue={setSizeName}
            className="mt-2"
            compact
            options={orderedSizes.map((item) => ({
              value: item.size,
              label: sizeLabel(item.size),
              title: item.formats[0]
                ? `${item.formats[0].width}×${item.formats[0].height}`
                : undefined,
            }))}
          />
        </div>

        <div>
          <span className="font-mono text-[0.65rem] tracking-[0.08em] text-muted uppercase">
            Format
          </span>
          <SegmentedControl
            label="Image format"
            value={selectedFile.format}
            setValue={setFormatName}
            className="mt-2"
            compact
            options={size.formats.map((item) => ({
              value: item.format,
              label: item.format.toUpperCase(),
            }))}
          />
        </div>

        <div className="min-w-0 border-t border-ink/10 pt-3">
          {/*<div
            title={selectedUrl}
            dir="rtl"
            className="truncate rounded-md bg-surface-muted px-2.5 py-2 text-left font-mono text-[0.66rem] text-muted"
          >
            <span dir="ltr">{selectedUrl}</span>
          </div>*/}

          <dl className="mt-3 grid grid-cols-3 gap-2">
            <div className="min-w-0">
              <dt className="font-mono text-[0.58rem] tracking-[0.06em] text-muted uppercase">
                File size
              </dt>
              <dd className="mt-0.5 truncate font-mono text-xs text-ink">
                {formatFileSize(selectedFile.filesize)}
              </dd>
            </div>
            <div className="min-w-0 border-l border-ink/10 pl-2">
              <dt className="font-mono text-[0.58rem] tracking-[0.06em] text-muted uppercase">
                Width
              </dt>
              <dd className="mt-0.5 truncate font-mono text-xs text-ink">
                {selectedFile.width}px
              </dd>
            </div>
            <div className="min-w-0 border-l border-ink/10 pl-2">
              <dt className="font-mono text-[0.58rem] tracking-[0.06em] text-muted uppercase">
                Height
              </dt>
              <dd className="mt-0.5 truncate font-mono text-xs text-ink">
                {selectedFile.height}px
              </dd>
            </div>
          </dl>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={selectedUrl}
              target="_blank"
              download={selectedFile.filename}
              className="col-span-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-4 font-heading text-sm font-extrabold text-white transition hover:bg-brand-deep hover:text-white hover:no-underline"
            >
              <TablerIcon icon="download" className="mr-2 size-4" />
              Download
            </a>
            <CopyImageButton url={selectedUrl} />
            <div className="[&>button]:w-full">
              <CopyTextButton text={selectedUrl} label="Copy URL" subtle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PressPhotoSelector({
  images,
}: {
  images: PressImage[];
}) {
  if (images.length === 0) {
    return <p className="mb-0">No press photos are currently available.</p>;
  }

  return (
    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
      {images.map((image) => (
        <PressPhoto key={image.name} image={image} />
      ))}
    </div>
  );
}
