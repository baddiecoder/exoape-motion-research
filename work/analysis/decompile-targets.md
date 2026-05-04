# Phase 5 — Constrained Decompile Targets (Exoape-focused)

## Target set

1. `references/exoape-studio/a4c5813.js`
2. `references/exoape-home/e3cea04.js`
3. `references/exoape-home/e36d691.js`
4. `references/exoape-studio/e36d691.js`
5. `references/exoape-home/d5d162b.js` (shared Exoape chunk for nav/scroll/event/transition logic)

## Direct-inspection assessment (before decompile)

### `a4c5813.js`
- **size**: 108,644 bytes.
- **exact markers**: `scrollTl.progress(this.progress)`, `timeline({ paused: true })`, `window:raf`, `marqueeTl`, `classList.add("text-mask")`.
- **worth decompiling?** **yes (exact)** — highest-density studio-specific motion logic and required special-file focus.

### `e3cea04.js`
- **size**: 86,499 bytes.
- **exact markers**: paused `scrollTl`, sticky class toggles, text-mask creation, multiple `window:raf` listeners.
- **worth decompiling?** **yes (exact)** — primary home motion/section timeline bundle.

### `e36d691.js` (home)
- **size**: 29,258 bytes.
- **exact markers**: route transition calls, `is-loading`/`is-touch` toggles, wheel + deltaY handling, paused `scrollTl`.
- **worth decompiling?** **yes (exact)** — compact and highly informative for shared transition/scroll orchestration.

### `e36d691.js` (studio)
- **size**: 29,258 bytes.
- **exact markers**: same as home copy, including clipPath transition and scroll orchestration markers.
- **worth decompiling?** **yes (observed)** — confirms shared runtime parity; lower marginal gain vs home copy but useful verification.

### `d5d162b.js` (shared chunk)
- **size**: 174,562 bytes.
- **exact markers**: many timelines, `window:raf`, menu/nav timelines, current/enter/leave timeline clusters.
- **worth decompiling?** **yes (observed)** — rich shared-engine/nav module recovery likely; biggest candidate for selective follow-up extraction.

## Target prioritization

1. **P1**: `a4c5813.js`
2. **P1**: `e3cea04.js`
3. **P1**: `e36d691.js` (home copy)
4. **P2**: `d5d162b.js`
5. **P3**: `e36d691.js` (studio copy, parity check)
