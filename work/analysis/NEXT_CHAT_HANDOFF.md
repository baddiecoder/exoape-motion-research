# NEXT_CHAT_HANDOFF

## Project goal
Reverse-engineer Exoape-style motion architecture from captured production artifacts and build a clean-room Nuxt 3/TypeScript/GSAP implementation (behavior-compatible, not source-clone).

## Repo structure (high-level)
- `references/` → captured source artifacts (read-only).
- `work/analysis/` → all findings, inventories, deep-dives, contracts, maps.
- `work/normalized/` → manifest-level normalized snapshot.
- `work/prototype/` → engine-only Nuxt spike (no full-site rebuild yet).

## Completed phases
- **Phase 1**: manifest-only inventory for Exoape studio.
- **Phase 2**: HTML/CSS evidence extraction (tokens, selectors, DOM/layers).
- **Phase 3**: JS behavior extraction (GSAP, RAF, state classes, scroll patterns).
- **Phase 4**: Exoape home/studio deep dive + shared engine synthesis.
- **Phase 5**: constrained Wakaru assessment per target file.
- **Phase 6**: engine contract + timeline/component map + transition/loader truth table + spike scope.
- **Phase 7**: engine-only Nuxt prototype implemented and built successfully.
- **Phase 8A (this commit)**: fresh review handoff package.

## Current branch/prototype status
- Current work reached engine-only spike in `work/prototype/**`.
- Prototype includes: fixed shell, overlay, manual RAF, manual section progress, paused timeline registry, hero + studio section, loader fill, basic menu, debug panel.
- `npm install` and `npm run build` were validated in prior phase.

## Most important findings
1. Exoape home/studio rely on **manual progress-driven paused GSAP timelines**, not ScrollTrigger core logic.
2. `window:raf`-style event bus patterns are central.
3. Layered shell architecture is stable: `app` + `page` + `overlay` + `scroll` + nav/UI.
4. Transition/loader lock behavior is class/state-driven (`is-loading`, touch/sticky/current variants).
5. Text reveal is mask/line based (`text-mask`, `title-line` patterns).

## Exoape home/studio architecture summary
- **Framework/runtime**: Nuxt/Vue + GSAP, SSR-hydrated capture.
- **Scroll model**: fixed viewport + custom input/RAF + normalized section progress.
- **Timeline model**: section-local paused timelines registered and advanced each frame.
- **Transition model**: overlay/clip/transform route transitions with loading lock semantics.
- **Shared engine**: common primitives across home + studio; studio has denser timeline clusters.

## What `a4c5813.js` is and why it matters
- Studio-specific Exoape chunk present in `references/exoape-studio/` and referenced in `Studio.txt`.
- Contains high-value studio behavior: repeated paused `scrollTl`, `progress(...)` driving, text reveal, marquee timeline, RAF subscriptions.
- It is the most important single file for understanding studio section orchestration and should drive architecture decisions.

## Proven vs inferred
- **Proven (exact/observed strong evidence)**
  - paused timelines + manual progress
  - RAF bus usage
  - scroll input/bounds/progress patterns
  - text-mask line reveal approach
  - loading/touch class toggles
- **Inferred (needs tighter confirmation)**
  - exact route swap timing under overlay transition
  - full nav/menu timeline choreography across all states
  - all mobile/touch edge-case branches

## What NOT to do next
- Do **not** modify `references/`.
- Do **not** attempt full-site parity yet.
- Do **not** expand to Pixelflakes/Ottografie implementation before stabilizing Exoape engine contracts.
- Do **not** introduce ScrollTrigger as core driver.

## Recommended next tasks
1. Review prototype against Phase 6 contract and truth table.
2. Add small contract validation checks (progress clamp, timeline lifecycle, ordering).
3. Run focused humanify on top-priority decompiled modules (`a4c5813`, `e3cea04`, `e36d691`, shared nav slice).
4. Harden transition/menu/loading event sequencing and touch behavior.
5. Only then consider Phase 7B/next expansion toward richer route behavior.
