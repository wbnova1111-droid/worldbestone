<script setup lang="ts">
import type { NavigationItem } from '~/types/home';

defineProps<{
  items: NavigationItem[];
}>();

const paths: Record<NavigationItem['icon'], string> = {
  home: 'M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z',
  services: 'M5 5h6v6H5z M13 5h6v6h-6z M5 13h6v6H5z M13 13h6v6h-6z',
  company: 'M4 21V7l8-4 8 4v14M9 21v-6h6v6M8 10h.01M12 10h.01M16 10h.01',
  chat: 'M5 5h14v10H8l-3 4V5z',
};
</script>

<template>
  <nav class="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
    <div class="mx-auto grid h-16 max-w-md grid-cols-4">
      <NuxtLink
        v-for="item in items"
        :key="item.label"
        :to="item.href"
        :target="item.href.startsWith('http') ? '_blank' : undefined"
        :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
        class="flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-gray-500 transition hover:text-brand-600"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path :d="paths[item.icon]" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ item.label }}
      </NuxtLink>
    </div>
  </nav>
</template>
