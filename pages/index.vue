<script setup lang="ts">
definePageMeta({ layout: 'default' });

const { content } = useHomeContent();

useSeoMeta({
  title: 'WORLD BEST | 병원 마케팅의 새로운 기준',
  ogTitle: 'WORLD BEST | 병원 마케팅의 새로운 기준',
  description: '병원 성장을 함께 만드는 올인원 마케팅 파트너 월드베스트. 플레이스, 블로그, SNS, 유튜브, 홈페이지까지 통합 관리합니다.',
  ogDescription: '병원 성장을 위한 올인원 마케팅 파트너 WORLD BEST',
});
</script>

<template>
  <HeroSection :hero="content.hero" />
  <ServiceFeatureGrid :services="content.services" />
  <ProcessSection :process="content.process" />
  <PartnershipSection :partnership="content.partnership" />
  <CoreValuesSection :core-values="content.coreValues" />
  <CtaSection :cta="content.cta" />
</template>
