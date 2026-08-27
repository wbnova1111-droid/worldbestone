<script setup lang="ts">
definePageMeta({ layout: 'home' });

useSeoMeta({
  title: '마케팅 서비스 | WORLD BEST',
  ogTitle: '마케팅 서비스 | WORLD BEST',
  description: '뻔한 병원 마케팅은 여기까지. GEO·AEO, 플레이스, 블로그, SNS, 유튜브, 메디컬 플랫폼, 광고·디자인, 소프트웨어, 홈페이지까지 올인원 마케팅 서비스.',
  ogDescription: '병원에 필요한 전문 마케팅 영역, 빠짐없이 준비되어 있습니다.',
});
</script>

<template>
  <HomePageChrome>
    <ProductsListContent />
  </HomePageChrome>
</template>
