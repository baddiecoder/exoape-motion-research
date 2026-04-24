# Codex Mission: Exo Ape Motion Engine Reconstruction

## Primary objective

Reverse-engineer the reusable design-motion architecture behind the reference sites and build a clean Nuxt/Vue prototype.

This is not a clone. Do not copy proprietary images, fonts, or brand assets into the prototype.

The output should capture the behavior and architecture:

- fixed viewport shell
- layered render planes
- manual scroll/progress systems
- paused GSAP timelines
- state-class driven animation
- overlay transitions
- masked typography
- loader systems
- nav/menu systems

## Reference sites

1. exoape.com homepage
2. exoape.com/studio
3. pixelflakes.com
4. ottografie.nl

## High-confidence known findings

### Exoape home/studio

- Nuxt/Vue SSR.
- Fixed viewport app shell.
- html/body are fixed or overflow-hidden.
- .app is fixed.
- .scroll is the main movement/camera layer.
- .page is the scene/content layer.
- .overlay is a separate page-transition layer.
- .overlay is oversized, approximately 150vh.
- .is-touch changes scroll behavior.
- .is-loading disables scroll.
- .text-mask and .title-mask provide overflow clipping.
- .text-line and .title-line are transformed inside masks.
- Motion is transform/opacity based.
- Page transition is overlay-driven, not just opacity fade.

### Pixelflakes

- Same Exo Ape DNA but editorial/hybrid.
- body/html fixed.
- internal .wrapper scroll container uses overflow-y:auto.
- At Hauss Std font system.
- 12-column desktop grid / 6-column mobile grid.
- .is-light, .is-menu, .is-dark alter nav/logo/burger color.
- .burger uses .shape, .icon, .line.
- layout states such as .is-one, .is-two, .is-three, .is-four define gallery/case placement.

### Ottografie

- Gallery/experiential variant.
- Fixed .app.
- Loader uses .preloader, .mask, .filler, .background, .icon.
- .filler begins at scaleY(0) from bottom.
- Hero/title uses .char-level split.
- Navigation is a dynamic UI object, not a conventional navbar.
- Navigation includes .overlay, .island, .pages, .ui, .box.
- The nav overlay expands beyond viewport via large negative inset.
- Gallery/category/case systems use circular thumbnails and hidden state layers.

## Critical challenge

The files are production bundles. They are not normal source files.

Wakaru/Humanify may improve readability, but they will not fully recover the original architecture.

Codex must perform an additional behavior reconstruction pass:

- identify GSAP timelines
- classify timelines by role
- identify RAF loops
- identify scroll interpolation
- identify state class toggles
- identify loader timelines
- identify nav/menu open-close timelines
- identify page transition timelines
- reconstruct clean architecture from behavior

## Output policy

Do not edit /references.

All generated work goes under /work:

/work
  /normalized
  /decompiled
  /humanified
  /analysis
  /prototype

## Build target

Create a clean Nuxt 3 prototype under /work/prototype.

Prototype requirements:

- Nuxt 3
- TypeScript
- GSAP
- no ScrollTrigger for core logic
- manual scroll/progress engine
- paused timeline registry
- state machine
- overlay page transition
- masked text reveal
- loader fill system
- digit loader system
- menu/nav open-close
- dynamic island nav demo
- cinematic mode based on Exoape
- editorial mode based on Pixelflakes
- experiential mode based on Ottografie

## Motion rules

- Timelines should be paused by default.
- Scroll-driven timelines should be driven by normalized progress.
- Avoid layout animation.
- Animate transform and opacity.
- Text must be masked before reveal.
- Opacity should usually be paired with transform.
- Preserve tight stagger timing where observable.
- Preserve layered motion architecture.
