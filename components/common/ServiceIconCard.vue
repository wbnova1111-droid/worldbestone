<script setup lang="ts">
import type { ServiceFeature } from '~/types/home';

defineProps<{
  item: ServiceFeature;
}>();

const paths: Record<ServiceFeature['icon'], string> = {
  plan: 'M9 12h6M9 16h6M8 4h8l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M16 4v4h4',
  brand: 'M7 11a5 5 0 1 1 10 0c0 4-5 9-5 9s-5-5-5-9z M12 11h.01',
  star: 'M12 3l2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84-5.4 2.84 1.03-6-4.36-4.25 6.03-.88L12 3z',
  content: 'M5 5h14v14H5z M8 9h8M8 13h8M8 17h5',
  chart: 'M5 19V5M5 19h14M9 16v-5M13 16V8M17 16v-8',
};
</script>

<template>
  <article class="rounded-3xl bg-white p-4 text-center shadow-sm ring-1 ring-gray-100">
    <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path :d="paths[item.icon]" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <h3 class="text-base font-extrabold text-gray-950">{{ item.title }}</h3>
    <p class="mt-1 text-xs font-semibold leading-5 text-gray-500">{{ item.description }}</p>
  </article>
</template>
