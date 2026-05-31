<script setup lang="ts">
import { hospitalPageMock as content } from '~/mocks/hospital';
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-[#1a2530] py-16 md:py-20">
      <div class="mobile-container relative z-10 max-w-4xl text-center">
        <h1 class="text-3xl font-bold leading-tight md:text-5xl">
          <span class="text-[#00ffea]">{{ content.hero.titleHighlight }}</span>
          <span class="text-white">{{ content.hero.titleSuffix }}</span>
        </h1>
        <p class="mx-auto mt-6 max-w-3xl text-lg leading-7 text-[#d1d5dc] md:text-xl">
          {{ content.hero.subtitle }}
        </p>
      </div>
    </section>

    <!-- Why Expert -->
    <section class="bg-white py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold text-[#0a0a0a] md:text-4xl">
          {{ content.whyExpert.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.whyExpert.titleHighlight }}</span>
          {{ content.whyExpert.titleSuffix }}
        </h2>

        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <article
            v-for="item in content.whyExpert.items"
            :key="item.title"
            class="rounded-[14px] bg-[#f8f9fa] p-8 shadow-sm"
          >
            <div class="flex gap-4">
              <img
                :src="item.iconSrc"
                :alt="item.title"
                class="mt-1 h-6 w-6 shrink-0 object-contain"
              >
              <div>
                <h3 class="text-xl font-semibold text-[#0a0a0a]">
                  {{ item.title }}
                </h3>
                <p class="mt-2 text-base leading-6 text-[#4a5565]">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Comparison -->
    <section
      class="py-16 md:py-24"
      style="background: linear-gradient(60deg, #ffffff 57.52%, rgba(191, 255, 253, 0.12) 108.33%)"
    >
      <div class="mobile-container max-w-6xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-[#0a0a0a] md:text-4xl">
            {{ content.comparison.titleLine1 }}
            <span class="text-[#4eb0ad]">{{ content.comparison.titleHighlight }}</span>
          </h2>
          <p class="mt-4 text-lg text-[#4a5565] md:text-xl">
            {{ content.comparison.subtitle }}
          </p>
        </div>

        <div class="mt-10 text-center">
          <p class="text-2xl font-bold text-[#0a0a0a] md:text-4xl">
            {{ content.comparison.vsTitle }}
            <span class="mx-3 text-[#0a0a0a]">VS</span>
            <span class="text-[#4eb0ad]">{{ content.comparison.vsHighlight }}</span>
          </p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div class="rounded-[14px] border border-[#e5e7eb] bg-[rgba(255,243,243,0.2)] p-8 shadow-md">
            <h3 class="text-center text-2xl font-bold text-[#364153]">
              {{ content.comparison.traditional.title }}
            </h3>
            <ul class="mt-6 space-y-4">
              <li
                v-for="item in content.comparison.traditional.items"
                :key="item"
                class="flex items-center gap-3"
              >
                <img src="/images/hospital/icon-x.svg" alt="" class="h-6 w-6 shrink-0" aria-hidden="true">
                <span class="text-base text-[#364153]">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-[14px] border border-[#4eb0ad] bg-[#4eb0ad]/5 p-8 shadow-md">
            <h3 class="text-center text-2xl font-bold text-[#4eb0ad]">
              {{ content.comparison.allInOne.title }}
            </h3>
            <ul class="mt-6 space-y-4">
              <li
                v-for="item in content.comparison.allInOne.items"
                :key="item"
                class="flex items-center gap-3"
              >
                <img src="/images/hospital/icon-check.svg" alt="" class="h-6 w-6 shrink-0" aria-hidden="true">
                <span class="text-base font-semibold text-[#364153]">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="mt-12 text-center text-xl leading-8 md:text-2xl">
          {{ content.comparison.summaryPrefix }}
          <span class="font-bold text-[#4eb0ad]">{{ content.comparison.summaryHighlight }}</span>
          {{ content.comparison.summarySuffix }}
        </p>
      </div>
    </section>

    <!-- Strategy -->
    <section class="bg-[#f8f9fa] py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold md:text-4xl">
          <span class="text-[#4eb0ad]">{{ content.strategy.titleHighlight }}</span>
          <span class="text-[#0a0a0a]">{{ content.strategy.titleSuffix }}</span>
        </h2>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="item in content.strategy.items"
            :key="item.step"
            class="rounded-[14px] bg-white p-8 text-center"
          >
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4eb0ad] text-2xl font-bold text-white">
              {{ item.step }}
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

    <!-- Recommended -->
    <section class="bg-gradient-to-b from-[#f8fafc] to-white py-16 md:py-24">
      <div class="mobile-container max-w-5xl">
        <div class="text-center">
          <span class="inline-flex rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-4 py-1.5 text-sm font-semibold text-white">
            {{ content.recommended.badge }}
          </span>
          <h2 class="mt-6 text-3xl font-bold text-[#101828] md:text-5xl">
            {{ content.recommended.title }}
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#4a5565] md:text-xl">
            {{ content.recommended.description }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <article
            v-for="item in content.recommended.items"
            :key="item.title"
            class="relative overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white p-8 shadow-lg"
          >
            <div
              class="absolute inset-x-0 top-0 h-1"
              :style="{ backgroundImage: item.barGradient }"
              aria-hidden="true"
            />
            <div class="flex gap-6">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg"
                :style="{ backgroundImage: item.iconGradient }"
              >
                <svg
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-[#101828]">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-base leading-relaxed text-[#4a5565]">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaSection :cta="content.cta" />
  </div>
</template>
