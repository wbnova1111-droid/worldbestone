<script setup lang="ts">
const heroSrc = '/images/products-figma/hero-2x.png';
const cardImages = Array.from({ length: 9 }, (_, index) => `/images/products-figma/cards/card-${String(index + 1).padStart(2, '0')}.png`);
const ctaSrc = '/images/products-figma/cta.png';

const promiseText = '월드베스트가 약속드립니다';
const typed = ref('');
const effects = [
  {
    number: '01',
    title: '마케팅 관리 효율',
    value: '+ 120%',
    body: '기획부터 콘텐츠, 디자인, 광고까지\n여러 업무를 한곳에서 관리할 수 있습니다.',
  },
  {
    number: '02',
    title: '브랜드 접점',
    value: '+ 130%',
    body: '어디서 봐도 같은 병원으로 광고, SNS, 홈페이지, 오프라인 디자인까지 병원의 이미지와 메시지를 일관되게 보여줍니다.',
  },
  {
    number: '03',
    title: '매출 성장 가능성',
    value: '+ 150%',
    body: '환자 유입부터 상담, 예약, 내원까지 이어지는 과정을 살펴 실질적인 매출 성장으로 이어질 수 있는 구조를 만들어갑니다.',
  },
];

const cards = [
  {
    title: 'AI 검색에서도 발견되는\nGEO · AEO 최적화',
    subtitle: '변화하는 검색 환경까지 준비합니다',
    body: '홈페이지, 블로그, 영상 등 다양한 채널에 병원의 전문 정보를 체계적으로 쌓아 AI 검색 환경에서도 참고될 수 있는 정보 기반을 구축합니다.',
    tags: ['GEO 전략', 'AEO 대응', '정보 구조화', 'AI 검색 분석'],
  },
  {
    title: '지역 검색에서 먼저 보이는\n네이버 플레이스',
    subtitle: '환자가 병원을 발견하는 첫 번째 접점',
    body: '병원의 위치, 진료 정보, 후기, 사진 등 환자가 병원을 처음 탐색할 때 필요한 정보를 체계적으로 관리하고 검색 환경에 맞춰 노출과 유입을 설계합니다.',
    tags: ['플레이스 SEO 최적화', '병원 정보 세팅 및 관리', '리뷰 관리', '키워드 분석'],
  },
  {
    title: '신뢰가 쌓이는\n병원 브랜딩 블로그',
    subtitle: '검색을 신뢰로 바꾸는 콘텐츠',
    body: '환자가 실제로 궁금해하는 주제를 찾아 병원의 전문성과 진료 정보를 콘텐츠로 풀어냅니다.',
    tags: ['콘텐츠 기획', '키워드 분석', '원고 작성', 'SEO 최적화'],
  },
  {
    title: 'SNS 콘텐츠\n관리 및 운영',
    subtitle: '병원의 분위기까지 보여주는 콘텐츠',
    body: '병원의 전문성뿐만 아니라 의료진과 공간, 일상까지 다양한 콘텐츠로 병원만의 이미지를 만들어갑니다.',
    tags: ['콘텐츠 기획', '피드 디자인', '릴스 메타광고 제작', '채널 운영 대행'],
  },
  {
    title: '유튜브\n기획·촬영·편집·업로드·채널 관리',
    subtitle: '관심을 신뢰로 바꾸는 영상',
    body: '의료진의 전문성과 진료 철학이 잘 전달될 수 있도록 주제 선정부터 촬영, 편집까지 영상 콘텐츠를 제작합니다.',
    tags: ['콘텐츠 기획', '방문 촬영', '영상 편집', '업로드 및 채널 운영 대행'],
  },
  {
    title: '환자가 찾는 플랫폼까지\n메디컬 플랫폼 통합 관리',
    subtitle: '입점부터 운영까지 한 번에',
    body: '병원과 진료 특성에 맞는 메디컬 플랫폼을 선정하고, 입점부터 상세페이지·이벤트·콘텐츠 관리까지 체계적으로 운영합니다.',
    tags: ['플랫폼 입점', '상세페이지 관리', '이벤트 등록', '성과 분석'],
  },
  {
    title: '온라인부터 오프라인까지\n광고 · 디자인 통합 제작',
    subtitle: '보이는 모든 곳에 하나의 병원 브랜드 제작',
    body: '디지털 광고부터 배너, 포스터, 리플렛, 옥외광고까지 병원의 브랜드가 어느 접점에서도 일관되게 보이도록 제작하고 관리합니다.',
    tags: ['광고 디자인', '옥외광고', '인쇄물 제작', '브랜드 관리'],
  },
  {
    title: '병원 운영까지 편리하게\n소프트웨어 맞춤개발',
    subtitle: '병원에 필요한 업무 기능 맞춤 개발',
    body: '재고관리, 직원 스케줄 관리 등 병원마다 다른 업무 프로세스에 맞춰 필요한 관리 기능을 직접 설계하고 개발합니다.',
    tags: ['재고 관리', '직원 관리', '기능 개발', '시스템 확장'],
  },
  {
    title: '병원에 꼭 맞게 만드는\n맞춤형 프리미엄 홈페이지',
    subtitle: '브랜드와 환자 유입을 함께 고려한 맞춤 제작',
    body: '병원의 강점과 운영 방식에 맞춰 디자인과 기능을 개별 설계하고, 상담·예약까지 자연스럽게 이어지는 홈페이지를 제작하며, 병원 내부에서도 쉽게 수정 가능한 관리자 페이지도 제작합니다.',
    tags: ['맞춤 디자인', '기능 개발', '관리자 페이지', 'CRM 연동'],
  },
];

