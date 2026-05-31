<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  coreValues: HomeContent['coreValues'];
}>();

const iconGradients: Record<HomeContent['coreValues']['items'][number]['gradient'], string> = {
  teal: 'bg-gradient-to-br from-[#00bba7] to-[#009689]',
  blue: 'bg-gradient-to-br from-[#2b7fff] to-[#155dfc]',
  purple: 'bg-gradient-to-br from-[#ad46ff] to-[#9810fa]',
};
</script>

<template>
  <section class="bg-gradient-to-br from-[#0f172b] via-[#162456] to-[#0f172b] py-16 text-white md:py-24">
    <div class="mobile-container">
      <div class="text-center">
        <span class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
          {{ coreValues.badge }}
        </span>
        <h2 class="mt-6 bg-gradient-to-r from-[#6bffef] to-white bg-clip-text text-2xl font-bold text-transparent md:text-5xl">
          {{ coreValues.title }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-lg text-[#d1d5dc]">
          {{ coreValues.description }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="item in coreValues.items"
          :key="item.title"
          class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-lg"
            :class="iconGradients[item.gradient]"
          >
            {{ item.icon }}
          </div>
          <h3 class="mt-6 text-2xl font-bold">
            {{ item.title }}
          </h3>
          <p class="mt-3 text-base leading-7 text-[#d1d5dc]">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
