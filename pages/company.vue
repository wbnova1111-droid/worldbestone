<script setup lang="ts">
definePageMeta({ layout: 'home' });

useSeoMeta({
  title: '회사 소개 | WORLD BEST',
  ogTitle: '회사 소개 | WORLD BEST',
  description: '신뢰를 만드는 올인원 파트너십 마케팅. 인하우스 직원 영역부터 병원 내부에서 직접 운영하기 어려운 영역까지, 매출 상승을 위한 올인원 마케팅 프로덕션.',
  ogDescription: 'Beyond Marketing, We Grow Together. 월드베스트는 병원과 함께 성장하는 마케팅 파트너입니다.',
});
</script>

<template>
  <HomePageChrome>
    <CompanyPageContent />
  </HomePageChrome>
</template>
