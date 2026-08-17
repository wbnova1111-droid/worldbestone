<script setup lang="ts">
import type { HomeLegacyContent } from '~/types/homeLegacy';

defineProps<{
  partnership: HomeLegacyContent['partnership'];
}>();

const statColors: Record<HomeLegacyContent['partnership']['stats'][number]['color'], string> = {
  teal: 'text-[#009689]',
  blue: 'text-[#155dfc]',
  purple: 'text-[#9810fa]',
};
</script>

<template>
  <section class="bg-gradient-to-b from-[#f8f9fa] to-[#e9fbff] py-16 md:py-24">
    <div class="mobile-container max-w-4xl">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-[#101828] md:text-5xl">
          {{ partnership.title }}
          <span class="bg-gradient-to-r from-[#009689] to-[#155dfc] bg-clip-text text-transparent">
            {{ partnership.titleHighlight }}
          </span>
        </h2>
        <p class="mx-auto mt-6 max-w-2xl whitespace-pre-line text-lg leading-8 text-[#4a5565]">
          {{ partnership.description }}
        </p>
      </div>

      <div class="mt-12 rounded-3xl border border-gray-200 bg-white px-6 py-10 shadow-xl md:px-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div
            v-for="stat in partnership.stats"
            :key="stat.label"
            class="text-center"
          >
            <p class="text-4xl font-bold md:text-5xl" :class="statColors[stat.color]">
              {{ stat.value }}
            </p>
            <p class="mt-2 text-base font-medium text-[#4a5565]">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
