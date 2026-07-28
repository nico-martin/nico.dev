const { Wordmark, Button, EyebrowPill, Doodles } = window.NicoDevDesignSystem_44963e;

const NAV = [['Home', 'index.html'], ['About', 'about.html'], ['Speaking', 'speaking.html'], ["What's up", 'whats-up.html'], ['Invite me', 'invite.html']];

const SOCIAL = [
['github.com/nico-martin', 'https://github.com/nico-martin', 'github'],
['x.com/nicodotdev', 'https://x.com/nicodotdev', 'twitter'],
['linkedin.com/in/nicodotdev', 'https://www.linkedin.com/in/nicodotdev/', 'linkedin'],
['youtube.com/@nicodotdev', 'https://www.youtube.com/@nicodotdev', 'youtube'],
['instagram.com/nicodotdev', 'https://www.instagram.com/nicodotdev/', 'instagram']];


const ICON = (name) => `https://unpkg.com/lucide-static@0.469.0/icons/${name}.svg`;

const ACCENTS = ['var(--brand-tint-strong)', 'var(--yellow)', 'var(--pink)', 'var(--peri)', 'var(--brand-tint-strong)'];
const TILT = [-1.2, 1, -1, 1.2, -1];

function SiteHeader({ page }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <React.Fragment>
      <div className="site-top">
        <div className="wrap">
          <a href="index.html" className="wordmark-pill" aria-label="nico.dev home"><Wordmark size={30} /></a>
          <button type="button" className={open ? 'burger is-open' : 'burger'} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap bar">
          <nav className="sticker-row">
            {NAV.map(([label, href], i) => {
              const active = page === label;
              return (
                <a key={label} href={href} aria-current={active ? 'page' : undefined} className={active ? 'sticker-nav is-active' : 'sticker-nav'}
                  style={{ boxShadow: `3px 3px 0 ${ACCENTS[i]}`, transform: `rotate(${TILT[i]}deg)`, '--acc': ACCENTS[i] }}>{label}</a>);
            })}
          </nav>
        </div>
      </header>
      {open ? <button type="button" className="mnav-scrim" aria-label="Close menu" onClick={() => setOpen(false)}></button> : null}
      <div className={open ? 'mnav is-open' : 'mnav'}>
        <nav className="mnav-list">
          {NAV.map(([label, href], i) => (
            <a key={label} href={href} aria-current={page === label ? 'page' : undefined} style={{ '--acc': ACCENTS[i] }}>{label}</a>
          ))}
        </nav>
        <a className="mnav-mail mono" href="mailto:mail@nico.dev">mail@nico.dev</a>
      </div>
    </React.Fragment>);
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap" style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px' }}>
          <Wordmark size={34} variant="mono" style={{ color: '#fff' }} />
          <p style={{ fontWeight: 300, color: 'var(--faint)', marginTop: 16, maxWidth: 380 }}>
            Open source machine learning engineer at Hugging Face, Google Developer Expert for AI &amp; web technologies. Switzerland.
          </p>
          <a href="mailto:mail@nico.dev" style={{ fontSize: '.9375rem' }}>mail@nico.dev</a>
        </div>
        <div className="social">
          <span className="lbl">Elsewhere</span>
          {SOCIAL.map(([l, h, icon]) =>
          <a key={l} href={h}><img src={ICON(icon)} alt="" aria-hidden="true" />{l}</a>
          )}
        </div>
        <div style={{ display: 'grid', gap: 10 }}>
          <span className="lbl">Pages</span>
          {NAV.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        </div>
      </div>
    </footer>);

}

function PageHead({ eyebrow, title, lead, media }) {
  return (
    <div style={{ position: 'relative', padding: '72px 0 40px' }}>
      <Doodles items={[
      { glyph: '✦', top: '16%', left: '87%', size: 30, color: 'var(--pink)' },
      { shape: 'dot', top: '64%', left: '94%', size: 14, color: 'var(--yellow)' },
      { shape: 'square', top: '30%', left: '78%', size: 18, color: 'var(--peri)' }]
      } />
      <div className={media ? 'wrap split nd-rise' : 'wrap nd-rise'} style={{ position: 'relative', zIndex: 1 }}>
        <div style={media ? { flex: '0 0 53%' } : undefined}>
          <EyebrowPill>{eyebrow}</EyebrowPill>
          <h1 style={{ fontSize: '3rem', letterSpacing: 'var(--ls-display)', margin: '24px 0 14px' }}>{title}</h1>
          <p style={{ fontSize: 'var(--text-lead)', maxWidth: 640 }}>{lead}</p>
        </div>
        {media ? <div style={{ flex: '0 0 auto', minWidth: 0, display: 'grid', placeItems: 'center' }} className="nd-rise-2">{media}</div> : null}
      </div>
    </div>);

}

Object.assign(window, { SiteHeader, SiteFooter, PageHead, NAV, SOCIAL });