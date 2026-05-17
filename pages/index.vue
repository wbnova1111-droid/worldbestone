<script setup lang="ts">
definePageMeta({ layout: 'default' });

const { content } = useHomeContent();

useSeoMeta({
  title: 'WORLD BEST | 병원 마케팅의 새로운 기준',
  ogTitle: 'WORLD BEST | 병원 마케팅의 새로운 기준',
  description: '병원 성장을 위한 브랜딩, SNS 운영, 콘텐츠 제작, 데이터 분석 올인원 마케팅 서비스입니다.',
  ogDescription: '병원 성장을 위한 올인원 마케팅 파트너 WORLD BEST',
});
</script>

<template>
  <HeroSection :hero="content.hero" />
  <IntroSection :intro="content.intro" />
  <ServiceFeatureGrid :services="content.services" />
  <ReasonSection :reasons="content.reasons" />
  <CtaSection :cta="content.cta" />
</template>
