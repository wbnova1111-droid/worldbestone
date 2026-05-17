<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { getProductPageContent } from '~/mocks/productPages';

defineProps<{ product: ProductDetail }>();

const page = getProductPageContent('website')!;
</script>

<template>
  <div class="bg-gradient-to-b from-[#162456] via-[#1c398e] to-black text-white">
    <ProductDarkHero :hero="page.hero" />

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center text-3xl font-bold md:text-4xl">왜 병원 홈페이지가 필요한가?</h2>
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <article
            v-for="item in [
              { icon: '📱', t: '첫인상 결정', d: '환자가 병원을 처음 접하는 온라인 창구' },
              { icon: '✍️', t: '정보 제공', d: '진료 안내와 의료진 소개' },
              { icon: '📷', t: '브랜드 구축', d: '병원만의 정체성 확립' },
              { icon: '⚙️', t: '예약 및 상담', d: '온라인 예약 시스템 제공' },
            ]"
            :key="item.t"
            class="flex gap-4 rounded-2xl border border-[#2b7fff]/30 bg-[#1c398e]/30 p-6"
          >
            <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#155dfc] text-2xl">{{ item.icon }}</span>
            <div>
              <h3 class="text-lg font-bold">{{ item.t }}</h3>
              <p class="mt-1 text-[#d1d5dc]">{{ item.d }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-black/30 py-16 md:py-24">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center text-3xl font-bold">홈페이지의 핵심 요소</h2>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="item in [
              { icon: '🛡️', t: '보안 및 안정성', d: '안전한 환자 정보 보호' },
              { icon: '🔍', t: 'SEO 최적화', d: '검색 엔진 상위 노출' },
              { icon: '💻', t: '반응형 디자인', d: '모든 기기에 최적화' },
            ]"
            :key="item.t"
            class="rounded-2xl border border-[#2b7fff] bg-[#1c398e]/50 p-8 text-center"
          >
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#155dfc] text-3xl">{{ item.icon }}</div>
            <h3 class="font-bold">{{ item.t }}</h3>
            <p class="mt-2 text-sm text-[#d1d5dc]">{{ item.d }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center text-3xl font-bold">제작 후 운영 프로세스</h2>
        <div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <article
            v-for="(item, i) in [
              { icon: '📋', t: '상담 및 기획' },
              { icon: '🎨', t: '디자인 제작' },
              { icon: '⚙️', t: '개발 및 구축' },
              { icon: '🔧', t: '관리 및 유지보수' },
            ]"
            :key="item.t"
            class="rounded-2xl p-6 text-center"
            :class="[i === 0 ? 'bg-[#155dfc]' : i === 1 ? 'bg-[#9810fa]' : i === 2 ? 'bg-[#e60076]' : 'bg-[#009689]']"
          >
            <p class="text-3xl">{{ item.icon }}</p>
            <p class="mt-2 font-bold">{{ item.t }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-r from-[#1c398e] to-[#162456] py-16 text-center">
      <h2 class="text-3xl font-bold md:text-4xl">
        홈페이지는<br>병원의 신뢰와 브랜드를 담는 핵심입니다
      </h2>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-[#d1d5dc]">
        전문적인 홈페이지로 환자에게 신뢰를 주고 병원의 가치를 효과적으로 전달하세요
      </p>
    </section>

    <ProductGradientCta :cta="page.cta" />
  </div>
</template>
