<script setup lang="ts">
defineProps<{
  section: Record<string, unknown>;
}>();
</script>

<template>
  <section class="bg-[#f8fafc]">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-16 md:gap-20 md:px-8 md:py-24 lg:px-[120px] lg:py-[100px]">
      <div class="grid gap-8 border-b border-[#e2e8f0] pb-10 sm:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="stat in section.stats"
          :key="stat.label"
          class="text-center"
        >
          <p class="font-display text-4xl font-extrabold text-wb-primary md:text-[48px]">{{ stat.value }}</p>
          <p class="mt-2 text-base font-bold text-wb-dark">{{ stat.label }}</p>
        </div>
      </div>

      <div class="space-y-8">
        <h2 class="text-center font-display text-2xl font-extrabold text-wb-dark md:text-[28px]">
          {{ section.testimonialsTitle }}
        </h2>
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article
            v-for="item in section.testimonials"
            :key="item.author"
            class="rounded-2xl border border-[#e2e8f0] bg-white p-6 md:p-10"
          >
            <img src="/images/home-new/quote.svg" alt="" class="size-8">
            <p class="mt-6 text-base leading-relaxed text-[#1e293b]">{{ item.quote }}</p>
            <div class="mt-6 flex items-center gap-2">
              <div class="size-10 rounded-full bg-wb-mint" />
              <p class="text-[15px] font-extrabold text-wb-dark">{{ item.author }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
