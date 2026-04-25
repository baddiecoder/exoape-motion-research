# File Inventory (Phase 1 — Manifest-only)

## Site: exoape-studio

### Actual files present (`references/exoape-studio/`)

- `Studio.txt` (main captured HTML document)
- `STUDIOstate.js` (captured state payload)
- `a4c5813.js`
- `b3e170f.js`
- `b6072a7.js`
- `d5d162b.js`
- `e36d691.js`
- `e38e8c5.js`
- `2` (unknown binary/text artifact)

### JS referenced by `Studio.txt`

- `/_nuxt/b3e170f.js`
- `/_nuxt/a4c5813.js`
- `/_nuxt/e36d691.js`
- `/_nuxt/b6072a7.js`
- `/_nuxt/e38e8c5.js`
- `/_nuxt/d5d162b.js`
- `/_nuxt/static/1776956709/studio/state.js`

### Inventory findings

- **exact**: `a4c5813.js` is both present on disk and referenced in `Studio.txt`.
- **exact**: HTML references one state script (`/_nuxt/static/1776956709/studio/state.js`) while local capture stores `STUDIOstate.js`.
- **observed**: chunk naming and `_nuxt` paths indicate a Nuxt production build capture.
- **unknown**: mapping between captured `STUDIOstate.js` and exact original URL path normalization.
