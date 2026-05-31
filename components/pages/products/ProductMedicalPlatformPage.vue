<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { productMedicalPlatformMock as content } from '~/mocks/productMedicalPlatform';

defineProps<{ product: ProductDetail }>();

const openFaqIndex = ref<number | null>(null);

function toggleFaq(index: number) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
}
</script>

<template>
  <div>
    <!-- Hero: Figma 2:23 — text only -->
    <ProductHeroSection>
      <div class="product-hero-text">
        <div class="flex items-center gap-2">
          <img
            :src="content.hero.badgeIconSrc"
            alt=""
            class="size-8 shrink-0 object-contain"
            aria-hidden="true"
          >
          <span class="text-base font-semibold text-[#4eb0ad]">
            {{ content.hero.badge }}
          </span>
        </div>

        <h1 class="mt-[34px] text-4xl font-bold leading-tight text-white md:text-[55px] md:leading-[48px]">
          {{ content.hero.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.hero.titleHighlight }}</span>
        </h1>

        <p class="product-hero-subtitle mt-[22px]">
          {{ content.hero.subtitle }}
        </p>
      </div>
    </ProductHeroSection>

    <!-- Why -->
    <section class="bg-white py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <h2 class="text-center text-3xl font-bold md:text-4xl md:leading-10">
          {{ content.why.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.why.titleHighlight }}</span>
          {{ content.why.titleSuffix }}
        </h2>

        <div class="mt-12 grid gap-6 lg:grid-cols-2">
          <article
            v-for="card in content.why.cards"
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
            <p class="mt-4 text-base leading-6 text-[#364153]">
              <template
                v-for="(segment, index) in card.body"
                :key="`${card.title}-body-${index}`"
              >
                <span
                  v-if="segment.highlight"
                  class="font-bold text-[#4eb0ad]"
                >{{ segment.text }}</span>
                <span v-else>{{ segment.text }}</span>
              </template>
            </p>
            <p class="mt-3 text-sm leading-5 text-[#4a5565]">
              <template
                v-for="(segment, index) in card.footnote"
                :key="`${card.title}-footnote-${index}`"
              >
                <span
                  v-if="segment.highlight"
                  class="font-bold text-[#4eb0ad]"
                >{{ segment.text }}</span>
                <span v-else>{{ segment.text }}</span>
              </template>
            </p>
          </article>
        </div>

        <div class="mt-8 rounded-[14px] bg-[#4eb0ad]/10 px-8 py-8 text-center">
          <p class="text-lg leading-7 text-[#1e2939]">
            <span class="font-bold text-[#4eb0ad]">{{ content.why.conclusionPrefix }}</span>
            {{ content.why.conclusion }}
          </p>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="bg-[#f8f9fa] py-16 md:py-20">
      <div class="mobile-container max-w-6xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold md:text-4xl md:leading-10">
            <span class="text-[#4eb0ad]">{{ content.process.titleHighlight }}</span>
            <span class="text-[#0a0a0a]">{{ content.process.titleSuffix }}</span>
          </h2>
          <p class="mt-4 text-lg text-[#4a5565] md:text-lg md:leading-7">
            {{ content.process.subtitle }}
          </p>
        </div>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <article
            v-for="step in content.process.steps"
            :key="step.step"
            class="relative rounded-[14px] border border-[#4eb0ad]/15 bg-[#eef8f7] px-6 pb-8 pt-[102px] text-center shadow-[2px_2px_7.5px_rgba(78,176,173,0.2)]"
          >
            <div class="absolute -top-9 left-1/2 flex h-[182px] w-[182px] -translate-x-1/2 items-center justify-center">
              <img
                src="/images/products/medical-platform/step-bg.png"
                alt=""
                class="absolute inset-0 h-full w-full object-contain"
                aria-hidden="true"
              >
              <img
                :src="step.iconSrc"
                :alt="step.title"
                class="relative z-10 object-contain"
                :class="step.iconClass ?? 'h-[100px] w-[100px]'"
              >
            </div>
            <p class="text-lg font-semibold leading-7 text-[#4eb0ad]">
              STEP {{ step.step }}
            </p>
            <h3 class="text-lg font-semibold leading-7 text-[#0a0a0a]">
              {{ step.title }}
            </h3>
            <p
              v-for="line in step.description"
              :key="line"
              class="text-sm leading-5 text-[#4a5565]"
            >
              {{ line }}
            </p>
          </article>
        </div>

        <div class="mt-12 flex flex-wrap items-end justify-center gap-x-10 gap-y-8 md:gap-x-12 lg:flex-nowrap">
          <img
            v-for="partner in content.process.partners"
            :key="partner.name"
            :src="partner.src"
            :alt="partner.name"
            class="shrink-0 object-contain object-bottom"
            :class="partner.class"
          >
        </div>

        <div class="mt-8 flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-[90px]">
          <div
            v-for="pill in content.process.pills"
            :key="pill.text"
            class="relative flex min-h-[56px] w-full items-center rounded-[14px] py-4 pl-11 pr-6"
            :class="pill.widthClass"
            :style="{ backgroundImage: content.process.pillGradient }"
          >
            <img
              src="/images/products/medical-platform/icon-pill-check.svg"
              alt=""
              class="absolute left-3 top-1/2 h-8 w-8 -translate-y-1/2 object-contain"
              aria-hidden="true"
            >
            <p
              class="text-base text-white lg:text-xl lg:whitespace-nowrap"
              :class="pill.bold ? 'font-bold' : 'font-semibold'"
            >
              {{ pill.text }}
            </p>
          </div>
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
                src="/images/products/medical-platform/icon-check.svg"
                alt=""
                class="mt-1 h-6 w-6 shrink-0 object-contain"
                aria-hidden="true"
              >
              <div>
                <h4 class="font-semibold text-[#0a0a0a]">
                  {{ item.title }}
                </h4>
                <p
                  v-for="line in item.description"
                  :key="line"
                  class="text-sm leading-5 text-[#4a5565]"
                >
                  {{ line }}
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
        <h2 class="text-center text-3xl font-bold md:text-4xl md:leading-10">
          {{ content.effects.titlePrefix }}
          <span class="text-[#4eb0ad]">{{ content.effects.titleHighlight }}</span>
        </h2>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <div
            v-for="stat in content.effects.stats"
            :key="stat.label"
            class="text-center"
          >
            <p class="text-5xl font-bold leading-[48px] text-[#4eb0ad]">
              {{ stat.value }}
            </p>
            <p class="mt-2 text-base text-[#364153]">
              {{ stat.label }}
            </p>
          </div>
        </div>

        <h2 class="mt-16 text-center text-3xl font-bold text-[#0a0a0a] md:mt-20 md:text-4xl md:leading-10">
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
                src="/images/products/medical-platform/chevron-down.svg"
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
