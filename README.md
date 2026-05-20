# MFT Portfolio Design System

A design system extracted from **Manel F. Terrible's** personal portfolio website — a one-page, scroll-driven résumé site for an AI Developer & Software Engineer based in Nueva Ecija, Philippines.

The aesthetic is unapologetically **Apple-inspired**: deep dark mode with a starfield + iridescent 3D torus knot, electric-blue accents (`#0071e3` light / `#2997ff` dark), pill buttons, glassmorphic cards, oversized Inter typography with negative tracking, and gentle fade-in-on-scroll motion.

---

## Sources

| Source | Path / URL | Status |
|---|---|---|
| GitHub repository | https://github.com/Manflora27/Web-try | Linked — the brand's only product surface |
| Codebase (mounted) | `Web-try/` (read-only) | Primary source of truth |
| Figma file | `Untitled.fig` (mounted VFS) | Empty — single rounded rectangle, no design content |

> The Figma attachment is effectively empty (1 page, 1 rectangle, no fonts/components). **All design decisions in this system are derived from the codebase**, which is well-commented and stable.

If you have access to the GitHub repo, browse it to see the source HTML/CSS/JS that this system was derived from. The repo contains the live torus-knot shader, the GSAP scroll-triggered color moods, and the night-sky canvas — pieces too animation-heavy to fully reproduce in static cards.

---

## Index

| Path | What's inside |
|---|---|
| `README.md` | This file — system overview, content + visual foundations, iconography |
| `SKILL.md` | Cross-compatible Agent Skill manifest |
| `colors_and_type.css` | All design tokens (CSS variables) + semantic type utilities |
| `assets/` | Logos, profile photos, social icons, theme icons, project imagery, audio |
| `preview/` | Card specimens that populate the Design System tab |
| `ui_kits/portfolio/` | High-fidelity recreation of the portfolio site (interactive prototype + JSX components) |

---

## Brand context

- **Person:** Manel F. Terrible
- **Role:** Software Engineer / AI Developer (claimed positions at Apple Singapore, Xiaomi)
- **Location:** Nueva Ecija, Philippines
- **Initials / logo mark:** `MFT`
- **Voice:** First-person, casual-professional, builder-craftsman tone
- **Surface:** A single long-scroll page (Hero → About → Experience → Education → Skills → Projects → Contact → Footer)
- **Stack signals:** Three.js, GSAP + ScrollTrigger, EmailJS, vanilla HTML/CSS/JS — no framework. Indicates pride in hand-rolled craft.

---

## CONTENT FUNDAMENTALS

### Voice & tone

The copy is **first-person, conversational, and confident without bragging**. It reads like a builder who likes their craft, not a corporate bio. Sentences are short and definitive. There's a faint streak of self-effacement balanced with clear self-belief.

Specific examples lifted from the site:

> "Hi, I'm Manel."
> "Designer of systems. Solver of problems."
> "Turning complexity into clarity."
> "I'm a Software Engineer who loves turning complex problems into simple, elegant solutions."
> "Always curious, always learning — finding creative ways to make software work better for people."
> "Where I've worked."
> "Tools of the trade."
> "Work I'm proud of."
> "Let's connect."

### Casing

- **Sentence case for everything.** Headings, buttons, section titles. No Title Case anywhere except in proper nouns (Apple, Xiaomi, JavaScript).
- **ALL-CAPS only for eyebrow labels** (e.g. "ABOUT", "EXPERIENCE", "AI DEVELOPER & SOFTWARE ENGINEER") and they always carry a heavy letter-spacing (`0.10–0.12em`).

### "I" vs "you"

- Author speaks in **first person ("I")** when describing self.
- Calls to action use **imperative verbs without subject** ("View work →", "About me →", "Send message →", "Learn more →").
- Never uses "we" — this is a single-person portfolio, not a company.

### Section labels are 1–2 words

`About`, `Experience`, `Education`, `Skills`, `Projects`, `Contact`. Section titles are punchy declarative phrases that *end with a period*:

> "Turning complexity into clarity."
> "Where I've worked."
> "Academic background."
> "Tools of the trade."
> "Work I'm proud of."
> "Let's connect."

The period is **load-bearing** — it sets the tone of quiet finality, like a designer who has thought about it and decided. Match it in new copy.

### Buttons & links

Always **action verb + chevron** (`→`). No exclamation points, no "Click here". Examples: `View work →`, `About me →`, `Send message →`, `Learn more →`.

