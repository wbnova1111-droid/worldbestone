<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  services: HomeContent['services'];
}>();
</script>

<template>
  <section id="features" class="bg-white py-16 md:py-24">
    <div class="mobile-container">
      <h2 class="text-center text-3xl font-bold text-gray-900 md:text-4xl">
        {{ services.title }}
      </h2>
      <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
        <ServiceIconCard
          v-for="item in services.items"
          :key="item.title"
          :item="item"
          class="last:col-span-2 last:mx-auto last:w-[calc(50%-0.5rem)] md:last:col-span-1 md:last:w-auto"
        />
      </div>
    </div>
  </section>
</template>
