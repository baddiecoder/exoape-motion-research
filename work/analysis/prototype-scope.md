# Phase 6 — Prototype Scope (Engine-only Spike)

## Goal
Deliver an **engine-only spike** validating Exoape home/studio core motion architecture before full page reconstruction.

## What to build (in next phase)
1. Fixed app shell.
2. Overlay transition layer.
3. Scroll/camera layer.
4. Page/scene layer.
5. RAF bus.
6. Manual section progress helpers.
7. Paused timeline registry.
8. One Exoape-style hero section.
9. One Studio-style scroll section.
10. Masked text reveal.
11. Image parallax.
12. Loader fill.
13. Basic menu open/close.

## What NOT to build yet
- Full cross-site parity (Pixelflakes/Ottografie).
- Production content pipeline/Storyblok data integration.
- Humanify/decompile-wide workflow expansion.
- Pixel-perfect full route recreation.

## Files to create (next phase, planned)
- `work/prototype/engine/ScrollEngine.ts`
- `work/prototype/engine/TimelineRegistry.ts`
- `work/prototype/engine/StateMachine.ts`
- `work/prototype/engine/PageTransitionEngine.ts`
- `work/prototype/engine/LoaderEngine.ts`
- `work/prototype/composables/useRaf.ts`
- `work/prototype/composables/useSectionProgress.ts`
- `work/prototype/composables/useTextSplit.ts`
- `work/prototype/components/OverlayWipe.vue`
- `work/prototype/components/LoaderFill.vue`
- `work/prototype/components/SiteNav.vue`
- `work/prototype/sections/ExoHero.vue`
- `work/prototype/sections/ExoStudioHero.vue`

## Acceptance criteria
- Shell is fixed and layered correctly (`app`, `page`, `overlay`, `scroll`).
- Scroll updates come from custom engine + RAF, not ScrollTrigger core logic.
- At least two paused timelines are manually progressed by normalized section progress.
- Text reveal uses mask/line strategy with transform + opacity.
- Image parallax/scale follows linear progress mapping.
- Loader toggles loading lock and visibly transitions.
- Menu open/close works with a basic timeline and state machine events.

## Risks
- Timing drift between global transition/loader and local section timelines.
- Over-coupling menu/transition state to component internals.
- Missing edge-case touch behavior parity.
- Decompile naming ambiguity causing incorrect abstractions.

## Exact motion rules to preserve
- Timelines paused by default for scroll-coupled systems.
- Drive scroll timelines by explicit normalized progress.
- Prefer transforms + opacity; avoid layout animation unless evidence forces it.
- Keep masked text reveal pipeline (`text-mask`/line-based).
- Maintain loader/transition input lock semantics (`is-loading` style behavior).
- Keep RAF-driven deterministic update order.

## Confidence summary
- **exact**: fixed shell, RAF bus, paused timeline + progress model, mask-based text reveal, loading-lock behavior.
- **observed**: nav/menu timeline complexity and full transition swap ordering.
- **inferred**: minimal engine-only spike is sufficient validation gate before full prototype expansion.
- **unknown**: all edge-case interactions under rapid route switching and low-performance devices.
