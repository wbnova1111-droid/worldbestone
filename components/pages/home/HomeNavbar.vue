<script setup lang="ts">
import type { HomeContent } from '~/types/home';

const props = defineProps<{
  navbar: HomeContent['navbar'];
}>();

const route = useRoute();
const isMenuOpen = ref(false);

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  },
);

watch(isMenuOpen, (open) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = open ? 'hidden' : '';
});

onUnmounted(() => {
  document.body.style.overflow = '';
});

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
            <span class="text-wb-primary">W</span><span class="text-[12px] text-[#111] lg:text-[14.095px]">ORLD</span>
            <span class="text-wb-primary">&nbsp;B</span><span class="text-[12px] text-[#111] lg:text-[14.095px]">EST</span>
          </span>
          <span class="hidden shrink-0 font-display text-[12px] font-medium leading-none text-[#111]/70 sm:inline">
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
          class="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e5e8eb] lg:hidden"
          :aria-label="isMenuOpen ? '메뉴 닫기' : '메뉴 열기'"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span
            class="absolute left-1/2 top-[12px] h-0.5 w-5 -translate-x-1/2 bg-black transition-transform duration-300"
            :class="isMenuOpen ? 'translate-y-[7px] rotate-45' : ''"
          />
          <span
            class="absolute left-1/2 top-[19px] h-0.5 w-5 -translate-x-1/2 bg-black transition-opacity duration-200"
            :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute left-1/2 top-[26px] h-0.5 w-5 -translate-x-1/2 bg-black transition-transform duration-300"
            :class="isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''"
          />
        </button>
      </div>
    </div>

    <div
      class="grid border-[#e5e8eb] bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden"
      :class="isMenuOpen ? 'grid-rows-[1fr] border-t' : 'grid-rows-[0fr]'"
    >
      <nav class="min-h-0 overflow-hidden">
        <div class="flex flex-col gap-1 px-5 py-4">
          <NuxtLink
            v-for="item in navbar.navItems"
            :key="item.label"
            :to="item.href"
            class="py-2.5 text-[15px] font-semibold"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink
            :to="ctaTo"
            class="mt-1 inline-flex justify-center rounded-[10px] bg-wb-primary px-5 py-3 text-sm font-medium text-white"
            @click="isMenuOpen = false"
          >
            {{ navbar.ctaLabel }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
