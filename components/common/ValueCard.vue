<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
  dark?: boolean;
}>();
</script>

<template>
  <article
    class="rounded-3xl p-6"
    :class="dark ? 'border border-white/10 bg-white/5 backdrop-blur' : 'border border-gray-100 bg-white shadow-sm'"
  >
    <div
      class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
      :class="dark ? 'bg-brand-600' : 'bg-brand-100'"
    >
      {{ icon }}
    </div>
    <h3 class="text-lg font-extrabold" :class="dark ? 'text-white' : 'text-gray-950'">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm font-medium leading-6" :class="dark ? 'text-gray-300' : 'text-gray-600'">
      {{ description }}
    </p>
  </article>
</template>
