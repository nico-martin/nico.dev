import stage400Avif from "@/assets/generated/nico-on-stage-codetalks-400.avif";
import stage400Webp from "@/assets/generated/nico-on-stage-codetalks-400.webp";
import stage800Avif from "@/assets/generated/nico-on-stage-codetalks-800.avif";
import stage800Webp from "@/assets/generated/nico-on-stage-codetalks-800.webp";
import { Blob } from "@/theme";

const sizes = "(max-width: 980px) 82vw, 380px";

export default function StagePhoto() {
  return (
    <Blob className="size-[min(23.75rem,82vw)] bg-yellow">
      <picture>
        <source
          type="image/avif"
          srcSet={`${stage400Avif.src} 400w, ${stage800Avif.src} 800w`}
          sizes={sizes}
        />
        <source
          type="image/webp"
          srcSet={`${stage400Webp.src} 400w, ${stage800Webp.src} 800w`}
          sizes={sizes}
        />
        <img
          src={stage800Webp.src}
          srcSet={`${stage400Webp.src} 400w, ${stage800Webp.src} 800w`}
          sizes={sizes}
          width="800"
          height="800"
          alt="Nico Martin on stage at code.talks Hamburg"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      </picture>
    </Blob>
  );
}
