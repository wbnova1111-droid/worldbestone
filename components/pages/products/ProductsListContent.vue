<script setup lang="ts">
import type { ProductListItem } from '~/types/product';

defineProps<{
  products: ProductListItem[];
}>();
</script>

<template>
  <div>
    <PageHero dark badge="MARKETING SERVICES" title="마케팅 서비스" description="병원의 성장을 위한 프리미엄 마케팅 솔루션" />

    <section class="bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-24">
      <div class="mobile-container">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="product in products"
            :key="product.slug"
            class="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft"
          >
            <h3 class="text-xl font-black text-gray-950 group-hover:text-brand-600">{{ product.title }}</h3>
            <p class="mt-3 text-sm font-medium leading-6 text-gray-600">{{ product.description }}</p>
            <ul class="mt-6 space-y-2">
              <li v-for="feature in product.features" :key="feature" class="flex gap-2 text-sm text-gray-600">
                <span class="text-brand-600">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink
              :to="`/products/${product.slug}`"
              class="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-blue-600 py-3 text-sm font-bold text-white"
            >
              자세히 보기
              <span>→</span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <PageCta title="어떤 서비스가 필요하신가요?" description="전문 상담을 통해 병원에 최적화된 맞춤형 솔루션을 제안해드립니다." />
  </div>
</template>
