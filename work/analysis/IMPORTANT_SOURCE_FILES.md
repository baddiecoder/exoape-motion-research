# IMPORTANT_SOURCE_FILES

Ranked high-value files for next source review.

## 1) `references/exoape-studio/a4c5813.js`
- **Why it matters**: studio-specific motion core; densest section timeline evidence.
- **Key patterns found**: paused `scrollTl`, `progress(...)` driving, `marqueeTl`, `window:raf`, text-mask insertion.
- **Relevant modules/components (if known)**: Wakaru-separated clusters (notably modules mapped around former `module-476`/`module-605` regions).
- **Questions it may answer**: exact section orchestration, progress direction rules, studio-specific timeline sequencing.
- **Did decompile help?** yes (module boundaries improved).
- **Humanify recommended?** yes (targeted, high priority).

## 2) `references/exoape-home/e3cea04.js`
- **Why it matters**: primary home route behavior and section timelines.
- **Key patterns found**: sticky/title reveal, paused scroll timelines, text-mask flow, multiple RAF-linked sections.
- **Relevant modules/components**: Wakaru-recovered clusters around home hero/project/media logic.
- **Questions it may answer**: home-specific timeline grouping and threshold-based state behavior.
- **Did decompile help?** yes.
- **Humanify recommended?** yes (targeted).

## 3) `references/exoape-home/e36d691.js`
- **Why it matters**: compact shared transition/scroll orchestration file.
- **Key patterns found**: clipPath transitions, `is-loading` toggles, touch/wheel paths, RAF subscription lifecycle.
- **Relevant modules/components**: transition/scroll core slices from constrained unpack.
- **Questions it may answer**: transition start/swap/end ordering and loading lock semantics.
- **Did decompile help?** yes (strong signal gain).
- **Humanify recommended?** yes (high ROI).

## 4) `references/exoape-studio/e36d691.js`
- **Why it matters**: parity check vs home shared runtime behavior.
- **Key patterns found**: same transition/loader/scroll constructs as home copy.
- **Relevant modules/components**: transition/scroll core slices.
- **Questions it may answer**: studio-specific deviations (if any) from shared flow.
- **Did decompile help?** yes (verification utility).
- **Humanify recommended?** conditional (after home e36d691 target).

## 5) `references/exoape-home/d5d162b.js` (shared high-value chunk)
- **Why it matters**: nav/menu/open-close/current-state timeline clusters and shared UI logic.
- **Key patterns found**: multiple timelines, menu/icon transitions, RAF-linked UI behaviors.
- **Relevant modules/components**: constrained-unpack clusters identified in prior report.
- **Questions it may answer**: exact nav/menu choreography and UI-state coupling under transition conditions.
- **Did decompile help?** yes (module splits helpful).
- **Humanify recommended?** yes (narrow, menu-focused).

## 6) `references/exoape-studio/d5d162b.js` (shared counterpart)
- **Why it matters**: cross-route validation of shared chunk behavior.
- **Key patterns found**: similar shared shell/UI/state structures.
- **Questions it may answer**: whether shared chunk differs materially between home/studio captures.
- **Did decompile help?** partial (less prioritized than home copy).
- **Humanify recommended?** optional follow-up.
