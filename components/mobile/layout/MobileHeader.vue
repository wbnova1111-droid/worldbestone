<script setup lang="ts">
import type { CtaLink } from '~/types/home';
import type { NavLink, ServiceNavItem } from '~/types/site';

defineProps<{
  brandName: string;
  logoSrc: string;
  logoAlt: string;
  cta: CtaLink;
  headerNav: NavLink[];
  serviceNav: ServiceNavItem[];
}>();

const route = useRoute();
const isMenuOpen = ref(false);
const isServicesOpen = ref(false);
const servicesRef = ref<HTMLElement | null>(null);

const isActive = (href: string) => route.path === href || route.path.startsWith(`${href}/`);

const closeMenus = () => {
  isMenuOpen.value = false;
  isServicesOpen.value = false;
};

onMounted(() => {
  const onClickOutside = (event: MouseEvent) => {
    if (servicesRef.value && !servicesRef.value.contains(event.target as Node)) {
      isServicesOpen.value = false;
    }
  };
  document.addEventListener('mousedown', onClickOutside);
  onUnmounted(() => document.removeEventListener('mousedown', onClickOutside));
});

watch(() => route.path, closeMenus);
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-100 bg-white">
    <div class="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 lg:px-8">
      <NuxtLink
        to="/"
        class="flex min-w-0 items-center gap-2 sm:gap-3"
        :aria-label="`${brandName} 홈`"
        @click="closeMenus"
      >
        <img
          :src="logoSrc"
          :alt="logoAlt"
          width="48"
          height="48"
          class="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
        >
        <span class="truncate text-base font-bold tracking-[0.05px] text-[#009689] sm:text-xl">
          {{ brandName }}
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-10 lg:flex">
        <NuxtLink
          v-for="item in headerNav"
          :key="item.href"
          :to="item.href"
          class="text-sm font-semibold transition-colors"
          :class="isActive(item.href) ? 'text-brand-600' : 'text-gray-800 hover:text-brand-600'"
        >
          {{ item.label }}
        </NuxtLink>

        <div
          ref="servicesRef"
          class="relative"
          @mouseenter="isServicesOpen = true"
          @mouseleave="isServicesOpen = false"
        >
          <button
            type="button"
            class="flex items-center gap-1 text-sm font-semibold transition-colors"
            :class="route.path.startsWith('/products') ? 'text-brand-600' : 'text-gray-800 hover:text-brand-600'"
            :aria-expanded="isServicesOpen"
            aria-haspopup="true"
            @click="isServicesOpen = !isServicesOpen"
          >
            마케팅 서비스
            <svg class="h-4 w-4 transition" :class="isServicesOpen ? 'rotate-180' : ''" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>

          <div
            v-show="isServicesOpen"
            class="absolute left-0 top-full z-50 min-w-[15rem] pt-2"
          >
            <div class="rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
              <NuxtLink
                v-for="item in serviceNav"
                :key="item.slug"
                :to="item.href"
                class="block px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
                @click="closeMenus"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>

      <a
        v-if="cta.external"
        :href="cta.href"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden items-center gap-2 rounded-full border-2 border-brand-500 px-7 py-3 text-sm font-bold text-brand-600 transition-colors hover:bg-brand-50 lg:inline-flex"
      >
        {{ cta.label }}
        <span aria-hidden="true">→</span>
      </a>
      <NuxtLink
        v-else
        :to="cta.href"
        class="hidden items-center gap-2 rounded-full border-2 border-brand-500 px-7 py-3 text-sm font-bold text-brand-600 transition-colors hover:bg-brand-50 lg:inline-flex"
      >
        {{ cta.label }}
        <span aria-hidden="true">→</span>
      </NuxtLink>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 lg:hidden"
        aria-label="메뉴 열기"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg v-if="!isMenuOpen" class="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <svg v-else class="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div v-show="isMenuOpen" class="border-t border-gray-100 bg-white lg:hidden">
      <nav class="mobile-container space-y-1 py-4">
        <NuxtLink
          v-for="item in headerNav"
          :key="item.href"
          :to="item.href"
          class="block rounded-xl px-4 py-3 text-sm font-semibold"
          :class="isActive(item.href) ? 'bg-brand-50 text-brand-700' : 'text-gray-800'"
          @click="closeMenus"
        >
          {{ item.label }}
        </NuxtLink>

        <p class="px-4 pt-3 text-xs font-bold uppercase tracking-widest text-gray-400">마케팅 서비스</p>
        <NuxtLink
          v-for="item in serviceNav"
          :key="item.slug"
          :to="item.href"
          class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700"
          :class="route.path === item.href ? 'bg-brand-50 text-brand-700' : ''"
          @click="closeMenus"
        >
          {{ item.label }}
        </NuxtLink>

        <div class="px-4 pt-4">
          <NuxtLink
            :to="cta.href"
            class="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-500 px-6 py-3 text-sm font-bold text-brand-600"
            :target="cta.external ? '_blank' : undefined"
            :rel="cta.external ? 'noopener noreferrer' : undefined"
            @click="closeMenus"
          >
            {{ cta.label }}
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
