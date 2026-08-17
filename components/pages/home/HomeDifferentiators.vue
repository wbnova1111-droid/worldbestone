<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  section: HomeContent['differentiators'];
}>();
</script>

<template>
  <section class="bg-wb-mint">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:gap-16 md:px-8 md:py-24 lg:px-[120px] lg:py-[100px]">
      <div class="text-center">
        <p class="text-sm font-extrabold tracking-[1.5px] text-wb-primary">{{ section.badge }}</p>
        <h2 class="mt-4 font-display text-2xl font-extrabold text-wb-dark md:text-[38px]">
          {{ section.title }}
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="item in section.items"
          :key="item.number"
          class="flex flex-col gap-6 rounded-2xl border border-[#e2e8f0] bg-white p-6 md:p-10"
        >
          <div class="flex items-center justify-between">
            <span class="font-display text-[32px] font-extrabold text-wb-primary">{{ item.number }}</span>
            <span class="rounded-full bg-wb-mint px-3 py-1 text-xs font-bold text-wb-dark">{{ item.badge }}</span>
          </div>
          <div>
            <h3 class="text-xl font-extrabold text-wb-dark">{{ item.title }}</h3>
            <p class="mt-3 text-[15px] leading-relaxed text-wb-slate">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
