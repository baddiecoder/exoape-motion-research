# Phase 6 — Timeline to Component/Composable Map

| area | source file(s) | observed selectors/classes | driver | proposed component/composable | confidence |
|---|---|---|---|---|---|
| app shell | `references/exoape-home/index.txt`, `references/exoape-studio/Studio.txt`, shared JS chunks | `.app`, `html/body fixed` | state | `AppShell.vue` + `useViewport` | exact |
| overlay | `references/exoape-studio/e36d691.js`, HTML/CSS captures | `.overlay`, clipPath transitions | route | `OverlayWipe.vue` + `PageTransitionEngine` | exact |
| scroll container | `references/exoape-studio/e36d691.js`, `references/exoape-home/e3cea04.js` | `.scroll`, wheel/deltaY/touch flow | scroll | `useScrollEngine` + `ScrollEngine.ts` | exact |
| page scene | Exoape HTML/CSS + transition JS | `.page` | route/state | `PageScene.vue` + `StateMachine` | observed |
| hero (home) | `references/exoape-home/e3cea04.js` | `.title-line`, sticky classes, text masks | intro/scroll/state | `ExoHero.vue` + `useSectionProgress` | exact |
| studio hero | `references/exoape-studio/a4c5813.js` | line reveals + section scrollTl blocks | intro/scroll | `ExoStudioHero.vue` + `TimelineRegistry` | exact |
| text reveal | `a4c5813.js`, `e3cea04.js`, `e36d691.js` | `.text-mask`, `.text-line`, `.title-line` | intro/state | `BaseText.vue` + `useTextSplit` | exact |
| parallax/image | `a4c5813.js`, `e3cea04.js` | image refs with scale/y/clipPath | scroll | `ImageParallaxSection.vue` + `useSectionProgress` | exact |
| nav/menu | `references/exoape-home/d5d162b.js`, shell styles | `.menu-button`, nav classes (`is-light`, etc.) | click/state/route | `SiteNav.vue` + `SiteBurger.vue` + `NavMenuEngine` | observed |
| loader/preloader | `references/exoape-studio/e36d691.js`, shell CSS | `is-loading`, `.preloader`, `.mask`, `.filler` | intro/route/state | `LoaderFill.vue` + `LoaderEngine` | exact |
| cursor (optional) | shared/home chunk references | cursor classes/store hints | hover/state | `useCursor` + optional `CursorLayer.vue` | observed |

## Notes
- `a4c5813.js` is the strongest studio timeline map source (exact).
- `d5d162b.js` is the highest-value shared nav/menu orchestration source (observed).
