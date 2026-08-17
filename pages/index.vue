<script setup lang="ts">
definePageMeta({ layout: 'home' });

const { content } = useHomeContent();

useSeoMeta({
  title: 'WORLD BEST | 병원 마케팅 파트너',
  ogTitle: 'WORLD BEST | 병원 마케팅 파트너',
  description:
    '클라이언트가 아닌 파트너로, 병의원 전문 올인원 마케팅. 기획부터 디자인, 촬영, 영상, 콘텐츠, 웹개발까지 한 곳에서 밀착 관리합니다.',
  ogDescription: '병의원 전문 올인원 마케팅 파트너 WORLD BEST',
});
</script>

<template>
  <HomePageContent :content="content" />
</template>
