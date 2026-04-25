# Phase 3 — State Machine Notes (Direct JS Evidence)

## Exoape Studio

- **exact states/classes observed**
  - `is-loading` (added/removed around transition enter/leave)
  - `is-touch` (set when touch mode detected)
  - `is-sticky` (section stickiness toggles)
- **exact event channels observed**
  - `window:raf`
  - `window:resize`
  - `scroll:enter` / `scroll:leave` / `scroll:disable`
- **observed state flow**
  - route/transition start -> `is-loading` on -> transition timeline -> delayed clear of `is-loading`
  - mount -> register RAF+resize+scroll listeners -> unmount -> remove listeners

## Exoape Home

- **exact states/classes observed**
  - sticky toggles (`is-sticky`)
  - mask class injection (`text-mask`)
  - current-state class checks in nav/footer-related logic (`is-current` appears in shared bundles)
- **observed state flow**
  - scroll threshold crossing toggles sticky mode and visibility timelines
  - per-section hidden/visible flags gate `autoAlpha` animations

## Pixelflakes

- **exact states/classes observed**
  - `is-light` class binding in render/component state
  - wheel/touch prevent and class checks in smooth-scroll handling (`classList.contains("lenis")` path)
- **observed state flow**
  - input events -> scroll engine emits deltas -> animated scroll updates -> RAF tick update

## Ottografie

- **exact store-like app state keys observed**
  - `loader`, `loading`, `cursor`, `navigation`, `navigationActive`, `category`, `gallery`, `galleryInstructions`, `transition`, `isTouch`
- **exact class mutation helpers observed**
  - reusable class add/remove wrappers (`classList.add/remove` over token lists)
- **observed state flow**
  - central app store controls feature domains (cursor/nav/gallery/loader)
  - route groups (`.../gallery`, `.../player`) imply route-state driven UI modes

## Confidence split

- **exact**: class toggles, event channels, and store keys listed above exist directly in JS.
- **observed**: transition and scroll state sequencing inferred from nearby call structure.
- **inferred**: cross-site pattern approximates event-bus + store + paused-timeline orchestration.
- **unknown**: full deterministic state chart per route/component without decompiled module boundaries.
