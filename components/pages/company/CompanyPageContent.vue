<script setup lang="ts">
const asset = (name: string) => `/images/company-figma/${name}`;

const processCols = [
  { en: 'UNDERSTAND', line: '병원의 현재 상황을', strong: '이해하고' },
  { en: 'STRATEGY', line: '병원에 맞는 전략을', strong: '설계하고' },
  { en: 'EXECUTION', line: '실제 콘텐츠와 광고로', strong: '실행합니다' },
];

const expertise = [
  {
    title: '의료광고 준수',
    icon: asset('icon-1.svg'),
    body: '의료광고 심의를 통과해야 하며, 과대광고나 비교광고가 금지되어 있습니다. 표현 하나도 신중하게 접근해야 합니다.',
  },
  {
    title: '환자 신뢰',
    icon: asset('icon-2.svg'),
    body: '환자는 광고보다 의료진의 전문성과 병원의 신뢰를 확인합니다. 브랜드 이미지와 리뷰 관리가 매우 중요합니다.',
  },
  {
    title: '지역 검색 경쟁',
    icon: asset('icon-3.svg'),
    body: '실제 진료권을 고려한 키워드와 검색 구조가 중요합니다. 실제 내원 가능성이 높은 환자의 검색 흐름을 기준으로 전략을 잡습니다.',
  },
  {
    title: '예약 전환 설계',
    icon: asset('icon-4.svg'),
    body: '실제 성과로 이어지기 위해 노출에서 끝나는 것이 아니라 문의와 예약까지 환자의 이동 흐름을 파악해야 합니다.',
  },
];

const standards = [
  {
    number: '01',
    title: '병원 특화 전문성',
    body: '병원 마케팅은 일반 업종과 다르게 접근해야 합니다.\n의료광고 기준과 병원 산업의 특성을 준수하고, 그에 맞는 방향으로 운영합니다.',
    image: asset('grid-1.jpg'),
    class: 'lg:col-span-12 min-h-[280px] lg:min-h-[488px]',
    text: 'bottom',
    titleSize: 'text-[24px] lg:text-[32px]',
    bodySize: 'text-[14px] lg:text-[20px]',
  },
  {
    number: '02',
    title: '통합 마케팅 시스템',
    body: '각각의 마케팅을 따로 운영하지 않습니다.\n온라인부터 오프라인까지 하나의 방향으로 연결해 일관된 브랜드를 만들어갑니다.',
    image: asset('grid-2.jpg'),
    class: 'lg:col-span-8 min-h-[280px] lg:min-h-[484px]',
    text: 'bottom',
    titleSize: 'text-[20px]',
    bodySize: 'text-[14px]',
  },
  {
    number: '03',
    title: '데이터 기반 운영',
    body: '감에 의존하는 것이 아닌, 결과를 꾸준히 확인하고 분석합니다. 잘되는 부분은 더 키우고, 부족한 부분은 빠르게 보완합니다.',
    image: asset('grid-3.jpg'),
    class: 'lg:col-span-4 min-h-[280px] lg:min-h-[484px]',
    text: 'top',
    titleSize: 'text-[20px]',
    bodySize: 'text-[14px]',
  },
  {
    number: '04',
    title: '정확한 타깃 설정',
    body: '환자가 어떤 고민에서 검색을 시작하고 무엇을 보고 병원을 선택하는지 살펴봅니다. 그 흐름에 맞는 메시지와 콘텐츠를 기획합니다.',
    image: asset('grid-4.jpg'),
    class: 'lg:col-span-4 min-h-[280px] lg:min-h-[484px]',
    text: 'bottom',
    titleSize: 'text-[20px]',
    bodySize: 'text-[14px]',
  },
  {
    number: '05',
    title: '지속적인 관리와 책임감',
    body: '한 번 진행하고 끝나는 마케팅을 지향하지 않습니다.\n함께하는 병원은 더 잘되어야 한다는 마음으로, 브랜드와 신뢰가 꾸준히 쌓일 수 있도록 한 번 더 고민하고 세심하게 관리합니다.',
    image: asset('grid-5.jpg'),
    class: 'lg:col-span-8 min-h-[280px] lg:min-h-[484px]',
    text: 'bottom',
    titleSize: 'text-[20px]',
    bodySize: 'text-[14px]',
  },
];
</script>

