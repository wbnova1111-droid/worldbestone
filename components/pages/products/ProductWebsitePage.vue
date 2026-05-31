<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productWebsiteMock as content } from '~/mocks/productWebsite';

defineProps<{ product: ProductDetail }>();
</script>

<template>
  <div>
    <!-- Hero -->
    <ProductHeroSection>
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

        <h1 class="mt-4 text-3xl font-bold leading-tight whitespace-nowrap text-white sm:text-4xl md:text-[60px] md:leading-[75px]">
          <span>{{ content.hero.titleLine1 }}</span>
          <span class="text-[#4eb0ad]">{{ content.hero.titleLine2 }}</span>
        </h1>

        <p class="product-hero-subtitle mt-4">
          {{ content.hero.subtitle }}
        </p>
      </div>
    </ProductHeroSection>

    <!-- Intro -->
    <section class="bg-[#f8ffff] py-16 md:py-20 lg:pb-24">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold leading-tight md:text-[40px] md:leading-[55px]">
          <span class="block text-[#4eb0ad]">{{ content.intro.titleTeal }}</span>
          <span class="block text-[#292929]">{{ content.intro.titleDark }}</span>
        </h2>

        <div class="mx-auto mt-8 max-w-4xl text-center text-xl leading-9 text-[#0a0a0a] md:text-[25px] md:leading-9">
          <p
            v-for="paragraph in content.intro.paragraphs"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="relative mx-auto mt-12 max-w-5xl lg:mt-16">
          <img
            :src="content.intro.mockupSrc"
            alt="반응형 병원 홈페이지 예시"
            class="mx-auto w-full object-contain shadow-[5px_5px_30px_rgba(0,0,0,0.35)]"
          >
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <img
            v-for="card in content.intro.cards"
            :key="card.src"
            :src="card.src"
            :alt="card.alt"
            class="mx-auto w-full max-w-[320px] object-contain"
          >
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaSection :cta="content.cta" />
  </div>
</template>
