import type { CfpPaper } from "@/lib/wp-api";
import { Badge, Card, IconTile } from "@/theme";

interface TalkSelectorProps {
  papers: CfpPaper[];
}

const tones = ["teal", "yellow", "pink", "peri"] as const;

export default function TalkSelector({ papers }: TalkSelectorProps) {
  if (papers.length === 0) {
    return (
      <Card shadow="peri">
        <h3 className="text-xl">New talks are in the works</h3>
        <p className="mt-2 mb-0">Get in touch to discuss a custom topic.</p>
      </Card>
    );
  }

  return (
    <div className="grid gap-7 md:grid-cols-2">
      {papers.map((paper, index) => {
        const tone = tones[index % tones.length];

        return (
          <Card key={paper.title} shadow={tone}>
            <div className="flex gap-4">
              <IconTile icon="microphone" tone={tone} />
              <div className="min-w-0">
                {paper.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                )}
                <h3 className="mt-3 text-xl">{paper.title}</h3>
                <p className="mt-2 mb-0">{paper.abstract}</p>
                {paper.idealAudience && (
                  <div className="mt-5 border-t border-ink/10 pt-4">
                    <span className="font-mono text-[0.7rem] tracking-[0.1em] text-muted uppercase">
                      Ideal audience
                    </span>
                    <p className="mt-1 mb-0 text-sm">{paper.idealAudience}</p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
