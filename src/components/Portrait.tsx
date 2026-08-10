import portrait400Avif from "@/assets/generated/nico-martin-400.avif";
import portrait400Webp from "@/assets/generated/nico-martin-400.webp";
import portrait800Avif from "@/assets/generated/nico-martin-800.avif";
import portrait800Webp from "@/assets/generated/nico-martin-800.webp";
import { Blob } from "@/theme";
import cn from "@/utils/classnames";

const sizes = "(max-width: 980px) 82vw, 400px";

export default function Portrait({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid animate-rise place-items-center [animation-delay:90ms]",
        className,
      )}
    >
      <Blob className="bg-[#060709]!">
        <picture>
          <source
            type="image/avif"
            srcSet={`${portrait400Avif.src} 400w, ${portrait800Avif.src} 800w`}
            sizes={sizes}
          />
          <source
            type="image/webp"
            srcSet={`${portrait400Webp.src} 400w, ${portrait800Webp.src} 800w`}
            sizes={sizes}
          />
          <img
            src={portrait800Webp.src}
            srcSet={`${portrait400Webp.src} 400w, ${portrait800Webp.src} 800w`}
            sizes={sizes}
            width="800"
            height="800"
            alt="Nico Martin"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </picture>
      </Blob>
    </div>
  );
}
