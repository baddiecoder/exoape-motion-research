# Phase 6 — Exoape Engine Contract (Clean Rebuild API)

Scope: contract for Exoape home/studio engine-only rebuild, based on prior evidence artifacts.

## 1) ScrollEngine

- **purpose**
  - Normalize scroll input (wheel/touch), maintain target/current scroll state, emit per-frame section progress.
- **inputs**
  - wheel/touch deltas, viewport size, section bounds (`getBoundingClientRect`), touch-mode flag.
- **outputs**
  - `scrollY`, `targetY`, `velocity`, `direction`, normalized per-section progress.
- **lifecycle**
  - `init()` -> subscribe input + RAF.
  - `resize()` -> recompute bounds.
  - `destroy()` -> unsubscribe.
- **basis**
  - **exact**: manual progress + wheel/deltaY + bounds in `references/exoape-studio/e36d691.js`, `references/exoape-home/e3cea04.js`.
  - **observed**: shared pattern across home/studio.
- **source evidence**
  - `references/exoape-studio/e36d691.js`
  - `references/exoape-studio/a4c5813.js`
  - `references/exoape-home/e3cea04.js`
  - `work/analysis/scroll-engine.md`
- **prototype requirements**
  - No ScrollTrigger core dependency, transform/opacity-driven, deterministic per-frame updates.

## 2) TimelineRegistry

- **purpose**
  - Register section timelines as paused GSAP timelines and drive them manually via normalized progress/state events.
- **inputs**
  - timeline id, setup callback, progress value, trigger event (`intro|scroll|route|state`).
- **outputs**
  - timeline handles, debug state, lifecycle hooks (`play`, `pause`, `progress`, `kill`).
- **lifecycle**
  - `register()` -> create paused timeline.
  - `updateProgress(id,p)` -> set `.progress(p)`.
  - `dispose(id)` / `disposeAll()`.
- **basis**
  - **exact**: `timeline({paused:true})` + `scrollTl.progress(...)` in `a4c5813.js` / `e3cea04.js`.
  - **observed**: many section-local timelines.
- **source evidence**
  - `references/exoape-studio/a4c5813.js`
  - `references/exoape-home/e3cea04.js`
  - `work/analysis/timeline-catalog.json`
- **prototype requirements**
  - Paused by default, progress-driven where applicable, no implicit autoplay for scroll timelines.

## 3) StateMachine

- **purpose**
  - Control app/global class/store states (`is-loading`, `is-touch`, sticky/current/menu/transition flags).
- **inputs**
  - events (`route:start`, `route:end`, `touch:detected`, `menu:open`, `menu:close`, `scroll:threshold`).
- **outputs**
  - normalized state snapshot + body/app class toggles.
- **lifecycle**
  - `init(initialState)` -> `dispatch(event,payload)` -> `destroy()`.
- **basis**
  - **exact**: class toggles in `e36d691.js`, `e3cea04.js`, `a4c5813.js`.
  - **observed**: global+local split.
- **source evidence**
  - `references/exoape-studio/e36d691.js`
  - `references/exoape-home/e3cea04.js`
  - `work/analysis/state-machine.md`
- **prototype requirements**
  - Explicit transition-safe state changes, event-driven not ad-hoc DOM mutation.

## 4) PageTransitionEngine

- **purpose**
  - Orchestrate route/page transitions (overlay/clip transforms + scroll lock + swap sequencing).
- **inputs**
  - from/to route metadata, transition variant, duration/ease tokens.
- **outputs**
  - transition promise/events (`start`, `swap`, `end`), layer visibility states.
- **lifecycle**
  - `enter()` / `leave()` / `swap()` pipeline with cancellation support.
- **basis**
  - **exact**: clipPath/transform enter-leave + loading toggles in `e36d691.js`.
  - **inferred**: route-swap happens under/around overlay timeline.
- **source evidence**
  - `references/exoape-studio/e36d691.js`
  - `work/analysis/exoape-studio-deep-dive.md`
