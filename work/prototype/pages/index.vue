<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import DebugPanel from '~/components/DebugPanel.vue'
import LoaderFill from '~/components/LoaderFill.vue'
import OverlayWipe from '~/components/OverlayWipe.vue'
import SiteBurger from '~/components/SiteBurger.vue'
import SiteNav from '~/components/SiteNav.vue'
import ExoHero from '~/sections/ExoHero.vue'
import StudioScrollSection from '~/sections/StudioScrollSection.vue'
import { LoaderEngine } from '~/engine/LoaderEngine'
import { PageTransitionEngine } from '~/engine/PageTransitionEngine'
import { ScrollEngine } from '~/engine/ScrollEngine'
import { StateMachine } from '~/engine/StateMachine'
import { TimelineRegistry } from '~/engine/TimelineRegistry'

const scene = ref<HTMLElement | null>(null)
const overlay = ref<HTMLElement | null>(null)
const heroRef = ref<InstanceType<typeof ExoHero> | null>(null)
const studioRef = ref<InstanceType<typeof StudioScrollSection> | null>(null)

const stateMachine = reactive(new StateMachine())
const scrollEngine = new ScrollEngine()
const registry = new TimelineRegistry()
const loaderEngine = new LoaderEngine()
const transitionEngine = new PageTransitionEngine(overlay)

const viewportHeight = ref(0)
const sectionProgress = reactive<Record<string, number>>({ hero: 0, studio: 0 })
const loaderProgress = computed(() => loaderEngine.progress.value)

const updateSizes = () => {
  viewportHeight.value = window.innerHeight
  const contentHeight = scene.value?.scrollHeight ?? window.innerHeight
  scrollEngine.setMax(Math.max(0, contentHeight - window.innerHeight))
}

let rafId = 0
const tick = () => {
  // RAF tick order (explicit):
  // 1) update global scroll state
  // 2) apply scene transform (camera layer)
  // 3) update section progress values
  // 4) drive paused timelines via registry progress
  const y = scrollEngine.tick()
  if (scene.value) scene.value.style.transform = `translate3d(0, ${-y}px, 0)`

  if (heroRef.value) {
    heroRef.value.tick(viewportHeight.value)
    sectionProgress.hero = heroRef.value.progress
  }
  if (studioRef.value) {
    studioRef.value.tick(viewportHeight.value)
    sectionProgress.studio = studioRef.value.progress
  }

  rafId = requestAnimationFrame(tick)
}

const runStartup = async () => {
  stateMachine.detectTouch()
  stateMachine.setLoading(true)

  // loader lock/unlock order:
  // lock (is-loading true) -> animate loader -> transition pulse -> unlock (is-loading false)
  await loaderEngine.run(900)
  stateMachine.setTransitioning(true)
  await transitionEngine.playTransition()
  stateMachine.setTransitioning(false)
  stateMachine.setLoading(false)
}

const onToggleMenu = () => {
  stateMachine.toggleMenu()
}

onMounted(async () => {
  updateSizes()
  window.addEventListener('resize', updateSizes)
  scrollEngine.start()
  rafId = requestAnimationFrame(tick)
  await runStartup()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSizes)
  scrollEngine.stop()
  cancelAnimationFrame(rafId)
  registry.killAll()
})
</script>

<template>
  <div class="app-shell">
    <div class="ui-layer">
      <SiteBurger :open="stateMachine.state.menuOpen" @toggle="onToggleMenu" />
      <SiteNav :open="stateMachine.state.menuOpen" />
    </div>

    <div class="overlay-layer">
      <div ref="overlay" class="overlay-surface">
        <OverlayWipe :active="stateMachine.state.transitioning" />
      </div>
    </div>

    <LoaderFill :active="stateMachine.state.loading" :progress="loaderProgress" />

    <div class="scroll-layer">
      <main ref="scene" class="page-scene">
        <ExoHero ref="heroRef" :viewport-height="viewportHeight" :registry="registry" />
        <StudioScrollSection ref="studioRef" :viewport-height="viewportHeight" :registry="registry" />
      </main>
    </div>

    <DebugPanel
      :state="stateMachine.state"
      :section-progress="sectionProgress"
      :timelines="registry.getSnapshot()"
    />
  </div>
</template>

<style scoped>
.overlay-surface{position:relative;inset:0;width:100%;height:100%}
</style>
