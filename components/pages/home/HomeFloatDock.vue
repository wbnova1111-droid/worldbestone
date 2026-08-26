<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  items: HomeContent['floatDock']['items'];
}>();

const hiddenByFooter = ref(false);

const updateVisibility = () => {
  const footer = document.getElementById('home-footer');
  hiddenByFooter.value = footer
    ? footer.getBoundingClientRect().top < window.innerHeight - 64
    : false;
};

onMounted(() => {
  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateVisibility);
  window.removeEventListener('resize', updateVisibility);
});
</script>

<template>
  <aside
    class="pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    aria-label="빠른 상담"
  >
    <div
      class="pointer-events-auto flex flex-col gap-[18px] pr-4 transition-transform duration-300 ease-out will-change-transform lg:pr-6"
      :class="hiddenByFooter ? 'translate-x-full' : 'translate-x-0'"
    >
      <a
        v-for="item in items"
        :key="item.label"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
        class="flex size-[86px] flex-col items-center justify-center gap-1.5 rounded-[17px] bg-white px-1.5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform hover:-translate-x-1 lg:size-[98px]"
      >
        <img :src="item.iconSrc" alt="" class="h-8 w-8 object-contain lg:h-9 lg:w-9">
        <span class="text-[11px] font-semibold leading-[1.25] tracking-[-0.2px] text-[#171717] lg:text-[12px]">
          {{ item.label }}
        </span>
      </a>
    </div>
  </aside>
</template>