<template>
  <div class="bg-white">
    <section class="flex min-h-[calc(100svh-168px)] flex-col items-center justify-center px-5 pb-24 pt-10 text-center lg:min-h-[1041px] lg:px-6 lg:pb-0 lg:pt-0">
      <p v-reveal class="text-[16px] font-semibold leading-[1.5] tracking-[-0.6px] text-[#262626] sm:text-[22px] md:text-[32px]">
        신뢰를 만드는 <span class="text-wb-primary">올인원 파트너십 마케팅</span>
      </p>
      <h1
        v-reveal="80"
        class="mt-7 max-w-[1600px] bg-[#111] bg-cover bg-center bg-clip-text font-display text-[clamp(32px,10vw,48px)] font-extrabold leading-[1.05] tracking-tight text-transparent md:mt-10 md:text-[80px] lg:text-[120px] xl:text-[140px]"
        :style="{ backgroundImage: `url('${asset('hero-fill.jpg')}'), linear-gradient(#111,#111)` }"
      >
        BUILDING TRUST,<br class="sm:hidden"> TOGETHER.
      </h1>
      <p v-reveal="160" class="mt-7 max-w-[34rem] text-[15px] font-medium leading-[1.7] text-black sm:text-[16px] md:mt-10 md:max-w-[900px] md:text-[24px] md:leading-7">
        인하우스 직원 영역부터<br class="md:hidden">
        병원 내부에서 직접 운영하기 어려운 영역까지,<br>
        매출 상승을 위한 올인원 마케팅 프로덕션.
      </p>
    </section>

    <section class="relative mx-auto w-full max-w-[1920px] overflow-hidden px-6 py-16 lg:px-0 lg:py-0">
      <div class="lg:hidden">
        <div class="flex items-start justify-between gap-4">
          <div>
            <img src="/images/home-figma/header-mark.svg" alt="" class="h-[44px] w-[56px] object-contain">
            <p class="mt-1 break-keep text-[18px] font-semibold leading-[1.4] tracking-[-0.59px] text-[#111]">
              Beyond Marketing,<br>We Grow Together.
            </p>
          </div>
          <img :src="asset('quote.svg')" alt="" class="h-[72px] w-20 object-contain">
        </div>
        <div v-reveal class="mt-8 max-w-[747px] text-[#505050]">
          <h2 class="break-keep text-[26px] font-semibold leading-[1.4] tracking-[-0.8px] text-[#111]">
            안녕하세요.<br>월드베스트 대표 임원빈입니다.
          </h2>
          <div class="mt-7 space-y-5 text-[15px] font-medium leading-[1.65] tracking-[-0.4px] sm:text-[18px] sm:leading-[1.4]">
            <p>월드베스트가 지향하는 것은 단순히 업무를 실행하는 마케팅 회사가 아닙니다.</p>
            <p>
              고객의 고민을 함께 고민하고, 목표를 함께 바라보며, 그 과정과 결과를 통해 <strong class="font-bold text-[#505050]">오랫동안 함께할 수 있는 파트너로 인정받는 것.</strong> 그것이 저희가 추구하는 방향입니다.
            </p>
            <p>
              마케팅 시장은 빠르게 변화하고 있습니다. 트렌드와 플랫폼은 끊임없이 바뀌고, 한발 앞서 움직이는 곳과 그렇지 않은 곳의 격차는 점점 더 빠르게 벌어지고 있습니다.
            </p>
            <p>
              특히 병·의원 마케팅은 단순히 광고비만의 문제가 아닙니다. 잘못된 선택으로 잃게 되는 시간과 환자, 그리고 성장의 기회까지 고려하면 기회비용이 매우 큰 분야입니다.
            </p>
            <p>
              월드베스트는 그 무게를 이해하기 때문에 더 빠르게 판단하고, 더 신중하게 실행하며, 결과로 증명하고자 합니다.
            </p>
            <p>
              현재 저희가 가진 역량에만 머무르지 않겠습니다. 병원의 성장에 필요한 새로운 채널과 기술, 마케팅 방식이 있다면 빠르게 배우고 검증하며 실제 운영에 적용하겠습니다.
            </p>
            <p>
              단순히 광고를 집행하는 것에 그치지 않고, 병원의 상황과 목표를 함께 고민하고, 시장의 변화를 빠르게 읽으며, 실행한 결과를 분석해 더 나은 방향을 찾아갑니다.
            </p>
            <p>
              <strong class="font-bold">말보다 결과로,</strong>
              <strong class="font-bold">단순한 대행사가 아닌 함께 성장하는 파트너로.</strong>
            </p>
            <p>
              고객의 성장이 곧 월드베스트의 성장이라는 마음으로 앞으로도 오래 함께할 수 있는 신뢰받는 파트너가 되겠습니다.
            </p>
            <p>감사합니다.</p>
          </div>
        </div>
        <img
          v-reveal
          src="/images/company-figma/ceo-2x.png"
          alt="월드베스트 마케팅 대표 임원빈"
          class="mx-auto mt-10 h-auto w-full max-w-[360px] object-contain sm:max-w-[520px]"
        >
        <p class="mt-6 text-right text-[20px] leading-[1.4] tracking-[-0.6px] text-[#111]">
          <span class="font-semibold text-[#505050]">신뢰를 만드는 파트너,</span><br>
          <span class="font-semibold">월드베스트 마케팅 대표 임원빈 드림</span>
        </p>
      </div>

      <div class="relative hidden w-full overflow-hidden [container-type:inline-size] lg:block" style="aspect-ratio: 1920 / 1610">
        <div
          class="absolute left-0 top-0 h-[1610px] w-[1920px] origin-top-left"
          style="transform: scale(calc(100cqw / 1920))"
        >
          <div class="absolute left-[154px] top-[69px]">
            <img src="/images/home-figma/header-mark.svg" alt="" class="h-[53px] w-[68px] object-contain">
            <p class="text-[23.6px] font-semibold leading-[1.4] tracking-[-0.59px] text-[#111]">
              Beyond Marketing,<br>We Grow Together.
            </p>
          </div>
          <img
            :src="asset('quote.svg')"
            alt=""
            class="absolute left-[1707px] top-[71px] h-[143px] w-[159px] object-contain"
          >
          <div class="absolute left-[157px] top-[302px] w-[747px] text-[#505050]">
            <h2 class="text-[32px] font-semibold leading-[1.4] tracking-[-0.8px] text-[#111]">
              안녕하세요.<br>월드베스트 대표 임원빈입니다.
            </h2>
            <div class="mt-[28px] space-y-[20px] text-[24px] font-medium leading-[1.4] tracking-[-0.6px]">
              <p>월드베스트가 지향하는 것은 단순히 업무를 실행하는 마케팅 회사가 아닙니다.</p>
              <p>
                고객의 고민을 함께 고민하고, 목표를 함께 바라보며,<br>
                그 과정과 결과를 통해 <strong class="font-bold text-[#505050]">오랫동안 함께할 수 있는 파트너로 인정받는 것.</strong><br>
                그것이 저희가 추구하는 방향입니다.
              </p>
              <p>
                마케팅 시장은 빠르게 변화하고 있습니다.<br>
                트렌드와 플랫폼은 끊임없이 바뀌고, 한발 앞서 움직이는 곳과 그렇지 않은 곳의 격차는 점점 더 빠르게 벌어지고 있습니다.
              </p>
              <p>
                특히 병·의원 마케팅은 단순히 광고비만의 문제가 아닙니다.<br>
                잘못된 선택으로 잃게 되는 시간과 환자, 그리고 성장의 기회까지 고려하면 기회비용이 매우 큰 분야입니다.
              </p>
              <p>
                월드베스트는 그 무게를 이해하기 때문에<br>
                더 빠르게 판단하고, 더 신중하게 실행하며, 결과로 증명하고자 합니다.
              </p>
              <p>
                현재 저희가 가진 역량에만 머무르지 않겠습니다.<br>
                병원의 성장에 필요한 새로운 채널과 기술, 마케팅 방식이 있다면 빠르게 배우고 검증하며 실제 운영에 적용하겠습니다.
              </p>
              <p>
                단순히 광고를 집행하는 것에 그치지 않고,<br>
                병원의 상황과 목표를 함께 고민하고,<br>
                시장의 변화를 빠르게 읽으며,<br>
                실행한 결과를 분석해 더 나은 방향을 찾아갑니다.
              </p>
              <p>
                <strong class="font-bold">말보다 결과로,</strong><br>
                <strong class="font-bold">단순한 대행사가 아닌 함께 성장하는 파트너로.</strong>
              </p>
              <p>
                고객의 성장이 곧 월드베스트의 성장이라는 마음으로<br>
                앞으로도 오래 함께할 수 있는 신뢰받는 파트너가 되겠습니다.
              </p>
              <p>감사합니다.</p>
            </div>
          </div>
          <img
            src="/images/company-figma/ceo-2x.png"
            alt="월드베스트 마케팅 대표 임원빈"
            class="absolute left-[941px] top-[216px] h-[982px] w-[925px] object-cover object-center"
          >
          <p class="absolute left-[1044px] top-[1356px] w-[719px] text-right text-[24px] leading-[1.4] tracking-[-0.6px] text-[#111]">
            <span class="font-semibold text-[#505050]">신뢰를 만드는 파트너,</span><br>
            <span class="font-semibold">월드베스트 마케팅 대표 임원빈 드림</span>
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col items-center gap-10 py-16 lg:py-[100px]">
      <div v-reveal class="px-6 text-center">
        <h2 class="break-keep text-[24px] font-bold tracking-[-1px] text-[#111] md:text-[40px]">병원을 이해하는 것에서 시작합니다</h2>
        <p class="mx-auto mt-5 max-w-[1146px] text-[15px] font-medium leading-[1.6] tracking-[-0.4px] text-wb-slate md:text-[24px]">
          좋은 마케팅은 좋은 이해에서 시작됩니다. 병원의 강점과 상황을 파악하고 최적의 방향을 찾아갑니다.
        </p>
      </div>
      <div class="relative w-full overflow-hidden">
        <img :src="asset('process.jpg')" alt="" class="absolute inset-0 size-full object-cover">
        <div class="absolute inset-0 bg-black/20" />
        <div class="relative grid min-h-[420px] lg:min-h-[813px] lg:grid-cols-3">
          <article
            v-for="(col, index) in processCols"
            :key="col.en"
            class="flex min-h-[240px] flex-col justify-between px-6 py-10 text-white lg:min-h-0 lg:px-[60px] lg:pb-12 lg:pt-20 lg:text-white/30"
            :class="index > 0 ? 'border-t border-white lg:border-l lg:border-t-0' : ''"
          >
            <p class="text-[24px] font-bold tracking-[-0.48px] lg:leading-9">{{ col.en }}</p>
            <p class="tracking-[-1px] md:tracking-[-2.5px]">
              <span class="block text-[22px] font-semibold leading-[1.4] md:text-[36px]">{{ col.line }}</span>
              <span class="block text-[28px] font-bold leading-[1.4] md:text-[48px]">{{ col.strong }}</span>
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative flex min-h-[auto] flex-col items-center justify-end overflow-hidden px-5 pb-14 pt-20 text-white lg:min-h-[1041px] lg:px-[142px] lg:pb-20 lg:pt-24">
      <img :src="asset('expertise.jpg')" alt="" class="absolute inset-0 size-full object-cover">
      <div class="absolute inset-0 bg-black/40" />
      <div v-reveal class="relative mb-auto text-center">
        <h2 class="text-[28px] font-bold tracking-[-1px] md:text-[50px]">EXPERTISE MATTERS</h2>
        <p class="mt-4 text-[16px] font-semibold tracking-[-0.5px] md:text-[24px]">왜 병원 마케팅은 전문가가 필요할까요?</p>
      </div>
      <div class="relative mt-12 grid w-full gap-10 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="(item, index) in expertise" :key="item.title" v-reveal="index * 80" class="flex flex-col items-center text-center">
          <div class="size-[60px] overflow-hidden">
            <img :src="item.icon" alt="" class="size-full object-contain">
          </div>
          <h3 class="mt-5 text-[24px] font-semibold tracking-[-0.6px]">{{ item.title }}</h3>
          <p class="mt-8 max-w-[362px] text-[16px] leading-[1.4] tracking-[-0.45px] md:text-[18px]">{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section class="bg-[#26272a] px-6 py-20 pb-28 text-center text-white lg:px-[404px] lg:py-[215px]">
      <h2 v-reveal class="break-keep text-[24px] font-bold tracking-[-1px] md:text-[40px]">병원 마케팅에 필요한 기준을 갖췄습니다</h2>
      <p class="mx-auto mt-4 max-w-[1146px] text-[15px] font-medium leading-[1.6] tracking-[-0.4px] md:text-[24px]">
        병원 특화 전문성부터 통합 운영, 데이터 분석, 타깃 설정, 지속적인 관리까지.
      </p>

      <div class="mt-12 grid gap-6 text-left lg:grid-cols-12 lg:gap-6">
        <article
          v-for="card in standards"
          :key="card.title"
          class="relative overflow-hidden"
          :class="card.class"
        >
          <img :src="card.image" alt="" class="absolute inset-0 size-full object-cover">
          <div
            class="absolute inset-0"
            :class="card.text === 'top' ? 'bg-gradient-to-b from-black/40 to-transparent' : 'bg-gradient-to-t from-black/60 to-transparent'"
          />
          <div
            class="relative flex h-full flex-col p-6 lg:p-10"
            :class="card.text === 'top' ? 'justify-start' : 'justify-end'"
          >
            <p class="font-bold leading-normal text-white" :class="card.titleSize">
              {{ card.number }}. {{ card.title }}
            </p>
            <p class="mt-2 whitespace-pre-line font-semibold leading-normal text-white/70" :class="card.bodySize">
              {{ card.body }}
            </p>
          </div>
        </article>
      </div>

      <p class="mt-16 break-keep text-[20px] font-bold tracking-[-0.6px] md:text-[32px]">
        병원의 성장을 위해 최상의 성과를 만들어나가겠습니다.
      </p>
      <NuxtLink
        to="/products"
        class="mt-6 inline-flex w-full max-w-[360px] items-center justify-center gap-3 whitespace-nowrap border border-white px-6 py-3.5 text-[16px] text-white backdrop-blur-[7px] sm:w-auto sm:px-8 sm:text-[20px] md:text-[24px]"
      >
        마케팅 서비스 보러가기
        <img :src="asset('arrow.svg')" alt="" class="size-8 object-contain">
      </NuxtLink>
    </section>
  </div>
</template>
