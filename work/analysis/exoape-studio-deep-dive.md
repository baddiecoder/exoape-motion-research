# Exoape Studio Deep Dive (Phase 4)

## 1) Framework / runtime model
- **exact**: Nuxt/Vue runtime patterns are present (`$nuxt` event bus, route transition hooks, `_nuxt` assets).
- **exact**: GSAP plugin registration and GSAP timelines are present in studio bundles.
- **observed**: studio behavior is split between shared runtime (`e36d691.js`) and studio-specific content bundle (`a4c5813.js`).
- **inferred**: studio route composes shared shell + studio-specific timeline modules.
- **unknown**: pre-bundle file/component names.

## 2) Root app architecture
- **exact**: fixed-shell model matches home (`html/body/.app fixed`, `.scroll` layer).
- **observed**: studio route adds additional image/grid/parallax modules over same shell.
- **inferred**: route-level component registration injects studio-specific sections while preserving global engines.
- **unknown**: exact parent-child mount tree per section.

## 3) Layer model (app / page / overlay / scroll / nav)
- **exact**: app/page/overlay/scroll layering exists and matches Exoape family CSS.
- **exact**: transition plane is clip/transform-animated during enter/leave flows.
- **observed**: nav/UI sits as independent layer with color-state coupling.
- **inferred**: page transition likely wraps route swaps with loading lock + overlay motion.
- **unknown**: full z-order matrix for all states (menu open, transition, player-like overlays).

## 4) Scroll container and strategy
- **exact**: manual progress mapping + paused timeline progression is explicit.
  - snippet: `this.scrollTl = l.a.timeline({ paused: true })`
  - snippet: `this.scrollTl.progress(this.progress)`
- **exact**: inverse progress usage appears in shared studio runtime (`progress(-this.progress)`).
- **exact**: wheel input and `deltaY` feed target scroll in non-touch path.
- **exact**: touch detection toggles `is-touch`.
- **exact**: RAF bus is central (`window:raf` subscription lifecycle).
- **inferred**: studio scroll model is deterministic and section-local timelines are synchronized through shared scroll state.
- **unknown**: exact clamp/smoothing constants across all studio sections.

## 5) Timeline architecture
- **exact**: paused, progress-driven timelines are pervasive in studio sections.
- **exact**: intro/state timelines use `autoAlpha`, `yPercent`, `rotation`, `stagger`, custom eases.
- **exact**: parallax/scroll timelines often use `linear` ease.
- **observed**: timeline composition is modular: each section owns `setAnimation` + `onRaf` + teardown.
- **inferred**: clean rebuild should expose per-section `initTimeline()` returning paused GSAP timelines.
- **unknown**: complete dependency graph among section timelines during route transitions.

## 6) Page transition model
- **exact**: route enter/leave includes clipPath and transform-based from-to calls in studio runtime.
- **exact**: loading class toggled around transitions (`is-loading` add/remove).
- **observed**: transition code manipulates both container and nested media for cinematic wipe.
- **inferred**: transition likely blocks scroll input until completion and route DOM stabilization.
- **unknown**: exact transition variant selection rules (default vs others) across routes.

## 7) Loader / preloader model
- **exact**: loader state control is explicit through `is-loading` class and delayed clearing logic.
- **exact**: preloader class system exists in Exoape shared bundle slices.
- **observed**: studio likely reuses core loader engine from home with route-specific asset gating.
- **inferred**: loader timeline is part of route transition stack, not purely first-load only.
- **unknown**: all loader completion signals used in studio.

## 8) Hero entrance model
- **exact**: line reveal uses `autoAlpha`, `rotation`, `yPercent`, `stagger`.
- **observed**: studio hero and feature blocks mix intro reveal with ongoing scroll-parallax.
- **inferred**: hero entrance is two-stage: first reveal then scroll-coupled deformations/parallax.
- **unknown**: precise sequencing for every studio hero sub-element.

