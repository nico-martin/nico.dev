import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(root, "src/assets/generated");

const images = [
  {
    name: "nico-martin",
    input: "src/assets/nico-martin.png",
    crop: { left: 188, top: 300, width: 900, height: 900 },
  },
  {
    name: "nico-on-stage-codetalks",
    input: "src/assets/nico-on-stage-codetalks.jpg",
    crop: { left: 1700, top: 300, width: 3600, height: 3600 },
  },
];

const widths = [400, 600, 800];

await mkdir(outputDirectory, { recursive: true });

for (const image of images) {
  for (const width of widths) {
    const source = sharp(path.join(root, image.input))
      .rotate()
      .extract(image.crop)
      .resize(width, width, { fit: "fill" });

    await Promise.all([
      source
        .clone()
        .avif({ quality: 68, effort: 6 })
        .toFile(path.join(outputDirectory, `${image.name}-${width}.avif`)),
      source
        .clone()
        .webp({ quality: 78, alphaQuality: 90, effort: 6 })
        .toFile(path.join(outputDirectory, `${image.name}-${width}.webp`)),
    ]);
  }
}

console.log(`Optimized ${images.length} images in ${outputDirectory}`);
