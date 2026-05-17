<script setup lang="ts">
import type { ProductDetail } from '~/types/product';
import { getProductPageContent } from '~/mocks/productPages';

defineProps<{ product: ProductDetail }>();

const page = getProductPageContent('youtube')!;
</script>

<template>
  <div class="bg-black text-white">
    <ProductDarkHero :hero="page.hero" />

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <span class="inline-flex rounded-full border border-[#00d5be]/30 bg-[#00d5be]/10 px-5 py-2 text-sm font-semibold text-[#00d5be]">WHY YOUTUBE?</span>
        <h2 class="mt-6 text-3xl font-bold md:text-4xl">유튜브를 시작해야하는 이유?</h2>
        <p class="mt-6 text-lg text-gray-400">유튜브는 환자가 병원을 선택할 때 가장 중요하게 참고하는 채널입니다.</p>
      </div>
    </section>

    <section class="border-y border-white/10 py-16">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-2xl font-bold md:text-3xl">
          병원은 진료도 바쁜데<br>유튜브까지 신경 쓸 시간이 어디 있나요?
        </h2>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <p class="text-sm font-bold uppercase tracking-widest text-[#00d5be]">병원 마케팅 트렌드 2026</p>
        <h2 class="mt-6 text-3xl font-bold">
          <span class="text-[#00d5be]">82%의 환자들이</span><br>병원 선택 전 유튜브로 정보를 검색합니다
        </h2>
        <div class="mx-auto mt-10 flex h-32 max-w-md items-end justify-center gap-2">
          <div v-for="h in [40, 55, 70, 85, 100]" :key="h" class="w-8 rounded-t bg-[#00d5be]" :style="{ height: `${h}%` }" />
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-5xl px-6 text-center">
        <p class="text-[#00d5be]">그래서 준비했습니다</p>
        <h2 class="mt-4 text-3xl font-bold">
          병원측은 '촬영만' 참여하세요,<br>나머지는 <span class="text-[#00d5be]">월드베스트</span>가 다 합니다
        </h2>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article v-for="item in [
            { t: '기획/대본 작성', d: '트렌드에 맞는 콘텐츠 기획부터 대본 작성까지' },
            { t: '촬영/편집', d: '전문 장비와 편집 기술로 고퀄리티 영상 제작' },
            { t: '채널 관리', d: '업로드부터 댓글 관리, 분석까지 전담' },
          ]" :key="item.t" class="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 class="text-lg font-bold text-[#00d5be]">{{ item.t }}</h3>
            <p class="mt-2 text-sm text-gray-400">{{ item.d }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#00bba7] py-16 md:py-24">
      <div class="mx-auto max-w-5xl px-6">
        <ProductSectionHeader
          badge="월드베스트만의 시스템"
          heading="프로답게 만드는"
          heading-highlight="3가지 포인트"
          light
        />
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article v-for="(item, i) in [
            { t: '트렌드 분석', d: '최신 유튜브 트렌드를 분석하여 병원에 맞는 콘텐츠를 제안합니다' },
            { t: '전문 촬영팀', d: '촬영 전문가가 직접 방문하여 고퀄리티 영상을 제작합니다' },
            { t: '데이터 기반 관리', d: '조회수, 댓글, 구독자 데이터를 분석하여 지속적으로 개선합니다' },
          ]" :key="item.t" class="rounded-2xl bg-white/10 p-8 text-center">
            <span class="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white text-xl font-bold text-[#00bba7]">{{ i + 1 }}</span>
            <h3 class="mt-4 font-bold">{{ item.t }}</h3>
            <p class="mt-2 text-sm text-white/90">{{ item.d }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <h2 class="text-3xl font-bold">
          유튜브, 더 이상 미루면<br>경쟁에서 뒤처집니다.
        </h2>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article class="rounded-2xl border border-white/10 p-8 text-left">
            <p class="text-3xl">💡</p>
            <h3 class="mt-4 font-bold">이미 시작한 병원들은</h3>
            <p class="mt-2 text-gray-400">유튜브로 지속적으로 신규 환자를 유치하고 있습니다</p>
          </article>
          <article class="rounded-2xl border border-white/10 p-8 text-left">
            <p class="text-3xl">⚡</p>
            <h3 class="mt-4 font-bold">늦기 전에 시작하세요</h3>
            <p class="mt-2 text-gray-400">1년 뒤엔 더 많은 경쟁자가 생깁니다</p>
          </article>
        </div>
      </div>
    </section>

    <ProductFaqSection v-if="page.faq?.length" :items="page.faq" />
    <ProductGradientCta :cta="page.cta" />
  </div>
</template>
