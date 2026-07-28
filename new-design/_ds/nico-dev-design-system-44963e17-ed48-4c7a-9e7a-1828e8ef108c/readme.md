# nico.dev — Design System

The personal brand of **Nico Martin**: open source machine-learning engineer (WebML, Hugging Face)
and Google Developer Expert for Web & AI, based in Switzerland. The brand shows up in three places:
the personal site **nico.dev**, conference **slide decks** (slides.nico.dev), and social/profile assets.

The design language is *friendly, rounded, sticker-like*: bold rounded type, a teal-led palette,
hard offset shadows, playful floating doodles (✦ » dots, blobs) and soft organic shapes.
"Developer tool with personality" — confident but warm, never corporate-flat.

## Sources used

| Source | What it gave us |
|---|---|
| `uploads/Screenshot 2026-07-27 at 20.13.52.png` | The primary logo lockup (wordmark + social handles) → cropped into `assets/` |
| `uploads/Screenshot 2026-07-27 at 20.14.15.png` | Slide template: outlined pill rows with coloured hard shadows + dark code window |
| `uploads/Screenshot 2026-07-27 at 20.14.26.png` | Full-bleed dark code slide, teal offset shadow, brand traffic lights |
| `uploads/nico-martin-portrait-2.jpg` | Brand portrait → `assets/nico-portrait.jpg` |
| Written brand brief (in the kickoff message) | Exact palette hex values, type scale, signature devices, motion, layout rules |
| Public nico.dev copy (nico.dev, /talks, /projects, /blog, github.com/nico-martin) | Voice, real talk/project titles used in the UI kit |

**No codebase or Figma file was provided.** The site source is public at
`github.com/nico-martin/nico.dev` (Preact + Next.js, WordPress content, MIT) but was not read for
this build — screens follow the written brief, not the live markup. Attach the repo if you want the
UI kit re-derived from real code.

---

## Index

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`, `base.css`
- `components/core/` — Button, IconButton, EyebrowPill, Badge, IconTile, Wordmark
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/surfaces/` — Card, StatCard, ListRow, BrowserFrame, CodeWindow
- `components/brand/` — Doodles, Blob
- `ui_kits/website/` — the nico.dev site, 4 click-through screens (see its README)
- `slides/` — 7 slide templates at 1280×720 (see its README)
- `templates/site-page/` — copyable starting-point page (Design Component) for consuming projects
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/` — logo lockups (raster + transparent), brand portrait

### Intentional additions
The brief defines devices, not a component inventory. Beyond the devices it names
(pill button, eyebrow pill, icon tile, doodles, blob, stat card, card, browser chrome, list rows,
code window, wordmark), one standard form family was added — **Input, Select, Checkbox, Radio,
Switch** — because any real nico.dev surface needs fields and no source defines them. They are
straight applications of the house rules (3px ink border, 14px radius, teal hard shadow on focus).

---

## Content fundamentals

**Voice: first person, plain, specific, quietly funny.** Nico writes as *I*, addresses the reader as
*you*, and never uses marketing plural ("we"). Sentences are short and concrete; claims are
technical, not aspirational.

- Bio register: "I am an Open Source Machine Learning Engineer with focus on WebML at Hugging Face
  and Google Developer Expert in AI and Web Technologies from Switzerland."
- Hobby/human line always closes an about section: mountains, skis, waiting for the wind.
- Project blurbs are one sentence, lead with what it *does*, then the API it shows off:
  "A web based markdown editor… The main goal of this project is to showcase the File System Access API."
- Talk titles are playful, often jokes or pop-culture references: *Look ma, no hands!*,
  *Let's build K.I.T.T. with JavaScript*, *The F in "Machine Learning" stands for "fun"*.
  Slide/section headings, by contrast, are flat and useful ("Four steps", "Running the model locally").
- CTAs are verbs plus the house chevron: "Start the build »", "See the talks »", "continue »".
  Never "Learn more", never "Unlock".

**Casing:** sentence case everywhere except eyebrows/labels, which are UPPERCASE with 0.14em tracking.
Headlines are sentence case even at display size. Product and API names keep their own casing
(WebGPU, Transformers.js, WebBluetooth, dev.to).

**Numbers, dates, technical strings** are set in JetBrains Mono: `02.10.2025`, `42s`, `v3.4.2`,
`nico.dev/talks`, repo names. Dates use the Swiss `DD.MM.YYYY` form.

**Emoji: not in UI.** The ✦ » ✓ ⌁ glyphs are decorative or iconographic, not emoji. Emoji appear only
where a third-party platform put them (a GitHub bio, a LinkedIn post) — never in a button, card, nav
item or slide.

**Vibe check:** if a sentence could appear in an enterprise SaaS hero, rewrite it. If it sounds like a
developer explaining something to a friend at a meetup, ship it.

---

## Visual foundations

**Colour.** Teal `#009D89` is the workhorse: buttons, links, `.dev`, active nav, success. Ink
`#15171C` is text *and* border. Yellow `#F5C842`, pink `#EE5FA7` and periwinkle `#7C82E8` are spot
accents only — doodles, offset shadows, chips, traffic lights, one accent per neighbouring element.
One page background: white. At most **1–2 large colour blocks per screen** (a yellow or teal
half-panel). Never fill a large area with pink or periwinkle. Semantic: success = teal,
running/error = pink, warning = `#CAA018` on `#FDF3D6`. The dark code surface `#15171C` is the only
dark region in the system.

