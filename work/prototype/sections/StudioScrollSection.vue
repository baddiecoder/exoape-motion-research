<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { makePausedTimeline } from '~/motion/primitives'
import { useSectionProgress } from '~/composables/useSectionProgress'

const props = defineProps<{ viewportHeight: number; registry: { register: (id: string, tl: gsap.core.Timeline) => void; setProgress: (id: string, p: number) => void } }>()

const root = ref<HTMLElement | null>(null)
const image = ref<HTMLElement | null>(null)
const id = 'studio-scroll'
const { progress, updateProgress } = useSectionProgress(root)

onMounted(() => {
  if (!image.value) return
  const tl = makePausedTimeline()
  tl.fromTo(image.value, { y: -120, scale: 1.08, opacity: 0.9 }, { y: 140, scale: 0.92, opacity: 0.65, duration: 1, ease: 'linear' }, 0)
  props.registry.register(id, tl)
})

const tick = (vh: number) => {
  updateProgress(vh)
  props.registry.setProgress(id, progress.value)
}

defineExpose({ progress, tick })
</script>

<template>
  <section id="studio" ref="root" class="section studio">
    <div class="container studio-grid">
      <BaseText :lines="['Studio-style', 'Scroll section']" as="h2" />
      <div ref="image" class="placeholder-media studio-media" aria-hidden="true" />
    </div>
  </section>
</template>

<style scoped>
.studio{background:var(--color-dark);color:var(--color-light)}
.studio-grid{display:grid;gap:1.5rem}
h2{font-size:clamp(1.8rem,6vw,4rem);line-height:1}
.studio-media{background:linear-gradient(145deg,#46546d,#7e5b6e,#b37f6b)}
</style>
