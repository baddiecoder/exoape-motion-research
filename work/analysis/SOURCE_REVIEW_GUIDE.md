# SOURCE_REVIEW_GUIDE

## Why these files are hard to read
- Production bundles are minified/transpiled and partially deobfuscated.
- Module names are numeric/opaque; boundaries are flattened.
- Shared runtime/framework code is mixed with app-specific motion logic.
- CSS payload strings and compiled render code can drown signal.

## What Wakaru improved
- Split several large bundles into smaller module files.
- Made repeated patterns easier to spot (`scrollTl`, `window:raf`, transition/loader toggles, nav timelines).
- Reduced cognitive load for locating high-value sections in:
  - `a4c5813.js`
  - `e3cea04.js`
  - `e36d691.js`
  - shared `d5d162b.js`

## What Wakaru did NOT solve
- Semantic naming remains poor (`module-###` style files).
- Full intent is still partially implicit.
- Runtime-order certainty (especially transition/menu lifecycle) still needs explicit validation.

## How to avoid false certainty
1. Treat class/timeline/event evidence as **exact** only when directly visible.
2. Treat behavior sequencing as **observed** unless fully traceable.
3. Mark architecture extrapolations as **inferred**.
4. Keep unresolveds explicitly **unknown**; do not collapse unknown into inferred.

## How to read source alongside analysis
- Start from analysis maps, then verify in source:
  - `timeline-catalog.json`
  - `decompiled-module-map.md`
  - `exoape-home-deep-dive.md`
  - `exoape-studio-deep-dive.md`
- Use source reads to answer specific questions, not to re-summarize everything.
- Update only targeted uncertainties in `OPEN_QUESTIONS.md` and `DECISIONS_LOG.md` (future phases).

## Labeling rule (strict)
- **exact**: directly evidenced in source/artifacts.
- **observed**: strongly indicated by multiple direct clues but not fully deterministic.
- **inferred**: reasoned synthesis from exact/observed evidence.
- **unknown**: unresolved with current evidence.

## Why Exoape home/studio remain priority
- They define the core engine architecture we are reconstructing.
- `a4c5813.js` + `e3cea04.js` + `e36d691.js` contain most of the motion system primitives.
- Pixelflakes/Ottografie are valuable later, but broadening too early increases ambiguity and slows core validation.
