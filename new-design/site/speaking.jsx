const { Button, EyebrowPill, Card, IconTile, Badge, Blob } = window.NicoDevDesignSystem_44963e;

const UPCOMING = [
  { date: '14.09.2026', event: 'Infobip Shift', talk: 'coming soon..', link: 'https://shift.infobip.com/', accent: 'var(--brand)' },
];

const VIDEOS = [
  { id: 'NaXILG12weY', event: 'Nordic.js', city: 'Stockholm', year: '2025', talk: 'Look ma, no hands! Multimodal AI agents in the browser' },
  { id: 'yUr5718r0pQ', event: 'Devfest Nantes', city: 'Nantes', year: '2025', talk: 'Let’s build K.I.T.T. with JavaScript' },
  { id: 'HpbMZX1yOKc', event: 'React Paris', city: 'Paris', year: '2025', talk: 'Let’s build K.I.T.T. with JavaScript' },
  { id: 'O07LXed5y_Q', event: 'Uphill Conf', city: 'Bern', year: '2025', talk: 'Let’s build K.I.T.T. with JavaScript' },
  { id: 'R2sC9GUkTpQ', event: 'Voxxed Days', city: 'Zürich', year: '2022', talk: 'WebBluetooth - the missing link' },
  { id: 'htwYbnD-1rs', event: 'Front Conference', city: 'Zürich', year: '2022', talk: 'Beyond the browser – how to talk with robots' },
];

const CONFS = ['Nordic.js', 'React Advanced London', 'JSNation', 'React Summit', 'React Paris', 'Devfest Nantes', 'Codemotion', 'CityJS London', 'code.talks', 'HalfStack London', 'Build Stuff', 'Full Stack Europe', 'Voxxed Days', 'Front Conference', 'Uphill Conf', 'webinale', 'Developer Week', 'programmier.con', 'DevFest', 'Dev<Talks/>', 'Frontendconf', 'WordCamp', 'Infobip Shift', 'Social Developers'];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const CITIES = [
  ['Stockholm', 59.33, 18.07], ['London', 51.51, -0.13], ['Amsterdam', 52.37, 4.90],
  ['Paris', 48.86, 2.35], ['Nantes', 47.22, -1.55], ['Antwerp', 51.22, 4.40],
  ['Hamburg', 53.55, 9.99], ['Berlin', 52.52, 13.40], ['Nuremberg', 49.45, 11.08],
  ['Vilnius', 54.69, 25.28], ['Bucharest', 44.43, 26.10], ['Rome', 41.90, 12.50],
  ['Milan', 45.46, 9.19], ['Zürich', 47.38, 8.54], ['Bern', 46.95, 7.45],
];
const HOME = ['Thun', 46.758, 7.630];

function TalkMap() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    const W = 900, H = 660;
    const svg = d3.select(ref.current).attr('viewBox', `0 0 ${W} ${H}`);
    const pts = { type: 'MultiPoint', coordinates: [[HOME[2], HOME[1]]].concat(CITIES.map(([n, la, lo]) => [lo, la])) };
    const projection = d3.geoMercator().fitExtent([[54, 30], [W - 54, H - 30]], pts);
    const path = d3.geoPath(projection);
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then((topology) => {
      if (cancelled) return;
      const countries = topojson.feature(topology, topology.objects.countries);
      svg.append('g').selectAll('path').data(countries.features).join('path')
        .attr('d', path).attr('fill', '#F1F3F5').attr('stroke', '#fff').attr('stroke-width', 1.2);
      const routes = svg.append('g');
      CITIES.forEach(([name, lat, lon]) => {
        routes.append('path')
          .datum({ type: 'LineString', coordinates: [[HOME[2], HOME[1]], [lon, lat]] })
          .attr('d', path).attr('fill', 'none').attr('stroke', '#009D89')
          .attr('stroke-width', 1.6).attr('stroke-opacity', .5).attr('stroke-linecap', 'round');
      });
      const [hx, hy] = projection([HOME[2], HOME[1]]);
      const home = svg.append('g');
      home.append('circle').attr('cx', hx).attr('cy', hy).attr('r', 9).attr('fill', '#F5C842').attr('stroke', '#15171C').attr('stroke-width', 3);
      home.append('text').attr('x', hx).attr('y', hy + 30).attr('text-anchor', 'middle').text('Thun, CH')
        .attr('font-family', 'Nunito, sans-serif').attr('font-weight', 800).attr('font-size', 15).attr('fill', '#15171C');
      const pg = svg.append('g');
      const LEFT = { Bern: 1, Zürich: 0 };
      CITIES.forEach(([name, lat, lon]) => {
        const [x, y] = projection([lon, lat]);
        pg.append('circle').attr('cx', x).attr('cy', y).attr('r', 5).attr('fill', '#EE5FA7').attr('stroke', '#15171C').attr('stroke-width', 2);
        const left = LEFT[name] === 1;
        pg.append('text').attr('x', left ? x - 10 : x + 10).attr('y', name === 'Bern' ? y - 8 : y + 4)
          .attr('text-anchor', left ? 'end' : 'start').text(name)
          .attr('font-family', 'JetBrains Mono, monospace').attr('font-size', 12).attr('fill', '#15171C');
      });
    });
    return () => { cancelled = true; };
  }, []);
  return <svg ref={ref} style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Map of Europe showing the cities Nico has spoken in, connected to Thun in Switzerland" />;
}

