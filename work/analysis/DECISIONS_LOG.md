# DECISIONS_LOG

Concise architecture/process decisions for this project.

| Decision | Status | Rationale | Evidence / related file | Revisit condition |
|---|---|---|---|---|
| Keep `/references` immutable | accepted | preserve clean-room boundary and source integrity | `AGENTS.md` | only if project policy changes explicitly |
| Avoid copying large source artifacts into `/work` | accepted | reduce noise, legal/process risk, and diff bloat | `AGENTS.md`, `decompiler-report.md` | only for tiny, justified snippets |
| Use manifest-only inventory early | accepted | fast, low-risk baseline before heavier analysis | `work/normalized/manifest.json`, `file-inventory.md` | if multi-site manifest schema expands |
| Prioritize Exoape home/studio first | accepted | highest relevance to target engine architecture | `exoape-shared-engine.md`, `NEXT_CHAT_HANDOFF.md` | after Exoape core is validated |
| Defer broad Humanify | accepted | constrained decompile showed targeted naming is higher ROI | `decompile-next-actions.md`, `HUMANIFY_TARGETS.md` | if targeted Humanify no longer resolves key unknowns |
| Use constrained per-file decompile only | accepted | avoids huge noisy outputs and keeps scope tractable | `decompiler-report.md`, `decompile-targets.md` | if targeted files become insufficient |
| Build engine-only prototype before full visual parity | accepted | validates architecture early with manageable scope | `prototype-scope.md`, `work/prototype/README.md` | once engine contract is proven stable |
| Do not use ScrollTrigger for core logic | accepted | evidence supports manual progress + paused timelines model | `exoape-engine-contract.md`, `scroll-engine.md` | only with new contrary source evidence |
| Use manual progress + paused timelines as rebuild model | accepted | repeatedly confirmed in home/studio source evidence | `timeline-catalog.json`, `js-behavior-inventory.md` | if source review disproves key assumptions |
| Postpone Pixelflakes/Ottografie implementation | accepted | avoid over-generalization before Exoape core is robust | `prototype-scope.md`, `READING_ORDER.md` | after Exoape engine passes validation checklist |
| Transition/menu sequencing still partially uncertain | provisional | strong clues exist, exact ordering still partially inferred | `transition-loader-truth-table.md`, `OPEN_QUESTIONS.md` | after targeted humanify + instrumentation |
| Commit generated decompile output only if small/useful | accepted | keeps repo clean and reviewable | `decompiler-report.md` | if a generated artifact becomes critical and concise |
