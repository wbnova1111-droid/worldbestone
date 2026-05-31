<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productSnsMock as content } from '~/mocks/productSns';

defineProps<{ product: ProductDetail }>();

const introScene = content.intro.scene;
const mockupCrop = content.intro.mockup.imageCrop;
</script>

<template>
  <div>
    <!-- Hero: Figma 1:3236 / 59:177 — network 59:249 (342×342) -->
    <ProductHeroSection>
      <div class="product-hero-text lg:pt-2">
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

        <h1 class="mt-3.5 text-3xl font-bold leading-tight whitespace-nowrap text-white sm:text-4xl md:text-[60px] md:leading-[60px]">
          {{ content.hero.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.hero.titleHighlight }}</span>
        </h1>

        <p class="product-hero-subtitle mt-5">
          {{ content.hero.subtitle }}
        </p>
      </div>
    </ProductHeroSection>

    <!-- Intro: Figma 1:3244 title + layout 59:262, 59:251, 59:273 -->
    <section class="bg-white pt-16 md:pt-20">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold text-[#48aaa9] md:text-[40px] md:leading-tight">
          {{ content.intro.title }}
        </h2>
      </div>

      <div class="mobile-container relative mt-10 max-w-6xl pb-16 md:mt-12 md:pb-20 lg:pb-24">
        <!-- Mobile / tablet: stacked -->
        <div class="space-y-6 lg:hidden">
          <article
            v-for="feature in content.intro.features"
            :key="feature.nodeId"
            class="overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white shadow-[0_20px_12.5px_rgba(0,0,0,0.1),0_8px_5px_rgba(0,0,0,0.1)]"
          >
            <div class="h-1 bg-gradient-to-r from-[#00bba7] to-[#2b7fff]" />
            <div class="flex gap-6 p-8 pt-10">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl text-white shadow-[0_10px_7.5px_rgba(0,0,0,0.1),0_4px_3px_rgba(0,0,0,0.1)]"
                :style="{ backgroundImage: content.intro.checkGradient }"
                aria-hidden="true"
              >
                ✓
              </div>
              <div>
                <h3 class="text-xl font-bold tracking-tight text-[#101828]">
                  {{ feature.number }} {{ feature.title }}
                </h3>
                <p
                  v-for="line in feature.description"
                  :key="line"
                  class="text-base leading-[26px] text-[#4a5565]"
                >
                  {{ line }}
                </p>
              </div>
            </div>
          </article>

          <div
            class="relative mx-auto w-full max-w-[360px]"
            :style="{ aspectRatio: `${content.intro.mockup.width} / ${content.intro.mockup.height}` }"
          >
            <img
              :src="content.intro.mockup.src"
              alt="주요 SNS 채널 운영 예시"
              class="absolute max-w-none"
              :style="{
                width: mockupCrop.width,
                height: mockupCrop.height,
                top: mockupCrop.top,
                left: mockupCrop.left,
              }"
            >
          </div>
        </div>

        <!-- Desktop: Figma absolute scene (1560×880 reference) -->
        <div
          class="relative mx-auto hidden w-full lg:block"
          :style="{ aspectRatio: `${introScene.width} / ${introScene.height}` }"
        >
          <div
            class="absolute left-0 top-0 origin-top-left scale-[0.615384] xl:scale-[0.769231]"
            :style="{
              width: `${introScene.width}px`,
              height: `${introScene.height}px`,
            }"
          >
            <!-- Mockup 59:262 with imgSns1 crop -->
            <div
              class="pointer-events-none absolute"
              :style="{
                left: `${content.intro.mockup.left}px`,
                top: `${content.intro.mockup.top}px`,
                width: `${content.intro.mockup.width}px`,
                height: `${content.intro.mockup.height}px`,
              }"
            >
              <img
                :src="content.intro.mockup.src"
                alt="주요 SNS 채널 운영 예시"
                class="absolute max-w-none"
                :style="{
                  width: mockupCrop.width,
                  height: mockupCrop.height,
                  top: mockupCrop.top,
                  left: mockupCrop.left,
                }"
              >
            </div>

            <article
              v-for="feature in content.intro.features"
              :key="feature.nodeId"
              class="absolute overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white shadow-[0_20px_12.5px_rgba(0,0,0,0.1),0_8px_5px_rgba(0,0,0,0.1)]"
              :style="{
                left: `${feature.left}px`,
                top: `${feature.top}px`,
                width: `${feature.width}px`,
                height: `${feature.height}px`,
              }"
            >
              <div class="h-1 bg-gradient-to-r from-[#00bba7] to-[#2b7fff]" />
              <div class="flex gap-6 px-10 pb-8 pt-10">
                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl text-white shadow-[0_10px_7.5px_rgba(0,0,0,0.1),0_4px_3px_rgba(0,0,0,0.1)]"
                  :style="{ backgroundImage: content.intro.checkGradient }"
                  aria-hidden="true"
                >
                  ✓
                </div>
                <div class="min-w-0">
                  <h3 class="text-xl font-bold tracking-tight text-[#101828]">
                    {{ feature.number }} {{ feature.title }}
                  </h3>
                  <p
                    v-for="line in feature.description"
                    :key="line"
                    class="text-base leading-[26px] text-[#4a5565]"
                  >
                    {{ line }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Process: Figma 59:293 — cards 175×220 -->
    <section class="bg-[#f8f9fa] pt-16 pb-16 md:pt-20 md:pb-20">
      <div class="mobile-container max-w-6xl">
        <div class="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:gap-[29px] md:overflow-visible md:pb-0">
          <article
            v-for="step in content.process.steps"
            :key="step.title"
            class="relative shrink-0 rounded-[14px] bg-white text-center md:w-auto"
            :style="{ height: `${content.process.cardHeight}px`, width: `${step.width}px` }"
          >
            <div
              class="absolute left-1/2 top-6 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#4eb0ad] text-xl font-bold text-white"
              aria-hidden="true"
            >
              ▼
            </div>
            <h3 class="absolute left-1/2 top-[88px] w-full -translate-x-1/2 text-lg font-semibold leading-7 text-[#0a0a0a]">
              {{ step.title }}
            </h3>
            <p class="absolute left-1/2 top-[124px] w-full -translate-x-1/2 px-2 text-sm leading-5 text-[#4a5565]">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaSection :cta="content.cta" />
  </div>
</template>
