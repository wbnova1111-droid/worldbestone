<script setup lang="ts">
definePageMeta({ layout: 'default' });

const { notices } = useNotices();

useSeoMeta({
  title: '공지사항 | WORLD BEST',
  description: '월드베스트의 새로운 소식을 확인하세요.',
});
</script>

<template>
  <NoticePageContent :notices="notices" />
</template>
