---
name: mft-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for Manel F. Terrible's portfolio brand (MFT), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Skill quick-reference

- **Brand:** Personal portfolio for Manel F. Terrible (MFT) — Apple-inspired, glassmorphic, dark-first.
- **Tokens:** `colors_and_type.css` is the canonical source. Drop it into any HTML and you get the full design system.
- **UI Kit:** `ui_kits/portfolio/` — JSX components for Nav, Hero, Experience, Skills, Projects, Contact, Footer.
- **Assets:** `assets/` — profile photos, social icons, theme icons, project imagery, audio.
- **Voice:** First-person, sentence case, section titles end with a period, no emoji outside the audio context.
- **Iconography:** Material Symbols (filled, weight 400) is the standard; PNG icons for socials.

## What this brand is NOT

- Not corporate. No "we", no marketing-speak, no exclamation points.
- Not colorful. One accent (Apple blue) + neutrals + nebula gradients in dark mode.
- Not flat. Everything elevated uses `backdrop-filter` blur — glass is the signature.
- Not animated-heavy. Smooth and damped only — no bounces, springs, or aggressive transitions.
