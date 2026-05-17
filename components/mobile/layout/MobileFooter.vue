<script setup lang="ts">
defineProps<{
  bannerSrc: string;
  bannerAlt: string;
  copyright: string;
}>();
</script>

<template>
  <footer class="bg-gray-900 py-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center">
        <img
          :src="bannerSrc"
          :alt="bannerAlt"
          width="1024"
          height="427"
          class="h-auto w-full max-w-5xl rounded-[10px] object-cover"
          loading="lazy"
          decoding="async"
        >
      </div>
      <p class="mt-8 text-center text-sm text-gray-400">
        {{ copyright }}
      </p>
    </div>
  </footer>
</template>
