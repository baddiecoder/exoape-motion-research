export class ScrollEngine {
  current = 0
  target = 0
  max = 0
  speed = 0.11

  onWheel = (event: WheelEvent) => {
    this.target += event.deltaY
    this.target = Math.max(0, Math.min(this.target, this.max))
  }

  setMax(max: number) {
    this.max = Math.max(0, max)
    this.target = Math.min(this.target, this.max)
    this.current = Math.min(this.current, this.max)
  }

  tick() {
    this.current += (this.target - this.current) * this.speed
    if (Math.abs(this.target - this.current) < 0.02) this.current = this.target
    return this.current
  }

  start() {
    window.addEventListener('wheel', this.onWheel, { passive: true })
  }

  stop() {
    window.removeEventListener('wheel', this.onWheel)
  }
}
