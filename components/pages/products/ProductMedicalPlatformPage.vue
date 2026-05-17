<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { getProductPageContent } from '~/mocks/productPages';

defineProps<{ product: ProductDetail }>();

const page = getProductPageContent('medical-platform')!;
</script>

<template>
  <div class="bg-black text-white">
    <ProductDarkHero :hero="page.hero" />

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductSectionHeader
          sub="관심 고객을 생성한 상담으로 연결하는 확실한 성과"
          heading="주요 메디컬 플랫폼"
          light
        />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="p in [
              { n: '강남언니', d: '성형 분야 1위 플랫폼 리더', c: 'from-orange-500 to-orange-600' },
              { n: '바비톡', d: '성형 시술 전문 예약 플랫폼', c: 'from-purple-500 to-purple-600' },
              { n: '여신티켓', d: '뷰티 의료 전문 예약 서비스', c: 'from-pink-500 to-pink-600' },
              { n: '굿닥', d: '건강 의료 정보 종합 플랫폼', c: 'from-blue-500 to-blue-600' },
              { n: '모두닥', d: '병원 예약 검색 리뷰 플랫폼', c: 'from-teal-500 to-teal-600' },
            ]"
            :key="p.n"
            class="rounded-2xl border border-[#00d5be]/30 bg-white/5 p-6 text-center"
          >
            <div class="mx-auto mb-3 h-12 w-12 rounded-xl bg-gradient-to-br" :class="p.c" />
            <h3 class="font-bold">{{ p.n }}</h3>
            <p class="mt-2 text-xs text-gray-400">{{ p.d }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-y border-white/10 py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="mb-12 text-center text-3xl font-bold">온라인 운영 대행 프로세스</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in [
              { t: '위탁계약 체결', d: '위탁계약 체결 및 자료 공유' },
              { t: '상품 구성/상세 기획', d: '상품 구성 및 상세 내용 기획' },
              { t: '상세페이지 제작 및 검수', d: '상세페이지 제작 및 병원측 검수' },
              { t: '업로드/상품 등록', d: '플랫폼에 상품 업로드 및 등록' },
              { t: '프로모션/광고 집행', d: '광고 집행 및 프로모션 진행' },
              { t: '리뷰 및 댓글 관리', d: '고객 리뷰 및 댓글 관리' },
            ]"
            :key="item.t"
            class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00bba7] text-2xl">📋</div>
            <h3 class="font-bold text-[#00d5be]">{{ item.t }}</h3>
            <p class="mt-2 text-sm text-gray-400">{{ item.d }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-6 md:grid-cols-2">
          <article class="rounded-2xl border-t-4 border-[#00bba7] bg-white/5 p-8">
            <h3 class="text-xl font-bold text-[#00d5be]">상품 구성 및 노출 전략</h3>
            <p class="mt-4 text-gray-400">경쟁력 있는 상품 구성과 최적의 노출 전략으로 상담 전환율을 높입니다.</p>
          </article>
          <article class="rounded-2xl border-t-4 border-purple-500 bg-white/5 p-8">
            <h3 class="text-xl font-bold text-purple-400">차별화된 콘텐츠 제작</h3>
            <p class="mt-4 text-gray-400">병원만의 강점을 살린 차별화된 콘텐츠로 경쟁 우위를 확보합니다.</p>
          </article>
        </div>
        <article class="mt-6 rounded-2xl border-t-4 border-blue-500 bg-white/5 p-8">
          <h3 class="text-xl font-bold text-blue-400">프로모션 전략</h3>
          <p class="mt-4 text-gray-400">시즌별 프로모션 기획 및 집행으로 지속적인 환자 유입을 만듭니다.</p>
        </article>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center text-3xl font-bold">왜, 저희와 함께해야 할까요?</h2>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article v-for="item in [
            { t: '전문성', d: '메디컬 플랫폼 운영 전문가가 직접 관리하여 최적의 성과를 보장합니다' },
            { t: '파트너십', d: '병원과 투명하게 소통하며 함께 성장합니다' },
            { t: '데이터 분석', d: '데이터 분석을 통해 지속 가능한 성장 전략을 수립하고 실행합니다' },
          ]" :key="item.t" class="rounded-2xl bg-white/5 p-8 text-center">
            <h3 class="text-lg font-bold text-[#00d5be]">{{ item.t }}</h3>
            <p class="mt-3 text-sm text-gray-400">{{ item.d }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#155dfc] py-12">
      <p class="text-center text-xl font-bold md:text-2xl">
        메디컬 플랫폼 운영은 전문가에게 맡기고 병원은 핵심 진료에 집중하세요!
      </p>
    </section>

    <ProductFaqSection v-if="page.faq?.length" :items="page.faq" />
    <ProductGradientCta :cta="page.cta" />
  </div>
</template>
