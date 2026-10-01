# Design System: Ô Concept Piscines

## 1. Visual Theme & Atmosphere
A gallery-airy Mediterranean architectural world — like walking through a
high-end villa at dusk. Density 2/10 (spacious, 4–7.5rem section rhythm),
Variance 8/10 (asymmetric editorial splits, oversized numerals, never centered
heroes), Motion 4/10 (one authored water moment, quiet masked reveals
elsewhere). The mood is calm, expensive, and wet: deep ink-teal darkness,
warm ivory paper, a single turquoise accent used like light on water.

## 2. Color Palette & Roles
- **Ivory Canvas** (#FAF8F3) — primary background surface
- **Warm Stone** (#F2EDE1) — alternating section ground
- **Pure Surface** (#FFFFFF) — form cards only
- **Ink** (#1C1A17) — primary text, never pure black
- **Soft Umber** (#4A4640) — lead paragraphs
- **Stone Muted** (#7A746A) — captions, metadata (4.5:1 on ivory checked)
- **Hairline** (#E3DCC9) — 1px structural dividers
- **Lagoon Teal** (#0E9A94) — THE single accent: CTAs, focus rings, water light
- **Deep Lagoon** (#0B6F6A) — accent hover, text on light
- **Abyss** (#101D1B) — dark sections, header menu, footer
- **Abyss Deep** (#0A1412) — WebGL water base, mobile menu
- Saturation of accent < 60%. No gradients on text. No neon glows.

## 3. Typography Rules
- **Display:** Fraunces (400–600, optical sizing) — track-tight (-0.015em),
  controlled scale via clamp, max 6rem. Headings balanced, carry their own
  weight: NO kickers/eyebrows above headings, NO section numbers unless the
  order itself is information (process steps only).
- **Body/UI:** Outfit (400–700) — relaxed 1.65 leading, 58–70ch measure.
  Inter is banned in this premium context.
- **Signature technique:** inline-image typography — small contextual pool
  photographs embedded directly inside hero headlines at type height,
  pill-rounded, acting as visual punctuation. Never overlapping text.
- **Scale:** h1 clamp(2.9rem, 7.2vw, 6rem) · h2 clamp(2rem, 4.6vw, 3.6rem) ·
  obvious weight steps between levels.

## 4. Component Stylings
- **Buttons:** pill, 54px min-height, tactile translateY(1px) on active.
  Primary = Lagoon fill; secondary on dark = hairline ghost; on light = ink
  outline. No outer glow. 150–300ms transitions.
- **Rows, not cards:** services and contact actions are hairline-divided
  editorial rows (number-free), never equal-card grids. Cards banned except
  the white lead-form (elevation serves its hierarchy).
- **Inputs:** label above, 54px min-height, 2px Lagoon focus. No floating labels.
- **Icons:** drawn inline SVG set (arrow, close, check) in one 1.5px stroke.
  No emoji, no unicode glyphs as icons.
- **Hero:** full-bleed video, bottom-anchored asymmetric copy, one inline
  image in the headline, primary + secondary CTA, hairline meta strip. No
  scroll chevrons, no "scroll to explore" filler.

## 5. Layout Principles
- CSS grid, max-width 1280px containment, single column below 920px
  (768px for dense lists). No horizontal scroll — critical failure.
- Generous whitespace: tight groups, generous separation, more space above
  headings than below. Photography dominates: 4/5 and 16/10 architectural
  crops, object-fit cover, never distorted, subtle 1.035 hover scale.
- Asymmetric showcase: one large feature + offset stack with 5rem top
  displacement on desktop.

## 6. Motion & Interaction
- **Focal moment (one):** living WebGL water — layered sine caustics in
  Lagoon-on-Abyss, pointer-parallax light, in the final CTA. three.js plane,
  DPR capped at 1.5, paused offscreen, disposed on unmount, never mounted
  under prefers-reduced-motion (static gradient fallback).
- **Hero entrance (one):** masked-line headline rise (clip-path),
  500–800ms, cubic-bezier(0.16, 1, 0.3, 1).
- **Supporting (quiet):** image clip reveals + fade-rise on scroll
  (transform/opacity only), stagger capped for true lists only, header
  blur transition, button feedback 100–150ms. Exit faster than entrance.
- **Perpetual:** one slow marquee strip (40s loop, aria-hidden, paused under
  reduced motion). Film grain on hero (SVG noise, 0.06 opacity).
- Reduced motion: loops removed, reveals render in final state, feedback
  preserved.

## 7. Anti-Patterns (Banned)
No emojis. No Inter. No generic serifs. No pure black. No neon/outer glow.
No gradient text. No decorative glassmorphism. No 3-equal-card rows. No
kickers/eyebrows. No non-informative section numbers. No fake stats, awards,
reviews, or metrics. No AI copy clichés (Elevate, Seamless, Unleash).
No scroll-cue filler. No centered heroes. No overlapping elements. No custom
cursors. No `LABEL // YEAR` formatting. Every photo must show a pool or a
jacuzzi — verified visually, never assumed.
