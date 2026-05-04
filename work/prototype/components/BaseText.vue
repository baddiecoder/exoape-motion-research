<script setup lang="ts">
defineProps<{ lines: string[]; as?: string }>()
</script>

<template>
  <component :is="as || 'h2'">
    <BaseMask v-for="(line, i) in lines" :key="`${line}-${i}`">
      <span class="mask-line text-line">{{ line }}</span>
    </BaseMask>
  </component>
</template>
