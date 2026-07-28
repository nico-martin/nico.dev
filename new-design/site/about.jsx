const { Button, EyebrowPill, Card, StatCard, ListRow, IconTile, Badge, Blob, Doodles } = window.NicoDevDesignSystem_44963e;

const TIMELINE = [
  ['now', 'Transformers.js at Hugging Face', 'Open source machine learning engineer with a focus on WebML — bringing state-of-the-art models directly to the browser.', 'var(--brand)'],
  ['now', 'Google Developer Expert', 'For AI and web technologies. Interactive demos, technical content and open source tools for privacy-preserving, on-device inference.', 'var(--peri)'],
  ['2025', 'The K.I.T.T. tour', 'Let’s build K.I.T.T. with JavaScript and Look ma, no hands! at Nordic.js, React Advanced London, Devfest Nantes, JSNation, React Paris, Codemotion Rome, CityJS London.', 'var(--yellow)'],
  ['2024', 'Ask my PDF', 'RAG and LLMs against a PDF, fully in the browser. Plus From ML to LLM: on-device AI in the browser at HalfStack London.', 'var(--pink)'],
  ['2023', 'Desktop-class web apps', 'Rethinking desktop applications with progressive web apps at Build Stuff and Full Stack Europe; test automation with Playwright at WordCamp Switzerland.', 'var(--brand)'],
  ['2022', 'Talking to hardware', 'WebBluetooth - the missing link at JSNation and Voxxed Days Zürich, robots at Front Conference Zürich — and the SpeedWheels BLE car and WebUSB matrix to go with them.', 'var(--peri)'],
  ['2019', 'Accessibility & WordPress', 'A brief introduction to a11y at WordCamp Zürich, and Git Installer — a plugin to deploy WordPress themes straight from a Git repository.', 'var(--yellow)'],
  ['2018', '#PWAforEveryone', 'My first conference stages: DevFest Switzerland and Frontendconf Zürich.', 'var(--pink)'],
];

function AboutPage() {
  return (
    <div>
      <SiteHeader page="About" />
      <section style={{ position: 'relative', paddingTop: 72, paddingBottom: 24 }}>
        <Doodles />
        <div className="wrap split" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ flex: '0 0 56%' }} className="nd-rise">
            <EyebrowPill>About me</EyebrowPill>
            <h1 style={{ fontSize: '3.25rem', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)', margin: '24px 0 20px' }}>Hello, my name is Nico.</h1>
            <p style={{ fontSize: 'var(--text-lead)' }}>
              I am an open source machine learning engineer with focus on WebML at Hugging Face and Google Developer Expert in AI and web technologies, from Switzerland.
            </p>
            <p style={{ fontSize: 'var(--text-lead)' }}>
              I work on <a href="https://github.com/huggingface/transformers.js">Transformers.js</a>, bringing state-of-the-art machine learning models directly to the web browser. My focus is on making AI accessible to developers through interactive demos, technical content and open source tools that enable privacy-preserving, on-device inference.
            </p>
            <p style={{ fontSize: 'var(--text-lead)' }}>
              Beyond code, I&rsquo;m passionate about developer relations: sharing knowledge through <a href="speaking.html">conference talks</a>, blog posts and community engagement, helping developers explore the possibilities of AI on the web.
            </p>
            <p style={{ fontSize: 'var(--text-lead)' }}>
              When I&rsquo;m not in front of a computer, I spend my days in the mountains, on skis, or waiting for the wind.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap' }}>
              <Button chevron as="a" href="https://nico.dev/cv">Read the CV</Button>
              <Button variant="secondary" shadowColor="var(--yellow)" style={{ background: 'var(--surface-card)', color: 'var(--text-strong)' }} as="a" href="mailto:mail@nico.dev">mail@nico.dev</Button>
            </div>
          </div>
          <div style={{ flex: '0 0 auto', minWidth: 0, display: 'grid', placeItems: 'center', margin: '0 auto' }} className="nd-rise-2">
            <Blob size={360} style={{ boxShadow: 'none' }}>
              <img src="assets/nico-portrait.jpg" alt="Nico Martin" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%', transform: 'scale(1.6) translateY(-16%)', transformOrigin: '50% 0%' }} />
            </Blob>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <EyebrowPill>What I do</EyebrowPill>
        <h2 style={{ fontSize: '2.25rem', margin: '20px 0 32px' }}>Three things, most days</h2>
        <div className="grid-3">
          {[
            { g: '✓', t: 'On-device machine learning', d: 'Models that run client-side: quantisation, WebGPU, worker pipelines, and the demos that prove it works.', s: 'teal', tone: 'teal' },
            { g: '»', t: 'Speaking & teaching', d: 'Conference talks and team workshops. I like a live demo that could fail on stage — it usually does not.', s: 'yellow', tone: 'yellow' },
            { g: '⌁', t: 'Browser hardware APIs', d: 'WebBluetooth, WebUSB, File System Access. If the browser can talk to a device, I have probably tried it.', s: 'pink', tone: 'pink' },
          ].map((c) => (
            <Card key={c.t} shadow={c.s}>
              <IconTile glyph={c.g} tone={c.tone} size={62} />
              <h3 style={{ margin: '20px 0 8px' }}>{c.t}</h3>
              <p style={{ margin: 0 }}>{c.d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <EyebrowPill>What I&rsquo;ve done</EyebrowPill>
        <h2 style={{ fontSize: '2.25rem', margin: '20px 0 32px' }}>A short history</h2>
        <div className="rows">
          {TIMELINE.map(([year, title, desc, accent], i) => (
            <ListRow key={title + i} accent={accent} style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', alignItems: 'flex-start', padding: '22px 26px' }}
              lead={<Badge mono>{year}</Badge>}>
              <div className="rowtitle">{title}</div>
              <p style={{ margin: '6px 0 0', maxWidth: 720 }}>{desc}</p>
            </ListRow>
          ))}
        </div>
        <div className="grid-3" style={{ marginTop: 40 }}>
          <StatCard label="Conference talks" value="30+" delta="since 2018" />
          <StatCard tone="white" label="Speaking since" value="2018" delta="conferences & meetups" style={{ background: 'var(--surface-card)', color: 'var(--text-strong)' }} />
          <StatCard tone="yellow" label="Side projects" value="MIT" delta="all open source" />
        </div>
      </section>

      <section style={{ marginTop: 96, background: 'var(--brand)', padding: '72px 0' }}>
        <div className="wrap split" style={{ gap: 40, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 420px' }}>
            <EyebrowPill style={{ background: 'rgba(255,255,255,.9)', color: 'var(--brand-deep)' }}>Say hi</EyebrowPill>
            <h2 style={{ fontSize: '2.25rem', margin: '20px 0 12px', color: '#fff' }}>Looking for a speaker?</h2>
            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 'var(--text-lead)', margin: 0 }}>I&rsquo;m always happy about new opportunities — conferences, meetups or an internal team session.</p>
          </div>
          <Button size="lg" chevron as="a" href="mailto:mail@nico.dev" variant="secondary" shadowColor="#15171C" style={{ background: '#fff', color: '#15171C', border: '3px solid #15171C' }}>mail@nico.dev</Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage />);
