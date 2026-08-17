<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  hero: HomeContent['hero'];
}>();
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5 pb-16 pt-28 md:gap-16 md:px-8 md:pb-24 md:pt-36 lg:flex-row lg:gap-20 lg:px-[120px] lg:pb-[120px] lg:pt-[200px]">
      <div class="flex w-full flex-1 flex-col gap-6 md:gap-8">
        <div class="inline-flex w-fit items-center gap-2 rounded-full bg-wb-mint px-3 py-1.5">
          <span class="size-2 rounded bg-wb-primary" />
          <span class="text-xs font-extrabold tracking-[1px] text-wb-dark md:text-[13px]">{{ hero.badge }}</span>
        </div>

        <h1 class="font-display text-[32px] font-extrabold leading-[1.2] text-wb-dark md:text-[44px] lg:text-[52px]">
          {{ hero.titleLine1 }}
          <span class="text-wb-primary">{{ hero.titleHighlight }}</span>로,<br>
          {{ hero.titleLine2 }}
        </h1>

        <p class="max-w-xl text-base leading-relaxed text-wb-slate md:text-lg">
          {{ hero.description }}
        </p>

        <div class="flex flex-wrap gap-3 md:gap-4">
          <NuxtLink
            to="#contact"
            class="inline-flex rounded-lg bg-wb-primary px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 md:px-7 md:py-3.5 md:text-base"
          >
            {{ hero.primaryCta }}
          </NuxtLink>
          <NuxtLink
            to="#services"
            class="inline-flex rounded-lg bg-wb-mint px-5 py-3 text-sm font-bold text-wb-dark transition-opacity hover:opacity-90 md:px-7 md:py-3.5 md:text-base"
          >
            {{ hero.secondaryCta }}
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-6 md:pt-4">
          <div
            v-for="check in hero.checks"
            :key="check.label"
            class="flex items-center gap-1.5"
          >
            <img src="/images/home-new/check.svg" alt="" class="size-[18px]">
            <span class="text-sm font-bold text-wb-dark">{{ check.label }}</span>
          </div>
        </div>
      </div>

      <div class="h-[280px] w-full shrink-0 overflow-hidden rounded-3xl md:h-[400px] lg:h-[520px] lg:w-[560px]">
        <img :src="hero.imageSrc" alt="병원 마케팅 상담" class="size-full object-cover">
      </div>
    </div>
  </section>
</template>
