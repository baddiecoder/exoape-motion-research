import { ref } from 'vue'

export class LoaderEngine {
  progress = ref(0)

  async run(duration = 900) {
    const started = performance.now()
    return new Promise<void>((resolve) => {
      const step = (now: number) => {
        const t = Math.min(1, (now - started) / duration)
        this.progress.value = t
        if (t < 1) requestAnimationFrame(step)
        else resolve()
      }
      requestAnimationFrame(step)
    })
  }
}
