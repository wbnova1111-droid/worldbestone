<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  cta: HomeContent['cta'];
}>();
</script>

<template>
  <section class="bg-gradient-to-br from-[#1a2530] to-[#121c3c] py-16 text-white md:py-20 lg:py-[82px]">
    <div class="mobile-container max-w-3xl text-center">
      <h2 class="text-2xl font-bold leading-tight md:text-4xl md:leading-[1.25] lg:text-[36px] lg:leading-[50px]">
        {{ cta.title }}
        <span class="mt-1 block text-[#00ffea]">{{ cta.titleHighlight }}</span>
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-base text-[#d1d5dc] md:text-xl">
        {{ cta.description }}
      </p>
      <BaseButton
        class="mt-8 !bg-gradient-to-br !from-[#00bba7] !to-[#009689] !px-8 !py-4 !text-lg hover:!opacity-90"
        :link="cta.button"
        shape="pill"
        show-arrow
      />
    </div>
  </section>
</template>
