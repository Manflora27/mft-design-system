# MFT Portfolio · UI Kit

A high-fidelity, interactive recreation of Manel F. Terrible's portfolio site, broken into small reusable JSX components.

## Files

| File | What it is |
|---|---|
| `index.html` | Demo shell — loads React + Babel and the components below |
| `styles.css` | Condensed copy of the source `Web-try/style.css` (all tokens preserved) |
| `App.jsx` | Top-level component — wires theme, scroll observer, mood gradient, audio, toast |
| `Nav.jsx` | Fixed glass nav with `MFT` mark, centered links, theme toggle |
| `Hero.jsx` | Full-viewport intro with eyebrow, oversized headline, dual CTAs, floating profile photo |
| `About.jsx` | Section with the "Turning complexity into clarity." headline + contact detail line |
| `ExperienceCard.jsx` | Single glass card + `Experience` and `Education` section wrappers |
| `Skills.jsx` | Glass-pill skill chips |
| `Projects.jsx` | `ProjectTile` (21:9 large + 16:9 small) + `Projects` section |
| `Contact.jsx` | `ContactForm` (success toast), `SocialColumn` (FB/GH/IG tiles), and `Contact` section |
| `Footer.jsx` | Two-column footer (copy + last-updated stamp) |

## What's interactive

- **Theme toggle** flips between light and dark; CSS variables animate.
- **Mood gradient** behind the page shifts per-section as you scroll (CSS substitute for the source site's Three.js torus knot — same color moods, same `power2.inOut` timing).
- **Section nav links** smooth-scroll to the matching section and highlight the active one.
- **Fade-in on scroll** mirrors the IntersectionObserver from the source.
- **Profile photo** floats with a 6 s sine loop and crossfades to `hover.jpg` on hover.
- **Contact form** validates email locally and shows a glass toast on send.
- **Mute button** toggles `Arc.mp3` background audio (starts muted — the source's autoplay-then-unmute behaviour is also recreated, though browsers block autoplay until first interaction).

## What's been simplified

- The original **Three.js iridescent torus knot** background is replaced by a CSS radial-gradient that follows the cursor and changes mood per section. This is a faithful color match but not a perfect motion replica.
- The original **night-sky star canvas** (dark-mode only) is omitted to keep the kit lightweight. The deep-space nebula gradient under `body.dark::before` is preserved.
- **EmailJS submission** is mocked — the form shows the same success/error toasts but doesn't hit the network.

To restore any of these, copy the relevant blocks out of `Web-try/script.js` (linked from the project README).

## Visual reference

The component visuals match the source exactly. If a token or surface ever drifts, treat `/colors_and_type.css` and the design-system preview cards as ground truth.
