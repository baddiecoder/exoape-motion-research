# Phase 5 — Decompiled Module Map (Role Mapping)

This map uses direct bundle evidence + Wakaru-separated module observations.

## Role mapping table

| Role | Primary source(s) | Recovered module clues | Confidence |
|---|---|---|---|
| ScrollEngine | `a4c5813.js`, `e3cea04.js`, `e36d691.js` | `scrollTl`, `progress(...)`, wheel/deltaY handlers, bounds math | exact |
| TimelineRegistry | `a4c5813.js`, `e3cea04.js`, `d5d162b.js` | repeated `setAnimation()` + per-section paused timeline creation | observed |
| PageTransitionEngine | `e36d691.js` (home/studio) | enter/leave fromTo, clipPath transitions, loading lock toggles | exact |
| LoaderEngine | `e36d691.js`, shared bundles | `is-loading` add/remove + delayed unlock behavior | exact |
| Nav/Menu | `d5d162b.js` | burger/icon/menu timelines (`module-288.js` cluster) | observed |
| TextMask/SplitText | `a4c5813.js`, `e3cea04.js`, `e36d691.js` | `classList.add("text-mask")`, title/text line reveal timelines | exact |
| HeroSection | `e3cea04.js` | sticky threshold transitions + title/media timeline groups | observed |
| StudioSection | `a4c5813.js` | multi-section scrollTl groups + marquee + clipPath image modules | exact |
| Storyblok/RichText/SEO | shared runtime chunks | route/content integration appears in shared modules, not isolated here | inferred |
| Utility/helper | all targets | bounds/progress helpers, event subscriptions, class toggles | exact |

## Dedicated `a4c5813.js` subsection

### What modules/components it appears to contain
- **exact**: multiple section animation modules with local `setAnimation()` and `onRaf`.
- **exact**: text-mask helper wrapper insertion module.
- **exact**: marquee module (`marqueeTl`) and several image/grid/parallax modules.
- **observed**: section boundaries are substantially clearer after Wakaru split (e.g., concentrated logic in `module-476.js` and `module-605.js`).

### Evidence confirming `scrollTl` + progress behavior
- **exact**: `this.scrollTl = ...timeline({ paused: true })` appears in separated modules.
- **exact**: `this.scrollTl.progress(this.progress)` appears in separated modules.
- **exact**: scroll timelines use transform/opacity/clipPath properties and linear easing for progress-coupled motion.

### Did decompilation improve understanding?
- **exact**: yes; module boundaries and repeated patterns are more discoverable.
- **observed**: still minified naming remains, but semantic clusters are much easier to isolate.

### Should `a4c5813.js` influence prototype architecture?
- **exact**: yes — it strongly supports a section-based paused timeline registry + shared scroll engine design.
