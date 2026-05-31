<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productYoutubeMock as content } from '~/mocks/productYoutube';

defineProps<{ product: ProductDetail }>();

const openFaqIndex = ref<number | null>(null);

function toggleFaq(index: number) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
}
</script>

<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-[#1a2530] py-16 md:py-20">
      <div class="mobile-container relative z-10">
        <div class="product-hero-text">
        <div class="flex items-center gap-2">
          <img
            :src="content.hero.badgeIconSrc"
            alt=""
            class="h-8 w-8 shrink-0 object-contain"
            aria-hidden="true"
          >
          <span class="text-base font-semibold text-[#4eb0ad]">
            {{ content.hero.badge }}
          </span>
        </div>

        <h1 class="mt-6 text-3xl font-bold leading-tight whitespace-nowrap text-white sm:text-4xl md:text-5xl md:leading-[1.2]">
          <span>{{ content.hero.titleLine1 }}</span>
          <span class="text-[#4eb0ad]">{{ content.hero.titleHighlight }}</span>
        </h1>

        <p class="product-hero-subtitle mt-6">
          {{ content.hero.subtitle }}
        </p>
        </div>
      </div>
    </section>

    <!-- Intro & Features -->
    <section class="bg-white py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold leading-snug text-[#0a0a0a] md:text-4xl md:leading-[1.3]">
            <span class="block">{{ content.intro.titleLine1 }}</span>
            <span class="block">
              {{ content.intro.titleLine2Prefix }}
              <span class="text-[#2c9f9c]">{{ content.intro.titleHighlight }}</span>
              {{ content.intro.titleLine2Suffix }}
            </span>
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-lg leading-7 text-[#0a0a0a] md:text-xl">
            {{ content.intro.description }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <article
            v-for="feature in content.features"
            :key="feature.title"
            class="rounded-[14px] bg-[#f8f9fa] p-8"
          >
            <h3 class="text-xl font-semibold text-[#0d7877]">
              {{ feature.title }}
            </h3>
            <p class="mt-4 text-base leading-6 text-[#364153]">
              {{ feature.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="bg-[#f8f9fa] py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <div class="text-center">
          <p class="text-2xl text-[#292929] md:text-3xl">
            <span>{{ content.process.titleParts[0] }}</span>
            <span class="mx-1">·</span>
            <span>{{ content.process.titleParts[1] }}</span>
            <span class="mx-1">·</span>
            <span>{{ content.process.titleParts[2] }}</span>
          </p>
          <h2 class="mt-2 text-4xl font-bold text-[#292929] md:text-5xl">
            {{ content.process.titleMain }}
          </h2>
        </div>

        <div class="mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible">
          <article
            v-for="step in content.process.steps"
            :key="step.step"
            class="w-[250px] shrink-0 rounded-[14px] border border-[#eee] bg-white p-6 text-center shadow-[0_4px_2px_rgba(0,0,0,0.25)] md:w-auto"
          >
            <div class="mx-auto flex h-40 w-40 items-center justify-center">
              <img
                :src="step.imageSrc"
                :alt="step.title"
                class="max-h-full max-w-full object-contain"
              >
            </div>
            <div class="mx-auto mt-4 flex h-11 w-[125px] items-center justify-center rounded-full bg-[#4eb0ad] text-xl font-bold text-white">
              STEP {{ step.step }}
            </div>
            <h3 class="mt-4 text-lg font-semibold text-[#0a0a0a]">
              {{ step.title }}
            </h3>
            <p class="mt-3 text-sm leading-5 text-[#4a5565]">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Urgency -->
    <section class="bg-[#27d8ce] py-16 md:py-24">
      <div class="mobile-container max-w-6xl">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 class="text-4xl font-black leading-tight text-black md:text-6xl md:leading-[1.2]">
              {{ content.urgency.titlePrefix }}
              <span class="text-white">{{ content.urgency.titleHighlight }}</span>
            </h2>

            <ul class="mt-12 space-y-10">
              <li
                v-for="(point, index) in content.urgency.points"
                :key="index"
                class="flex gap-4"
              >
                <img
                  :src="point.iconSrc"
                  alt=""
                  class="h-20 w-20 shrink-0 object-contain"
                  aria-hidden="true"
                >
                <p v-if="point.textLine1" class="text-xl leading-relaxed text-[#292929] md:text-2xl">
                  <span class="block font-medium">{{ point.textLine1 }}</span>
                  <span class="block font-black">{{ point.textHighlight }}</span>
                </p>
                <p v-else class="text-xl leading-relaxed text-[#292929] md:text-2xl">
                  {{ point.textBefore }}
                  <span class="font-black">{{ point.textHighlight }}</span>
                  {{ point.textAfter }}
                </p>
              </li>
            </ul>
          </div>

          <div class="hidden justify-center lg:flex">
            <img
              :src="content.urgency.messageSrc"
              alt=""
              class="max-w-md object-contain"
              aria-hidden="true"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Effects & FAQ -->
    <section class="bg-[#f8f9fa] py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold md:text-4xl">
          {{ content.effects.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.effects.titleHighlight }}</span>
        </h2>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <div
            v-for="stat in content.effects.stats"
            :key="stat.label"
            class="text-center"
          >
            <p class="text-5xl font-bold text-[#4eb0ad]">
              {{ stat.value }}
            </p>
            <p class="mt-2 text-base text-[#364153]">
              {{ stat.label }}
            </p>
          </div>
        </div>

        <h2 class="mt-20 text-center text-3xl font-bold text-[#0a0a0a] md:text-4xl">
          자주 묻는 질문
        </h2>

        <div class="mx-auto mt-12 max-w-3xl space-y-4">
          <article
            v-for="(item, index) in content.faq"
            :key="item.q"
            class="overflow-hidden rounded-[10px] border border-[#e5e7eb]"
          >
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 bg-white px-6 py-4 text-left"
              :aria-expanded="openFaqIndex === index"
              @click="toggleFaq(index)"
            >
              <span class="text-base font-semibold text-[#0a0a0a]">{{ item.q }}</span>
              <img
                src="/images/products/youtube/chevron-down.svg"
                alt=""
                class="h-5 w-5 shrink-0 object-contain transition-transform"
                :class="openFaqIndex === index ? 'rotate-180' : ''"
                aria-hidden="true"
              >
            </button>
            <div
              v-show="openFaqIndex === index"
              class="border-t border-[#e5e7eb] bg-white px-6 py-4"
            >
              <p class="text-base leading-6 text-[#364153]">{{ item.a }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaSection :cta="content.cta" />
  </div>
</template>
