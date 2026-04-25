# Exoape Shared Engine (Home + Studio Synthesis)

## Shared engine thesis
- **exact**: both home and studio use the same core architecture primitives: fixed shell, RAF bus, paused timelines, manual progress mapping, state-class toggles.
- **observed**: studio extends the same engine with denser section modules rather than replacing fundamentals.
- **inferred**: a clean Nuxt reconstruction should implement one shared motion engine with page-specific timeline packs.
- **unknown**: all hidden edge-case handlers currently obscured by bundling.

## 1) Framework/runtime
- **exact**: Nuxt/Vue runtime + GSAP plugin model is present in both routes.
- **observed**: event bus and lifecycle cleanup patterns are consistent.
- **inferred**: home/studio both consume shared app infrastructure chunks.
- **unknown**: pre-bundle module ownership map.

## 2) Root architecture and layers
- **exact**: `app/page/overlay/scroll/nav` layered model exists in both routes.
- **observed**: route-level sections plug into the same shell/layer system.
- **inferred**: overlay transitions are route-agnostic engine behavior.
- **unknown**: exhaustive layer interactions during uncommon navigation states.

## 3) Scroll engine
- **exact**: paused timelines progressed by normalized per-frame progress are common across both routes.
- **exact**: `window:raf` is a central clock signal.
- **observed**: touch fallback relies on class-state and alternate input paths.
- **inferred**: ideal rebuild engine = `useRaf + useScrollEngine + useSectionProgress` with deterministic tick order.
- **unknown**: original smoothing constants and all mobile-specific overrides.

## 4) Timeline engine
- **exact**: two dominant timeline classes exist:
  1. progress-driven paused timelines,
  2. state-triggered intro/transition timelines.
- **exact**: transform/opacity properties dominate (`yPercent/xPercent/scale/rotation/clipPath/autoAlpha`).
- **observed**: custom eases appear on state transitions; linear on scroll coupling.
- **inferred**: this separation should become explicit in rebuild API (`registerScrollTl` vs `playStateTl`).
- **unknown**: full token library for all durations/eases.

## 5) Transition + loader engine
- **exact**: class-level loading lock (`is-loading`) is integrated with transition flow.
- **observed**: overlay/clip-based transition language is shared.
- **inferred**: clean rebuild should centralize route transition sequencing into one `PageTransitionEngine`.
- **unknown**: all branch conditions for transition variants.

## 6) Text system
- **exact**: mask/line reveal model is shared (`text-mask`, `title-line`, staggered yPercent reveals).
- **observed**: text splitting and wrapper insertion are runtime-driven, not static markup-only.
- **inferred**: reusable text utility composable is required in prototype architecture.
- **unknown**: full ruleset for line recomputation on resize/font swap.

## 7) State model
- **exact**: state classes (`is-touch`, `is-loading`, sticky/current variants) and event bus channels are core primitives.
- **observed**: global+local state layering is consistent.
- **inferred**: shared `StateMachine` should own body/app classes; sections should own local flags.
- **unknown**: complete global store schema and transitions table.

## 8) Home vs Studio split
- **exact home-leaning**: fewer section timeline clusters, prominent sticky/title reveal behavior.
- **exact studio-leaning**: `a4c5813.js` introduces more concurrent paused scroll timelines, marquee, clipPath-rich media choreography.
- **observed**: same engine, different timeline density/profile.
- **inferred**: studio should drive stress/perf budgets when implementing shared engine.
- **unknown**: full set of studio-only micro-interactions.

## 9) Recommended clean Nuxt implementation checklist
- **exactly supported by evidence**
  1. fixed viewport shell with dedicated layers;
  2. global RAF dispatcher;
  3. section timeline registry with paused GSAP timelines;
  4. progress mapping helpers from bounds -> normalized progress;
  5. transition/loader coordinator (class lock + overlay timeline);
  6. text mask/split utility;
  7. explicit easing/token config (linear vs custom curves).
- **observed**: transform+opacity-first policy matches source behavior.
- **inferred**: avoid ScrollTrigger core dependency for parity with observed manual progress model.
- **unknown**: final abstraction boundaries until decompile-assisted naming recovery.

## 10) Outstanding questions
- **unknown**: exact menu open-close timeline internals and relation to overlay/page transition.
- **unknown**: complete map of per-section progress formulas and clamp values.
- **unknown**: long-tail lifecycle behavior under rapid route switching.
- **inferred next step**: after this deep dive, perform controlled decompilation focused on Exoape home/studio timeline modules only.
