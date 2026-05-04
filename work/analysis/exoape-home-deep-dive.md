# Exoape Home Deep Dive (Phase 4)

## 1) Framework / runtime model
- **exact**: Nuxt/Vue runtime/event patterns are present (`$nuxt.$on/$off`, route transition hooks, Nuxt chunk naming).
- **exact**: GSAP is used and plugins are registered in bundle code (`registerPlugin(...)` usage in home chunks).
- **observed**: componentized, section-local timeline modules are bundled into `e3cea04.js`.
- **inferred**: rendering model is SSR + hydrated client components.
- **unknown**: exact original source file tree and component names before bundling.

## 2) Root app architecture
- **exact**: fixed-shell structure from CSS/HTML evidence (`html/body/.app` fixed, scroll mediated inside app layer).
- **observed**: component tree separates global shell concerns (nav/menu/overlay/loader) from section timelines.
- **inferred**: a single top-level app orchestrator owns global transition/loading state.
- **unknown**: exact store module boundaries for shell ownership.

## 3) Layer model (app / page / overlay / scroll / nav)
- **exact**: `.app`, `.page`, `.overlay`, `.scroll` classes exist with layered positioning.
- **exact**: `.overlay` exists as transition plane and `.scroll` is movement/camera plane.
- **observed**: nav/UI lives above content layers and reacts to state classes (`is-light`, `is-sand`, etc.).
- **inferred**: route swaps likely occur underneath or between overlay transition states.
- **unknown**: precise z-index choreography per route transition edge case.

## 4) Scroll container and strategy
- **exact**: RAF bus pattern exists (`window:raf` listeners in home JS).
- **exact**: manual progress updates drive paused timelines (`scrollTl.progress(this.progress)`).
- **exact**: geometry is sampled via `getBoundingClientRect()`.
- **observed**: touch mode uses class-level behavior forks (`is-touch`) rather than same desktop inertial path.
- **inferred**: fixed viewport + custom scroll state interpolation is the core strategy.
- **unknown**: exact damping/interpolation constants across every section.

## 5) Timeline architecture
- **exact**: paused timelines exist (`timeline({ paused: true })`) and are driven by scroll progress.
- **exact**: intro/state timelines use `fromTo`, `autoAlpha`, `yPercent`, `rotation`, `stagger`.
- **exact**: linear ease is common in progress-driven parallax segments.
- **observed**: multiple independent section-local timelines are composed rather than one monolithic page timeline.
- **inferred**: this architecture maps directly to a “timeline registry” pattern for a clean rebuild.
- **unknown**: complete list of all home timelines hidden in less-readable slices.

## 6) Page transition model
- **exact**: route transition calls include clip/transform-based from-to animations in Exoape family bundles.
- **observed**: home shares transition language with studio (loading flag + timeline-based enter/leave).
- **inferred**: overlay-assisted route swap with temporary scroll lock is used.
- **unknown**: exact handoff order between route mount, overlay hide, and scroll re-enable.

## 7) Loader / preloader model
- **exact**: preloader class family exists in shared Exoape bundles (`.preloader`, `.mask`, `.filler`, `.icon`).
- **exact**: loading class state (`is-loading`) is toggled in transition logic (shared Exoape runtime behavior).
- **observed**: loader likely blocks interaction until first route readiness and assets/timelines are ready.
- **inferred**: loader fill + brandmark sequence likely doubles as transition fallback.
- **unknown**: exact preload completion criteria and timeout/failed-asset path.

## 8) Hero entrance model
- **exact**: title-line/sticky logic uses `autoAlpha`, `yPercent`, `rotation`, `stagger`, custom ease.
- **observed**: hero entrance is state-threshold driven (sticky/scroll threshold) not just one-time mount tween.
- **inferred**: initial hero reveal and scroll-reactive hero behavior are separate but coordinated phases.
- **unknown**: precise hero entry timeline start conditions on hard reload vs client navigation.

## 9) Text masking / split text model
- **exact**: mask wrappers are created dynamically in JS (`classList.add("text-mask")`).
- **exact**: line selectors (`title-line` / `text-line`) are animated with yPercent and alpha.
- **observed**: mask-first semantics are consistent with Exoape motion language.
- **inferred**: split-text preprocessing likely occurs per-component before reveal timeline play.
- **unknown**: full split granularity policy (word vs line vs char) across all home sections.

## 10) Nav/menu open-close model
- **exact**: menu/nav classes and state-color variants are present (`is-light`, `is-sand`, `is-current`).
- **observed**: nav open/close animation code likely lives partly in shared bundle slices not yet fully isolated.
- **inferred**: menu open-close is state-driven with transform + opacity micro-timelines.
- **unknown**: exact ordered timeline for burger icon morph + nav item stagger + overlay relation.

## 11) State classes and store/event bus
- **exact**: class toggles in home logic include `is-sticky` and mask class injection; shared Exoape uses `is-loading`, `is-touch`.
- **exact**: event bus channels include `window:raf` and lifecycle unsubscription patterns.
- **observed**: route/scroll/resize are orchestrated through event channels rather than direct polling everywhere.
- **inferred**: global app state + per-section local state form a two-tier state machine.
- **unknown**: canonical list of root store keys for home route.

## 12) Motion tokens (eases, stagger, duration, transforms)
- **exact**: custom ease creation appears (`create("custom", "M0,0 C...")`) in Exoape family.
- **exact**: stagger values around `0.1` and inverse staggers are used in line/reveal sequences.
- **exact**: typical transforms: `yPercent`, `scale`, `rotation`, plus `autoAlpha`/`opacity`.
- **observed**: durations around ~1s are common for major reveal transitions.
- **inferred**: home motion token set is shared with studio with small per-section overrides.
- **unknown**: complete timing token map (all durations/eases/constants) across every component.

## 13) Home-specific differences
- **exact**: home has section clusters in `e3cea04.js` with multiple media/project scroll timelines.
- **observed**: sticky hero/title behavior appears particularly central in home composition.
- **inferred**: home emphasizes editorial sequence flow (hero -> projects/media -> footer transitions).
- **unknown**: exact content-driven branching for all home section variants.

## 14) Clean Nuxt rebuild must implement
- **exact requirement from evidence**:
  1. fixed viewport shell with layered planes,
  2. RAF event bus,
  3. paused timeline registry,
  4. progress-driven section timelines,
  5. mask-first text reveals,
  6. loader + route transition state lock.
- **observed**: consistent use of transform/opacity suggests avoiding layout animation by default.
- **inferred**: architecture should separate global engines (scroll/state/transition) from section timeline modules.
- **unknown**: exact rebuild API ergonomics before decompile-assisted naming recovery.

## 15) Unknowns / unresolved questions
- **unknown**: full menu open-close timeline details in home-specific modules.
- **unknown**: precise route transition handoff timing (DOM swap vs overlay lifecycle).
- **unknown**: complete source-level mapping of minified component IDs to semantic names.
- **inferred next step**: decompile/humanify pass should target home timeline/module naming first after this deep dive.
