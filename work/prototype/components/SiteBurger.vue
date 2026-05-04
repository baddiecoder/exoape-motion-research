<script setup lang="ts">
defineProps<{ open: boolean }>()
defineEmits<{ (e:'toggle'): void }>()
</script>

<template>
  <button class="burger" @click="$emit('toggle')">
    <span :class="['line', { open }]" />
    <span :class="['line', { open }]" />
    <span :class="['line', { open }]" />
  </button>
</template>

<style scoped>
.burger{pointer-events:auto;position:absolute;top:var(--space-2);right:var(--space-2);display:grid;gap:5px;background:none;border:none;z-index:1}
.line{display:block;width:22px;height:2px;background:var(--color-dark);transform-origin:center;transition:transform .3s,opacity .3s}
.line.open:nth-child(1){transform:translateY(7px) rotate(45deg)}
.line.open:nth-child(2){opacity:0}
.line.open:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
</style>
