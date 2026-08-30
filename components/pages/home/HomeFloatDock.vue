<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  items: HomeContent['floatDock']['items'];
}>();

const hidden = ref(false);

const mobileLabel = (label: string) => {
  if (label.includes('전화')) return '전화 상담';
  if (label.includes('카톡')) return '카톡 문의';
  if (label.includes('인스타')) return '인스타';
  return label;
};

onMounted(() => {
  const contact = document.getElementById('contact');
  const footer = document.getElementById('home-footer');
  const seen = { contact: false, footer: false };
  const sync = () => {
    hidden.value = seen.contact || seen.footer;
  };

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target.id === 'contact') seen.contact = entry.isIntersecting;
      if (entry.target.id === 'home-footer') seen.footer = entry.isIntersecting;
    }
    sync();
  }, { threshold: 0, rootMargin: '80px 0px 80px 0px' });

  if (contact) io.observe(contact);
  if (footer) io.observe(footer);

  onUnmounted(() => io.disconnect());
});
</script>

<template>
  <aside
    class="pointer-events-none fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 md:block"
    aria-label="빠른 상담"
  >
    <div
      class="flex flex-col gap-[18px] pr-4 transition-transform duration-300 ease-out will-change-transform lg:pr-6"
      :class="hidden ? 'pointer-events-none translate-x-full' : 'pointer-events-auto translate-x-0'"
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

  <aside
    class="fixed left-3 right-3 z-30 transition-transform duration-300 ease-out md:hidden"
    :class="hidden ? 'pointer-events-none translate-y-[calc(100%+16px)]' : 'translate-y-0'"
    :style="{ bottom: 'max(12px, env(safe-area-inset-bottom))' }"
    aria-label="빠른 상담"
  >
    <div class="flex items-center rounded-[20px] border border-black/5 bg-white/95 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-md">
      <a
        v-for="item in items"
        :key="`m-${item.label}`"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
        class="flex w-1/3 min-w-0 flex-col items-center gap-1 px-1 py-1"
      >
        <img :src="item.iconSrc" alt="" class="size-6 object-contain">
        <span class="text-center text-[10px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#171717]">
          {{ mobileLabel(item.label) }}
        </span>
      </a>
    </div>
  </aside>
</template>
