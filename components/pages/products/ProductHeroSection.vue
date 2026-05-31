<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Figma hero section height: default 340px, tall 396px (AI 분석) */
    variant?: 'default' | 'tall';
    /** Hero graphic that extends outside 204px content (e.g. medical platform logos) */
    overflowVisible?: boolean;
  }>(),
  { variant: 'default', overflowVisible: false },
);
</script>

<template>
  <section
    class="relative bg-[#1a2530] pt-20"
    :class="[
      variant === 'tall' ? 'pb-16 lg:pb-28' : 'pb-14',
      overflowVisible ? 'overflow-visible' : 'overflow-hidden',
    ]"
  >
    <div
      class="mobile-container relative z-10 flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8"
      :class="overflowVisible ? 'lg:items-start' : 'lg:h-[204px] lg:items-center'"
    >
      <slot />
    </div>
  </section>
</template>
