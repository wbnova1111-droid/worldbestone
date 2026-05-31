<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productOfflineMock as content } from '~/mocks/productOffline';

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
      <div class="mobile-container">
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

        <h1 class="mt-6 text-4xl font-bold leading-tight text-white md:text-[50px] md:leading-[1.3]">
          {{ content.hero.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.hero.titleHighlight }}</span>
        </h1>

        <p class="product-hero-subtitle mt-6">
          {{ content.hero.subtitle }}
        </p>
        </div>
      </div>
    </section>

    <!-- Branding -->
    <section class="bg-[#f1f8f7] py-16 md:py-20">
      <div class="mobile-container max-w-4xl">
        <h2 class="text-center text-3xl font-bold text-[#4eb0ad] md:text-[45px] md:leading-tight">
          {{ content.branding.title }}
        </h2>

        <p class="mt-6 text-center text-lg leading-[1.5] text-[#292929] md:text-xl">
          <span
            v-for="(line, index) in content.branding.description"
            :key="line"
          >
            {{ line }}<br v-if="index < content.branding.description.length - 1">
          </span>
        </p>

        <article class="mx-auto mt-12 max-w-lg rounded-[14px] bg-[#f8f9fa] px-8 py-8">
          <h3 class="text-center text-xl font-semibold text-[#0a0a0a]">
            {{ content.branding.card.title }}
          </h3>
          <ul class="mt-4 space-y-2">
            <li
              v-for="item in content.branding.card.items"
              :key="item"
              class="flex items-start gap-3"
            >
              <img
                src="/images/products/offline/icon-check.svg"
                alt=""
                class="mt-0.5 h-5 w-5 shrink-0 object-contain"
                aria-hidden="true"
              >
              <span class="text-base text-[#364153]">{{ item }}</span>
            </li>
          </ul>
        </article>

        <div
          class="mx-auto mt-10 max-w-3xl rounded-[14px] px-8 py-8 text-center"
          :style="{ backgroundImage: content.branding.pillGradient }"
        >
          <h3 class="text-xl font-bold text-white">
            {{ content.branding.experience.title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-white">
            {{ content.branding.experience.textPrefix }}
            <span class="font-bold text-[#00ffea]">{{ content.branding.experience.textHighlight }}</span>
            {{ content.branding.experience.textSuffix }}
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white py-16 md:py-20">
      <div class="mobile-container max-w-3xl">
        <h2 class="text-center text-3xl font-bold text-[#0a0a0a]">
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
                src="/images/products/offline/chevron-down.svg"
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
