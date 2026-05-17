<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { getProductPageContent } from '~/mocks/productPages';

defineProps<{ product: ProductDetail }>();

const page = getProductPageContent('sns')!;
</script>

<template>
  <div class="bg-[#050a1f] text-white">
    <ProductDarkHero :hero="page.hero" />

    <section class="border-b border-white/10 py-12">
      <div class="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-6 text-sm text-gray-400">
        <span v-for="s in ['콘텐츠 기획 및 제작', '카드뉴스 및 이미지 제작', '정기적인 포스팅', '댓글 및 DM 관리', '성과 분석 및 리포팅']" :key="s">{{ s }}</span>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-center text-3xl font-bold">주요 운영 채널</h2>
        <div class="mt-10 space-y-3">
          <article
            v-for="ch in [
              { n: 'Instagram', d: '병원 브랜딩의 핵심! 비주얼 콘텐츠로 고급스러운 병원 이미지를 구축합니다', g: 'from-purple-600 to-pink-500' },
              { n: 'Threads', d: '이야기 중심 SNS에서 병원 철학을 전달하고 환자 신뢰를 얻어냅니다', g: 'from-gray-700 to-gray-900' },
              { n: 'Facebook', d: '이벤트와 치료 프로그램, 건강 정보를 공유하며 폭넓은 연령대와 소통합니다', g: 'from-blue-600 to-blue-800' },
              { n: 'X', d: '빠르고 혁신적인 뉴스로 병원의 최신 소식을 실시간으로 전달합니다', g: 'from-gray-800 to-black' },
              { n: '카카오톡', d: '1:1 맞춤형 상담으로 환자 관리 및 브랜드 이미지를 높입니다', g: 'from-yellow-500 to-yellow-600' },
              { n: '네이버 블로그', d: 'SEO 최적화된 콘텐츠로 검색 노출을 극대화합니다', g: 'from-green-600 to-green-700' },
            ]"
            :key="ch.n"
            class="flex items-center gap-4 rounded-2xl bg-gradient-to-r p-5"
            :class="ch.g"
          >
            <div class="flex-1">
              <h3 class="font-bold">{{ ch.n }}</h3>
              <p class="mt-1 text-sm opacity-90">{{ ch.d }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center text-3xl font-bold">핵심 운영 포인트</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article class="overflow-hidden rounded-2xl border border-white/10">
            <div class="h-40 bg-gradient-to-br from-blue-900 to-slate-800" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-blue-400">체계적 계획 수립</h3>
              <p class="mt-2 text-sm text-gray-400">병원의 목표와 타겟을 분석해 월별, 주별 콘텐츠 달력을 체계적으로 관리합니다</p>
            </div>
          </article>
          <article class="overflow-hidden rounded-2xl border border-white/10">
            <div class="h-40 bg-gradient-to-br from-purple-900 to-slate-800" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-purple-400">데이터 분석을 통한 최적화</h3>
              <p class="mt-2 text-sm text-gray-400">성과 데이터를 분석해 고효율 콘텐츠 전략으로 진화시킵니다</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-center text-3xl font-bold">체계적인 운영 프로세스</h2>
        <div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          <article
            v-for="(step, i) in ['상담 및 목표 설정', '콘텐츠 전략 수립', '콘텐츠 제작 및 발행', '소통 관리 및 성과 분석', '신뢰 브랜드 관리', '성과 분석 리포트', '데이터 기반 최적화']"
            :key="step"
            class="rounded-xl p-4 text-center text-sm font-semibold"
            :class="[
              i % 7 === 0 ? 'bg-blue-600' : i % 7 === 1 ? 'bg-purple-600' : i % 7 === 2 ? 'bg-pink-600' : '',
              i % 7 === 3 ? 'bg-teal-600' : i % 7 === 4 ? 'bg-green-600' : i % 7 === 5 ? 'bg-indigo-600' : 'bg-violet-600',
            ]"
          >
            {{ step }}
          </article>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 bg-gradient-to-r from-[#0f172b]/95 to-[#0f172b]/90" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p class="text-4xl">💙</p>
        <h2 class="mt-6 text-3xl font-bold">
          보여지는 병원이<br>더 많이 신뢰받습니다
        </h2>
        <p class="mt-6 text-lg text-gray-300">
          SNS는 병원의 전문성과 따뜻함을 동시에 전달하는 브랜드 커뮤니케이션의 핵심입니다.
        </p>
      </div>
    </section>

    <ProductGradientCta :cta="page.cta" />
  </div>
</template>
