<script setup lang="ts">
import type { ProductPageFaq } from '~/types/productPage';

defineProps<{
  items: ProductPageFaq[];
}>();

const answerLines = (a: string | string[]) => (Array.isArray(a) ? a : [a]);
</script>

<template>
  <section class="bg-[#0a0f1a] py-16 md:py-24">
    <div class="mx-auto max-w-3xl px-6 lg:px-8">
      <h2 class="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
        자주 묻는 질문 <span class="text-[#00d5be]">FAQ</span>
      </h2>
      <div class="space-y-4">
        <article
          v-for="(item, index) in items"
          :key="index"
          class="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div class="flex gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00d5be] text-sm font-bold text-[#0a0a0a]">Q</span>
            <p class="pt-1 font-semibold text-white">{{ item.q }}</p>
          </div>
          <div class="mt-4 flex gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-[#00d5be]">A</span>
            <div class="space-y-1 pt-1 text-[#d1d5dc]">
              <p v-for="line in answerLines(item.a)" :key="line">{{ line }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
