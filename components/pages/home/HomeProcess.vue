<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  section: HomeContent['process'];
}>();

const activeIndex = ref(0);

const isActive = (index: number) => activeIndex.value === index;
</script>

<template>
  <section class="bg-white py-16 lg:py-[120px]">
    <div class="mx-auto flex max-w-[1920px] flex-col items-center gap-12 px-5">
      <div v-reveal class="text-center">
        <h2 class="break-keep text-[28px] font-bold tracking-[-1px] text-wb-ink md:text-[40px]">{{ section.title }}</h2>
        <p class="mt-4 text-[16px] font-medium leading-[1.45] tracking-[-0.5px] text-wb-slate md:mt-5 md:text-[24px]">
          {{ section.subtitle }}
        </p>
      </div>

      <div class="hidden h-[562px] w-full max-w-[1819px] items-stretch justify-center gap-[34px] px-6 lg:flex">
        <button
          v-for="(step, index) in section.steps"
          :key="`${step.number}-${index}`"
          type="button"
          class="process-card relative min-h-0 min-w-0 overflow-hidden rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.1)]"
          :class="isActive(index) ? 'grow shrink basis-0' : 'grow-0 shrink-0 basis-[148px]'"
          @mouseenter="activeIndex = index"
          @focus="activeIndex = index"
        >
          <img :src="step.imageSrc" alt="" class="absolute inset-0 size-full object-cover">
          <div
            class="absolute inset-0 transition-opacity duration-500"
            :class="isActive(index) ? 'opacity-100' : 'bg-black/50'"
            :style="isActive(index)
              ? 'background-image: linear-gradient(180deg, rgba(0,0,0,0) 52.67%, rgba(0,0,0,0.3) 100%), linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4));'
              : undefined"
          />

          <div
            class="pointer-events-none absolute left-1/2 top-11 flex h-[320px] w-[81px] -translate-x-1/2 items-center justify-center transition-opacity duration-300"
            :class="isActive(index) ? 'opacity-0' : 'opacity-100 delay-150'"
          >
            <div class="flex-none rotate-90">
              <p class="w-[280px] font-bold tracking-[-0.6px] text-white">
                <span class="text-[36px] leading-[1.4]">{{ step.ko }}</span>
                <span class="text-[24px] leading-[1.4]"> — </span>
                <span class="block text-[24px] leading-[1.4]">{{ step.en }}</span>
              </p>
            </div>
          </div>

          <div
            class="pointer-events-none absolute inset-0 flex flex-col justify-between p-[43px_58px] transition-opacity duration-300"
            :class="isActive(index) ? 'opacity-100 delay-150' : 'opacity-0'"
          >
            <div>
              <span class="inline-flex h-[26px] items-center rounded-full border border-wb-primary px-5 text-[14px] text-white">
                {{ step.number }}
              </span>
              <p class="mt-6 text-[24px] font-bold tracking-[-0.6px] text-white">{{ step.en }}</p>
              <p class="text-[36px] font-bold tracking-[-0.9px] text-white">{{ step.ko }}</p>
            </div>
            <div class="text-white">
              <p class="text-[24px] font-bold tracking-[-0.6px]">{{ step.summary }}</p>
              <hr class="my-3 border-white/40">
              <p class="text-[16px] font-medium tracking-[-0.4px]">{{ step.detail }}</p>
            </div>
          </div>
        </button>
      </div>

      <div class="flex w-full flex-col gap-3 lg:hidden">
        <button
          v-for="(step, index) in section.steps"
          :key="`${step.number}-m-${index}`"
          type="button"
          class="relative overflow-hidden rounded-[18px] text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-[min-height] duration-500 ease-out"
          :class="isActive(index) ? 'min-h-[340px]' : 'min-h-[92px]'"
          @click="activeIndex = index"
        >
          <img :src="step.imageSrc" alt="" class="absolute inset-0 size-full object-cover">
          <div
            class="absolute inset-0 transition-opacity duration-500"
            :class="isActive(index) ? 'opacity-100' : 'bg-black/55'"
            :style="isActive(index)
              ? 'background-image: linear-gradient(180deg, rgba(0,0,0,0.12) 18%, rgba(0,0,0,0.62) 100%);'
              : undefined"
          />
          <div class="relative flex h-full min-h-[inherit] flex-col justify-between p-5 text-white">
            <div class="flex items-center justify-between gap-3">
              <span class="inline-flex items-center rounded-full border border-wb-primary px-3 py-0.5 text-xs">{{ step.number }}</span>
              <span class="text-xs font-bold tracking-[-0.4px] text-white/80">{{ step.en }}</span>
            </div>
            <div>
              <p class="text-[22px] font-bold leading-tight tracking-[-0.5px]">{{ step.ko }}</p>
              <div
                class="grid transition-[grid-template-rows] duration-300 ease-out"
                :class="isActive(index) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
              >
                <div class="min-h-0 overflow-hidden">
                  <p class="mt-3 text-[15px] font-bold leading-[1.4]">{{ step.summary }}</p>
                  <p class="mt-2 text-[14px] font-medium leading-[1.5] text-white/90">{{ step.detail }}</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
