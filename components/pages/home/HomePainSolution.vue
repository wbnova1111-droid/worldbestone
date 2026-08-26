<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  section: HomeContent['pain'];
}>();
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto flex max-w-[1920px] flex-col items-center gap-12 px-6 py-16 md:px-16 lg:flex-row lg:items-center lg:justify-center lg:gap-[120px] lg:px-[160px] xl:gap-[180px] xl:px-[250px] lg:py-[120px]">
      <div class="w-full max-w-[659px]">
        <h2 class="text-[32px] font-bold leading-[1.4] tracking-[-1px] text-black md:text-[40px]">
          <span class="block">{{ section.titleLines[0] }}</span>
          <span class="block">{{ section.titleLines[1] }}</span>
        </h2>
        <p class="mt-10 whitespace-pre-line text-[18px] font-medium leading-[1.4] tracking-[-0.5px] text-wb-slate md:mt-10 md:text-[20px]">
          {{ section.body }}
        </p>
        <p class="mt-[60px] text-[18px] font-medium leading-[1.4] tracking-[-0.5px] text-wb-slate md:text-[20px]">
          {{ section.partnerPrefix }}<br>
          <span class="font-semibold text-[#111]">{{ section.partnerEmphasis }}</span>{{ section.partnerSuffix }}
        </p>
      </div>

      <ul class="flex w-full max-w-[452px] flex-col gap-3">
        <li
          v-for="point in section.points"
          :key="point.title"
          class="flex h-auto min-h-[140px] items-start gap-8 rounded-2xl bg-white/20 px-9 py-10 shadow-[10px_10px_30px_rgba(0,0,0,0.06)]"
        >
          <div class="size-[60px] shrink-0 overflow-hidden rounded-full bg-[#f5fdff]">
            <img :src="point.iconSrc" alt="" class="size-full object-cover">
          </div>
          <div class="min-w-0">
            <p class="text-[20px] font-semibold tracking-[-0.5px] text-black">{{ point.title }}</p>
            <p class="mt-2 text-[16px] font-semibold leading-[1.4] tracking-[-0.4px] text-wb-slate">{{ point.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
