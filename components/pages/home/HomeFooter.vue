<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  footer: HomeContent['footer'];
}>();
</script>

<template>
  <footer class="bg-wb-footer text-white">
    <div class="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-[120px] lg:pt-20 lg:pb-12">
      <div class="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div class="max-w-md space-y-5">
          <div class="flex items-center gap-3">
            <img :src="footer.logoSrc" alt="WORLDBEST" class="h-[42px] w-[56px] rounded object-cover">
            <div class="flex flex-col leading-none">
              <span class="font-display text-xl font-extrabold tracking-[0.5px]">WORLDBEST</span>
              <span class="text-[11px] font-extrabold tracking-[2px] text-wb-primary">MARKETING</span>
            </div>
          </div>
          <p class="text-sm leading-relaxed text-wb-mint/70">{{ footer.description }}</p>
        </div>

        <div class="flex flex-wrap gap-12 md:gap-16">
          <div v-for="group in footer.linkGroups" :key="group.title" class="space-y-4">
            <p class="text-[15px] font-extrabold">{{ group.title }}</p>
            <ul class="space-y-3">
              <li v-for="link in group.links" :key="link">
                <span class="cursor-pointer text-sm text-wb-mint/70 transition-colors hover:text-white">{{ link }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="my-10 border-white/10">

      <div class="flex flex-col gap-4 text-[13px] text-wb-mint/60 md:flex-row md:items-center md:justify-between">
        <div class="space-y-2">
          <p>{{ footer.companyInfo }}</p>
          <p>{{ footer.copyright }}</p>
        </div>
        <div class="flex flex-wrap gap-4 font-bold text-wb-primary">
          <span v-for="link in footer.legalLinks" :key="link" class="cursor-pointer hover:underline">{{ link }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
