<script setup lang="ts">
definePageMeta({ layout: 'home' });

useSiteSeo({
  title: '회사 소개 | 병원 마케팅 파트너 월드베스트',
  description:
    '신뢰를 만드는 올인원 파트너십 마케팅. 병원 마케팅 파트너 월드베스트는 인하우스 영역부터 병원 내부에서 직접 운영하기 어려운 영역까지, 매출 상승을 위한 올인원 마케팅 프로덕션입니다.',
  path: '/company',
  keywords: ['월드베스트 회사소개', '병원 마케팅 대행사', '병의원 마케팅 파트너'],
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: '월드베스트 회사 소개',
      description: '병원 마케팅 파트너 월드베스트 소개. Beyond Marketing, We Grow Together.',
    },
  ],
});
</script>

<template>
  <HomePageChrome>
    <CompanyPageContent />
  </HomePageChrome>
</template>
