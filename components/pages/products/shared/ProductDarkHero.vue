<script setup lang="ts">
import type { ProductPageHero } from '~/types/productPage';

const props = defineProps<{
  hero: ProductPageHero;
}>();

const { site } = useSiteContent();

const subtitles = computed(() =>
  props.hero.subtitle
    ? Array.isArray(props.hero.subtitle)
      ? props.hero.subtitle
      : [props.hero.subtitle]
    : [],
);

const bgClass = computed(() => {
  if (props.hero.variant === 'black') return 'bg-black';
  if (props.hero.variant === 'blue-gradient') {
    return 'bg-gradient-to-b from-[#1c398e] via-[#162456] to-black';
  }
  return '';
});

const bgStyle = computed(() =>
  props.hero.variant === 'dark-gradient' || !props.hero.variant
    ? { background: 'linear-gradient(155deg, #0f172b 0%, #162456 50%, #0f172b 100%)' }
    : undefined,
);
</script>

<template>
  <section
    class="relative flex min-h-[520px] items-center justify-center overflow-hidden py-20 md:min-h-[640px] md:py-28"
    :class="bgClass"
    :style="bgStyle"
  >
    <img
      v-if="hero.backgroundImage"
      :src="hero.backgroundImage"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-30"
      aria-hidden="true"
    >
    <div
      v-if="hero.backgroundImage"
      class="absolute inset-0 bg-gradient-to-b from-[#0f172b]/80 via-[#0f172b]/70 to-[#0f172b]/90"
      aria-hidden="true"
    />

    <div
      v-if="hero.variant !== 'black' && hero.variant !== 'blue-gradient'"
      class="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#2b7fff] opacity-20 blur-3xl"
      aria-hidden="true"
    />
    <div
      v-if="hero.variant !== 'black' && hero.variant !== 'blue-gradient'"
      class="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00bba7] opacity-20 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-5xl px-6 text-center">
      <p v-if="hero.preQuote" class="text-sm text-gray-400">{{ hero.preQuote }}</p>

      <span
        v-if="hero.badge"
        class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90"
      >
        <span class="h-2 w-2 rounded-full bg-[#00d5be]" aria-hidden="true" />
        {{ hero.badge }}
      </span>

      <h1
        class="font-bold leading-tight text-white"
        :class="hero.variant === 'black' ? 'text-3xl md:text-5xl' : 'text-3xl md:text-5xl lg:text-6xl lg:leading-[1.15]'"
      >
        <template v-for="(line, i) in hero.titleLines" :key="i">
          <span v-if="i > 0" class="block">{{ line }}</span>
          <template v-else>{{ line }}</template>
        </template>
        <span
          v-if="hero.titleHighlight"
          class="mt-2 block bg-gradient-to-r from-[#00d5be] via-[#51a2ff] to-[#c27aff] bg-clip-text text-transparent"
        >
          {{ hero.titleHighlight }}
        </span>
      </h1>

      <div v-if="subtitles.length" class="mt-6 space-y-1">
        <p
          v-for="line in subtitles"
          :key="line"
          class="text-lg md:text-xl"
          :class="hero.variant === 'blue-gradient' ? 'text-[#d1d5dc]' : 'text-[#d1d5dc]'"
        >
          {{ line }}
        </p>
      </div>

      <span
        v-if="hero.ctaPill"
        class="mt-6 inline-block rounded-full bg-[#009689] px-5 py-2 text-sm font-bold text-white"
      >
        {{ hero.ctaPill }}
      </span>

      <div v-if="hero.timeCards?.length" class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div
          v-for="card in hero.timeCards"
          :key="card.label"
          class="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
        >
          <p class="text-sm text-gray-400">{{ card.label }}</p>
          <p class="text-xl font-bold text-[#00d5be]">{{ card.time }}</p>
        </div>
      </div>

      <div v-if="hero.ctaPrimary" class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          :href="site.consultationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-8 py-4 text-base font-bold text-white transition hover:opacity-90"
        >
          {{ hero.ctaPrimary }}
          <span aria-hidden="true">→</span>
        </a>
        <a
          v-if="hero.ctaSecondary"
          href="#services"
          class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white transition hover:bg-white/20"
        >
          {{ hero.ctaSecondary }}
        </a>
      </div>
    </div>
  </section>
</template>
