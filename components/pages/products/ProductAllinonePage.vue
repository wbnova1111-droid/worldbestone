<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productAllinoneMock as content } from '~/mocks/productAllinone';

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
          <span class="text-[#00ffea]">{{ content.hero.titleHighlight }}</span>
        </h1>

        <p class="mt-6 max-w-3xl text-base leading-7 text-white md:text-xl md:leading-8">
          <span v-for="(line, index) in content.hero.descriptionLines" :key="line">
            {{ line }}<br v-if="index < content.hero.descriptionLines.length - 1">
          </span>
          <span class="text-[#00ffea]">{{ content.hero.descriptionHighlight }}</span>
        </p>
        </div>
      </div>
    </section>

    <!-- Strengths -->
    <section class="bg-white py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold md:text-[30px]">
          <span class="text-[#4eb0ad]">{{ content.strengths.titleHighlight }}</span>
          <span class="text-[#0a0a0a]">{{ content.strengths.titleSuffix }}</span>
        </h2>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="item in content.strengths.items"
            :key="item.title"
            class="rounded-[14px] bg-[#f8f9fa] px-8 py-8 text-center"
          >
            <img
              src="/images/products/allinone/check-circle.svg"
              alt=""
              class="mx-auto h-10 w-10 object-contain"
              aria-hidden="true"
            >
            <h3 class="mt-6 text-xl font-semibold text-[#0a0a0a]">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-base leading-6 text-[#364153]">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Included Services -->
    <section class="bg-[#f8f9fa] py-16 md:py-20">
      <div class="mobile-container max-w-5xl">
        <h2 class="text-center text-3xl font-bold text-[#0a0a0a] md:text-[30px]">
          {{ content.includedServices.title }}
        </h2>

        <div class="mt-12 grid gap-4 md:grid-cols-2">
          <div
            v-for="item in content.includedServices.items"
            :key="item"
            class="flex items-center gap-4 rounded-[10px] bg-white px-4 py-4"
          >
            <img
              src="/images/products/allinone/check.svg"
              alt=""
              class="h-6 w-6 shrink-0 object-contain"
              aria-hidden="true"
            >
            <span class="text-base text-[#364153]">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white py-16 md:py-20">
      <div class="mobile-container max-w-3xl">
        <h2 class="text-center text-3xl font-bold text-[#0a0a0a] md:text-[30px]">
          자주 묻는 질문
        </h2>

        <div class="mt-12 space-y-4">
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
                src="/images/products/allinone/chevron-down.svg"
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
