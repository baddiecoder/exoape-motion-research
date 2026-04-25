# Phase 6 — Transition / Loader Truth Table

| state/event | class/store change | timeline action | affected layer | evidence | confidence |
|---|---|---|---|---|---|
| loading state ON | add `is-loading` | freeze/lock interactive scrolling; start transition/loader sequence | body + scroll + overlay | `references/exoape-studio/e36d691.js` | exact |
| loading state OFF | remove `is-loading` | complete transition and resume input | body + scroll | `references/exoape-studio/e36d691.js` | exact |
| initial intro | set intro-ready flags (local section state) | play intro line/image reveal timelines | page scene + hero layers | `references/exoape-home/e3cea04.js`, `references/exoape-studio/a4c5813.js` | observed |
| menu open | set menu-open state/class | play menu/nav open timeline(s), icon/label swaps | nav/UI layer (top) | `references/exoape-home/d5d162b.js` (Wakaru module map) | observed |
| menu close | unset menu-open state/class | reverse/close menu timeline(s) | nav/UI layer | `references/exoape-home/d5d162b.js` (Wakaru module map) | observed |
| page transition start | loading/transition state enters active | enter timeline begins (clip/transform) | overlay + page | `references/exoape-studio/e36d691.js` | exact |
| page transition swap | route/state advances to next view | overlay/transition in-flight while content swaps | overlay + page scene | `references/exoape-studio/e36d691.js`, deep-dive inference | inferred |
| page transition end | clear loading/transition active state | leave/settle timeline completes | overlay + page + scroll | `references/exoape-studio/e36d691.js` | exact/observed |
| scroll-driven section update | no global class necessarily changes; local progress updates | set paused timeline progress each frame (`scrollTl.progress`) | scroll + section visuals | `references/exoape-studio/a4c5813.js`, `references/exoape-home/e3cea04.js` | exact |

## Supplemental state rows

| state/event | class/store change | timeline action | affected layer | evidence | confidence |
|---|---|---|---|---|---|
| touch mode detected | add `is-touch` | switch interaction path (touch fallback) | body + scroll container | `references/exoape-studio/e36d691.js` | exact |
| sticky threshold crossed | toggle sticky/current local classes | play sticky reveal/hide branch timelines | hero/section local layer | `references/exoape-home/e3cea04.js`, `references/exoape-studio/a4c5813.js` | exact |
