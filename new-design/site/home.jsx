const { Button, EyebrowPill, Card, IconTile, Badge, Blob, Doodles } = window.NicoDevDesignSystem_44963e;

function HomePage() {
  return (
    <div>
      <SiteHeader page="Home" />
      <section style={{ position: 'relative', paddingTop: 72, paddingBottom: 40 }}>
        <Doodles />
        <div className="wrap split" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ flex: '0 0 53%' }} className="nd-rise">
            <EyebrowPill>Machine learning engineer</EyebrowPill>
            <h1 style={{ fontSize: '4rem', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)', margin: '24px 0 20px' }}>
              Hello, my name<br />is <span style={{ color: 'var(--brand)' }}>Nico</span>.
            </h1>
            <p style={{ fontSize: 'var(--text-lead)', maxWidth: 520 }}>
              I am an open source machine learning engineer with focus on WebML at Hugging Face and Google Developer Expert in AI and web technologies, from Switzerland.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
              <Button size="lg" chevron as="a" href="speaking.html">See where I speak</Button>
              <Button size="lg" variant="secondary" shadowColor="var(--yellow)" as="a" href="mailto:mail@nico.dev">Invite me to your event</Button>
            </div>
          </div>
          <div style={{ flex: '0 0 auto', minWidth: 0, position: 'relative', display: 'grid', placeItems: 'center', margin: '0 auto' }} className="nd-rise-2">
            <Blob size={400} style={{ boxShadow: 'none' }}>
              <img src="assets/nico-portrait.jpg" alt="Nico Martin" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%', transform: 'scale(1.6) translateY(-16%)', transformOrigin: '50% 0%' }} />
            </Blob>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 64 }}>
        <div className="grid-3">
          {[
            { g: '✦', t: 'About me', d: 'WebML at Hugging Face, Google Developer Expert, and a few years of conference stages behind me. The long version, plus what came before.', s: 'teal', tone: 'teal', href: 'about.html', cta: 'Who I am' },
            { g: '»', t: 'Talks', d: 'AI agents in the browser, K.I.T.T. in JavaScript, robots over Bluetooth — every one with a live demo that runs on-device.', s: 'yellow', tone: 'yellow', href: 'speaking.html', cta: 'See the talks' },
            { g: '⌁', t: "What's up", d: 'Side projects, articles, recorded talks and podcast appearances. Whatever I am currently building or explaining.', s: 'pink', tone: 'pink', href: 'whats-up.html', cta: 'Have a look' },
          ].map((c, i) => (
            <Card key={c.t} shadow={c.s} className={`nd-rise-${i + 1}`}>
              <IconTile glyph={c.g} tone={c.tone} size={62} />
              <h3 style={{ margin: '20px 0 8px' }}>{c.t}</h3>
              <p>{c.d}</p>
              <a href={c.href} className="mono" style={{ fontSize: '.875rem' }}>{c.cta} »</a>
            </Card>
          ))}
        </div>
      </section>

      <section className="next-band">
        <div className="wrap">
          <div className="next-head">
            <div>
              <span className="next-eyebrow mono">Up next</span>
              <h2>Where you can catch me</h2>
            </div>
            <p>Over the past few years I&rsquo;ve had the pleasure of speaking at many different conferences and meetups. And I&rsquo;m always happy about new opportunities.</p>
          </div>
          <div className="next-list">
            {[
              ['14.09.2026', 'Infobip Shift', 'coming soon..', 'var(--brand)', 'https://shift.infobip.com/'],
              ['05.06.2026', 'React Norway', 'Look ma, no hands! Multimodal AI agents in the browser', 'var(--yellow)', 'https://reactnorway.com/'],
              ['03.06.2026', 'Dev<Talks/>', 'Look ma, no hands! Multimodal AI agents in the browser', 'var(--pink)', 'https://www.devtalks.ro/speakers/688-nico-martin'],
            ].map(([d, ev, t, a, href]) => (
              <a key={ev} href={href} className="next-row">
                <span className="next-date mono" style={{ color: a }}>{d}</span>
                <span className="next-ev">{ev}</span>
                <span className="next-talk">{t}</span>
                <span className="next-arrow" aria-hidden="true">»</span>
              </a>
            ))}
          </div>
          <a href="speaking.html" className="next-all mono">All talks, slides and recordings »</a>
        </div>
      </section>
      <section className="wrap sec">
        <div className="now-head">
          <div>
            <EyebrowPill>What&rsquo;s new</EyebrowPill>
            <h2 style={{ fontSize: '2.25rem', margin: '20px 0 0' }}>Latest things I built</h2>
          </div>
          <a href="whats-up.html" className="mono" style={{ fontSize: '.9375rem' }}>Everything I&rsquo;m up to »</a>
        </div>
        <div className="grid-3" style={{ marginTop: 32 }}>
          {[
            { name: 'Ask my PDF', repo: 'nico-martin/ask-my-pdf', desc: 'Retrieval Augmented Generation and large language models to interact with a PDF, entirely in the browser.', stack: ['RAG', 'WebGPU'], tone: 'teal', glyph: '✦', live: 'https://pdf.nico.dev', source: 'https://github.com/nico-martin/ask-my-pdf' },
            { name: '[md.edit]', repo: 'nico-martin/markdown-editor', desc: 'A web based markdown editor showcasing the File System Access API: files open and save straight in the browser.', stack: ['PWA', 'File System'], tone: 'yellow', glyph: '⌁', live: 'https://md.nico.dev/', source: 'https://github.com/nico-martin/markdown-editor/' },
            { name: 'SpeedWheels BLE Car', repo: 'nico-martin/speed-wheels-ble-ui', desc: 'An Arduino toy car that talks Bluetooth Low Energy, driven by a web app over the Web Bluetooth API.', stack: ['WebBluetooth', 'Arduino'], tone: 'pink', glyph: '»', live: 'https://speed-wheels.nico.dev/', source: 'https://github.com/nico-martin/speed-wheels-ble-arduino' },
          ].map((p) => (
            <Card key={p.name} shadow={p.tone}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <IconTile glyph={p.glyph} tone={p.tone} size={56} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '2px 0 4px', fontSize: '1.25rem' }}>{p.name}</h3>
                  <div className="meta" style={{ marginBottom: 10 }}>{p.repo}</div>
                  <p style={{ margin: '0 0 14px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                    {p.stack.map((s) => <Badge key={s} mono>{s}</Badge>)}
                    {p.live ? <Badge tone="success" dot>live demo</Badge> : null}
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <Button size="sm" chevron as="a" href={p.live}>Launch app</Button>
                    <Button size="sm" variant="secondary" shadow={false} style={{ background: 'var(--surface-card)', color: 'var(--text-strong)' }} as="a" href={p.source}>Source code</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<HomePage />);
