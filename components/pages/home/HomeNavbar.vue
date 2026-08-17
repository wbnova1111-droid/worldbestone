<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  navbar: HomeContent['navbar'];
}>();

const isMenuOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/98 backdrop-blur-sm">
    <div class="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:h-[90px] md:px-8 lg:px-[120px]">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img :src="navbar.logoSrc" alt="WORLDBEST" class="h-[36px] w-[48px] rounded object-cover md:h-[42px] md:w-[56px]">
        <div class="flex flex-col leading-none">
          <span class="font-display text-lg font-extrabold tracking-[0.5px] text-wb-dark md:text-xl">WORLDBEST</span>
          <span class="text-[10px] font-extrabold tracking-[2px] text-wb-primary md:text-[11px]">MARKETING</span>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-10 text-[15px] font-bold text-[#1e293b] xl:flex">
        <NuxtLink
          v-for="item in navbar.navItems"
          :key="item.label"
          :to="item.href"
          class="transition-colors hover:text-wb-primary"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <NuxtLink
          :to="navbar.ctaHref"
          class="hidden rounded-lg bg-wb-primary px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:inline-flex md:px-7 md:py-3.5 md:text-base"
        >
          {{ navbar.ctaLabel }}
        </NuxtLink>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#e2e8f0] xl:hidden"
          aria-label="메뉴 열기"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="block h-0.5 w-5 bg-wb-dark" />
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="border-t border-[#e2e8f0] bg-white px-5 py-4 xl:hidden">
      <nav class="flex flex-col gap-3">
        <NuxtLink
          v-for="item in navbar.navItems"
          :key="item.label"
          :to="item.href"
          class="py-2 text-[15px] font-bold text-[#1e293b]"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          :to="navbar.ctaHref"
          class="mt-2 inline-flex justify-center rounded-lg bg-wb-primary px-5 py-3 text-sm font-bold text-white"
          @click="isMenuOpen = false"
        >
          {{ navbar.ctaLabel }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
