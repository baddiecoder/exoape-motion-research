import { onBeforeUnmount, onMounted } from 'vue'

export function useRaf(callback: (time: number) => void) {
  let rafId = 0
  const loop = (time: number) => {
    callback(time)
    rafId = requestAnimationFrame(loop)
  }
  onMounted(() => {
    rafId = requestAnimationFrame(loop)
  })
  onBeforeUnmount(() => cancelAnimationFrame(rafId))
}