### Emoji

- **One context only:** the music-start overlay (`🎵 Click anywhere to start music`) and the floating mute button (`🔇` ↔ `🔊`).
- **Never in headings, body, or buttons.** The brand mood is restrained.

### Vibe (one sentence)

A senior craftsperson's portfolio dressed in Cupertino — confident, restrained, slightly playful (you can tell from the 3D background and the hidden audio), every word measured.

---

## VISUAL FOUNDATIONS

### Colors

| Token | Light | Dark | Use |
|---|---|---|---|
| `--accent` | `#0071e3` | `#2997ff` | Links, eyebrows, focus rings, primary button |
| `--accent-hover` | `#0077ed` | `#57aeff` | Hover state of primary CTAs |
| `--text` | `#1d1d1f` | `#f5f5f7` | Primary text |
| `--muted` | `#6e6e73` | `#98989d` | Body, meta, labels |
| `--bg` | `rgba(248,248,250,0.88)` | `rgba(0,0,0,0.65)` | Page overlay (always translucent — canvas glows through) |
| `--surface` | `rgba(255,255,255,0.72)` | `rgba(28,28,30,0.68)` | Glass cards, pills, fields, nav |
| `--line` | `rgba(29,29,31,0.10)` | `rgba(255,255,255,0.10)` | Hairline 1-px dividers |
| `--page-base` | `#050508` | `#050508` | Deepest layer behind the canvas |

**Per-section color moods** (driven by the torus-knot shader on scroll — these are the canvas mood, not the UI surface):

| Section | `c1` (centre) | `c2` (edges) | Iridescence |
|---|---|---|---|
| hero / contact | electric blue | violet | full rainbow |
| about | purple | indigo | 0.82 |
| experience | teal | navy | 0.90 |
| education | warm gold | wine | 0.72 |
| skills | green | navy | 0.85 |
| projects | orange | magenta | 0.78 |

In dark mode, the page overlay is a **deep-space gradient** with three radial nebula glows (violet, blue, magenta) over a diagonal `#0a0e27 → #1a1a2e → #0f0c29` linear gradient.

### Typography

- **Family:** `SF Pro Text` (Apple's system text face — matches the brand's Cupertino aesthetic perfectly). Falls back to `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Inter", sans-serif`.
- **Weights available (uploaded):** `100 Thin`, `200 Ultralight`, `400 Regular`, `500 italic only`, `600 Semibold`. `font-synthesis: weight` is enabled so the browser can faux-bold past 600 where needed.
- **Heaviest weight is 600.** The source codebase used Inter at weight `800` for the hero display headline; in SF Pro Text the same role drops to `600`. The headline still reads as bold thanks to the tight `-0.04em` tracking and 84-px size, but it has less visual weight than the original. If you want the original heaviness back, drop `SF-Pro-Display-Bold.otf` and `SF-Pro-Display-Black.otf` into `fonts/` and add the matching `@font-face` blocks.
- **Light weight downshifted.** The hero subtitle used `300 Light` in the source; here it uses `200 Ultralight` (the nearest available).
- **Tracking is tight by default** on large text (`-0.04em` on the display headline). Eyebrow labels use **positive tracking** (`0.10–0.12em`) and uppercase.
- **Fluid sizing** via `clamp()` — large headlines scale with viewport, never with media queries.
- **Hero H1**: `clamp(3.5rem, 9vw, 7rem)` / `600` / line-height 1.
- **Hero subtitle**: `clamp(1.15rem, 2.5vw, 1.75rem)` / `200` (notably *light* — contrast against the 600 display).
- **Body**: `1rem` / `400` / line-height 1.6, muted gray.
- **No serif. No monospace.** SF Pro Text does all the work.

### Spacing

