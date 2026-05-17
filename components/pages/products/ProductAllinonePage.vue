<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { getProductPageContent } from '~/mocks/productPages';

defineProps<{ product: ProductDetail }>();

const page = getProductPageContent('allinone')!;
const descLines = (d?: string | string[]) => (d ? (Array.isArray(d) ? d : [d]) : []);
</script>

<template>
  <div class="bg-white">
    <ProductDarkHero :hero="page.hero" />

    <section id="services" class="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductSectionHeader
          badge="OUR SERVICES"
          heading="제공 서비스"
          sub="병원 마케팅의 모든 것을 전문성과 신뢰로 담았습니다"
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in page.cards?.services"
            :key="item.title"
            class="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg"
          >
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00bba7] to-[#009689] text-3xl shadow-md">
              {{ item.icon }}
            </div>
            <h3 class="font-bold text-[#101828]">{{ item.title }}</h3>
            <p v-for="line in descLines(item.desc)" :key="line" class="mt-1 text-sm text-[#4a5565]">{{ line }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="py-16 md:py-24"
      style="background: linear-gradient(154deg, #0f172b 0%, #162456 50%, #0f172b 100%)"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductSectionHeader
          badge="WHY WE NEED"
          heading="왜 올인원케어 서비스가 필요한가?"
          sub="병원 마케팅의 새로운 패러다임을 경험하세요"
          light
        />
        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in page.cards?.why"
            :key="item.title"
            class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00bba7] text-2xl">
              {{ item.icon }}
            </div>
            <h3 class="text-lg font-bold text-white">{{ item.title }}</h3>
            <p v-for="line in descLines(item.desc)" :key="line" class="mt-2 text-sm text-[#d1d5dc]">{{ line }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductSectionHeader
          badge="PROCESS"
          heading="올인원케어 서비스 프로세스"
          sub="체계적인 6단계 프로세스로 최상의 결과를 만들어냅니다"
        />
        <div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <article
            v-for="(item, i) in page.cards?.process"
            :key="item.title"
            class="rounded-2xl p-6 text-center text-white"
            :class="[
              i === 0 ? 'bg-[#00bba7]' : '',
              i === 1 ? 'bg-[#2b7fff]' : '',
              i === 2 ? 'bg-[#9810fa]' : '',
              i === 3 ? 'bg-[#e60076]' : '',
              i === 4 ? 'bg-[#fe9a00]' : '',
              i === 5 ? 'bg-[#00c950]' : '',
            ]"
          >
            <span class="text-2xl font-bold">{{ item.step }}</span>
            <h3 class="mt-2 font-bold">{{ item.title }}</h3>
            <p class="mt-1 text-xs opacity-90">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductSectionHeader
          badge="RECOMMENDED FOR"
          heading="이런 병원에 추천합니다"
          sub="전문가의 도움이 필요한 순간, 월드베스트가 함께합니다"
        />
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <article
            v-for="item in page.cards?.recommended"
            :key="item.title"
            class="flex gap-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-md"
          >
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00bba7] font-bold text-white">✓</span>
            <div>
              <h3 class="text-xl font-bold text-[#101828]">{{ item.title }}</h3>
              <p class="mt-2 text-[#4a5565]">{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <ProductGradientCta :cta="page.cta" />
  </div>
</template>
