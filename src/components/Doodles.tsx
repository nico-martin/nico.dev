import { TablerIcon } from "@/theme";

export default function Doodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <TablerIcon
        icon="sparkles"
        className="doodle top-[8%] left-[4%] size-8 text-pink"
      />
      <span className="doodle top-[17%] right-[7%] size-3 rounded-full bg-yellow [animation-delay:1s]" />
      <span className="doodle top-[58%] right-[3%] size-5 rotate-12 rounded-md bg-brand-tint-strong [animation-delay:2s]" />
      <TablerIcon
        icon="chevrons-right"
        className="doodle top-[65%] left-[2%] size-6 text-peri [animation-delay:3s]"
      />
    </div>
  );
}
