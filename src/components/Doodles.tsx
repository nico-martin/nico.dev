export default function Doodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="doodle top-[8%] left-[4%] text-3xl text-pink">✦</span>
      <span className="doodle top-[17%] right-[7%] size-3 rounded-full bg-yellow [animation-delay:1s]" />
      <span className="doodle top-[58%] right-[3%] size-5 rotate-12 rounded-md bg-brand-tint-strong [animation-delay:2s]" />
      <span className="doodle top-[65%] left-[2%] text-xl text-peri [animation-delay:3s]">
        »
      </span>
    </div>
  );
}
