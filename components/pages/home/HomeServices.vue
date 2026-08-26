<script setup lang="ts">
defineProps<{
  section: Record<string, unknown>;
}>();
</script>

<template>
  <section id="services" class="bg-white">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:gap-16 md:px-8 md:py-24 lg:px-[120px] lg:py-[100px]">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-extrabold tracking-[1.5px] text-wb-primary">{{ section.badge }}</p>
        <h2 class="mt-4 font-display text-2xl font-extrabold text-wb-dark md:text-[38px]">
          {{ section.title }}
        </h2>
        <p class="mt-4 text-base text-wb-slate">{{ section.description }}</p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="item in section.items"
          :key="item.title"
          :to="item.href || '#'"
          class="flex flex-col gap-5 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_12px_rgba(31,69,65,0.03)] transition-shadow hover:shadow-md md:p-8"
        >
          <div class="flex items-center justify-between">
            <div class="flex size-14 items-center justify-center rounded-xl bg-wb-mint">
              <img :src="item.iconSrc" alt="" class="size-7">
            </div>
            <span class="rounded-md bg-wb-mint px-2.5 py-1 text-xs font-bold text-wb-primary">{{ item.tag }}</span>
          </div>
          <div>
            <h3 class="text-lg font-extrabold text-wb-dark">{{ item.title }}</h3>
            <p class="mt-2.5 text-sm leading-relaxed text-wb-slate">{{ item.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
