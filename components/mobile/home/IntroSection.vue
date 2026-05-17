<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  intro: HomeContent['intro'];
}>();
</script>

<template>
  <section id="about" class="bg-brand-50 py-16 md:py-24">
    <div class="mobile-container mx-auto max-w-3xl text-center">
      <SectionBadge :label="intro.badge" />
      <h2 class="mt-4 whitespace-pre-line text-3xl font-bold text-gray-900 md:text-4xl">
        {{ intro.title }}
      </h2>
      <p class="mx-auto mt-6 whitespace-pre-line text-lg font-medium leading-relaxed text-gray-600">
        {{ intro.description }}
      </p>
    </div>
  </section>
</template>
