<script setup lang="ts">
defineProps<{ progress: number; active: boolean }>()
</script>

<template>
  <div v-if="active" class="loader">
    <div class="loader-mask">
      <div class="loader-fill" :style="{ transform: `scaleY(${progress})` }" />
    </div>
  </div>
</template>

<style scoped>
.loader{position:fixed;inset:0;display:grid;place-items:center;background:var(--color-dark);z-index:50}
.loader-mask{width:36px;height:72px;background:rgba(255,255,255,.15);padding:2px}
.loader-fill{height:100%;background:var(--color-light);transform-origin:bottom center}
</style>
