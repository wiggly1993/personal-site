# Design: layout, nav, motion

- **Layout:** max content width ~980px for text, ~1440px for tiles. Large vertical padding (120–160px desktop). Tiles have 18–28px radius, no harsh borders.
- **Nav:** 44–48px high, sticky, `backdrop-filter: saturate(180%) blur(20px)`, semi-transparent background, small 12–14px links.
- **Motion:** fade-up on scroll (opacity + 20–40px translate, ~600ms, ease-out). Slight image scale on hover. Everything off under `prefers-reduced-motion`.
- **Featured tile:** full width; headline, subtitle, 2–3 big metric stats, "Learn more ›" link in accent blue, cover image below.
- **Quality:** responsive, mobile-first. Lighthouse ≥ 95 in all categories. Semantic HTML, alt text on every image, keyboard-focus styles.

Colors and type: [design-colors-type.md](design-colors-type.md).
