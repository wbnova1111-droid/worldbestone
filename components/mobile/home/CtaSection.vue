<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  cta: HomeContent['cta'];
}>();
</script>

<template>
  <section class="bg-brand-600 py-16 text-white">
    <div class="mobile-container text-center">
      <h2 class="text-3xl font-black leading-tight tracking-[-0.04em]">
        {{ cta.title }}
      </h2>
      <p class="mx-auto mt-4 max-w-xs text-base font-semibold leading-7 text-brand-100">
        {{ cta.description }}
      </p>
      <BaseButton class="mt-8" :link="cta.button" variant="light" shape="rounded" />
    </div>
  </section>
</template>