8-pt grid with half-steps where needed (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 120`). Sections breathe with `padding: 120px 24px` on desktop, dropping to `80px 20px` on mobile. Cards are padded `36–40px` inside.

### Backgrounds

- **Always two layers:** a fixed full-viewport `<canvas>` (Three.js torus knot) at `z-index: -3` and a colour overlay at `z-index: -2`. Page content sits on top.
- **No images used as backgrounds.** No repeating patterns. No noise or grain.
- **Dark mode adds a third canvas layer:** the night-sky star field (180 stars, occasional diagonal shooting stars at random 3–8 s intervals).
- **No full-bleed photography** anywhere. The only photo is a 200 × 200 circular profile.

### Animation

- **Easing:** GSAP `power2.inOut` for color transitions, plain `ease` for CSS (most transitions use the default), GSAP `none` for scrub-linked rotation.
- **Durations:** UI hovers are `0.2s`. Card lifts are `0.3–0.5s`. Theme switch is `0.35s`. Section fade-in is `0.8s`. Color mood shift on scroll is `1.5s`.
- **Hover lifts** are universal: cards translate Y by `-4px` to `-6px`, sometimes with a `scale(1.012)`. Buttons translate Y by `-1px`.
- **Profile photo floats** with a 6 s sinusoidal `translateY(-12px)` loop.
- **No bounces, no springs.** Everything is smooth and damped.
- **Scroll-triggered fade-in** is the only entrance animation: `opacity 0 → 1`, `translateY(32px) → 0`, over `0.8s`, fired when the element is 12% in view.
- **Reduced-motion:** all motion collapses to `0.01ms` and fades become instantaneous. The system respects `prefers-reduced-motion` everywhere.

### Hover, focus, press

- **Hover (links):** `opacity` shifts from `0.8 → 1.0` (no color change).
- **Hover (cards):** `translateY(-4px to -6px)` + shadow grows from `--shadow-sm` to `--shadow-lg`. The image inside a tile scales to `1.04`.
- **Hover (buttons):** background swaps to `--accent-hover` + `translateY(-1px)`. Ghost buttons swap border color to `--accent` instead.
- **Hover (tile link):** the `gap` between text and `→` grows from `4px → 8px` — the arrow "leans into" the click.
- **Press (button submit):** `translateY(1px)` — buttons compress.
- **Focus (input):** border swaps to `--accent` + a 4-px `box-shadow` ring tinted at `14%` accent.
- **No outlines** are ever used directly — focus is always a soft accent halo.

### Borders, radii, shadows

- **Borders:** Always `1px solid var(--line)` — never thicker.
- **Radii:** Pills (`980px`) for buttons. `28px` (`--radius-xl`) for cards. `20px` for the start-music modal. `14px` for form fields. `12px` for social icon tiles. `50%` for the profile photo, theme button, mute button, and badge.
- **Shadows:** Two only.
  - `--shadow-sm`: `0 4px 16px rgba(0,0,0,0.06)` (rest state of small floats)
  - `--shadow-lg`: `0 24px 60px rgba(0,0,0,0.10)` (cards on hover, profile photo)
  - In dark mode both deepen significantly (`0.30` / `0.50` opacity).
- **No inner shadows.** No coloured shadows.

### Glass / blur / transparency

This is the system's **signature visual move**:

- Almost every elevated element uses `backdrop-filter: blur(... ) saturate(...)`:
  - Nav: `blur(24px) saturate(180%)`
  - Cards/tiles: `blur(18px) saturate(160%)`
  - Pills (skills): `blur(14px) saturate(140%)`
  - Form fields, theme button, mute button: `blur(12px)`
- Surfaces are **always slightly transparent** (`0.68–0.76` alpha) so the canvas + nebula bleeds through.
- The page overlay itself is translucent (`0.65–0.88` alpha) — the brand identity is "frosted glass over an animated mood."

### Layout

- **Single fixed nav** (`52px` tall) — never sticky-anything-else.
- **Single max-width container:** `1200px`, gutters `24px` (desktop), `20px` (mobile), `24px` (small-mobile keep).
- **Fixed floating mute button** bottom-right (`44px` circle).
- **Smooth scroll** on `<html>` via `scroll-behavior: smooth`.
- **Scroll-margin-top: 52px** on section blocks so anchor links don't tuck under the nav.

### Imagery vibe

- **Profile photos:** warm, candid, slightly desaturated — feels like phone snapshots, not studio portraits. Two are stacked and cross-fade on hover.
- **Project tiles:** photographic (Arduino board on a desk, software UI). 16:9 and 21:9 (large tile) crops, lazy-loaded, gently scaled on hover (`1.04`).
- **No illustration. No 3D renders (other than the live canvas). No icons-as-images** beyond the SVG theme toggle.
- The **3D torus knot** is the brand's hero visual — iridescent, metallic, scroll-driven. Don't replace it; if you must omit it (static export), substitute a still gradient using one of the section color moods.

### Cards

- Background: `var(--surface)` (translucent white/gray-28).
- Backdrop blur: `18px saturate 160%`.
- Border: `1px solid var(--line)`.
- Radius: `28px`.
- Padding: `36px 40px` (experience/education), `28px 32px 36px` (project tile body).
- Rest state: no shadow. Hover state: `--shadow-lg` + `translateY(-4 to -6px)`.

---

## ICONOGRAPHY

The brand's approach to icons is **deliberately minimal — almost ascetic**:

### What's used

1. **Two Material Symbols SVGs** for the theme toggle (`dark_mode_24dp` and `light_mode_24dp`, filled, weight 400, opsz 24). Copied into `assets/icon-dark-mode.svg` and `assets/icon-light-mode.svg`. They're already filled (`E3E3E3`) — the CSS applies `filter: invert(1)` to flip them for the opposing theme.
2. **Three social PNG icons** (Facebook, GitHub, Instagram) — small, sit in a 46 × 46 glass tile with `8px` of inner padding. Copied into `assets/Facebook.png`, `assets/Github.png`, `assets/Instagram.png`.
3. **Two emoji glyphs** for audio state (`🔇` muted / `🔊` playing) and one for the music-start overlay (`🎵`). Nowhere else.
4. **One Unicode arrow:** `→` (U+2192) used as the button/link chevron and as the experience-bullet marker (`content: "→"` with `color: var(--accent)`).

### What's not used

- **No icon font** (no Font Awesome, no Material Icons CSS).
- **No icon library.** No Lucide, Heroicons, Feather, Phosphor.
- **No inline `<svg>` icons** drawn in source. Only the imported file SVGs.
- **No emoji in headings, body, or CTAs.** Only in the three audio-related places noted above.

### How to extend

If you need additional icons for new surfaces, the closest matching style is **Material Symbols (filled, weight 400, optical size 24)** — it matches the existing theme icons exactly. Use the CDN at `https://fonts.googleapis.com/icon?family=Material+Symbols+Rounded` or grab the SVG export from `https://fonts.google.com/icons`.

> ⚠️ **Flag:** Material Symbols was used for only two icons; if you scale up the icon set, confirm with the user that you'd like to standardise on this family. An alternative would be Apple's SF Symbols (free for Apple platforms but with licensing constraints on the web).

### Logo / wordmark

The only logo mark is the text string **`MFT`** in the nav — `Inter`, `1rem`, `700` weight, `-0.02em` letter-spacing. No icon mark, no graphic logotype. If a graphic logo is ever needed, derive it from these initials in the same weight and tracking.

---

## Asset inventory (`assets/`)

| File | Purpose |
|---|---|
| `Manel.jpg` | Hero profile photo (default state) |
| `hover.jpg` | Hero profile photo (hover crossfade) |
| `Facebook.png`, `Github.png`, `Instagram.png` | Social link tiles |
| `icon-dark-mode.svg`, `icon-light-mode.svg` | Theme toggle (Material Symbols) |
| `project-arduino-rain.jpg` | Large project tile (21:9 crop) |
| `project-data-collection.png` | Small project tile (16:9 crop) |
| `Arc.mp3` | Background music track ("Arc") |
| `source-screenshot.png` | Reference screenshot of the source site |

---

## Fonts

- **SF Pro Text** is the brand face — bundled in `fonts/` as `.otf` files. Loaded via `@font-face` in `colors_and_type.css`.
- **Weights bundled:** `100`, `200`, `400`, `500` italic, `600`. Italics: `100`, `200`, `400`, `500`, `600`.
- **Missing weights:** `300 Light`, `500 regular` (non-italic), `700 Bold`, `800 Black`. The system downshifts `300 → 200`, `500 → 400`, and caps `700/800 → 600`. If you need the heavier display weights for hero copy, drop **SF Pro Display Bold/Black** into `fonts/` and extend the `@font-face` block — the family stack will pick them up automatically for those weights.

---

## Open caveats

- The source codebase claims employment at Apple (Singapore, Jan 2031 →) and Xiaomi (2029–2030). These appear to be **placeholder dates** in the template. Treat them as fictional content unless the user confirms otherwise.
- The Figma file is empty — every design decision in this system comes from the codebase.
- The **iridescent 3D torus knot background and night-sky canvas** are core to the brand's feel and can't be fully reproduced in static slide/card contexts. The UI kit recreates them faithfully; static exports should fall back to one of the section-mood gradients documented above.
 
 U p d a t e d :   0 5 / 2 0 / 2 0 2 6   1 5 : 1 0 : 4 4  
 