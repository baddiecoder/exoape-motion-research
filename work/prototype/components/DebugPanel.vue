<script setup lang="ts">
interface TimelineDebug { id: string; progress: number }

const isDev = import.meta.dev

defineProps<{
  state: Record<string, unknown>
  sectionProgress: Record<string, number>
  timelines: TimelineDebug[]
}>()
</script>

<template>
  <aside class="debug-panel" v-if="isDev">
    <strong>Debug Panel</strong>
    <h4>Global state</h4>
    <code>{{ JSON.stringify(state, null, 2) }}</code>
    <h4>Section progress</h4>
    <code>{{ JSON.stringify(sectionProgress, null, 2) }}</code>
    <h4>Timeline progress</h4>
    <code>{{ JSON.stringify(timelines, null, 2) }}</code>
  </aside>
</template>
