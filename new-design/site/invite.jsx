const { Button, EyebrowPill, Card, IconTile, Badge, Select } = window.NicoDevDesignSystem_44963e;

const TALKS = [
  { title: 'Look ma, no hands! Multimodal AI agents in the browser', topic: 'AI / ML', tone: 'teal', blurb: 'Agents that see, hear and act — running entirely on-device with Transformers.js.', len: '30–45 min' },
  { title: 'Let’s build K.I.T.T. with JavaScript', topic: 'AI / ML', tone: 'yellow', blurb: 'A talking car, live on stage: speech, language models and hardware, all from the browser.', len: '30–45 min' },
  { title: 'From ML to LLM: on-device AI in the browser', topic: 'AI / ML', tone: 'pink', blurb: 'How client-side inference went from image classifiers to language models.', len: '20–40 min' },
  { title: 'Beyond the browser – how to talk with robots', topic: 'Hardware APIs', tone: 'peri', blurb: 'WebBluetooth, WebUSB and a robot that does what the web app tells it.', len: '30–45 min' },
  { title: 'WebBluetooth - the missing link', topic: 'Hardware APIs', tone: 'teal', blurb: 'The API that lets a website connect to the physical world.', len: '20–40 min' },
  { title: 'Rethinking desktop applications with progressive web apps', topic: 'PWA', tone: 'yellow', blurb: 'File System Access, window controls, protocol handlers — the desktop-class web.', len: '30–45 min' },
];

const FACTS = [
  ['Formats', 'Conference talk, meetup talk, or a ½–2 day team workshop'],
  ['Length', '20 to 45 minutes for a talk, agreed with you up front'],
  ['Languages', 'English or German'],
  ['Travelling from', 'Thun, Switzerland — anywhere in Europe works'],
  ['Slides', 'Published openly on slides.nico.dev after the event'],
  ['Recording', 'Always welcome — I link it from this site'],
];

const NEEDS = ['A stage and a beamer that accepts HDMI', 'Internet is nice, not required — the demos run offline', 'A table if the talk involves the car or the robot', 'I bring the hardware'];

const QUOTES = [
  { text: 'Placeholder — send me a line from an organiser you worked with and I’ll set it here.', who: 'Organiser name', where: 'Conference, year' },
  { text: 'Placeholder — a second quote works well next to the first.', who: 'Organiser name', where: 'Conference, year' },
];

function InvitePage() {
  const [topic, setTopic] = React.useState('All topics');
  const talks = TALKS.filter((t) => topic === 'All topics' || t.topic === topic);
  return (
    <div>
      <SiteHeader page="Invite me" />
      <PageHead eyebrow="Invite me"
        title="Everything you need to book me"
        lead="Topics, formats, logistics and what I need on site. If something is missing, just ask: mail@nico.dev" />

      <section className="wrap">
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Button size="lg" chevron as="a" href="mailto:mail@nico.dev">mail@nico.dev</Button>
          <Button size="lg" variant="secondary" shadowColor="var(--yellow)" style={{ background: 'var(--surface-card)', color: 'var(--text-strong)' }} as="a" href="speaking.html">Watch a talk first</Button>
        </div>
      </section>

      <section className="wrap sec">
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <EyebrowPill>The talks</EyebrowPill>
            <h2 style={{ fontSize: '2rem', margin: '20px 0 8px' }}>What I can bring to your stage</h2>
            <p style={{ maxWidth: 520, margin: 0 }}>Each one comes with a live demo that runs entirely in the browser. English or German, 20 to 45 minutes.</p>
          </div>
          <Select label="Topic" options={['All topics', 'AI / ML', 'Hardware APIs', 'PWA']} value={topic} onChange={(e) => setTopic(e.target.value)} style={{ width: 220, background: 'var(--surface-card)', color: 'var(--text-strong)' }} />
        </div>
        <div className="grid-2" style={{ marginTop: 28 }}>
          {talks.map((t) => (
            <Card key={t.title} shadow={t.tone}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <IconTile glyph="»" tone={t.tone} size={56} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <Badge mono>{t.topic}</Badge>
                    <Badge mono>{t.len}</Badge>
                  </div>
                  <h3 style={{ margin: '12px 0 6px', fontSize: '1.25rem' }}>{t.title}</h3>
                  <p style={{ margin: 0 }}>{t.blurb}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="meta" style={{ marginTop: 20 }}>Something else on your programme? I&rsquo;m happy to write a new talk for the right event.</p>
      </section>

      <section className="next-band">
        <div className="wrap">
          <div className="next-head">
            <div>
              <span className="next-eyebrow mono">The facts</span>
              <h2>Formats, languages, logistics</h2>
            </div>
            <p>The short version for your CFP sheet or programme document.</p>
          </div>
          <div className="next-list">
            {FACTS.map(([k, v]) => (
              <div key={k} className="fact-row">
                <span className="mono fact-k">{k}</span>
                <span className="fact-v">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <EyebrowPill>Kind words</EyebrowPill>
        <h2 style={{ fontSize: '2rem', margin: '20px 0 8px' }}>What organisers said</h2>
        <p style={{ maxWidth: 560, marginBottom: 32 }}>Two placeholder quotes — send me the real ones and I&rsquo;ll drop them in.</p>
        <div className="grid-2">
          {QUOTES.map((q, i) => (
            <Card key={i} shadow={i === 0 ? 'teal' : 'peri'}>
              <span aria-hidden="true" style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2.5rem', color: 'var(--brand)', lineHeight: 1 }}>»</span>
              <p style={{ fontSize: 'var(--text-lead)', margin: '12px 0 20px' }}>{q.text}</p>
              <div className="rowtitle">{q.who}</div>
              <div className="meta">{q.where}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <div className="grid-2" style={{ alignItems: 'start' }}>
          <Card shadow="yellow">
            <EyebrowPill size="sm">On site</EyebrowPill>
            <h3 style={{ margin: '16px 0 8px' }}>What I need from you</h3>
            <p>A stage, a beamer that accepts HDMI, and internet is nice but not required — the demos run offline. I bring the car.</p>
            <div style={{ display: 'grid', gap: 10, margin: '18px 0 22px' }}>
              {NEEDS.map((s) => (
                <div key={s} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span aria-hidden="true" style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--brand)' }}>✓</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <Button chevron as="a" href="mailto:mail@nico.dev">mail@nico.dev</Button>
          </Card>
          <Card shadow="pink">
            <EyebrowPill size="sm">Speaker kit</EyebrowPill>
            <h3 style={{ margin: '16px 0 8px' }}>Bio and photo</h3>
            <p>Copy this straight into your programme:</p>
            <p style={{ background: 'var(--surface-muted)', borderRadius: 'var(--radius-row)', padding: '18px 20px' }}>
              Nico Martin is an open source machine learning engineer with focus on WebML at Hugging Face and Google Developer Expert in AI and web technologies, from Switzerland.
            </p>
            <div className="linkrow">
              <a href="assets/nico-portrait.jpg">Portrait photo »</a>
              <a href="https://github.com/nico-martin">GitHub »</a>
              <a href="https://x.com/nicodotdev">X »</a>
            </div>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<InvitePage />);
