<script setup lang="ts">
defineProps<{ open: boolean }>()
</script>

<template>
  <nav class="site-nav" :class="{ open }">
    <a href="#hero">Hero</a>
    <a href="#studio">Studio</a>
  </nav>
</template>

<style scoped>
.site-nav{pointer-events:none;position:absolute;top:56px;right:16px;display:flex;flex-direction:column;gap:8px;opacity:0;transform:translateY(-8px);transition:transform .35s,opacity .35s}
.site-nav.open{pointer-events:auto;opacity:1;transform:translateY(0)}
.site-nav a{background:#fff;padding:6px 10px;border-radius:6px;color:var(--color-dark);box-shadow:0 6px 20px rgba(0,0,0,.12)}
</style>
