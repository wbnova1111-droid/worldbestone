<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { getProductPageContent } from '~/mocks/productPages';

defineProps<{ product: ProductDetail }>();

const page = getProductPageContent('blog')!;
</script>

<template>
  <div class="bg-black text-white">
    <ProductDarkHero :hero="page.hero" />

    <section class="border-y border-white/10 py-16">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-2xl font-bold md:text-3xl">
          노출은 기본! 브랜드 이미지까지<br>끌어올리는 것이 진짜입니다
        </h2>
        <p class="mt-6 rounded-xl border border-[#00d5be]/40 bg-[#00d5be]/10 px-6 py-4 text-[#00d5be]">
          고객은 믿고, 단순히 '블로그 글'로만 읽습니다.
        </p>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center text-2xl font-bold md:text-3xl">
          홈페이지형 브랜드 블로그 제작부터 노출까지<br>월드베스트는 3단계로 진행합니다
        </h2>
        <div class="mt-10 grid gap-4 md:grid-cols-3">
          <article class="rounded-2xl bg-purple-600 p-8 text-center">
            <p class="text-sm font-bold opacity-80">STEP 1</p>
            <p class="mt-2 text-lg font-bold">키워드 분석 및<br>콘텐츠 전략 수립</p>
          </article>
          <article class="rounded-2xl bg-blue-600 p-8 text-center">
            <p class="text-sm font-bold opacity-80">STEP 2</p>
            <p class="mt-2 text-lg font-bold">전문 콘텐츠 작성 및<br>SEO 최적화 발행</p>
          </article>
          <article class="rounded-2xl bg-[#009689] p-8 text-center">
            <p class="text-sm font-bold opacity-80">STEP 3</p>
            <p class="mt-2 text-lg font-bold">성과 분석 및<br>지속적인 관리</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-gray-950 py-16">
      <div class="mx-auto max-w-4xl px-6">
        <h2 class="text-center text-2xl font-bold text-[#00d5be]">이것이 진짜입니다!</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl border border-gray-700 p-6">
            <p class="text-sm text-gray-400">Before</p>
            <p class="mt-2 text-xl font-bold">검색 결과 3페이지</p>
          </div>
          <div class="rounded-2xl border border-[#00d5be] bg-[#00d5be]/10 p-6">
            <p class="text-sm text-[#00d5be]">After</p>
            <p class="mt-2 text-xl font-bold">검색 결과 첫 페이지</p>
            <ul class="mt-4 space-y-1 text-sm text-gray-300">
              <li>월 평균 방문자 300% 증가</li>
              <li>문의 전환율 150% 향상</li>
              <li>브랜드 검색량 200% 상승</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center text-2xl font-bold">우리 병원/매장 블로그, 이대로 괜찮을까요?</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article class="rounded-2xl border border-red-900/50 bg-red-950/30 p-8">
            <p class="font-bold text-red-400">✕ 이런 고민 중이신가요?</p>
            <ul class="mt-4 space-y-2 text-gray-300">
              <li>열심히 쓴 글인데 조회수가 0</li>
              <li>검색해도 우리 블로그가 안보임</li>
              <li>광고비만 계속 나가고 효과 없음</li>
              <li>뭘 써야 할지 모르겠음</li>
            </ul>
          </article>
          <article class="rounded-2xl border border-[#00d5be]/50 bg-[#00d5be]/10 p-8">
            <p class="font-bold text-[#00d5be]">✓ 월드베스트의 상세전략</p>
            <ul class="mt-4 space-y-2 text-gray-300">
              <li>검색 첫 페이지 노출</li>
              <li>전문가가 작성하는 콘텐츠</li>
              <li>광고비 없이 지속 유입</li>
              <li>브랜드 가치 상승</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <ProductGradientCta :cta="page.cta" />
  </div>
</template>
