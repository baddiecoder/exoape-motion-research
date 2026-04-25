# Phase 2 — CSS Token Inventory (HTML/CSS Evidence Only)

Scope: evidence extracted from captured HTML/CSS only. No decompilation, no build, no `/references` edits.

## exoape-home

- **framework clues**
  - **exact**: Vue scoped-style ids are present (`data-v-*`) and Nuxt asset paths are present (`/_nuxt/...`).
- **typography variables**
  - **exact**: `--font-f-lausanne-300`, `--font-f-lausanne-400`, `--font-f-lausanne-500`.
  - **exact snippet**: `--font-f-lausanne-300:"Lausanne-300";...--font-s-h0:25.6vw`.
- **color variables**
  - **exact**: `--color-white`, `--color-dark-grey`, `--color-light-grey`, `--color-sand` and alpha variants.
  - **exact snippet**: `:root{--color-white:#fff;...--color-dark-grey:#0d0e13;...--color-sand:#e0ccbb`.
- **breakpoints**
  - **exact**: primary breakpoint at `@media(min-width:601px)`.
- **state classes visible in CSS**
  - **exact**: `.is-touch`, `.is-loading`, `.is-current`, `.is-light`, `.is-light-grey`, `.is-sand`.
  - **exact snippet**: `.is-touch .scroll{overflow:hidden;overflow-y:scroll}.is-loading .scroll{overflow:hidden}`.
- **inferred**: token model is shared across Exoape home/studio via near-identical variable names.

## exoape-studio

- **framework clues**
  - **exact**: Nuxt chunk paths and Vue `data-v-*` scoped selectors in captured CSS.
- **typography variables**
  - **exact**: Lausanne token family and responsive size tokens.
- **color variables**
  - **exact**: same Exoape color token family as home (`--color-dark-grey`, `--color-light-grey`, etc.).
- **breakpoints**
  - **exact**: `@media(min-width:601px)` used repeatedly for desktop overrides.
- **state classes visible in CSS**
  - **exact**: `.is-touch`, `.is-loading`, `.is-current`, `.is-light`, `.is-light-grey`, `.is-sand`.
- **special check (Studio JS list)**
  - **exact**: Studio JS chunks include `a4c5813.js` in preload/script references and local chunk set.
  - **exact snippet**: `.../ _nuxt/a4c5813.js...` (preload and script references in `Studio.txt`).

## pixelflakes

- **framework clues**
  - **exact**: Nuxt-style `/_nuxt/` assets and Vue scoped selectors (`data-v-*`).
- **typography variables**
  - **exact**: `--font-f-at-hauss-std`, `--font-f-at-hauss-std-retina`.
- **color variables**
  - **exact**: `--color-black`, `--color-sand`, `--color-grey-dark` families.
- **breakpoints**
  - **exact**: `@media(min-width:601px)` desktop breakpoint and max-width mobile clauses.
- **state classes visible in CSS**
  - **exact**: `.is-light`, `.is-menu`, `.is-dark`.
  - **exact snippet**: `.is-light .nav..., .is-menu .nav...` and `.is-dark .shape...`.
- **observed**: token system differs from Exoape Lausanne set but keeps similar responsive token structure.

## ottografie

- **framework clues**
  - **exact**: compiled CSS uses Vue-scoped selectors and hashed CSS asset filenames.
- **typography variables**
  - **exact**: `--font-f-big-caslon`, `--font-f-suisse`.
- **color variables**
  - **exact**: `--color-pampas`, `--color-cod-gray`, `--color-dark-gray`, `--color-black`.
- **breakpoints**
  - **exact**: `@media (max-width:600px)` and `@media (min-width:601px)`.
- **state classes visible in CSS**
  - **observed**: fewer global state-class toggles are directly visible in CSS compared with Exoape/Pixelflakes captures.
- **unknown**: full runtime state toggles that may be applied primarily from JS at interaction time.
