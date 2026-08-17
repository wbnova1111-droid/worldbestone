<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  section: HomeContent['painSolution'];
}>();
</script>

<template>
  <section class="bg-[#f8fafc]">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:gap-16 md:px-8 md:py-24 lg:px-[120px] lg:py-[100px]">
      <div class="mx-auto w-full text-center">
        <p class="text-sm font-extrabold tracking-[1.5px] text-wb-primary">{{ section.badge }}</p>
        <h2 class="mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight text-wb-dark md:whitespace-nowrap md:text-[clamp(22px,2.7vw,38px)]">
          {{ section.title }}
        </h2>
        <p class="mx-auto mt-4 max-w-3xl text-base text-wb-slate">{{ section.description }}</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div class="rounded-[20px] border border-[#e2e8f0] bg-white p-6 md:p-10">
          <div class="flex items-center gap-2.5">
            <div class="rounded-md bg-red-500/10 p-1.5">
              <img src="/images/home-new/x-circle.svg" alt="" class="size-[18px]">
            </div>
            <h3 class="text-base font-extrabold text-red-500 md:text-lg">{{ section.beforeTitle }}</h3>
          </div>
          <hr class="my-6 border-[#e2e8f0]">
          <ul class="space-y-4">
            <li
              v-for="item in section.beforeItems"
              :key="item.text"
              class="flex gap-3 text-[15px] leading-relaxed text-wb-slate"
            >
              <span class="font-bold text-black">•</span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>

        <div class="rounded-[20px] bg-wb-primary p-6 md:p-10">
          <div class="flex items-center gap-2.5">
            <div class="rounded-md bg-white p-1.5">
              <img src="/images/home-new/check.svg" alt="" class="size-[18px]">
            </div>
            <h3 class="text-base font-extrabold text-white md:text-lg">{{ section.afterTitle }}</h3>
          </div>
          <hr class="my-6 border-white/20">
          <ul class="space-y-4">
            <li
              v-for="item in section.afterItems"
              :key="item.text"
              class="flex gap-3 text-[15px] leading-relaxed text-white"
            >
              <span class="font-bold text-wb-mint">✓</span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
