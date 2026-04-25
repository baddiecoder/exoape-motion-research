import gsap from 'gsap'
import type { Ref } from 'vue'

export class PageTransitionEngine {
  constructor(private overlay: Ref<HTMLElement | null>) {}

  async playTransition() {
    if (!this.overlay.value) return
    const el = this.overlay.value

    // transition order (engine contract):
    // start -> enter wipe -> swap placeholder -> exit wipe -> end
    await gsap.fromTo(
      el,
      { autoAlpha: 0, yPercent: 100 },
      { autoAlpha: 1, yPercent: 0, duration: 0.45, ease: 'power2.out' }
    )

    // swap placeholder for engine-only spike (full route-swap sequencing later)
    await gsap.to(el, { autoAlpha: 0, yPercent: -100, duration: 0.45, ease: 'power2.in' })
  }
}
