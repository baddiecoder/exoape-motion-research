# Environment Check (Phase 1 — Manifest-only)

- Date (UTC): 2026-04-25
- Mode: Phase 1 inventory only (no decompile/build)
- Scope respected: no changes under `/references`
- Output constraint: only small analysis artifacts and one manifest file

## Verification snapshot

- **exact**: `references/exoape-studio/a4c5813.js` exists in the workspace.
- **exact**: `references/exoape-studio/Studio.txt` contains references to `/_nuxt/a4c5813.js` (preload and script tags).
- **observed**: Exoape Studio capture appears Nuxt-generated from `_nuxt` chunk naming and static state script patterns.
- **unknown**: original unbundled source tree and component boundaries.
