import { ref, type Ref } from 'vue'

const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v))

export function useSectionProgress(target: Ref<HTMLElement | null>) {
  const progress = ref(0)

  const updateProgress = (viewportHeight: number) => {
    if (!target.value) return
    const rect = target.value.getBoundingClientRect()
    progress.value = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1)
  }

  return { progress, updateProgress }
}
