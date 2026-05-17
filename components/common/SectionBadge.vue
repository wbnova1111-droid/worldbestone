<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <span class="inline-flex rounded-full bg-brand-600 px-4 py-2 text-xs font-extrabold tracking-[0.18em] text-white">
    {{ label }}
  </span>
</template>
