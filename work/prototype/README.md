# Exoape Engine-only Nuxt Prototype Spike (Phase 7)

## Overview
This is a **minimal Nuxt 3 + TypeScript + GSAP** engine-only spike that validates core Exoape home/studio motion architecture from the analysis artifacts.

Implemented scope:
- fixed app shell
- overlay layer
- scroll/camera layer
- page/scene layer
- manual RAF loop
- manual section progress calculation
- paused timeline registry
- one Exoape-style hero section
- one Studio-style scroll section
- masked text reveal
- image parallax (transform/opacity only)
- loader fill
- basic menu open/close
- dev-only debug panel

## Install
```bash
cd work/prototype
npm install
```

## Run (dev)
```bash
cd work/prototype
npm run dev
```

## Build
```bash
cd work/prototype
npm run build
```

## Intentionally not implemented
- full site rebuild
- real CMS/content integrations
- Pixelflakes/Ottografie pages
- production asset pipeline
- exact brand fonts/images (placeholders only)
- ScrollTrigger-based logic

## Event ordering

### RAF tick order
1. update global scroll state (`ScrollEngine.tick`)
2. apply scene transform (`page-scene` camera translation)
3. compute section progress using:
   - `progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1)`
4. drive paused section timelines via `timeline.progress(progress)`

### Page transition order
1. transition start (`transitioning = true`)
2. overlay wipe enter
3. swap/settle phase (engine-only placeholder in this spike)
4. overlay wipe exit
5. transition end (`transitioning = false`)

### Loader lock/unlock order
1. set loading lock (`is-loading` equivalent state true)
2. run loader fill animation
3. run transition pulse
4. clear loading lock

## Analysis artifacts informing architecture
- `work/analysis/exoape-engine-contract.md`
- `work/analysis/prototype-scope.md`
- `work/analysis/timeline-to-component-map.md`
- `work/analysis/transition-loader-truth-table.md`
- `work/analysis/exoape-studio-deep-dive.md`
- `work/analysis/exoape-home-deep-dive.md`

## Environment notes (this run)

### Install attempt
- Command: `cd work/prototype && npm install`
- Result: **success** (packages installed).
- Notes: engine warnings about Node version for one optional package were reported, but install completed.

### Build attempt
- Command: `cd work/prototype && npm run build`
- Result: **success**.
- Notes: an initial build failed due `import.meta` usage directly in template (`DebugPanel.vue`), then fixed by moving it into `<script setup>` (`const isDev = import.meta.dev`) and rerunning successfully.