## 9) Text masking / split text model
- **exact**: `.text-line` and `.title-line` are directly targeted in studio JS.
- **exact**: text-mask wrappers are created in studio bundle (`classList.add("text-mask")`).
- **observed**: mask + line architecture mirrors home but with more simultaneous image motion.
- **inferred**: shared text splitting utility exists at runtime level.
- **unknown**: full API and reuse points for split-text helper.

## 10) Nav/menu open-close model
- **exact**: state-dependent nav/menu color classes and menu button structures exist in studio assets.
- **observed**: open-close timeline internals are not fully isolated in current readable slices.
- **inferred**: menu likely driven by global state machine with staggered item transitions.
- **unknown**: exact open/close timeline values and trigger gating under transition lock.

## 11) State classes and store/event bus
- **exact**: `is-loading`, `is-touch`, `is-sticky` toggles are present in studio JS.
- **exact**: event channels include `window:raf`, `window:resize`, `scroll:*` events.
- **observed**: listener registration/teardown pattern is consistent and disciplined across modules.
- **inferred**: global bus + local section state is the key orchestration model.
- **unknown**: full root store schema values for studio mode.

## 12) Motion tokens (eases, stagger, duration, transforms)
- **exact**: custom eases via `create("custom", ...)` appear in studio runtime.
- **exact**: stagger values (~0.1) and 1s-scale durations are used in key reveals.
- **exact**: transforms include `yPercent`, `xPercent`, `scale`, `rotation`, `clipPath`, plus `autoAlpha`.
- **observed**: linear easing dominates scroll-bound timelines; custom easing dominates intro/transition.
- **inferred**: two-token-family strategy (linear for scroll, custom for state transitions) is intentional.
- **unknown**: complete normalized motion-token table for all studio blocks.

## 13) Studio-specific differences
- **exact**: `a4c5813.js` introduces multiple additional paused scroll timelines not present in same density on home.
- **exact**: studio includes marquee timeline and additional clipPath/image-grid parallax combinations.
- **observed**: studio emphasizes dense media choreography and scroll-coupled transformations.
- **inferred**: studio route is the stronger stress test for shared scroll/timeline engine design.
- **unknown**: all studio-only section boundary conditions across responsive breakpoints.

## 14) Clean Nuxt rebuild must implement
- **exact requirement from evidence**:
  1. fixed shell + layered planes,
  2. global RAF bus,
  3. per-section paused timeline modules,
  4. manual progress mapping,
  5. text-mask reveal pipeline,
  6. transition+loader locking with class-state toggles,
  7. reusable custom-ease registry.
- **observed**: studio requires stronger timeline registry tooling than home due timeline count/complexity.
- **inferred**: rebuild should treat studio as benchmark route for engine correctness.
- **unknown**: exact fallback behavior on low-performance devices.

## 15) Unknowns / unresolved questions
- **unknown**: complete menu timeline + overlay interplay during active transitions.
- **unknown**: all scroll normalization constants and per-section clamps.
- **unknown**: unbundled naming for section modules in `a4c5813.js`.
- **inferred next step**: targeted decompile/humanify should prioritize `a4c5813.js` module boundary recovery.

---

## Dedicated subsection: `references/exoape-studio/a4c5813.js`

### Why this file is important
- **exact**: it is a studio-only chunk listed in both disk inventory and `Studio.txt` script/preload references.
- **exact**: it contains multiple studio-defining timelines (`scrollTl`, `marqueeTl`, line reveals, clipPath transforms).
- **observed**: it appears to carry a substantial share of studio-specific behavioral logic.
- **inferred**: this is a primary source for reproducing studio parity in a clean rebuild.

### `scrollTl` paused + progress-driven evidence
- **exact snippet**: `this.scrollTl = l.a.timeline({ paused: true })`.
- **exact snippet**: `this.scrollTl.progress(this.progress)`.
- **exact**: repeated pattern across multiple setAnimation blocks (imageObject variants and clipPath image block).
- **exact**: scroll-bound tweens mostly use linear easing and transform/opacity/clipPath values.
- **observed**: each studio section encapsulates its own paused timeline and progress mapper.
- **inferred**: engine pattern is “shared scroll state, local paused timelines.”
- **unknown**: precise section ordering and global coordination strategy when multiple timelines overlap viewport.
