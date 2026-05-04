import type { GSAPTimeline } from 'gsap'

export class TimelineRegistry {
  private timelines = new Map<string, GSAPTimeline>()

  register(id: string, timeline: GSAPTimeline) {
    this.timelines.set(id, timeline)
  }

  setProgress(id: string, progress: number) {
    const tl = this.timelines.get(id)
    if (tl) tl.progress(Math.max(0, Math.min(1, progress)))
  }

  getSnapshot() {
    return [...this.timelines.entries()].map(([id, tl]) => ({ id, progress: tl.progress() }))
  }

  killAll() {
    this.timelines.forEach((tl) => tl.kill())
    this.timelines.clear()
  }
}
