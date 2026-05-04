# Phase 5 — Constrained Decompiler Report

## Tooling policy followed
- Ran Wakaru **per target file** (not whole folders).
- Did **not** commit generated unpacked output.
- Removed generated decompile outputs before commit to keep diffs small.
- Webcrack fallback was **not used** because Wakaru succeeded on all targets.

## Wakaru commands attempted

Used this command shape for each file:

- `npx -y @wakaru/cli unpacker <target-file> -o work/decompiled/_wakaru_tmp/<name>-unpack -f`

### Attempt summary table

| target | status | output size (bytes) | output file count | module boundaries improved? |
|---|---:|---:|---:|---|
| `references/exoape-studio/a4c5813.js` | success | 99,559 | 37 | yes |
| `references/exoape-home/e3cea04.js` | success | 78,514 | 28 | yes |
| `references/exoape-home/e36d691.js` | success | 26,523 | 12 | yes |
| `references/exoape-studio/e36d691.js` | success | 26,523 | 12 | yes |
| `references/exoape-home/d5d162b.js` | success | 159,004 | 62 | yes |

## What became clearer after Wakaru

### `a4c5813.js`
- **exact**: `scrollTl` modules became easier to isolate into module files (`module-476.js`, `module-605.js`).
- **exact**: `marqueeTl` and multiple section-specific `setAnimation()` blocks are more separable.
- **exact**: `window:raf` subscription points are easier to enumerate.
- **motion systems clarified**: scroll section, parallax/image, text reveal, studio section orchestration.

### `e3cea04.js`
- **exact**: home sections split into readable modules (`module-476.js`, `module-607.js`).
- **exact**: multiple paused `scrollTl` timelines and inverse progress usage are clearer.
- **motion systems clarified**: hero intro/state threshold animation, multi-section scroll parallax, text-mask behavior.

### `e36d691.js` (home/studio)
- **exact**: transition, loader-state toggles, wheel handling, and scroll container logic are recovered in compact modules (`module-461/464/465/479`).
- **motion systems clarified**: page transition, loader lock, scroll engine core, touch fallback path.

### `d5d162b.js`
- **observed**: large but useful split with many nav/menu/event modules surfaced (e.g., `module-288.js`).
- **exact**: burger/nav/icon timeline clusters are far easier to inspect than in raw bundle.
- **motion systems clarified**: nav/menu open-close, route-state nav transitions, shared UI timeline orchestration.

## Output retention decision

- **decision**: do **not** commit Wakaru outputs now.
- **reason (exact)**: generated code is machine output, still sizable/noisy, and not required for current analysis deliverable.
- **reason (observed)**: value is primarily directional (module boundary recovery), better consumed in later focused extraction/humanify.

## Cleanup

- Deleted `work/decompiled/_wakaru_tmp/` before commit.
