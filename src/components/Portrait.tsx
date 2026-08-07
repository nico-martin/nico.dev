import { Blob } from "@/theme";
import Image from "next/image";
import portrait from "@/assets/nico-martin.png";
import cn from "@/utils/classnames";

export default function Portrait({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid animate-rise place-items-center [animation-delay:90ms]",
        className,
      )}
    >
      <Blob className="bg-[#060709]!">
        <Image
          src={portrait}
          alt="Nico Martin"
          fill
          priority
          className="-translate-y-5 scale-[1.4] object-cover object-top"
          sizes="(max-width: 980px) 82vw, 400px"
        />
      </Blob>
    </div>
  );
}
