# READING_ORDER

## Must read first

1. `work/analysis/NEXT_CHAT_HANDOFF.md`
- **Why**: fast project context and current status.
- **Answers**: what is done, what matters next.

2. `work/analysis/exoape-engine-contract.md`
- **Why**: defines the intended clean engine API.
- **Answers**: what components/engines must exist and why.

3. `work/analysis/prototype-scope.md`
- **Why**: scope boundary for engine-only spike.
- **Answers**: what is in/out for immediate implementation.

## Read for Exoape architecture

4. `work/analysis/exoape-home-deep-dive.md`
- **Why**: home-specific architecture and timeline behavior.
- **Answers**: shell/layer/scroll/timeline patterns on home route.

5. `work/analysis/exoape-studio-deep-dive.md`
- **Why**: studio-specific behavior and `a4c5813.js` focus.
- **Answers**: why studio is denser and what must be replicated.

6. `work/analysis/exoape-shared-engine.md`
- **Why**: synthesis of shared primitives across home/studio.
- **Answers**: what can be built once and reused.

## Read for JS behavior

7. `work/analysis/js-behavior-inventory.md`
- **Why**: broad behavior extraction from raw JS.
- **Answers**: GSAP/RAF/state/scroll evidence by site.

8. `work/analysis/scroll-engine.md`
- **Why**: direct scroll architecture notes.
- **Answers**: progress formulas, input paths, RAF coupling.

9. `work/analysis/state-machine.md`
- **Why**: class/store/event behavior notes.
- **Answers**: state transitions and event channels observed.

10. `work/analysis/timeline-catalog.json`
- **Why**: machine-readable timeline evidence map.
- **Answers**: timeline ids, sources, triggers, confidence.

## Read for decompile findings

11. `work/analysis/decompile-targets.md`
- **Why**: prioritization of constrained decompile targets.
- **Answers**: which files are highest ROI and why.

12. `work/analysis/decompiler-report.md`
- **Why**: Wakaru attempt results and retention decisions.
- **Answers**: what improved, what stayed noisy.

13. `work/analysis/decompiled-module-map.md`
- **Why**: module-role mapping into clean architecture.
- **Answers**: where to map recovered modules in the rebuild.

14. `work/analysis/decompile-next-actions.md`
- **Why**: recommended next action sequence.
- **Answers**: decompile more vs humanify vs architecture-forward.

## Read for prototype implementation

15. `work/prototype/README.md`
- **Why**: run/build instructions and event ordering.
- **Answers**: what is implemented now and how to validate.

16. `work/analysis/timeline-to-component-map.md`
- **Why**: bridge from evidence to component/composable design.
- **Answers**: which behaviors map to which prototype pieces.

17. `work/analysis/transition-loader-truth-table.md`
- **Why**: sequencing table for transition/loader/menu/scroll events.
- **Answers**: expected event ordering and confidence.

## Optional Pixelflakes/Ottografie context

18. `work/analysis/css-token-inventory.md`
- **Why**: cross-site token/style context.
- **Answers**: similarities and differences in token systems.

19. `work/analysis/dom-structure-inventory.md`
- **Why**: cross-site DOM/layer scaffolding context.
- **Answers**: how far Exoape patterns generalize.

20. `work/analysis/selector-inventory.md`
- **Why**: selector/state class inventory across captures.
- **Answers**: class-level overlap and divergence.