onMounted(() => {
  let index = 0;
  const tick = () => {
    if (index <= promiseText.length) {
      typed.value = promiseText.slice(0, index);
      index += 1;
    } else {
      index = 0;
    }
  };
  tick();
  const timer = window.setInterval(tick, 140);
  onUnmounted(() => window.clearInterval(timer));
});
</script>

<template>
  <div class="bg-white">
    <section class="relative overflow-hidden">
      <h1 class="sr-only">뻔한 병원 마케팅은 여기까지. 마케팅도 결국 감각이니까.</h1>
      <img :src="heroSrc" alt="뻔한 병원 마케팅은 여기까지. 마케팅도 결국 감각이니까." class="hidden w-full object-cover lg:block">
      <div class="flex min-h-[calc(100svh-168px)] flex-col items-center justify-center px-5 pb-24 pt-10 text-center lg:hidden">
        <p v-reveal class="mx-auto w-full max-w-[20rem] break-keep text-[24px] font-bold leading-[1.45] tracking-[-1px] text-[#111] sm:max-w-none sm:text-[32px]">
          뻔한 병원 마케팅은 여기까지.
        </p>
        <p v-reveal="80" class="mx-auto mt-2 w-full max-w-[20rem] break-keep text-[24px] font-bold leading-[1.45] tracking-[-1px] text-[#111] sm:max-w-none sm:text-[32px]">
          <span class="text-wb-primary">마케팅</span>도 결국 <span class="text-wb-primary">감각</span>이니까.
        </p>
        <p v-reveal="160" class="mt-10 w-full text-center text-[15px] font-semibold tracking-[-0.4px] text-[#505050] sm:mt-16 sm:text-[16px]">
          트렌드를 선점하는 월드베스트
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-[1920px] lg:flex lg:items-start lg:px-[80px] xl:px-[160px]">
      <div class="px-5 py-12 lg:sticky lg:top-[108px] lg:flex lg:h-[calc(100dvh-108px)] lg:w-[720px] lg:shrink-0 lg:flex-col lg:justify-center lg:px-[46px] lg:py-0">
        <h2 v-reveal class="break-keep text-[28px] font-extrabold leading-[1.35] tracking-[-1.2px] text-[#111] sm:text-[36px] md:text-[60px] md:tracking-[-1.8px]">
          <span class="text-wb-primary">All In One</span> Marketing<br>Service
        </h2>
        <p class="mt-5 text-[15px] font-medium leading-[1.55] tracking-[-0.4px] text-[#505050] md:mt-6 md:text-[20px]">
          병원에 필요한 전문 마케팅 영역, 빠짐없이 준비되어 있습니다.
        </p>
      </div>

      <div class="hidden w-full max-w-[668px] shrink-0 pb-24 lg:flex lg:flex-col lg:gap-[32px]">
        <img
          v-for="(src, index) in cardImages"
          :key="src"
          :src="src"
          :alt="cards[index]?.title?.replace(/\n/g, ' ') || '월드베스트 마케팅 서비스'"
          class="h-auto w-full"
          width="1475"
          height="1481"
          :loading="index === 0 ? 'eager' : 'lazy'"
          decoding="async"
        >
      </div>

      <div class="flex flex-col gap-5 px-5 pb-16 lg:hidden">
        <img
          v-for="(src, index) in cardImages"
          :key="src"
          v-reveal
          :src="src"
          :alt="cards[index]?.title?.replace(/\n/g, ' ') || '월드베스트 마케팅 서비스'"
          class="h-auto w-full rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          width="1475"
          height="1481"
          :loading="index === 0 ? 'eager' : 'lazy'"
          decoding="async"
        >
      </div>
    </section>

    <section class="relative overflow-hidden px-6 py-16 text-center lg:px-[160px] lg:pb-28 lg:pt-16">
      <p class="pointer-events-none select-none font-display text-[64px] font-extrabold leading-[1] tracking-[-3px] text-[#111]/[0.05] md:text-[180px] md:leading-[1.4] md:tracking-[-7px] lg:text-[298px]">
        EFFECT
      </p>
      <div class="relative -mt-8 lg:-mt-40">
        <h2 v-reveal class="break-keep text-[24px] font-bold leading-[1.4] tracking-[-1px] text-[#111] md:text-[50px]">
          마케팅을 <span class="text-wb-primary">월드베스트</span>에 맡기면<br>
          병원에 어떤 변화가 생길까요?
        </h2>
        <p v-reveal="80" class="mt-5 text-[15px] font-semibold leading-[1.55] tracking-[-0.4px] text-[#111] md:mt-6 md:text-[24px]">
          여러 채널을 따로 관리할 때와 <span class="text-wb-primary">필요한 마케팅을 함께 운영할 때</span>는 생각보다 큰 차이가 생깁니다.
        </p>
        <div class="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-[80px]">
          <article v-for="(item, index) in effects" :key="item.number" v-reveal="index * 90" class="flex flex-col items-center">
            <p class="text-[20px] font-semibold tracking-[-0.5px] text-[#111] md:text-[24px]">{{ item.number }}</p>
            <p class="mt-3 text-[20px] font-semibold tracking-[-0.5px] text-[#111] md:mt-4 md:text-[24px]">{{ item.title }}</p>
            <p class="mt-6 text-[44px] font-semibold tracking-[-1.5px] text-wb-primary md:mt-8 md:text-[61px] md:text-[#111]">{{ item.value }}</p>
            <p class="mt-8 max-w-[388px] whitespace-pre-line text-[16px] tracking-[-0.5px] text-[#111] md:text-[20px]">
              {{ item.body }}
            </p>
          </article>
        </div>
        <p class="mt-12 min-h-[40px] text-[20px] font-bold tracking-[-0.8px] text-[#111] sm:mt-16 sm:min-h-[70px] sm:text-[28px] md:text-[50px]" aria-live="polite">
          {{ typed }}<span class="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.08em] animate-caret bg-wb-primary align-middle" />
        </p>
      </div>
    </section>

    <section class="mx-auto flex max-w-[1920px] flex-col items-center gap-10 px-6 py-16 pb-28 lg:flex-row lg:justify-between lg:gap-[80px] lg:px-[160px] lg:py-24">
      <div class="w-full max-w-[728px]">
        <h2 v-reveal class="break-keep text-[26px] font-extrabold leading-[1.35] tracking-[-1.2px] text-[#111] sm:text-[36px] md:text-[60px] md:tracking-[-1.8px]">
          병원 마케팅의 모든 과정을<br>
          <span class="text-wb-primary">함께하고싶어요!</span>
        </h2>
        <div class="mt-8 flex flex-col items-start gap-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-[16px] font-semibold leading-[1.5] tracking-[-0.4px] text-[#111] md:text-[24px]">
            여러 업체가 아닌 하나의 파트너로.<br>
            트렌디한 마케팅을 선도합니다.
          </p>
          <NuxtLink
            to="/#contact"
            class="inline-flex w-full shrink-0 items-center justify-center rounded-[10px] bg-wb-primary px-8 py-3.5 font-display text-[18px] font-medium text-white sm:w-auto sm:px-10 sm:py-1.5 sm:text-[24px] sm:leading-[56px]"
          >
            문의하기
          </NuxtLink>
        </div>
      </div>
      <img :src="ctaSrc" alt="" class="w-full max-w-[458px] object-contain">
    </section>
  </div>
</template>
