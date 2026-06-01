<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  process: HomeContent['process'];
}>();
</script>

<template>
  <section class="bg-[#0b0f1f] py-16 text-white md:py-24">
    <div class="mobile-container">
      <div class="text-center">
        <span class="inline-flex rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-4 py-1.5 text-sm font-semibold text-white">
          {{ process.badge }}
        </span>
        <h2 class="mt-6 bg-gradient-to-r from-[#c3fff9] to-[#00d4c2] bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
          {{ process.title }}
        </h2>
        <p class="text-body-ko mx-auto mt-4 max-w-3xl whitespace-pre-line text-base leading-7 text-[#e5e5e5] md:text-lg">
          {{ process.description }}
        </p>
      </div>

      <div class="relative mx-auto mt-16 max-w-3xl">
        <div
          class="absolute bottom-8 left-1/2 top-8 hidden w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#c3fff9] to-[#00d4c2] md:block"
          aria-hidden="true"
        />

        <div class="flex flex-col gap-12 md:gap-16">
          <article
            v-for="(item, index) in process.items"
            :key="item.step"
            class="relative flex flex-col md:w-[327px]"
            :class="index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'"
          >
            <div
              class="relative rounded-2xl border border-[#4eb0ad] bg-[#1a2530] px-5 py-6 pt-10 text-center shadow-[2px_2px_5px_rgba(255,255,255,0.3)] sm:px-6"
            >
              <span
                class="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-[#009689] shadow-lg"
              >
                {{ item.step }}
              </span>
              <img
                :src="item.iconSrc"
                :alt="item.title"
                class="mx-auto h-16 w-16 object-contain"
                loading="lazy"
              >
              <h3 class="mt-3 text-lg font-bold">
                {{ item.title }}
              </h3>
              <p class="text-body-ko mt-2 text-sm leading-relaxed text-gray-300">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