function VideoRail() {
  const railRef = React.useRef(null);
  const scrollBy = (dir) => {
    const el = railRef.current;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };
  return (
    <div>
      <div className="rail-head">
        <div>
          <EyebrowPill>On stage</EyebrowPill>
          <h2 style={{ fontSize: '2rem', margin: '20px 0 8px' }}>Recordings from past conferences</h2>
          <p style={{ maxWidth: 560, margin: 0 }}>Every recording the organisers published. The demos are live in all of them.</p>
        </div>
        <div className="rail-btns">
          <button type="button" className="rail-btn" onClick={() => scrollBy(-1)} aria-label="Previous videos">«</button>
          <button type="button" className="rail-btn" onClick={() => scrollBy(1)} aria-label="More videos">»</button>
        </div>
      </div>
      <div className="rail" ref={railRef}>
        {VIDEOS.map((v) => (
          <a key={v.id} className="rail-item" href={`https://www.youtube.com/watch?v=${v.id}`}>
            <div className="rail-thumb">
              <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
              <span className="rail-play" aria-hidden="true">»</span>
            </div>
            <div className="rail-meta">
              <span className="mono">{v.city} · {v.year}</span>
              <strong>{v.event}</strong>
              <span className="rail-talk">{v.talk}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function SpeakingPage() {
  return (
    <div>
      <SiteHeader page="Speaking" />
      <PageHead eyebrow="Speaking"
        title="Conferences, meetups, live demos"
        lead="Over the past few years I’ve had the pleasure of speaking at many different conferences and meetups. And I’m always happy about new opportunities as well: mail@nico.dev"
        media={
          <Blob size={380} fill="var(--yellow)" style={{ boxShadow: 'none' }}>
            <img src="assets/nico-on-stage-codetalks.jpg" alt="Nico Martin on stage at code.talks Hamburg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '58% 30%' }} />
          </Blob>
        } />

      <section className="wrap">
        <div style={{ display: 'flex', gap: 16, marginBottom: 8, flexWrap: 'wrap' }}>
          <Button chevron as="a" href="invite.html">Invite me to speak</Button>
          <Button variant="secondary" shadow={false} style={{ background: 'var(--surface-card)', color: 'var(--text-strong)' }} as="a" href="https://www.youtube.com/@nicodotdev">Watch recordings</Button>
        </div>
      </section>

      <section className="wrap sec"><VideoRail /></section>

      <section className="next-band">
        <div className="wrap">
          <div className="next-head">
            <div>
              <span className="next-eyebrow mono">Upcoming</span>
              <h2>Next up</h2>
            </div>
            <p>More dates in the making — mail@nico.dev if you want one of them to be yours.</p>
          </div>
          <div className="next-list">
            {UPCOMING.map((u) => (
              <a key={u.event} href={u.link} className="next-row">
                <span className="next-date mono" style={{ color: u.accent }}>{u.date}</span>
                <span className="next-ev">{u.event}</span>
                <span className="next-talk">{u.talk}</span>
                <span className="next-arrow" aria-hidden="true">»</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <EyebrowPill>Archive</EyebrowPill>
        <h2 style={{ fontSize: '2rem', margin: '20px 0 8px' }}>Stages I&rsquo;ve been on</h2>
        <p style={{ maxWidth: 560, marginBottom: 32 }}>Conferences and meetups across Europe since 2018 — slides for all of them live on slides.nico.dev. Drop a logo file on any tile to fill it in.</p>
        <div className="conf-marquee" aria-label="Conferences I have spoken at">
          {[0, 1].map((pass) => (
            <div className="conf-track" key={pass} aria-hidden={pass === 1 ? 'true' : undefined}>
              {CONFS.map((c) => (
                <div key={c} className="conf-cell">
                  <image-slot id={`conf-${slug(c)}`} shape="rounded" radius="14" fit="contain" placeholder={c}></image-slot>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <div className="map-layout">
          <div>
            <EyebrowPill>Where</EyebrowPill>
            <h2 style={{ fontSize: '2rem', margin: '20px 0 8px' }}>Every trip starts in Thun</h2>
            <p style={{ maxWidth: 380 }}>Home is a small town on a lake in the Swiss Alps. From there it&rsquo;s a train or a short flight to most of Europe — which is where the talks happen.</p>
            <div className="map-legend">
              <span><i className="dot-home" />Thun, Switzerland</span>
              <span><i className="dot-city" />{CITIES.length} cities</span>
            </div>
          </div>
          <div className="map-box"><TalkMap /></div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<SpeakingPage />);
