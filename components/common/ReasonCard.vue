<script setup lang="ts">
import type { ReasonItem } from '~/types/home';

defineProps<{
  item: ReasonItem;
  index: number;
}>();
</script>

<template>
  <article class="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur">
    <div class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-extrabold text-white">
      {{ index + 1 }}
    </div>
    <h3 class="text-lg font-extrabold text-white">{{ item.title }}</h3>
    <p class="mt-2 text-sm font-medium leading-6 text-gray-300">{{ item.description }}</p>
  </article>
</template>
