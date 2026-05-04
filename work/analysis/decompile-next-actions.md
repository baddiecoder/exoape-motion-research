# Phase 5 — Decompile Next Actions

## Immediate recommendation

**Recommended path:** **humanify selected output** (from constrained Wakaru artifacts), then proceed to architecture mapping updates.

## Why
- **exact**: Wakaru already improved module boundaries for all priority targets.
- **observed**: further raw decompile without naming recovery gives diminishing readability returns.
- **inferred**: targeted humanification of recovered modules will produce the highest signal for engine extraction.

## Proposed next step sequence

1. **Focus set for naming recovery (P1)**
   - `a4c5813` recovered modules with `scrollTl/marquee/window:raf`
   - `e3cea04` recovered modules with hero/project/media scroll clusters
   - `e36d691` recovered modules with transition/loader/scroll core
2. **Extract canonical interfaces** into analysis docs:
   - ScrollEngine API sketch
   - TimelineRegistry API sketch
   - PageTransitionEngine/LoaderEngine state transitions
3. **Add one new synthesis artifact**
   - `work/analysis/exoape-engine-contract.md` mapping recovered modules to clean Nuxt composables/engines.

## Alternative choices evaluated

- **decompile more**: possible, but lower immediate ROI before naming pass.
- **skip decompilation and proceed directly to build**: not recommended yet; still too much naming ambiguity.
- **build engine-only prototype now**: viable after one focused humanify pass on the recovered P1 modules.

## Final recommendation (required)

- **primary**: **humanify selected output**.
- **secondary**: then **proceed to architecture mapping** and engine contract extraction.
- **prototype timing**: start engine-only prototype immediately after that focused humanify/mapping checkpoint.
