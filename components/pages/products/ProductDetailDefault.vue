<script setup lang="ts">
import type { ProductDetail } from '~/types/product';

defineProps<{
  product: ProductDetail;
}>();
</script>

<template>
  <div>
    <section class="relative bg-gray-900 py-20 text-white md:py-28">
      <img :src="product.heroImage" :alt="product.title" class="absolute inset-0 h-full w-full object-cover opacity-40">
      <div class="absolute inset-0 bg-gray-900/60" />
      <div class="mobile-container relative z-10 text-center">
        <p class="text-sm font-bold uppercase tracking-widest text-brand-300">{{ product.subtitle }}</p>
        <h1 class="mt-3 text-3xl font-black md:text-5xl">{{ product.title }}</h1>
        <p class="mt-4 text-lg text-gray-300">{{ product.description }}</p>
      </div>
    </section>

    <section class="bg-brand-50 py-16">
      <div class="mobile-container grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <SectionBadge :label="product.subtitle" />
          <h2 class="mt-4 text-2xl font-black text-gray-950 md:text-4xl">{{ product.mainTitle }}</h2>
          <p class="mt-4 text-base font-medium leading-7 text-gray-600">{{ product.mainDesc }}</p>
        </div>
        <div class="rounded-3xl bg-white p-8 text-center shadow-soft">
          <div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-100 text-3xl">✓</div>
          <p class="mt-4 font-bold text-gray-800">전문 서비스</p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mobile-container">
        <SectionHeading badge="FEATURES" title="주요 기능" center />
        <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <article v-for="feature in product.features" :key="feature.title" class="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
            <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">✓</div>
            <h3 class="font-bold text-gray-950">{{ feature.title }}</h3>
            <p class="mt-1 text-xs font-medium text-gray-500">{{ feature.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-gray-950 py-16 text-white">
      <div class="mobile-container">
        <SectionHeading badge="BENEFITS" title="핵심 효과" center light />
        <div class="mt-10 grid gap-4 md:grid-cols-3">
          <ValueCard
            v-for="(benefit, index) in product.benefits"
            :key="benefit.title"
            :icon="String(index + 1)"
            :title="benefit.title"
            :description="benefit.desc"
            dark
          />
        </div>
      </div>
    </section>

    <PageCta
      :title="`성공적인 ${product.title}, 지금 시작하세요`"
      :description="`무료 상담으로 맞춤형 ${product.title} 전략을 받아보세요.`"
    />
  </div>
</template>
