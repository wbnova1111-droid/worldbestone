<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { getProductPageContent } from '~/mocks/productPages';

defineProps<{ product: ProductDetail }>();

const page = getProductPageContent('place')!;
</script>

<template>
  <div class="bg-white">
    <ProductDarkHero :hero="page.hero" />

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <div class="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-gray-100">
          <span class="text-4xl font-black text-[#009689]">80%</span>
        </div>
        <h2 class="text-3xl font-bold text-[#101828] md:text-4xl">
          "고객의 80%는<br><span class="text-[#009689]">네이버 지도</span>로 검색합니다."
        </h2>
        <p class="mt-6 text-lg text-[#4a5565]">
          고객은 병원을 찾아오기 전 우선 병원의 위치에 대한 정보가 먼저입니다.
        </p>
        <p class="mt-4 font-bold text-[#009689]">네이버 플레이스는 이제 선택이 아닌 필수입니다.</p>
      </div>
    </section>

    <section class="bg-gradient-to-b from-white to-brand-50 py-16 md:py-24">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <span class="inline-flex rounded-full bg-[#009689] px-5 py-2 text-sm font-bold text-white">플레이스 최적화</span>
        <h2 class="mt-6 text-3xl font-bold text-[#101828] md:text-4xl">
          플레이스 첫 페이지<br>저희가 만들어 드리겠습니다.
        </h2>
        <div class="mx-auto mt-10 max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
          <p class="font-bold text-gray-800">○○○병원</p>
          <div class="mt-4 flex h-24 items-end justify-center gap-1">
            <div v-for="h in [30, 45, 60, 80, 100]" :key="h" class="w-6 rounded-t bg-[#00c950]" :style="{ height: `${h}%` }" />
          </div>
          <span class="mt-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-gray-900">TOP</span>
        </div>
        <p class="mt-8 text-lg font-bold text-[#009689]">진짜 고객이 찾아오는 플레이스를 설계하세요.</p>
      </div>
    </section>

    <section class="bg-gradient-to-r from-[#009689] to-[#00786f] py-16 text-white md:py-24">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-3xl font-bold md:text-4xl">
          지금 우리 병원은<br><span class="text-yellow-300">몇 위에 노출</span>되고 있나요?
        </h2>
        <p class="mt-6 text-lg text-white/90">
          플레이스 순위는 매일 수시로 변동됩니다. 저희가 직접 실시간으로 순위 체크를 해드립니다.
        </p>
        <div class="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
          <span class="font-bold text-green-300">N</span>
          <span class="flex-1 text-left text-sm">네이버 지도에서 내 병원 위치 확인</span>
          <span>📍</span>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-blue-950 to-slate-900 py-16 text-white md:py-24">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-3xl font-bold md:text-4xl">
          수많은 대행사 중<br><span class="text-yellow-300">왜 월드베스트를</span><br>선택해야 할까요?
        </h2>
        <div class="mt-8 space-y-4 text-lg text-white/90">
          <p>같은 순위더라도 단순 광고처럼 보이는것이 아닌, 정말 환자가 유입되었던 흔적을 남기는것.</p>
          <p>얼마나 더 진심으로 내 병원이라고 생각하며 작업을 하는것은 후에 큰 차이로 들어납니다.</p>
        </div>
        <p class="mt-8 rounded-2xl bg-yellow-400 px-6 py-4 text-lg font-bold text-gray-900">
          저희 월드베스트는 진심 하나로 그 차이를 만듭니다.
        </p>
        <p class="mt-4 text-brand-200">파트너와 함께하세요.</p>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-5xl px-6 text-center">
        <h2 class="text-2xl font-bold text-[#101828] md:text-3xl">Step-by-Step Optimization Process</h2>
        <div class="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div v-for="(step, i) in ['1:1 무료 상담', '견적 안내', '상위노출 & 리뷰 작업', '운영 관리']" :key="step">
            <div
              class="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white"
              :class="[i === 0 ? 'bg-green-500' : i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-purple-500' : 'bg-orange-500']"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <p class="mt-4 font-semibold text-gray-800">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>

    <ProductFaqSection v-if="page.faq?.length" :items="page.faq" />
    <ProductGradientCta :cta="page.cta" />
  </div>
</template>
