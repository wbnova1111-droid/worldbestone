<script setup lang="ts">
import type { CtaLink } from '~/types/home';

const props = withDefaults(
  defineProps<{
    link: CtaLink;
    variant?: 'primary' | 'light' | 'outline';
    shape?: 'pill' | 'rounded';
    showArrow?: boolean;
  }>(),
  {
    variant: 'primary',
    shape: 'pill',
    showArrow: false,
  },
);

const classes = computed(() => {
  const radius = props.shape === 'rounded' ? 'rounded-lg' : 'rounded-full';
  const base = `inline-flex items-center justify-center ${radius} px-8 py-3 text-lg font-bold transition active:scale-[0.98]`;

  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700',
    light: 'bg-white text-brand-600 hover:bg-gray-100',
    outline: 'border-2 border-brand-500 bg-white text-brand-600 hover:bg-brand-50',
  };

  return [base, variants[props.variant]].join(' ');
});
</script>

<template>
  <NuxtLink
    :to="link.href"
    :class="classes"
    :target="link.external ? '_blank' : undefined"
    :rel="link.external ? 'noopener noreferrer' : undefined"
  >
    {{ link.label }}
    <span v-if="showArrow" class="ml-2" aria-hidden="true">→</span>
  </NuxtLink>
</template>
