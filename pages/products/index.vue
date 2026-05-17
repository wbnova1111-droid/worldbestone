<script setup lang="ts">
definePageMeta({ layout: 'default' });

const { products } = useProducts();

useSeoMeta({
  title: '마케팅 서비스 | WORLD BEST',
  description: '병원의 성장을 위한 프리미엄 마케팅 솔루션을 확인하세요.',
});
</script>

<template>
  <ProductsListContent :products="products" />
</template>
