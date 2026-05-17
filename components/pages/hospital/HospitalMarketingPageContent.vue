<script setup lang="ts">
import { hospitalPageMock as content } from '~/mocks/hospital';

const { site } = useSiteContent();
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="relative flex min-h-[520px] items-center justify-center overflow-hidden py-20 md:min-h-[680px] md:py-32"
      style="background: linear-gradient(156deg, #0f172b 0%, #1d293d 50%, #101828 100%)"
    >
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#009689] opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute right-1/4 top-16 h-96 w-96 rounded-full bg-[#009966] opacity-10 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span
          class="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/90"
        >
          <span class="h-3 w-3 rounded-full bg-[#00bba7]" aria-hidden="true" />
          {{ content.hero.badge }}
        </span>
        <h1 class="text-4xl font-bold leading-tight text-white md:text-6xl md:leading-[1.15] lg:text-7xl lg:leading-[90px]">
          {{ content.hero.titleLine1 }}
          <span
            class="mt-1 block bg-gradient-to-r from-[#00d5be] via-[#00d492] to-[#00bba7] bg-clip-text text-transparent"
          >
            {{ content.hero.titleLine2 }}
          </span>
        </h1>
        <p class="mt-6 text-lg text-[#d1d5dc] md:text-2xl">
          {{ content.hero.subtitle }}
        </p>
        <div class="mt-8 flex items-center justify-center gap-2">
          <span class="h-px w-12 bg-gradient-to-r from-transparent to-[#00d5be]" aria-hidden="true" />
          <span class="text-sm font-medium text-[#00d5be]">
            {{ content.hero.tagline }}
          </span>
          <span class="h-px w-12 bg-gradient-to-l from-transparent to-[#00d5be]" aria-hidden="true" />
        </div>
      </div>
    </section>

    <!-- Why Professional -->
    <section class="bg-white py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <p
            class="mx-auto inline-block border-b-2 border-[#009689] pb-2.5 text-sm font-bold uppercase tracking-[0.25em] text-[#009689]"
          >
            {{ content.whyProfessional.label }}
          </p>
          <h2 class="mt-8 text-3xl font-bold text-[#101828] md:text-5xl md:leading-tight lg:text-6xl">
            {{ content.whyProfessional.titleLine1 }}
            <span
              class="mt-2 block bg-gradient-to-r from-[#009689] via-[#009966] to-[#00786f] bg-clip-text text-transparent"
            >
              {{ content.whyProfessional.titleHighlight }}
            </span>
          </h2>
          <p class="mt-6 text-xl font-light text-[#4a5565] md:text-2xl">
            {{ content.whyProfessional.subtitle }}
          </p>
        </div>

        <div
          class="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl p-10 shadow-2xl md:p-16"
          style="background: linear-gradient(158deg, #0f172b 0%, #1d293d 100%)"
        >
          <div
            class="pointer-events-none absolute -right-8 top-0 h-64 w-64 rounded-full bg-[#00bba7] opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <div
            class="pointer-events-none absolute -left-8 bottom-0 h-64 w-64 rounded-full bg-[#00bc7d] opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <div class="relative text-center">
            <p class="text-5xl md:text-6xl" aria-hidden="true">💎</p>
            <div class="mx-auto mt-8 max-w-3xl space-y-2 text-xl md:text-3xl md:leading-snug">
              <p
                v-for="(line, index) in content.whyProfessional.quote.lines"
                :key="index"
                :class="line.accent ? 'font-semibold text-[#00d5be]' : line.light ? 'font-light text-white' : 'font-semibold text-[#00d5be]'"
              >
                {{ line.text }}
              </p>
            </div>
            <p class="mt-8 text-lg text-[#d1d5dc] md:text-xl">
              {{ content.whyProfessional.quote.footer }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Approach -->
    <section class="relative overflow-hidden py-20 md:py-32">
      <img
        :src="content.specialized.backgroundSrc"
        alt=""
        class="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      >
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#0f172b]/95 via-[#0f172b]/90 to-[#0f172b]/85"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <p
            class="mx-auto inline-block border-b-2 border-[#00d5be] pb-2.5 text-sm font-bold uppercase tracking-[0.25em] text-[#00d5be]"
          >
            {{ content.specialized.label }}
          </p>
          <h2 class="mt-8 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            {{ content.specialized.titleLine1 }}
            <span
              class="mt-2 block bg-gradient-to-r from-[#00d5be] to-[#00d492] bg-clip-text text-transparent"
            >
              {{ content.specialized.titleHighlight }}
            </span>
          </h2>
          <div class="mx-auto mt-6 max-w-2xl space-y-1 text-lg text-[#d1d5dc] md:text-2xl">
            <p v-for="line in content.specialized.description" :key="line">
              {{ line }}
            </p>
          </div>
        </div>

        <div class="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <article
            v-for="dept in content.specialized.departments"
            :key="dept.name"
            class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
          >
            <p class="text-4xl md:text-5xl" aria-hidden="true">{{ dept.icon }}</p>
            <h3 class="mt-4 text-lg font-bold text-white md:text-xl">
              {{ dept.name }}
            </h3>
            <ul class="mt-3 space-y-0.5 text-sm text-[#d1d5dc]">
              <li v-for="point in dept.points" :key="point">
                {{ point }}
              </li>
            </ul>
          </article>
        </div>

        <div class="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/20 bg-white/5 p-8 text-center backdrop-blur-sm md:p-10">
          <div class="space-y-1 text-lg font-bold text-[#00d5be] md:text-2xl">
            <p v-for="line in content.specialized.callout.lines" :key="line">
              {{ line }}
            </p>
          </div>
          <p class="mt-6 text-lg text-[#d1d5dc] md:text-xl">
            {{ content.specialized.callout.footer }}
          </p>
        </div>
      </div>
    </section>

    <!-- Building Trust -->
    <section class="bg-gradient-to-b from-white to-slate-50 py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <p
            class="mx-auto inline-block border-b-2 border-[#009689] pb-2.5 text-sm font-bold uppercase tracking-[0.25em] text-[#009689]"
          >
            {{ content.buildingTrust.label }}
          </p>
          <h2 class="mt-8 text-3xl font-bold text-[#101828] md:text-5xl lg:text-6xl">
            {{ content.buildingTrust.titleLine1 }}
            <span
              class="mt-2 block bg-gradient-to-r from-[#009689] to-[#009966] bg-clip-text text-transparent"
            >
              {{ content.buildingTrust.titleHighlight }}
            </span>
          </h2>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-3">
          <article
            v-for="card in content.buildingTrust.cards"
            :key="card.title"
            class="rounded-3xl border-2 border-gray-100 bg-white p-10"
          >
            <div
              class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl text-4xl shadow-lg"
              :class="`bg-gradient-to-br ${card.iconBg}`"
            >
              {{ card.icon }}
            </div>
            <h3 class="text-2xl font-bold text-[#101828]">
              {{ card.title }}
            </h3>
            <div class="mt-4 space-y-0.5 text-lg leading-relaxed text-[#4a5565]">
              <p v-for="line in card.description" :key="line">
                {{ line }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="relative overflow-hidden py-20 md:py-32"
      style="background: linear-gradient(155deg, #0f172b 0%, #1d293d 50%, #101828 100%)"
    >
      <div
        class="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[#009689] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[#009966] opacity-20 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 class="text-3xl font-bold text-white md:text-5xl md:leading-tight lg:text-6xl">
          {{ content.cta.title }}
          <span class="block">{{ content.cta.titleLine2 }}</span>
        </h2>
        <div class="mx-auto mt-6 max-w-2xl space-y-1 text-lg text-[#d1d5dc] md:text-2xl">
          <p v-for="line in content.cta.description" :key="line">
            {{ line }}
          </p>
        </div>
        <a
          :href="site.consultationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00bba7] to-[#00bc7d] px-10 py-5 text-lg font-bold text-white transition hover:opacity-90"
        >
          {{ content.cta.button }}
          <span aria-hidden="true">→</span>
        </a>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-10 text-base font-medium text-[#d1d5dc]">
          <span
            v-for="(feature, index) in content.cta.features"
            :key="feature"
            class="inline-flex items-center gap-3"
          >
            <span
              class="h-2.5 w-2.5 rounded-full"
              :class="index === 1 ? 'bg-[#00d492]' : 'bg-[#00d5be]'"
              aria-hidden="true"
            />
            {{ feature }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
