<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  footer: HomeContent['footer'];
}>();
</script>

<template>
  <footer id="home-footer" class="bg-[#1c1d1d] text-white">
    <div class="mx-auto max-w-[1920px] px-6 py-16 lg:px-[221px] lg:py-[62px]">
      <div class="flex items-center gap-3">
        <img :src="footer.logoSrc" alt="" class="h-9 w-[46px] object-contain">
        <div class="leading-normal">
          <p class="text-[15px] tracking-[1.5px] text-wb-primary">{{ footer.brandName }}</p>
          <p class="text-[10px] tracking-[1px] text-wb-primary">{{ footer.brandSub }}</p>
        </div>
      </div>
      <p class="mt-2 text-[20px] tracking-[-0.5px] text-[#ededed]">{{ footer.slogan }}</p>
      <img src="/images/home-figma/footer/line.svg" alt="" class="mt-3 h-px w-full">

      <div class="mt-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div class="text-[14px] leading-5 text-[#99a1af]">
          <p v-for="line in footer.companyLines" :key="line">{{ line }}</p>
        </div>

        <div
          v-if="footer.introLinks?.length || footer.socialTitle"
          class="flex gap-16 lg:w-[429px] lg:justify-between"
        >
          <div v-if="footer.introLinks?.length">
            <p class="text-[16px] font-semibold tracking-[-0.4px] text-[#ededed]">{{ footer.introTitle }}</p>
            <div class="mt-5 flex flex-col gap-4 text-[16px] text-[#d5d5d5]">
              <NuxtLink v-for="link in footer.introLinks" :key="link.label" :to="link.href">
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>
          <div v-if="footer.socialTitle">
            <p class="text-[16px] font-semibold tracking-[-0.4px] text-[#ededed]">{{ footer.socialTitle }}</p>
            <div class="mt-4 flex items-center gap-4">
              <img src="/images/home-figma/footer/blog.svg" alt="블로그" class="size-11 object-contain">
              <img src="/images/home-figma/footer/instagram.svg" alt="인스타그램" class="h-[30px] w-[30px] object-contain">
              <img src="/images/home-figma/footer/kakao.svg" alt="카카오톡" class="h-[49px] w-[49px] object-contain">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
