type InviteFact = readonly [label: string, value: string | readonly string[]];

interface InviteFactsProps {
  facts: readonly InviteFact[];
  id?: string;
}

export default function InviteFacts({ facts, id }: InviteFactsProps) {
  return (
    <section id={id} className="dark-band">
      <div className="wrap">
        <div className="mb-12">
          <span className="font-mono text-xs tracking-[0.16em] text-brand uppercase">
            The facts
          </span>
          <h2 className="section-title mt-3">Formats, languages, logistics</h2>
        </div>
        <div className="border-t border-white/15">
          {facts.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-white/15 py-5 md:grid-cols-[12.5rem_1fr]"
            >
              <span className="font-mono text-xs tracking-[0.12em] text-brand uppercase">
                {label}
              </span>
              {Array.isArray(value) ? (
                <ul className="list-disc space-y-1 pl-5 text-white/80">
                  {value.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-white/80">{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
