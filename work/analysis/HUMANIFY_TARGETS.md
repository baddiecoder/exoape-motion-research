# HUMANIFY_TARGETS

Narrow, high-ROI naming recovery targets only.

## Scroll / RAF

### Target A
- **source file**: `references/exoape-studio/a4c5813.js`
- **suspected function/module**: section `setAnimation` + `onRaf` blocks using `scrollTl`.
- **desired recovered names**: `createStudioSectionScrollTimeline`, `updateStudioSectionProgress`, `registerSectionRaf`.
- **why naming matters**: clarifies section engine contract and progress-direction semantics.

### Target B
- **source file**: `references/exoape-home/e3cea04.js`
- **suspected function/module**: home section scroll timeline groups.
- **desired recovered names**: `createHomeHeroScrollTimeline`, `createProjectGridScrollTimeline`.
- **why naming matters**: separates home-specific section roles for component mapping.

## Page transition

### Target C
- **source file**: `references/exoape-home/e36d691.js`
- **suspected function/module**: route enter/leave with clipPath transitions.
- **desired recovered names**: `runPageEnterTransition`, `runPageLeaveTransition`, `completePageSwap`.
- **why naming matters**: resolves transition ordering uncertainty.

## Loader

### Target D
- **source file**: `references/exoape-home/e36d691.js`
- **suspected function/module**: loading lock/unlock and delayed release logic.
- **desired recovered names**: `setLoadingLock`, `releaseLoadingLockAfterTransition`.
- **why naming matters**: formalizes loader contract and truth-table reliability.

## Nav / Menu

### Target E
- **source file**: `references/exoape-home/d5d162b.js`
- **suspected function/module**: menu open/close + burger/icon timeline cluster.
- **desired recovered names**: `createMenuOpenTimeline`, `createMenuCloseTimeline`, `syncCurrentNavState`.
- **why naming matters**: unlocks confident nav/menu engine implementation.

## Text masking

### Target F
- **source file**: `references/exoape-studio/a4c5813.js` + `references/exoape-home/e3cea04.js`
- **suspected function/module**: text-mask wrapper insertion and line reveal setup.
- **desired recovered names**: `wrapLinesWithTextMask`, `revealTextLines`.
- **why naming matters**: stabilizes shared TextMask/SplitText API.

## Storyblok / content utilities

### Target G
- **source file**: shared Exoape runtime chunk(s) (`d5d162b.js` family)
- **suspected function/module**: content/render utility glue around route/state.
- **desired recovered names**: `mapStoryblokContent`, `resolveRouteContentState`.
- **why naming matters**: prevents over-coupling motion engine to content plumbing.
