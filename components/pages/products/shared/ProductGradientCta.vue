<script setup lang="ts">
import type { ProductPageCta } from '~/types/productPage';

const props = defineProps<{
  cta: ProductPageCta;
}>();

const { site } = useSiteContent();

const titleLines = computed(() =>
  Array.isArray(props.cta.title) ? props.cta.title : [props.cta.title],
);
const subtitleLines = computed(() => {
  if (!props.cta.subtitle) return [];
  return Array.isArray(props.cta.subtitle) ? props.cta.subtitle : [props.cta.subtitle];
});
</script>

<template>
  <section
    v-if="cta.variant === 'card'"
    class="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24"
  >
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
      <div class="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl md:p-16">
        <h2 class="text-3xl font-bold text-[#101828] md:text-4xl">
          <span v-for="line in titleLines" :key="line" class="block">{{ line }}</span>
        </h2>
        <div v-if="subtitleLines.length" class="mx-auto mt-6 max-w-lg space-y-1 text-lg text-[#4a5565]">
          <p v-for="line in subtitleLines" :key="line">{{ line }}</p>
        </div>
        <a
          :href="site.consultationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-10 py-5 text-lg font-bold text-white transition hover:opacity-90"
        >
          {{ cta.button }}
          <span aria-hidden="true">→</span>
        </a>
        <p v-if="cta.note" class="mt-6 text-sm text-gray-500">{{ cta.note }}</p>
      </div>
    </div>
  </section>

  <section
    v-else
    class="relative overflow-hidden py-16 md:py-24"
    :class="cta.variant === 'teal-blue'
      ? 'bg-gradient-to-r from-[#009689] to-[#155dfc]'
      : ''"
    :style="cta.variant !== 'teal-blue' ? { background: 'linear-gradient(155deg, #0f172b 0%, #162456 50%, #0f172b 100%)' } : undefined"
  >
    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
      <div
        v-if="cta.variant !== 'teal-blue'"
        class="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14"
      >
        <h2 class="text-3xl font-bold text-white md:text-4xl">
          <span v-for="line in titleLines" :key="line" class="block">{{ line }}</span>
        </h2>
        <div v-if="subtitleLines.length" class="mx-auto mt-6 max-w-lg space-y-1 text-lg text-[#d1d5dc]">
          <p v-for="line in subtitleLines" :key="line">{{ line }}</p>
        </div>
        <a
          :href="site.consultationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-10 py-5 text-lg font-bold text-white transition hover:opacity-90"
        >
          {{ cta.button }}
          <span aria-hidden="true">→</span>
        </a>
        <p v-if="cta.note" class="mt-6 text-sm text-[#d1d5dc]">{{ cta.note }}</p>
      </div>

      <template v-else>
        <h2 class="text-3xl font-bold text-white md:text-5xl">
          <span v-for="line in titleLines" :key="line" class="block">{{ line }}</span>
        </h2>
        <div v-if="subtitleLines.length" class="mx-auto mt-6 max-w-lg space-y-1 text-lg text-[#cbfbf1]">
          <p v-for="line in subtitleLines" :key="line">{{ line }}</p>
        </div>
        <a
          :href="site.consultationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-[#009689] shadow-lg transition hover:opacity-95"
        >
          {{ cta.button }}
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#009689] text-white" aria-hidden="true">→</span>
        </a>
        <p v-if="cta.note" class="mt-6 text-sm text-[#cbfbf1]">{{ cta.note }}</p>
      </template>
    </div>
  </section>
</template>
