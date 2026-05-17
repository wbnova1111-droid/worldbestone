<script setup lang="ts">
import { companyPageMock as content } from '~/mocks/company';

const { site } = useSiteContent();
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="relative flex min-h-[520px] items-center justify-center overflow-hidden py-20 md:min-h-[640px] md:py-32"
      style="background: linear-gradient(158deg, #0f172b 0%, #162456 50%, #0f172b 100%)"
    >
      <div
        class="pointer-events-none absolute -left-16 -top-16 h-80 w-80 rounded-full bg-[#00bba7] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -right-8 top-0 h-72 w-72 rounded-full bg-[#2b7fff] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute bottom-20 left-20 h-72 w-72 rounded-full bg-[#ad46ff] opacity-20 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span
          class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium uppercase tracking-wide text-white/90"
        >
          <span class="h-2 w-2 rounded-full bg-[#00d5be]" aria-hidden="true" />
          {{ content.hero.badge }}
        </span>
        <h1 class="text-4xl font-bold leading-tight text-white md:text-6xl md:leading-[1.15] lg:text-7xl lg:leading-[90px]">
          {{ content.hero.titleLine1 }}
          <span
            class="mt-1 block bg-gradient-to-r from-[#00d5be] via-[#51a2ff] to-[#c27aff] bg-clip-text text-transparent"
          >
            {{ content.hero.titleLine2 }}
          </span>
        </h1>
        <p class="mt-6 text-lg text-[#d1d5dc] md:text-2xl">
          {{ content.hero.subtitle }}
        </p>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="bg-white py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <span
            class="inline-flex rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-5 py-1.5 text-sm font-semibold text-white"
          >
            {{ content.philosophy.badge }}
          </span>
          <h2 class="mt-6 text-3xl font-bold text-[#101828] md:text-5xl">
            {{ content.philosophy.title }}
          </h2>
          <div class="mx-auto mt-6 max-w-3xl space-y-1 text-lg text-[#4a5565] md:text-xl">
            <p v-for="line in content.philosophy.description" :key="line">
              {{ line }}
            </p>
          </div>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <article
            v-for="card in content.philosophy.cards"
            :key="card.title"
            class="relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-gradient-to-br from-slate-50 to-white p-10"
          >
            <div
              class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r"
              :class="card.bar"
              aria-hidden="true"
            />
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-lg"
              :class="`bg-gradient-to-br ${card.iconBg}`"
            >
              {{ card.icon }}
            </div>
            <h3 class="text-2xl font-bold text-[#101828]">
              {{ card.title }}
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-[#4a5565]">
              {{ card.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section
      class="relative overflow-hidden py-20 md:py-32"
      style="background: linear-gradient(154deg, #0f172b 0%, #162456 50%, #0f172b 100%)"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <span
            class="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-sm font-semibold text-white"
          >
            {{ content.coreValues.badge }}
          </span>
          <h2 class="mt-6 text-3xl font-bold text-white md:text-5xl">
            {{ content.coreValues.title }}
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#d1d5dc] md:text-xl">
            {{ content.coreValues.description }}
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-3">
          <article
            v-for="card in content.coreValues.cards"
            :key="card.title"
            class="rounded-2xl border border-white/10 bg-white/5 p-10 text-center"
          >
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-lg"
              :class="`bg-gradient-to-br ${card.iconBg}`"
            >
              {{ card.icon }}
            </div>
            <h3 class="text-2xl font-bold text-white">
              {{ card.title }}
            </h3>
            <div class="mt-4 space-y-0.5 text-base text-[#d1d5dc]">
              <p v-for="line in card.lines" :key="line">
                {{ line }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Partnership -->
    <section class="bg-gradient-to-b from-white to-slate-50 py-20 md:py-32">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 class="text-3xl font-bold text-[#101828] md:text-5xl">
          {{ content.partnership.titleLine1 }}
          <span
            class="mt-1 block bg-gradient-to-r from-[#009689] to-[#155dfc] bg-clip-text text-transparent"
          >
            {{ content.partnership.titleHighlight }}
          </span>
        </h2>
        <div class="mx-auto mt-6 max-w-2xl space-y-1 text-lg text-[#4a5565] md:text-xl">
          <p v-for="line in content.partnership.description" :key="line">
            {{ line }}
          </p>
        </div>

        <div
          class="mt-12 grid grid-cols-1 gap-8 rounded-3xl border border-[#e5e7eb] bg-white p-10 shadow-xl sm:grid-cols-3"
        >
          <div v-for="stat in content.partnership.stats" :key="stat.label">
            <p class="text-4xl font-bold md:text-5xl" :class="stat.color">
              {{ stat.value }}
            </p>
            <p class="mt-2 text-base font-medium text-[#4a5565]">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="relative overflow-hidden py-20 md:py-32"
      style="background: linear-gradient(156deg, #0f172b 0%, #162456 50%, #0f172b 100%)"
    >
      <div
        class="pointer-events-none absolute left-1/3 top-0 h-80 w-80 rounded-full bg-[#00bba7] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-[#2b7fff] opacity-20 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl md:p-16">
          <h2 class="text-3xl font-bold text-white md:text-5xl">
            {{ content.cta.title }}
          </h2>
          <div class="mx-auto mt-6 max-w-lg space-y-1 text-lg text-[#d1d5dc] md:text-xl">
            <p v-for="line in content.cta.description" :key="line">
              {{ line }}
            </p>
          </div>
          <a
            :href="site.consultationUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-10 py-5 text-lg font-bold text-white transition hover:opacity-90"
          >
            {{ content.cta.button }}
            <span aria-hidden="true">→</span>
          </a>
          <div class="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-[#d1d5dc]">
            <span
              v-for="(feature, index) in content.cta.features"
              :key="feature"
              class="inline-flex items-center gap-2"
            >
              <span
                class="h-2 w-2 rounded-full"
                :class="index === 0 ? 'bg-[#00d5be]' : 'bg-[#51a2ff]'"
                aria-hidden="true"
              />
              {{ feature }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
