<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  section: HomeContent['faq'];
}>();

const openIndex = ref(-1);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};
</script>

<template>
  <section class="relative z-10 bg-white">
    <div class="mx-auto flex max-w-[1920px] flex-col gap-10 px-5 py-16 lg:flex-row lg:justify-between lg:px-6 lg:gap-12 lg:py-[120px] lg:pl-[160px] lg:pr-[200px]">
      <div v-reveal class="max-w-[428px]">
        <h2 class="break-keep text-[28px] font-bold leading-[1.35] tracking-[-1px] text-black md:text-[40px]">
          <span class="block">{{ section.titleLines[0] }}</span>
          <span class="block">{{ section.titleLines[1] }}</span>
        </h2>
        <p class="mt-2 max-w-[428px] text-[16px] font-medium tracking-[-0.5px] text-wb-slate md:text-[20px]">{{ section.prompt }}</p>
        <a
          v-if="section.email"
          :href="`mailto:${section.email}`"
          class="mt-2 block text-[18px] font-semibold tracking-[-0.45px] text-wb-ink"
        >
          {{ section.email }}
        </a>
      </div>

      <div class="flex w-full max-w-[940px] flex-col gap-6">
        <article
          v-for="(item, index) in section.items"
          :key="item.question"
          class="rounded-2xl bg-white p-5 shadow-[10px_10px_15px_rgba(0,0,0,0.06)] sm:p-8"
        >
          <button
            type="button"
            class="flex w-full items-center gap-5 text-left"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <p class="flex-1 text-[16px] font-bold tracking-[-0.55px] text-wb-ink sm:text-[20px] md:text-[22px]">{{ item.question }}</p>
            <span
              v-if="openIndex === index"
              class="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-wb-primary sm:size-[52px]"
            >
              <img src="/images/home-figma/faq/close.svg" alt="" class="size-6 object-contain brightness-0 invert sm:size-7">
            </span>
            <span v-else class="size-10 shrink-0 overflow-hidden rounded-lg sm:size-[52px]">
              <img src="/images/home-figma/faq/plus.svg" alt="" class="size-full object-contain">
            </span>
          </button>
          <div
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="min-h-0 overflow-hidden">
              <div class="mt-4 rounded-xl bg-[#f7f7fb] p-5">
                <p class="whitespace-pre-line text-[15px] font-medium leading-[1.55] tracking-[-0.35px] text-wb-slate md:text-[18px]">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
