<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productBlogMock as content } from '~/mocks/productBlog';

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

    <!-- Value -->
    <section class="bg-white py-16 md:py-24">
      <div class="mobile-container max-w-5xl">
        <h2 class="text-center text-2xl font-bold leading-snug text-[#0a0a0a] md:text-3xl md:leading-[1.4]">
          {{ content.value.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.value.titleHighlight }}</span>
          <span class="whitespace-pre-line">{{ content.value.titleSuffix }}</span>
        </h2>

        <p class="mx-auto mt-8 max-w-3xl text-center text-lg leading-7 text-[#0a0a0a] md:text-xl">
          {{ content.value.description }}
        </p>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="card in content.value.cards"
            :key="card.title"
            class="rounded-[14px] px-8 py-8 text-center text-white"
            :style="{ backgroundImage: card.gradient }"
          >
            <h3 class="text-xl font-semibold">
              {{ card.title }}
            </h3>
            <p class="mt-4 text-base leading-6">
              {{ card.description }}
            </p>
          </article>
        </div>

        <div
          class="relative mx-auto mt-16 w-full max-w-[1002px] overflow-hidden"
          :style="{ aspectRatio: `${content.value.mockup.width} / ${content.value.mockup.height}` }"
        >
          <img
            :src="content.value.mockup.src"
            alt="블로그 홈페이지형 예시"
            class="absolute max-w-none"
            :style="{
              width: content.value.mockup.imageCrop.width,
              height: content.value.mockup.imageCrop.height,
              top: content.value.mockup.imageCrop.top,
              left: content.value.mockup.imageCrop.left,
            }"
          >
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-[#f8f9fa] py-16 md:py-20">
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
                src="/images/products/blog/chevron-down.svg"
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
