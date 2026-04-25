import type { GSAPTimeline } from 'gsap'

export function applyParallaxPattern(tl: GSAPTimeline, target: HTMLElement, amount = 120) {
  tl.fromTo(target, { y: -amount * 0.5, scale: 1.05 }, { y: amount * 0.5, scale: 0.95, ease: 'linear', duration: 1 }, 0)
}
