<script setup lang="ts">
definePageMeta({ layout: 'home' });

useSiteSeo({
  title: '마케팅 서비스 | 병원 마케팅 파트너 월드베스트',
  description:
    '뻔한 병원 마케팅은 여기까지. 월드베스트 올인원 마케팅 서비스 — GEO·AEO, 네이버 플레이스, 블로그, SNS, 유튜브, 메디컬 플랫폼, 광고·디자인, 소프트웨어, 맞춤 홈페이지.',
  path: '/products',
  keywords: [
    '병원 마케팅 서비스',
    'GEO AEO',
    '네이버 플레이스 병원',
    '병원 블로그 대행',
    '병원 유튜브 제작',
  ],
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: '월드베스트 마케팅 서비스',
      description: '병원에 필요한 전문 마케팅 영역을 올인원으로 제공합니다.',
    },
  ],
});
</script>

<template>
  <HomePageChrome>
    <ProductsListContent />
  </HomePageChrome>
</template>
