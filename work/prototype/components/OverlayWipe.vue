<script setup lang="ts">
const props = defineProps<{ active: boolean }>()
</script>

<template>
  <div class="overlay-wipe" :class="{ 'is-active': props.active }" />
</template>

<style scoped>
.overlay-wipe{position:absolute;inset:0;background:var(--color-overlay);opacity:0;transform:translateY(100%)}
.overlay-wipe.is-active{opacity:1;transform:translateY(0)}
</style>
