<script setup lang="ts">
defineProps<{
  section: Record<string, unknown>;
}>();
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:gap-16 md:px-8 md:py-24 lg:px-[120px] lg:py-[100px]">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="text-sm font-extrabold tracking-[1.5px] text-wb-primary">{{ section.badge }}</p>
          <h2 class="mt-4 font-display text-2xl font-extrabold text-wb-dark md:text-[38px]">
            {{ section.title }}
          </h2>
        </div>
        <button
          type="button"
          class="inline-flex w-fit rounded-lg border-[1.5px] border-wb-primary px-7 py-3.5 text-base font-bold text-wb-dark transition-colors hover:bg-wb-mint"
        >
          {{ section.ctaLabel }}
        </button>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        <article
          v-for="item in section.items"
          :key="item.title"
          class="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white"
        >
          <div class="h-[220px] overflow-hidden">
            <img :src="item.imageSrc" :alt="item.title" class="size-full object-cover">
          </div>
          <div class="space-y-3 p-6">
            <p class="text-[13px] font-bold uppercase text-wb-primary">{{ item.category }}</p>
            <h3 class="text-lg font-extrabold text-wb-dark">{{ item.title }}</h3>
            <div class="flex items-center gap-1.5 rounded-lg bg-wb-mint px-3 py-2">
              <img src="/images/home-new/trending-up.svg" alt="" class="size-4">
              <p class="text-sm font-bold text-wb-dark">{{ item.result }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
