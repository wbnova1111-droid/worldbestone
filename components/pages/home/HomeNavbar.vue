<script setup lang="ts">
import type { HomeContent } from '~/types/home';

const props = defineProps<{
  navbar: HomeContent['navbar'];
}>();

const route = useRoute();
const isMenuOpen = ref(false);

const ctaTo = computed(() => {
  if (props.navbar.ctaHref.startsWith('#')) {
    return route.path === '/' ? props.navbar.ctaHref : `/${props.navbar.ctaHref}`;
  }
  return props.navbar.ctaHref;
});

const goHome = async () => {
  if (route.path !== '/') {
    await navigateTo('/');
  }
  isMenuOpen.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-[12.5px]">
    <div class="mx-auto flex h-[72px] max-w-[1920px] items-center justify-between px-4 py-3 md:px-8 lg:h-[108px] lg:px-[80px] lg:py-4 xl:px-[160px]">
      <a
        href="/"
        class="flex min-w-0 items-center gap-3 lg:gap-4"
        aria-label="홈 맨 위로 이동"
        @click.prevent="goHome"
      >
        <img
          :src="navbar.logoSrc"
          alt=""
          class="h-9 w-[46px] shrink-0 object-contain object-left lg:h-[54px] lg:w-[69px]"
        >
        <span class="flex min-w-0 items-center gap-2">
          <span class="shrink-0 font-display text-[15px] font-extrabold leading-none tracking-tight lg:text-[17.619px]">
            <span class="text-wb-primary">W</span><span class="text-[12px] text-white lg:text-[14.095px]">ORLD</span>
            <span class="text-wb-primary">&nbsp;B</span><span class="text-[12px] text-white lg:text-[14.095px]">EST</span>
          </span>
          <span class="hidden shrink-0 font-display text-[12px] font-medium leading-none text-white sm:inline">
            {{ navbar.tagline }}
          </span>
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
          :to="ctaTo"
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
          :to="ctaTo"
          class="inline-flex justify-center rounded-[10px] bg-wb-primary px-5 py-3 text-sm font-medium text-white"
          @click="isMenuOpen = false"
        >
          {{ navbar.ctaLabel }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
