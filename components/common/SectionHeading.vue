<script setup lang="ts">
defineProps<{
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}>();
</script>

<template>
  <div :class="center ? 'text-center' : ''">
    <SectionBadge v-if="badge" :label="badge" />
    <h2
      class="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] md:text-4xl"
      :class="light ? 'text-white' : 'text-gray-950'"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-3 text-base font-medium leading-7"
      :class="[center ? 'mx-auto max-w-2xl' : '', light ? 'text-gray-300' : 'text-gray-600']"
    >
      {{ description }}
    </p>
  </div>
</template>
