<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  navbar: HomeContent['navbar'];
}>();

const route = useRoute();
const isMenuOpen = ref(false);

const goHome = async () => {
  if (route.path !== '/') {
    await navigateTo('/');
  }
  isMenuOpen.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.19)]">
    <div class="mx-auto flex h-[72px] max-w-[1920px] items-center justify-between px-4 md:px-6 lg:h-[116px] lg:px-[34px]">
      <a
        href="/"
        class="flex min-w-0 items-center"
        aria-label="홈 맨 위로 이동"
        @click.prevent="goHome"
      >
        <img
          :src="navbar.logoSrc"
          alt=""
          class="h-12 w-[81px] shrink-0 object-contain object-left lg:h-[96px] lg:w-[162px]"
        >
        <span class="truncate font-display text-[22px] font-extrabold uppercase leading-[1.1] text-black md:text-[32px] lg:text-[50px] lg:leading-[56px]">
          {{ navbar.wordmark }}
        </span>
      </a>

      <div class="flex items-center gap-4 lg:gap-[84px]">
        <nav class="hidden items-center gap-[60px] font-display text-[24px] font-normal text-black lg:flex">
          <NuxtLink
            v-for="item in navbar.navItems"
            :key="item.label"
            :to="item.href"
            class="px-2.5 py-2.5 leading-[56px] transition-opacity hover:opacity-70"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <NuxtLink
          :to="navbar.ctaHref"
          class="hidden rounded-[10px] bg-wb-primary px-10 py-1.5 font-display text-[24px] font-medium leading-[56px] text-white lg:inline-flex"
        >
          {{ navbar.ctaLabel }}
        </NuxtLink>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#e5e8eb] lg:hidden"
          aria-label="메뉴 열기"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="block h-0.5 w-5 bg-black" />
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="border-t border-[#e5e8eb] bg-white px-5 py-4 lg:hidden">
      <nav class="flex flex-col gap-3">
        <NuxtLink
          v-for="item in navbar.navItems"
          :key="item.label"
          :to="item.href"
          class="py-2 text-[15px] font-semibold"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          :to="navbar.ctaHref"
          class="inline-flex justify-center rounded-[10px] bg-wb-primary px-5 py-3 text-sm font-medium text-white"
          @click="isMenuOpen = false"
        >
          {{ navbar.ctaLabel }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
