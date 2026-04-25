<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { makePausedTimeline } from '~/motion/primitives'
import { useSectionProgress } from '~/composables/useSectionProgress'

const props = defineProps<{ viewportHeight: number; registry: { register: (id: string, tl: gsap.core.Timeline) => void; setProgress: (id: string, p: number) => void } }>()

const root = ref<HTMLElement | null>(null)
const media = ref<HTMLElement | null>(null)
const lines = ['Engine-only Exoape', 'Hero reveal']
const { progress, updateProgress } = useSectionProgress(root)
const id = 'hero-scroll'

onMounted(() => {
  if (!media.value) return
  const tl = makePausedTimeline()
  tl.fromTo(media.value, { y: -40, opacity: 1, scale: 1.05 }, { y: 70, opacity: 0.75, scale: 0.95, duration: 1, ease: 'linear' }, 0)
  props.registry.register(id, tl)

  const text = root.value?.querySelectorAll('.text-line')
  if (text?.length) {
    gsap.fromTo(text, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out' })
  }
})

const tick = (vh: number) => {
  updateProgress(vh)
  props.registry.setProgress(id, progress.value)
}

defineExpose({ progress, tick })
</script>

<template>
  <section id="hero" ref="root" class="section hero">
    <div class="container">
      <BaseText :lines="lines" as="h1" />
      <p class="subtitle">Fixed shell • RAF bus • paused timelines</p>
      <div ref="media" class="placeholder-media" aria-hidden="true" />
    </div>
  </section>
</template>

<style scoped>
.hero{background:linear-gradient(180deg,#f7f7f8,#fefefe)}
h1{font-size:clamp(2rem,8vw,6rem);line-height:.95;letter-spacing:-.03em;margin-bottom:1rem}
.subtitle{color:var(--color-dark-60);margin-bottom:1rem}
</style>
