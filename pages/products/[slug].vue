<script setup lang="ts">
definePageMeta({ layout: 'default' });

const route = useRoute();
const { getProductBySlug } = useProducts();

const slug = computed(() => route.params.slug as string);
const product = computed(() => getProductBySlug(slug.value));

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: '상품을 찾을 수 없습니다.' });
}

useSeoMeta({
  title: () => `${product.value?.title} | WORLD BEST`,
  description: () => product.value?.description ?? '',
});
</script>

<template>
  <ProductPlacePage v-if="product?.template === 'place'" :product="product" />
  <ProductAllinonePage v-else-if="product?.template === 'allinone'" :product="product" />
  <ProductYoutubePage v-else-if="product?.template === 'youtube'" :product="product" />
  <ProductBlogPage v-else-if="product?.template === 'blog'" :product="product" />
  <ProductSnsPage v-else-if="product?.template === 'sns'" :product="product" />
  <ProductMedicalPlatformPage v-else-if="product?.template === 'medical-platform'" :product="product" />
  <ProductWebsitePage v-else-if="product?.template === 'website'" :product="product" />
  <ProductOfflinePage v-else-if="product?.template === 'offline'" :product="product" />
  <ProductDetailDefault v-else-if="product" :product="product" />
</template>
