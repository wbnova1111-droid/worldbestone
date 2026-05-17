<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  hero: HomeContent['hero'];
}>();

const isVideoHidden = ref(false);
</script>

<template>
  <section class="relative overflow-hidden bg-gray-900 py-20 text-white md:py-32">
    <div class="absolute inset-0">
      <video
        v-if="!isVideoHidden"
        class="h-full w-full object-cover opacity-50"
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
        :class="isVideoHidden ? 'opacity-50' : '-z-10 opacity-0'"
        :src="hero.posterSrc"
        alt="Hospital marketing"
      >
    </div>
    <div class="absolute inset-0 bg-black/30" />

    <div class="mobile-container relative mx-auto max-w-7xl text-center">
      <p v-if="hero.eyebrow" class="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-100">
        {{ hero.eyebrow }}
      </p>
      <h1 class="text-4xl font-bold md:text-5xl lg:text-6xl">
        {{ hero.title }}
      </h1>
      <p class="mt-6 text-lg text-gray-300 md:text-xl">
        {{ hero.description }}
      </p>
      <BaseButton class="mt-8" :link="hero.cta" shape="rounded" />
    </div>
  </section>
</template>
