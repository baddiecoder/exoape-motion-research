# OPEN_QUESTIONS

## Scroll engine

### Q1: Exact smoothing/interpolation constants across all Exoape sections?
- **Current best answer**: manual progress + smoothing exists; exact constants vary by module and are only partially extracted.
- **Evidence**: `work/analysis/scroll-engine.md`, `references/exoape-studio/a4c5813.js`, `references/exoape-home/e3cea04.js`.
- **Confidence**: observed.
- **Next action**: focused humanify on P1 modules to extract constants and normalize into token config.

### Q2: When is inverse progress used vs forward progress?
- **Current best answer**: both are used (`progress(...)` and `progress(-progress)` patterns observed).
- **Evidence**: `work/analysis/timeline-catalog.json`, `work/analysis/scroll-engine.md`.
- **Confidence**: exact.
- **Next action**: annotate section-by-section expected direction in a progress map doc.

## Page transitions

### Q3: Precise route swap point relative to overlay enter/exit?
- **Current best answer**: overlay transition wraps swap; exact midpoint ordering still inferred.
- **Evidence**: `work/analysis/transition-loader-truth-table.md`, `work/analysis/exoape-studio-deep-dive.md`.
- **Confidence**: inferred.
- **Next action**: instrument prototype with transition event logs to validate start/swap/end timing.

## Loader

### Q4: Full loader completion criteria (assets vs route-ready vs timeout)?
- **Current best answer**: loading lock is explicit, but complete readiness contract is not fully recovered.
- **Evidence**: `work/analysis/state-machine.md`, `work/analysis/exoape-engine-contract.md`.
- **Confidence**: observed.
- **Next action**: define explicit loader contract in prototype and test fallback paths.

## Nav/menu

### Q5: Exact open/close timeline choreography and coupling with transition state?
- **Current best answer**: clear evidence of nav/menu timelines in shared chunk, but full choreography remains partially opaque.
- **Evidence**: `work/analysis/decompiled-module-map.md`, `work/analysis/decompiler-report.md`.
- **Confidence**: observed.
- **Next action**: focused humanify of shared nav modules; add timeline snapshot assertions in prototype.

## Text splitting

### Q6: Line/word/char split policy by section and resize behavior?
- **Current best answer**: mask+line model is proven; full split strategy matrix is unknown.
- **Evidence**: `work/analysis/js-behavior-inventory.md`, `work/analysis/exoape-home-deep-dive.md`.
- **Confidence**: observed/unknown.
- **Next action**: document per-section split expectations and implement deterministic resplit tests.

## Route lifecycle

### Q7: Event bus ordering under rapid route changes and cancellation?
- **Current best answer**: bus channels are known (`window:raf`, scroll/resize), cancellation behavior not fully proven.
- **Evidence**: `work/analysis/state-machine.md`, `work/analysis/transition-loader-truth-table.md`.
- **Confidence**: inferred.
- **Next action**: add transition cancellation scenario in prototype logs and verify state reset.

## Mobile/touch behavior

### Q8: Complete touch fallback parity vs desktop path?
- **Current best answer**: touch mode class toggles and alternate handling are proven; parity details are incomplete.
- **Evidence**: `work/analysis/scroll-engine.md`, `work/analysis/state-machine.md`.
- **Confidence**: observed.
- **Next action**: add mobile simulation checklist and verify touch-specific paths in spike.

## Decompile/humanify needs

### Q9: Is more raw decompile needed before coding continues?
- **Current best answer**: constrained decompile already improved boundaries; next ROI is selective humanify, not broader unpack.
- **Evidence**: `work/analysis/decompiler-report.md`, `work/analysis/decompile-next-actions.md`.
- **Confidence**: observed.
- **Next action**: humanify only top-priority modules (`a4c5813`, `e3cea04`, `e36d691`, shared nav slice).

## Prototype gaps

### Q10: What key gaps remain in engine-only prototype?
- **Current best answer**: needs stronger transition/menu sequencing guarantees, explicit class sync, and contract-level checks.
- **Evidence**: `work/prototype/README.md`, `work/analysis/exoape-engine-contract.md`, `work/analysis/prototype-scope.md`.
- **Confidence**: observed.
- **Next action**: add dev event logger + minimal contract tests + one inverse-progress section variant.
