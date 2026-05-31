<script setup lang="ts">
import { companyPageMock as content } from '~/mocks/company';
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-[#1a2530] py-16 md:py-20">
      <img
        :src="content.hero.watermarkSrc"
        alt=""
        class="pointer-events-none absolute -left-24 top-1/2 h-auto w-[452px] -translate-y-1/2 opacity-50"
        aria-hidden="true"
      >
      <div class="mobile-container relative z-10 max-w-4xl text-center">
        <h1 class="text-[30px] font-bold leading-[35px] text-[#00ffea]">
          {{ content.hero.title }}
        </h1>
        <div class="mx-auto mt-8 max-w-3xl text-base leading-7 text-white md:text-xl md:leading-7">
          <p v-for="line in content.hero.paragraphs" :key="line">
            {{ line }}
          </p>
          <p class="mt-1 text-[#00ffea]">
            {{ content.hero.highlight }}
          </p>
        </div>
      </div>
    </section>

    <!-- Goal -->
    <section class="bg-white py-16 md:py-20">
      <div class="mobile-container">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <h2 class="text-[30px] font-bold leading-9 text-[#0a0a0a]">
              {{ content.goal.titleLine1 }}
              <span class="text-[#4eb0ad]">{{ content.goal.titleLine2 }}</span>
            </h2>
            <div
              v-for="(paragraph, index) in content.goal.paragraphs"
              :key="index"
              class="mt-6 space-y-0 text-lg leading-7 text-[#364153]"
            >
              <p v-for="line in paragraph" :key="line">
                {{ line }}
              </p>
            </div>
          </div>

          <div class="rounded-2xl bg-[#f8f9fa] p-8 shadow-md md:p-12">
            <div class="flex flex-col gap-8">
              <article
                v-for="trait in content.goal.traits"
                :key="trait.title"
                class="flex items-start gap-4"
              >
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#4eb0ad]">
                  <img :src="trait.iconSrc" :alt="trait.title" class="h-10 w-10 object-contain">
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-[#0a0a0a]">
                    {{ trait.title }}
                  </h3>
                  <p class="mt-1 text-base text-[#4a5565]">
                    {{ trait.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why All-in-one -->
    <section
      class="py-16 md:py-24"
      style="background: linear-gradient(154.89deg, #176861 0%, #162456 50%, #003731 80.77%)"
    >
      <div class="mobile-container">
        <div class="text-center">
          <span class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
            {{ content.whyAllInOne.badge }}
          </span>
          <h2 class="mt-6 text-3xl font-bold text-white md:text-5xl">
            {{ content.whyAllInOne.titlePrefix }}
            <span class="ml-5 text-[#00ffea]">{{ content.whyAllInOne.titleHighlight }}</span>
            {{ content.whyAllInOne.titleSuffix }}
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#d1d5dc]">
            {{ content.whyAllInOne.description }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in content.whyAllInOne.items"
            :key="item.title"
            class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
              <img
                :src="item.iconSrc"
                :alt="item.title"
                class="h-full w-full object-contain"
              >
            </div>
            <h3 class="text-xl font-bold text-white">
              {{ item.title }}
            </h3>
            <div class="mt-3 space-y-0.5 text-sm leading-relaxed text-[#d1d5dc]">
              <p v-for="line in item.lines" :key="line">
                {{ line }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Professional Marketing -->
    <section class="bg-gradient-to-b from-[#f8f9fa] to-[#daedff] py-16 md:py-24">
      <div class="mobile-container">
        <div class="text-center">
          <span class="inline-block border-b-2 border-[#2b7fff] pb-2 text-sm font-bold uppercase tracking-[0.25em] text-transparent bg-gradient-to-r from-[#2b7fff] to-[#1a4c99] bg-clip-text">
            {{ content.marketing.badge }}
          </span>
          <h2 class="mt-6 text-3xl font-bold text-[#101828] md:text-6xl md:leading-[60px]">
            {{ content.marketing.titleLine1 }}
            <span class="mt-1 block bg-gradient-to-b from-[#007aff26] to-[#2b7fff] bg-clip-text text-transparent">
              {{ content.marketing.titleHighlight }}
            </span>
          </h2>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in content.marketing.items"
            :key="item.title"
            class="rounded-[14px] bg-white p-8 shadow-sm"
          >
            <div class="flex h-16 w-16 items-center justify-center rounded-[14px] bg-[#4eb0ad]/10">
              <img
                v-if="'iconSrc' in item && item.iconSrc"
                :src="item.iconSrc"
                :alt="item.title"
                class="h-14 w-14 object-contain"
              >
              <span v-else class="text-3xl">{{ item.icon }}</span>
            </div>
            <h3 class="mt-6 text-xl font-semibold text-[#0a0a0a]">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-base leading-6 text-[#4a5565]">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="bg-white py-16 md:py-24">
      <div class="mobile-container max-w-6xl">
        <div class="text-center">
          <span class="inline-flex rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-4 py-1.5 text-sm font-semibold text-white">
            {{ content.philosophy.badge }}
          </span>
          <h2 class="mt-6 text-3xl font-bold text-[#101828] md:text-5xl">
            {{ content.philosophy.title }}
          </h2>
          <div class="mx-auto mt-6 max-w-3xl space-y-1 text-lg leading-8 text-[#4a5565] md:text-xl">
            <p v-for="line in content.philosophy.description" :key="line">
              {{ line }}
            </p>
          </div>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <article
            v-for="card in content.philosophy.cards"
            :key="card.title"
            class="relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-gradient-to-br from-slate-50/20 to-white/20 p-10 shadow-md"
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

    <!-- CTA -->
    <CtaSection :cta="content.cta" />
  </div>
</template>
