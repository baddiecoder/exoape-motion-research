# Phase 3 — JS Behavior Inventory (Direct Bundle Evidence)

Scope: extracted from `/references/*/*.js` only, without Wakaru/webcrack/Humanify or prototype work.

## Evidence scan coverage

- **exact**: scanned JS bundles in `references/exoape-home/*.js`, `references/exoape-studio/*.js` (including `a4c5813.js`), `references/pixelflakes/*.js`, and `references/ottografie/BXQMaeyj.js`.
- **exact**: GSAP usage signatures found (`timeline`, `fromTo`, `paused`, `progress`, `ease`, `stagger`, `autoAlpha`, `yPercent`, `xPercent`, `clipPath`).
- **exact**: RAF/event architecture markers found (`window:raf`, `requestAnimationFrame`, wheel/touch listeners, `deltaY`, `scrollTop`, `getBoundingClientRect`).

## Exoape Studio (including special check on `a4c5813.js`)

- **exact**: `a4c5813.js` contains a paused `scrollTl` timeline that is progressed manually.
  - snippet: `this.scrollTl = l.a.timeline({ paused: true })` and `this.scrollTl.progress(this.progress)`.
- **exact**: `a4c5813.js` includes multiple scroll-driven timelines (`scrollTl`) with linear easing for image parallax/scale/clip-path behaviors.
- **exact**: `a4c5813.js` includes text reveal with masks/lines and GSAP from-to transitions.
  - snippet: `l.a.fromTo([e, t], { autoAlpha:0, rotation:7, yPercent:100 }, { ... stagger:0.1 ... })`.
- **exact**: `a4c5813.js` includes marquee timeline (`marqueeTl`) with `paused: true` and `xPercent` translation.
- **exact**: custom eases appear in Studio family bundles via `create("custom", "M0,0 C...")` in `e36d691.js`.
- **exact**: state classes controlled from JS include `is-loading`, `is-touch`, and sticky toggles (`is-sticky`) through `classList.add/remove`.
- **exact**: RAF bus architecture present via `$nuxt.$on("window:raf", this.onRaf)` and `$off` teardown.

## Exoape Home

- **exact**: `e3cea04.js` contains paused `scrollTl` timelines progressed manually each RAF/update cycle.
  - snippet: `this.scrollTl = r.a.timeline({ paused:true })` and `this.scrollTl.progress(this.progress)`.
- **exact**: hero/text reveal behavior uses `autoAlpha`, `yPercent`, `rotation`, `stagger`, and custom ease curves.
- **exact**: text-mask wrapper creation appears in JS (`classList.add("text-mask")`).
- **observed**: home bundle has several scroll-parallax clusters (media/project/footer/title blocks), each implemented as separate paused timelines.

## Pixelflakes

- **exact**: `21258c3.js` includes wheel/touch input plumbing (`wheel`, `touchstart`, `touchmove`, `deltaY`) and scroll position writes (`rootElement.scrollTop = t`).
- **exact**: smooth scrolling path uses RAF (`requestAnimationFrame(...)`) and interpolated animate-fromTo behavior (`this.animate.fromTo(...)`).
- **exact**: Nuxt RAF bus integration is present (`$nuxt.$on("window:raf", this.onRaf)`).
- **exact**: transition/effect calls include GSAP-style `fromTo` and eases such as `expo.inOut` / `expo.out`.
- **exact**: state-like class binding includes `is-light` in render/state logic.

## Ottografie

- **exact**: `BXQMaeyj.js` embeds GSAP core/runtime (license banner and core methods, including `paused`, `progress`, `stagger`, `autoAlpha`, x/y percent transform properties).
- **exact**: utility class toggling via `classList.add/remove` helpers exists and appears used by transition/state hooks.
- **exact**: double-RAF scheduling helper exists (`requestAnimationFrame(() => requestAnimationFrame(t))`).
- **observed**: app store state includes motion-relevant keys (`loader`, `loading`, `cursor`, `navigation`, `category`, `gallery`, `transition`, `isTouch`).
- **observed**: route tree includes gallery/player sub-routes, supporting gallery/category/player behavior classification.
- **unknown**: isolated app-level timeline blocks are harder to distinguish from bundled framework/runtime code without decompilation.

## Behavior class mapping snapshot

- **loader**: Exoape Studio/Exoape Home `is-loading` + transition enter/leave blocks (exact).
- **hero intro**: Exoape Home/Studio text+media intro transitions with `autoAlpha/yPercent/rotation` (exact).
- **text reveal**: line-based masks with stagger and custom ease (exact).
- **scroll section**: paused `scrollTl` progressed manually from normalized progress (exact).
- **parallax/image**: scale/y/clipPath scroll timelines (exact).
- **menu/nav**: state classes and sticky/current toggles; explicit menu open timeline details mostly observed/inferred in these slices.
- **page transition**: enter/leave blocks with clipPath and loading-state toggles (exact/observed).
- **cursor**: clearly represented in Ottografie store state; direct cursor timeline not isolated here (observed/unknown).
- **gallery/category**: Ottografie store + route keys and Exoape project media sequences support this class (observed).
- **unknown**: complete runtime orchestration across all modules without full decompile pass.
