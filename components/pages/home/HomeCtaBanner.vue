<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  section: HomeContent['ctaBanner'];
}>();
</script>

<template>
  <section class="relative min-h-[280px] overflow-hidden lg:min-h-[334px]">
    <div class="absolute inset-0 bg-[linear-gradient(89.37deg,#b0e8cb_46.64%,rgba(99,130,114,0)_99.9%)]" />
    <img
      src="/images/home-figma/cta-overlay.png"
      alt=""
      class="absolute left-[39%] top-[-130%] h-[360%] w-full max-w-none opacity-20"
    >
    <div class="relative mx-auto flex max-w-[1920px] flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-end md:gap-[80px] lg:gap-[127px] lg:px-[190px] lg:py-[117px]">
      <h2 class="max-w-[490px] text-[28px] font-bold leading-[1.4] tracking-[-0.9px] text-black md:text-[36px]">
        <span class="block">{{ section.titleLines[0] }}</span>
        <span class="block">{{ section.titleLines[1] }}</span>
      </h2>
      <NuxtLink
        :to="section.href"
        class="inline-flex w-[218px] items-center justify-center rounded border border-white bg-white px-7 py-4 text-[18px] font-semibold leading-[18px] text-wb-primary"
      >
        {{ section.buttonLabel }}
      </NuxtLink>
    </div>
  </section>
</template>
