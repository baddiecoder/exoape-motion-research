# Phase 2 — Selector Inventory (HTML/CSS Evidence Only)

## Shared evidence snippets (exact)

- Exoape shell/layers:
  - `.app{bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0}`
  - `.overlay,.page{left:0;position:absolute;right:0;top:0;z-index:1}`
  - `.overlay{...height:150vh...}`
  - `.scroll{bottom:0;left:0;position:fixed;right:0;top:0}`
- Exoape scroll state selectors:
  - `.is-touch .scroll{overflow:hidden;overflow-y:scroll}`
  - `.is-loading .scroll{overflow:hidden}`
- Exoape text-mask selectors:
  - `.text-mask,.title-mask{overflow:hidden}`
  - `.text-line,.title-line{transform-origin:top left}`
- Exoape loader selectors:
  - `.preloader{...position:fixed...}`
  - `.mask{...}`
  - `.filler{...transform:scaleY(0);transform-origin:center bottom...}`

## Site-specific selector groups

### exoape-home
- **exact**: `.app`, `.page`, `.overlay`, `.scroll`, `.menu-button`, `.preloader`, `.text-mask`, `.title-mask`, `.text-line`, `.title-line`.
- **exact**: state selectors include `.is-touch`, `.is-loading`, `.is-current`, `.is-light`, `.is-light-grey`, `.is-sand`.

### exoape-studio
- **exact**: same core shell/mask/loader/menu selectors as home; plus studio section grid selectors (e.g., `.images`).
- **exact**: `a4c5813.js` is included in Studio chunk references and file set.

### pixelflakes
- **exact**: `.wrapper`, `.nav`, `.burger`, `.shape`, `.icon`, `.line`.
- **exact**: state selectors include `.is-light`, `.is-menu`, `.is-dark`.
- **observed**: selector model aligns with Exoape motion conventions but with different naming and editorial layout emphasis.

### ottografie
- **exact**: `.app`, `.grid`, `.preloader`, `.mask`, `.filler`, `.background`, `.icon` present in captured HTML/CSS.
- **observed**: navigation selectors indicate dynamic UI structure beyond a basic static nav.
- **unknown**: full selector-state machine relationships without JS behavior extraction.

## Classification summary

- **exact**: all selectors listed above are directly visible in captured HTML/CSS artifacts.
- **observed**: role interpretations (e.g., dynamic nav behavior) are supported by structure but not fully proven by CSS alone.
- **inferred**: cross-site architectural continuity of fixed-shell + layered motion is likely intentional.
- **unknown**: runtime-only class toggles controlled by JS that are not explicitly emitted in static CSS slices.
