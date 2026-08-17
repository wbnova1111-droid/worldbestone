<script setup lang="ts">
import type { HomeLegacyContent } from '~/types/homeLegacy';

defineProps<{
  services: HomeLegacyContent['services'];
}>();
</script>

<template>
  <section id="services" class="bg-[#f8f9fa] py-16 md:py-24">
    <div class="mobile-container">
      <div class="text-center">
        <span class="inline-flex rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-4 py-1.5 text-sm font-semibold text-white">
          {{ services.badge }}
        </span>
        <h2 class="mt-6 text-3xl font-bold text-[#101828] md:text-[45px] md:leading-tight">
          {{ services.title }}
        </h2>
        <p class="text-body-ko mx-auto mt-4 max-w-2xl text-base font-medium text-[#4a5565] md:text-lg">
          {{ services.description }}
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="item in services.items"
          :key="item.title"
          :to="item.href"
          class="rounded-[14px] bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#4eb0ad]/10">
            <img
              :src="item.iconSrc"
              :alt="item.title"
              class="h-10 w-10 object-contain"
              loading="lazy"
            >
          </div>
          <h3 class="mt-4 text-lg font-semibold text-[#0a0a0a]">
            {{ item.title }}
          </h3>
          <p class="text-body-ko mt-1 text-xs leading-relaxed text-[#4a5565] md:text-sm">
            {{ item.description }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
