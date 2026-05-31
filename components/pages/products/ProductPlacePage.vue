<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productPlaceMock as content } from '~/mocks/productPlace';

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
          <span class="ml-5 text-[#4eb0ad]">{{ content.hero.titleHighlight }}</span>{{ content.hero.titleSuffix }}
        </h1>

        <p class="mt-6 max-w-3xl text-xl leading-8 text-[#d1d5dc] md:text-2xl">
          {{ content.hero.subtitlePrefix }}
          <span class="font-bold text-[#4eb0ad]">{{ content.hero.subtitleHighlight }}</span>
          {{ content.hero.subtitleSuffix }}
        </p>
        </div>
      </div>
    </section>

    <!-- Importance -->
    <section class="bg-white py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold md:text-4xl">
          {{ content.importance.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.importance.titleHighlight }}</span>
          {{ content.importance.titleSuffix }}
        </h2>

        <div class="mt-12 grid gap-6 lg:grid-cols-2">
          <article
            v-for="card in content.importance.cards"
            :key="card.title"
            class="rounded-[14px] bg-[#f8f9fa] p-8"
          >
            <div class="flex items-start gap-3">
              <img
                :src="card.iconSrc"
                alt=""
                class="h-8 w-8 shrink-0 object-contain"
                aria-hidden="true"
              >
              <h3 class="text-xl font-semibold text-[#0a0a0a]">
                {{ card.title }}
              </h3>
            </div>
            <p
              v-for="paragraph in card.paragraphs"
              :key="paragraph"
              class="mt-4 text-base leading-6 text-[#364153]"
            >
              {{ paragraph }}
            </p>
            <p
              v-if="card.highlight"
              class="mt-3 text-base leading-6 text-[#364153]"
            >
              {{ card.highlight.before }}
              <span class="font-bold text-[#4eb0ad]">{{ card.highlight.emphasis }}</span>
              {{ card.highlight.after }}
            </p>
          </article>
        </div>

        <div class="mt-8 rounded-[14px] bg-[#4eb0ad]/10 px-8 py-8 text-center">
          <p class="text-lg leading-7 text-[#1e2939]">
            <span class="font-bold text-[#4eb0ad]">{{ content.importance.conclusionPrefix }}</span>
            {{ content.importance.conclusion }}
          </p>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="bg-[#f8f9fa] py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold md:text-4xl">
          <span
            class="bg-clip-text text-transparent"
            :style="{ backgroundImage: content.process.titleGradient }"
          >
            {{ content.process.titleHighlight }}
          </span>
          <span class="text-[#0a0a0a]">{{ content.process.titleSuffix }}</span>
        </h2>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in content.process.steps"
            :key="item.step"
            class="rounded-[14px] bg-white p-6"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#4eb0ad] text-xl font-bold text-white">
              {{ item.step }}
            </div>
            <h3 class="mt-6 text-lg font-semibold text-[#0a0a0a]">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-5 text-[#4a5565]">
              {{ item.description }}
            </p>
          </article>
        </div>

        <div class="mt-8 rounded-[14px] bg-white px-8 py-8">
          <h3 class="text-center text-2xl font-bold text-[#0a0a0a]">
            {{ content.process.differentiation.title }}
          </h3>
          <div class="mt-8 grid gap-8 md:grid-cols-3">
            <div
              v-for="item in content.process.differentiation.items"
              :key="item.title"
              class="flex gap-3"
            >
              <img
                src="/images/products/place/icon-check.svg"
                alt=""
                class="mt-1 h-6 w-6 shrink-0 object-contain"
                aria-hidden="true"
              >
              <div>
                <h4 class="font-semibold text-[#0a0a0a]">
                  {{ item.title }}
                </h4>
                <p class="mt-1 text-sm text-[#4a5565]">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Effects & FAQ -->
    <section class="bg-white py-16 md:py-20">
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
                src="/images/products/place/chevron-down.svg"
                alt=""
                class="h-5 w-5 shrink-0 object-contain transition-transform"
                :class="openFaqIndex === index ? 'rotate-180' : ''"
                aria-hidden="true"
              >
            </button>
            <div
              v-show="openFaqIndex === index"
              class="border-t border-[#e5e7eb] bg-[#f8f9fa] px-6 py-4"
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
