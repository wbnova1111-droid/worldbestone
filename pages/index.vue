<script setup lang="ts">
definePageMeta({ layout: 'home' });

const { content } = useHomeContent();

useSiteSeo({
  title: '병원 마케팅 파트너 월드베스트 | WORLD BEST',
  description:
    '병원 마케팅 파트너 월드베스트. 병·의원 전문 올인원 마케팅으로 기획·콘텐츠·디자인·광고·홈페이지·GEO·AEO까지 한 곳에서 밀착 관리합니다.',
  path: '/',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '월드베스트 WORLD BEST',
      alternateName: '병원 마케팅 파트너 월드베스트',
      description: '병·의원 전문 올인원 마케팅 파트너',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.value.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
});
</script>

<template>
  <HomePageContent :content="content" />
</template>
