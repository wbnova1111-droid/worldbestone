<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productAiStrategyMock as content } from '~/mocks/productAiStrategy';

defineProps<{ product: ProductDetail }>();
</script>

<template>
  <div>
    <!-- Hero: Figma 1:3064 — text only -->
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

        <h1 class="mt-4 text-3xl font-bold leading-tight whitespace-nowrap text-white sm:text-4xl md:text-[48px] md:leading-[60px]">
          <span>{{ content.hero.titleLine1 }}</span>
          <span class="text-[#4eb0ad]">{{ content.hero.titleLine2 }}</span>
        </h1>

        <p class="product-hero-subtitle mt-4">
          {{ content.hero.subtitle }}
        </p>
      </div>
    </ProductHeroSection>

    <!-- Intro -->
    <section class="bg-[#f6f6f6] py-16 md:py-20 lg:pb-24">
      <div class="mobile-container max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-[#48aaa9] md:text-[35px] md:leading-9">
          {{ content.intro.titleTeal }}
        </h2>
        <p class="mt-4 text-2xl font-bold text-[#0a0a0a] md:text-[30px] md:leading-9">
          {{ content.intro.titleDark }}
        </p>

        <p class="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#0a0a0a] md:text-xl md:leading-9">
          {{ content.intro.descriptionPrefix }}
          <br>
          <span class="text-[#007874]">{{ content.intro.descriptionHighlight }}</span>
        </p>

        <BaseButton
          class="mt-8 !rounded-full !bg-[#4eb0ad] !px-8 !py-3 !text-base hover:!opacity-90"
          :link="content.intro.consultation"
          show-arrow
        />

        <div class="mx-auto mt-12 max-w-md lg:mt-16">
          <img
            :src="content.intro.mockupSrc"
            alt="AI 검색 환경 예시"
            class="mx-auto w-full object-contain"
          >
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaSection :cta="content.cta" />
  </div>
</template>
