<script setup lang="ts">
import type { HomeLegacyContent } from '~/types/homeLegacy';

defineProps<{
  reasons: NonNullable<HomeLegacyContent['reasons']>;
}>();
</script>

<template>
  <section class="overflow-hidden bg-gray-900 py-16 text-white md:py-24">
    <div class="mobile-container">
      <div class="text-center">
        <h2 class="text-3xl font-black leading-tight tracking-[-0.04em]">
          {{ reasons.title }}
        </h2>
        <p class="mt-3 text-sm font-semibold text-gray-400">{{ reasons.subtitle }}</p>
      </div>

      <div class="mt-10 grid gap-10 md:grid-cols-[1fr_280px] md:items-center">
        <div class="grid gap-5">
          <ReasonCard
            v-for="(item, index) in reasons.items"
            :key="item.title"
            :item="item"
            :index="index"
          />
        </div>

        <div class="mx-auto max-w-[260px] rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 p-2 shadow-2xl">
          <img
            :src="reasons.imageSrc"
            alt="Hospital marketing result"
            class="aspect-[2/3] w-full rounded-[1.5rem] object-cover"
          >
        </div>
      </div>
    </div>
  </section>
</template>
