<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { getProductPageContent } from '~/mocks/productPages';

defineProps<{ product: ProductDetail }>();

const page = getProductPageContent('offline')!;
</script>

<template>
  <div class="bg-white">
    <ProductDarkHero :hero="page.hero" />

    <section class="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductSectionHeader badge="FEATURES" heading="주요 기능" />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in page.cards?.features"
            :key="item.title"
            class="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg"
          >
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00bba7] to-[#009689] text-2xl font-bold text-white">
              {{ item.icon }}
            </div>
            <h3 class="text-lg font-bold text-[#101828]">{{ item.title }}</h3>
            <p class="mt-2 text-[#4a5565]">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="py-16 md:py-24"
      style="background: linear-gradient(170deg, #0f172b 0%, #162456 50%, #0f172b 100%)"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductSectionHeader badge="BENEFITS" heading="핵심 효과" light />
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="item in page.cards?.benefits"
            :key="item.title"
            class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
            <p class="mt-4 text-[#d1d5dc]">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <ProductGradientCta :cta="page.cta" />
  </div>
</template>
