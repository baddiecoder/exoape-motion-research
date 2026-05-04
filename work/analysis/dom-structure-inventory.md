# Phase 2 — DOM Structure Inventory (HTML/CSS Evidence Only)

## exoape-home

- **root app structure**
  - **exact**: fixed viewport shell.
  - **exact snippet**: `html{...position:fixed...} ... .app{...position:fixed...}`.
- **fixed/scroll containers**
  - **exact**: `.scroll` is fixed and used as movement container.
  - **exact snippet**: `.scroll{bottom:0;left:0;position:fixed;right:0;top:0}`.
- **overlay/page/scroll layers**
  - **exact**: `.overlay` and `.page` are absolute layers; `.overlay` is `height:150vh`.
- **grid systems**
  - **observed**: section-specific grid usage (`grid-template-columns:repeat(10,1fr)` and desktop overrides).
- **mask classes**
  - **exact**: `.text-mask,.title-mask{overflow:hidden}` and transformed line children.
- **loader/preloader classes**
  - **exact**: `.preloader`, `.mask`, `.filler`, `.background`, `.icon`.
- **nav/menu/burger classes**
  - **exact**: `.menu-button` component class appears in CSS.

## exoape-studio

- **root app structure**
  - **exact**: same fixed shell pattern as home (`html/body fixed` + `.app fixed`).
- **fixed/scroll containers**
  - **exact**: fixed `.scroll` layer with touch/loading modifiers.
- **overlay/page/scroll layers**
  - **exact**: `.overlay,.page` absolute layering and oversized overlay plane.
- **grid systems**
  - **exact**: `.images{display:grid;grid-template-columns:repeat(10,1fr)}` with desktop `repeat(12,1fr)`.
- **mask classes**
  - **exact**: `.text-mask`, `.title-mask`, `.text-line`, `.title-line`.
- **loader/preloader classes**
  - **exact**: `.preloader`, `.mask`, `.filler` present with fill-from-bottom behavior.
- **nav/menu/burger classes**
  - **exact**: `.menu-button` with icon/label substructure appears in HTML/CSS.
- **special check**
  - **exact**: Studio chunk listings include `a4c5813.js` (both preload/script references and captured file list).

## pixelflakes

- **root app structure**
  - **exact**: `body,html` fixed while an internal `.wrapper` scrolls.
  - **exact snippet**: `.wrapper{...position:fixed;...overflow-y:auto...}`.
- **fixed/scroll containers**
  - **exact**: scroll behavior moved to `.wrapper` rather than root document.
- **overlay/page/scroll layers**
  - **observed**: layered UI/navigation present, but naming differs from Exoape `.overlay/.page/.scroll` trio.
- **grid systems**
  - **exact**: mobile `repeat(6,1fr)` and desktop `repeat(12,1fr)` patterns appear.
- **mask classes**
  - **observed**: mask-like reveal patterns exist, but class names are less globally standardized than Exoape.
- **loader/preloader classes**
  - **unknown**: explicit standalone preloader class family is not as directly evident in the sampled CSS snippets.
- **nav/menu/burger classes**
  - **exact**: `.burger`, `.shape`, `.icon`, `.line`, and `.nav` class families appear.

## ottografie

- **root app structure**
  - **exact**: `.app{...position:fixed;inset:0...}` with fixed-shell composition.
- **fixed/scroll containers**
  - **observed**: fixed shell is explicit; active content-motion container naming is less direct from CSS alone.
- **overlay/page/scroll layers**
  - **observed**: layered UI exists, but full role mapping requires JS behavior pass.
- **grid systems**
  - **exact**: `.grid` uses `repeat(6,1fr)` mobile and `repeat(12,1fr)` desktop.
- **mask classes**
  - **exact**: loader-adjacent mask/fill classes are visible in compiled CSS/HTML.
- **loader/preloader classes**
  - **exact**: `.preloader`, `.mask`, `.filler`, `.background`, `.icon` family appears.
- **nav/menu/burger classes**
  - **observed**: navigation UI is present but differs from simple static navbar conventions.
