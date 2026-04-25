# Phase 3 — Scroll Engine Notes (Direct JS Evidence)

## Exoape Studio

- **exact**: manual scroll-progress driving of paused timelines is explicit in multiple modules.
  - `this.scrollTl = ...timeline({ paused: true })`
  - `this.scrollTl.progress(this.progress)`
- **exact**: a variant applies inverted progress (`this.scrollTl.progress(-this.progress)`) in `references/exoape-studio/e36d691.js`.
- **exact**: geometry inputs use `getBoundingClientRect()` and normalized mapping helpers before applying timeline progress.
- **exact**: wheel input pipeline includes `onMouseWheel` using `t.deltaY` and internal target accumulation.
- **exact**: touch mode toggles class state (`document.body.classList.add("is-touch")`) and alters scrolling path.
- **exact**: RAF event bus updates scrolling each frame (`$nuxt.$on("window:raf", this.onRaf)`).

## Exoape Home

- **exact**: same architecture as studio for section scroll effects:
  - paused `scrollTl`
  - per-frame `progress(...)`
  - transforms with linear easing for parallax-like effects
- **observed**: multiple section-local timelines exist (media clusters, project blocks, title/video groups), implying distributed scroll components.

## Pixelflakes

- **exact**: smooth-scroll engine style event handling:
  - listeners: `wheel`, `touchstart`, `touchmove`
  - deltas: `deltaY`
  - writable scroll target via `rootElement.scrollTop`
- **exact**: animation interpolation path with RAF (`requestAnimationFrame`) and animated from-to progression (`this.animate.fromTo(...)`).
- **observed**: this appears to be a dedicated custom/embedded smooth-scroll utility integrated into Nuxt component RAF callbacks.

## Ottografie

- **exact**: RAF primitives and class toggle scheduling helpers are present.
- **observed**: GSAP runtime (including scroll-trigger capability symbols) is bundled in the main JS.
- **unknown**: app-specific scroll progress formulas are not cleanly isolated from framework/runtime layers in this bundle slice.

## Cross-site interpretation

- **exact**: Exoape home/studio use paused timeline + manual progress architecture.
- **observed**: Pixelflakes uses a stronger event-driven smooth-scroll abstraction but keeps RAF-driven progression.
- **inferred**: a reusable pattern exists: input deltas -> normalized scroll state -> timeline progress.
- **unknown**: final canonical engine API boundaries until decompile/humanify stages.
