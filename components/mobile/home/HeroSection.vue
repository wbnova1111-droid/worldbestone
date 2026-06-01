<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  hero: HomeContent['hero'];
}>();

const isVideoHidden = ref(false);
</script>

<template>
  <section class="relative overflow-hidden bg-[#1a2530] py-24 text-white md:py-32">
    <div class="absolute inset-0">
      <video
        v-if="!isVideoHidden"
        class="h-full w-full object-cover opacity-40"
        :poster="hero.posterSrc"
        autoplay
        loop
        muted
        playsinline
        @error="isVideoHidden = true"
      >
        <source :src="hero.videoSrc" type="video/mp4">
      </video>
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :class="isVideoHidden ? 'opacity-40' : '-z-10 opacity-0'"
        :src="hero.posterSrc"
        alt="Hospital marketing"
      >
    </div>
    <div class="absolute inset-0 bg-gradient-to-br from-black/30 via-[#1a2530]/60 to-[#1a2530]/80" />

    <div class="mobile-container relative mx-auto max-w-4xl text-left md:text-center">
      <p class="text-sm text-gray-300 md:text-base">
        {{ hero.subtitle }}
      </p>
      <h1 class="text-body-ko mt-4 text-3xl font-bold leading-snug md:text-5xl md:leading-[1.3]">
        <span class="text-[#0ed7c5]">{{ hero.titleHighlight }}</span>
        <span class="text-white">{{ hero.titleSuffix }}</span>
        <span class="mt-1 block bg-gradient-to-r from-[#c3fff9] to-[#00d4c2] bg-clip-text text-transparent">
          {{ hero.titleGradient }}
        </span>
      </h1>
      <BaseButton
        class="mt-8 !bg-gradient-to-r !from-[#34ccc7] !to-[#00c8d5] !px-6 !py-3 !text-base hover:!opacity-90"
        :link="hero.cta"
        shape="pill"
        show-arrow
      />
    </div>
  </section>
</template>
