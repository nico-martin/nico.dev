const { Button, EyebrowPill, Card, Badge, IconTile } = window.NicoDevDesignSystem_44963e;

const ITEMS = [
  { type: 'Project', title: 'Ask my PDF', subtitle: 'nico-martin/ask-my-pdf', lang: 'EN', tone: 'teal', date: '2024',
    desc: 'A webapp that uses Retrieval Augmented Generation (RAG) and large language models to interact with a PDF directly in the browser.',
    tags: ['RAG', 'Transformers.js', 'WebGPU'],
    links: [['Launch app', 'https://pdf.nico.dev'], ['Source code', 'https://github.com/nico-martin/ask-my-pdf']] },
  { type: 'Project', title: '[md.edit]', subtitle: 'nico-martin/markdown-editor', lang: 'EN', tone: 'yellow', date: '2021',
    desc: 'A web based markdown editor with a great cross-platform editing experience. It showcases the File System Access API: files are opened and saved directly in the browser.',
    tags: ['PWA', 'File System Access'],
    links: [['Launch app', 'https://md.nico.dev/'], ['Source code', 'https://github.com/nico-martin/markdown-editor/']] },
  { type: 'Article', title: 'Creating Bluetooth robots with progressive web apps', subtitle: 'codemotion.com', lang: 'EN', tone: 'pink', date: '2022',
    desc: 'The written version of the robots talk: how a web app pairs with an Arduino over Bluetooth Low Energy and drives it around the room.',
    tags: ['WebBluetooth'],
    links: [['Read the article', 'https://www.codemotion.com/magazine/backend/iot/web-progressive-apps-creating-bluetooth-robots/']] },
  { type: 'Project', title: 'SpeedWheels BLE Car', subtitle: 'nico-martin/speed-wheels-ble-ui', lang: 'EN', tone: 'peri', date: '2022',
    desc: 'A toy car based on an Arduino Nano RP2040 that communicates over Bluetooth Low Energy and is controlled by a web app using the Web Bluetooth API.',
    tags: ['WebBluetooth', 'Arduino'],
    links: [['Launch app', 'https://speed-wheels.nico.dev/'], ['Source code', 'https://github.com/nico-martin/speed-wheels-ble-arduino']] },
  { type: 'Project', title: 'WebUSB Matrix', subtitle: 'nico-martin/webusb-rgb-matrix', lang: 'EN', tone: 'teal', date: '2022',
    desc: 'A Raspberry Pi Pico powered Neopixel RGB matrix controlled over USB. The web app takes an image, downsamples it to 16×16px and sends the pixels via WebUSB.',
    tags: ['WebUSB', 'Raspberry Pi Pico'],
    links: [['Launch app', 'https://webusb-rgb-matrix.nico.dev/'], ['Source code', 'https://github.com/nico-martin/webusb-rgb-matrix']] },
  { type: 'Article', title: 'How to create a progressive audio player with React hooks', subtitle: 'dev.to', lang: 'EN', tone: 'yellow', date: '2020',
    desc: 'The build log behind YTAudio: hooks, a ServiceWorker and an app-like audio experience in the browser.',
    tags: ['PWA', 'React'],
    links: [['Read the article', 'https://dev.to/nicomartin/how-to-create-a-progressive-audio-player-with-react-hooks-31l1']] },
  { type: 'Project', title: 'YTAudio', subtitle: 'nico-martin/yt-audio', lang: 'EN', tone: 'pink', date: '2020',
    desc: 'A progressive web app that lets you listen to YouTube videos in the background, using the MediaSession, Web Share and Share Target APIs with a ServiceWorker.',
    tags: ['PWA', 'MediaSession API'],
    links: [['Launch app', 'https://ytaud.io/'], ['Source code', 'https://github.com/nico-martin/yt-audio']] },
  { type: 'Article', title: 'Media Session API', subtitle: 'dev.to', lang: 'EN', tone: 'teal', date: '2020',
    desc: 'How to give a web audio player real media controls on lock screens and notification shades.',
    tags: ['MediaSession API'],
    links: [['Read the article', 'https://dev.to/nicomartin/media-session-api-c1j']] },
  { type: 'Project', title: 'Git Installer', subtitle: 'nico-martin/git-installer', lang: 'EN', tone: 'peri', date: '2019',
    desc: 'A free and open source WordPress plugin to install and update themes and plugins directly from a Git repository — public or private, with webhook updates.',
    tags: ['WordPress', 'PHP'],
    links: [['Visit the site', 'https://www.git-installer.com/'], ['Source code', 'https://github.com/nico-martin/git-installer']] },
];

const TYPES = ['Everything', 'Project', 'Article', 'Podcast'];
const GLYPH = { Project: '⌁', Article: '✦', Podcast: '»' };
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function StreamItem({ it }) {
  return (
    <Card shadow={it.tone}>
      <div className="stream-item">
        <div className="stream-media">
          <image-slot id={`wu-${slug(it.title)}`} shape="rounded" radius="18" fit="cover" placeholder={`${it.type} image`}></image-slot>
        </div>
        <div className="stream-body">
          <div className="stream-tags">
            <Badge mono>{it.type}</Badge>
            <Badge mono><img className="lang-ico" src="https://unpkg.com/lucide-static@0.469.0/icons/languages.svg" alt="" aria-hidden="true" />{it.lang}</Badge>
            <span className="meta">{it.date}</span>
          </div>
          <h3>{it.title}</h3>
          {it.subtitle ? <div className="meta stream-sub">{it.subtitle}</div> : null}
          <p>{it.desc}</p>
          <div className="stream-tags">
            {it.tags.map((t) => <Badge key={t} mono>{t}</Badge>)}
          </div>
          <div className="stream-links">
            {it.links.map(([label, href], i) => (
              <Button key={href} size="sm" chevron={i === 0} variant={i === 0 ? 'primary' : 'secondary'} shadow={i === 0}
                style={i === 0 ? undefined : { background: 'var(--surface-card)', color: 'var(--text-strong)' }} as="a" href={href}>{label}</Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function WhatsUpPage() {
  const [type, setType] = React.useState('Everything');
  const list = ITEMS.filter((i) => type === 'Everything' || i.type === type);
  return (
    <div>
      <SiteHeader page="What's up" />
      <PageHead eyebrow="What's up"
        title="Things I build, write and show up in"
        lead="I love writing software. And whenever I see something exciting, I build a little side project to familiarise myself with the technology. This is where that ends up." />

      <section className="wrap">
        <div className="stream-filter">
          {TYPES.map((t) => (
            <button key={t} type="button" className={t === type ? 'chip is-on' : 'chip'} onClick={() => setType(t)}>{t}</button>
          ))}
        </div>
        <div className="stream">
          {list.map((it) => <StreamItem key={it.title} it={it} />)}
          {list.length === 0 ? (
            <Card shadow="peri">
              <EyebrowPill size="sm">Nothing here yet</EyebrowPill>
              <h3 style={{ margin: '16px 0 8px' }}>No podcast episodes on file</h3>
              <p style={{ margin: 0 }}>Send me the episodes you&rsquo;ve been on and they&rsquo;ll show up in this stream. Looking for a guest? mail@nico.dev</p>
            </Card>
          ) : null}
        </div>
        <p className="meta" style={{ marginTop: 28 }}>Drop an image on any tile to give an entry its own picture.</p>
      </section>
      <SiteFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<WhatsUpPage />);
