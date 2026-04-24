# AGENTS.md — Exoape Motion Research

## Project identity

This is a reverse-engineering and clean-room reconstruction project.

The reference files are production captures from Exo Ape-designed sites. They are bundled, minified, transpiled, and partially deobfuscated.

The goal is not to recreate original source exactly.

The goal is to extract the reusable architecture and build a clean, original Nuxt/Vue implementation that captures the motion system.

## Absolute rules

1. Do not modify files under /references.
2. Do not copy proprietary images, fonts, or brand assets into /work/prototype.
3. Do not claim exact behavior unless directly supported by files.
4. Mark findings as:
   - exact
   - observed
   - inferred
   - unknown
5. Do not jump directly to building.
6. First inventory, normalize, decompile, analyze, then build.
7. Do not use ScrollTrigger for the prototype's core logic.
8. Use GSAP timelines, but keep timelines paused and drive them manually.
9. Use transform and opacity for motion.
10. Do not animate layout properties unless source evidence requires it.

## Required generated folders

Codex should create:

/work
  /normalized
  /decompiled
  /humanified
  /analysis
  /prototype

## Processing pipeline

### Phase 1: Inventory

Inspect /references and create:

/work/analysis/file-inventory.md

Identify:

- main HTML files
- state files
- JS chunks
- CSS files
- likely framework
- route/page represented
- unknown files

  Important inventory rule:

Do not rely only on references/README.md. Treat it as a human guide, not as ground truth.

For each site, Codex must derive the real file list from:

1. actual files present in /references/<site>/
2. script/preload tags inside the main HTML
3. references/README.md

If these disagree, Codex must:
- include every actual .js file present in the site folder
- include every JS file referenced by the HTML
- flag the mismatch in /work/analysis/file-inventory.md
- never skip an actual JS file merely because references/README.md omitted it

### Phase 2: Normalize

Create normalized copies under:

/work/normalized/<site>/

Use:

/html
/js
/css
/state
/manifest.json
/notes.md

Convert .txt HTML files into .html copies.

### Phase 3: Decompile / split

Attempt modern-frontend decompilation.

Preferred:

- Wakaru first
- webcrack only if helpful
- bundle-breaker only if Wakaru fails to split obvious bundles

Outputs go to:

/work/decompiled/<site>/

### Phase 4: Humanify / rename

Run or prepare Humanify-compatible naming pass if possible.

Outputs go to:

/work/humanified/<site>/

If the tool cannot run, create a manual humanification report describing which files need naming recovery.

### Phase 5: Behavior extraction

This is critical.

Do not merely clean code.

Extract:

- GSAP timelines
- timeline role
- timeline triggers
- RAF loops
- scroll engines
- progress formulas
- route/page transitions
- loader timelines
- nav/menu timelines
- state class toggles
- mask/split text logic
- cursor logic
- gallery/category logic

Create:

/work/analysis/timeline-catalog.json
/work/analysis/scroll-engine.md
/work/analysis/state-machine.md
/work/analysis/loader-systems.md
/work/analysis/nav-systems.md
/work/analysis/page-transitions.md

### Phase 6: Cross-site invariants

Create:

/work/analysis/cross-site-invariants.md

Separate:

- exact
- observed
- inferred
- unknown

### Phase 7: Prototype

Only after analysis, build:

/work/prototype

Nuxt 3 / Vue / TypeScript / GSAP.

## Prototype architecture

/work/prototype
  /components
    BaseMask.vue
    BaseText.vue
    BaseImage.vue
    SiteLogo.vue
    SiteBurger.vue
    SiteNav.vue
    OverlayWipe.vue
    LoaderFill.vue
    LoaderDigits.vue
    DynamicIslandNav.vue

  /composables
    useRaf.ts
    useViewport.ts
    useScrollEngine.ts
    useSectionProgress.ts
    useTimelineRegistry.ts
    useStateMachine.ts
    useTextSplit.ts
    useLoaderProgress.ts
    useCursor.ts

  /engine
    ScrollEngine.ts
    TimelineRegistry.ts
    StateMachine.ts
    PageTransitionEngine.ts
    LoaderEngine.ts

  /motion
    eases.ts
    primitives.ts
    patterns.ts
    timelines.ts

  /sections
    ExoHero.vue
    ExoStudioHero.vue
    EditorialGridSection.vue
    GalleryGridSection.vue
    TextRevealSection.vue
    ImageParallaxSection.vue

  /pages
    index.vue
    studio.vue
    pixelflakes-mode.vue
    ottografie-mode.vue

## Exoape-specific reconstruction priorities

Prioritize Exoape home/studio over generic Nuxt cleanup.

Most important systems:

1. Fixed viewport and scroll/camera layer.
2. Overlay page transition layer.
3. Text mask and title mask reveal.
4. Loader/preloader.
5. Menu/nav open-close.
6. Manual scroll progress and RAF.
7. Paused timeline registry.
8. Shared design tokens.
9. Studio vs home differences.

## Do not overfit

If original code is too mangled, reconstruct clean behavior from evidence.

Prefer:

- clear architecture
- reusable composables
- documented assumptions
- behavior-compatible prototype

over attempting to perfectly recreate mangled bundle structure.