**Type.** Nunito 800/900 for everything structural — display, headings, numbers, button labels,
wordmark — with tight tracking (−0.02em to −0.04em) and line-height 0.98–1.1 at display sizes.
Nunito Sans for prose, **300 weight** for the airy paragraph look, 400 for dense UI text, 700 for
labels. JetBrains Mono for URLs, code, durations, versions and technical UI labels. Scale:
display 48–72, H1 36, H2 28, H3 20, body 16–18, eyebrow 13 uppercase/0.14em, mono meta 14.

**Spacing & layout.** 4px base; the working steps are 16 / 24 / 32 / 48 / 64 / 96. Cards pad 28,
sections breathe 96 apart, container 1200 with 40px gutters. The house layout is the **split screen**:
content 53%, media 47%, with the media side often a full-bleed colour half-panel. One clear focal
point per view. Header is sticky, translucent white with an 8px backdrop blur and a hairline bottom
border — the only place blur is used.

**Backgrounds & imagery.** Flat colour only — no gradient meshes, no textures, no patterns. The one
gradient in the system is the diagonal teal stripe fill
(`repeating-linear-gradient(135deg,#0B8678 0 12px,#0A7D70 12px 24px)`) used as an honest image
*placeholder*. Photography is dark, warm-neutral and studio-lit on near-black (see the portrait);
it gets cropped into the organic blob (`border-radius: 46% 54% 58% 42% / 52% 44% 56% 48%`) or into a
30px-rounded card. Product screenshots always sit inside the browser-chrome card with pink/yellow/teal
traffic lights and a mono URL bar, usually with a stat card floated over one corner.

**Borders, corners, shadows.** Nothing is square: pill 999, cards 30, tiles 20, icon tiles 18–21,
rows/inputs 14. Structural elements carry a **3px solid ink border**. Shadows are **hard offsets with
zero blur**, solid accent colour, down-right — `10px 10px 0 #B9E6DF` (teal tint) is the default,
pink/yellow/periwinkle for variety, `8px 8px 0 rgba(0,0,0,.12)` when the object must stay quiet.
A blurred drop shadow is a bug. There are no inner shadows and no protective gradients; contrast is
solved with solid tint capsules (eyebrow pills, badges) instead.

**Transparency & blur.** Almost none. The sticky header (92% white + blur), text on a teal panel at
75–85% white, and doodles on a colour panel at 30–45% white. Everything else is opaque.

**Motion.** Springy and subtle, and only under `prefers-reduced-motion: no-preference`.
Content **rises in** — `riseIn` 0.62s `cubic-bezier(.2,.85,.25,1)`, staggered 80–120ms per item.
Chips and badges **pop in** with overshoot — `popIn` `cubic-bezier(.34,1.45,.5,1)`.
Doodles float (5.5s) and wobble (6s) on infinite loops. Nothing fades alone; nothing slides sideways.

**States.** Hover on a shadowed element lifts it up-left 2px and *grows* the shadow (6→9px); press
pushes it down-right into a 4px shadow. Solid teal buttons darken to `#0B8678` on hover; ghost
buttons pick up a teal tint; secondary buttons go to `#F7F8F9`. Focus draws a 4px teal-tint hard
shadow on the field — never a browser outline glow. Disabled = 45% opacity, no shadow change.
Links are teal, semibold, underline on hover at 3px offset.

**Cards, in one line:** white, 30px radius, 3px ink border, one hard offset shadow in an accent
colour, 28px padding — and vary the accent between neighbours.

---

## Iconography

There is **no icon font and no bundled SVG icon set** in the provided sources. The brand's icon
vocabulary is:

1. **Typographic marks** — `✦` (sparkle doodle), `»` (the house chevron: buttons, links, nav, list
   affordances), `✓` (success, feature bullets), `⌁` (technical/electric). Set in Nunito 900 so
   they read as part of the type, sized 0.4× their container. Always `aria-hidden`; the label
   carries the meaning.
2. **Icon tiles** — those marks inside a 56–70px tinted rounded square (`IconTile`); tile tint and
   glyph colour always match.
3. **Geometric doodles** — dots and rotated rounded squares in accent colours, floating in the
   background at low density.
4. **Platform marks** — the logo lockup screenshot includes home / LinkedIn / X / Instagram /
   YouTube glyphs. They exist only as pixels inside `assets/logo-lockup-social.png`; there is no
   vector source. **Substitution flagged:** if you need real social icons in a build, use
   [Lucide](https://lucide.dev) (CDN, 2px stroke, rounded caps — the closest match to the lockup's
   rounded outline style) and ask Nico for the original vectors.

**Emoji are never used as UI.** No emoji in buttons, cards, nav or slides.

## Assets

| File | Notes |
|---|---|
| `assets/logo-wordmark.png` / `-transparent.png` | Primary wordmark: `nico` solid teal, `.dev` ink **outline**. Cropped from the supplied lockup. |
| `assets/logo-lockup-social.png` / `-transparent.png` | Wordmark + social handle row. |
| `assets/nico-portrait.jpg` | Studio portrait on near-black. Crop into the blob or a rounded card. |

**No vector logo was provided.** The `Wordmark` component reproduces the lockup as live type
(Nunito 900, −0.045em, `.dev` outlined via `-webkit-text-stroke`) for UI use — it is a type setting,
not a redrawn mark. For print or large hero use, use the raster asset, and ask Nico for the SVG.

## Fonts

Nunito, Nunito Sans and JetBrains Mono are loaded from Google Fonts in `tokens/fonts.css`.
**Substitution note:** no font binaries were supplied — these are the exact families named in the
brief, served from the CDN rather than self-hosted. Send WOFF2 files if you want them self-hosted.
