<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  section: HomeContent['ctaBanner'];
}>();
</script>

<template>
  <section id="home-cta" class="relative min-h-[280px] lg:min-h-[334px]">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(89.37deg,#b0e8cb_46.64%,rgba(99,130,114,0)_99.9%)]" />
      <img
        src="/images/home-figma/cta-overlay.png"
        alt=""
        class="absolute left-[20%] top-[-40%] h-[180%] w-[160%] max-w-none opacity-10 lg:left-[39%] lg:top-[-130%] lg:h-[360%] lg:w-full lg:opacity-20"
      >
    </div>
    <div class="relative z-10 mx-auto flex max-w-[1920px] flex-col items-stretch gap-6 px-5 py-12 pb-28 sm:items-start sm:px-6 sm:py-16 md:flex-row md:flex-nowrap md:items-end md:gap-[80px] md:pb-16 lg:gap-[127px] lg:px-[190px] lg:py-[117px]">
      <h2 v-reveal class="max-w-[490px] shrink-0 break-keep text-[22px] font-bold leading-[1.4] tracking-[-0.8px] text-black sm:text-[28px] md:text-[36px]">
        <span class="block">{{ section.titleLines[0] }}</span>
        <span class="block">{{ section.titleLines[1] }}</span>
      </h2>
      <NuxtLink
        :to="section.href"
        class="inline-flex w-full shrink-0 items-center justify-center whitespace-nowrap rounded border border-white bg-white px-6 py-4 text-[16px] font-semibold leading-[18px] text-wb-primary sm:w-auto sm:px-7 sm:text-[18px]"
      >
        {{ section.buttonLabel }}
      </NuxtLink>
    </div>
  </section>
</template>