- **prototype requirements**
  - Must gate input during transition and preserve layer order.

## 5) LoaderEngine

- **purpose**
  - Manage initial and route-adjacent loading UI/timelines (fill, lock, unlock).
- **inputs**
  - loading start/stop events, asset/route readiness signals.
- **outputs**
  - loader progress value, active flag, class-state updates.
- **lifecycle**
  - `start()` -> `setProgress()` -> `complete()` -> `hide()`.
- **basis**
  - **exact**: `is-loading` add/remove in transition flow.
  - **observed**: shared preloader class family from Exoape shell.
- **source evidence**
  - `references/exoape-studio/e36d691.js`
  - `work/analysis/dom-structure-inventory.md`
- **prototype requirements**
  - Keep scroll disabled while loading; transform/opacity-centric motion.

## 6) TextMask/SplitText

- **purpose**
  - Produce mask wrappers and line targets for staggered reveal timelines.
- **inputs**
  - target element(s), split mode, responsive reflow trigger.
- **outputs**
  - mask/line element refs (`text-mask`, `title-line`, etc.), cleanup handles.
- **lifecycle**
  - `split()` -> `resplitOnResize()` -> `restore()`.
- **basis**
  - **exact**: `classList.add("text-mask")` and line from-to reveals in home/studio bundles.
- **source evidence**
  - `references/exoape-studio/a4c5813.js`
  - `references/exoape-home/e3cea04.js`
  - `work/analysis/js-behavior-inventory.md`
- **prototype requirements**
  - Masks before reveal, paired transform+opacity, preserve stagger behavior.

## 7) Nav/Menu Engine

- **purpose**
  - Drive menu open/close, nav item visibility, icon/burger label transitions, color state coupling.
- **inputs**
  - menu toggle actions, route/current item, theme/lightness state.
- **outputs**
  - open state, current state, nav timeline state, class updates.
- **lifecycle**
  - `init()` -> `open()` / `close()` -> `setCurrent()` -> `destroy()`.
- **basis**
  - **observed**: substantial nav/menu timeline clusters in shared chunk (`d5d162b.js`), exact class-state coupling from shell CSS/JS.
- **source evidence**
  - `references/exoape-home/d5d162b.js`
  - `work/analysis/decompiled-module-map.md`
  - `work/analysis/selector-inventory.md`
- **prototype requirements**
  - Basic open/close included in engine-only spike; keep API decoupled from route component internals.

## 8) RAF Bus

- **purpose**
  - Single frame clock for engine updates (`scroll`, `timeline progress`, optional debug hooks).
- **inputs**
  - frame timestamp.
- **outputs**
  - pub/sub events (`window:raf`-style callbacks).
- **lifecycle**
  - `start()` -> `onTick(cb)` -> `offTick(cb)` -> `stop()`.
- **basis**
  - **exact**: repeated `$nuxt.$on("window:raf", this.onRaf)` and teardown patterns.
- **source evidence**
  - `references/exoape-studio/a4c5813.js`
  - `references/exoape-studio/e36d691.js`
  - `references/exoape-home/e3cea04.js`
- **prototype requirements**
  - deterministic update order: state -> scroll -> timeline updates -> render side effects.

## 9) SectionProgress

- **purpose**
  - Convert section bounds + scroll position into normalized progress used by paused timelines.
- **inputs**
  - section rect, viewport metrics, scroll position.
- **outputs**
  - normalized progress `[0..1]` (and optional clamped inverse).
- **lifecycle**
  - pure helper/composable called each frame or on relevant updates.
- **basis**
  - **exact**: bounds sampling + progress mapping patterns in Exoape bundles.
- **source evidence**
  - `references/exoape-studio/a4c5813.js`
  - `references/exoape-studio/e36d691.js`
  - `references/exoape-home/e3cea04.js`
- **prototype requirements**
  - must support normal and inverted progress forms.
