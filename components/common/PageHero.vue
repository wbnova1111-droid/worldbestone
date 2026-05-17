<script setup lang="ts">
defineProps<{
  badge?: string;
  title: string;
  description?: string;
  dark?: boolean;
}>();
</script>

<template>
  <section
    class="relative overflow-hidden py-16 md:py-24"
    :class="dark ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white' : 'bg-gradient-to-r from-brand-600 to-brand-700 text-white'"
  >
    <div
      v-if="dark"
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      aria-hidden="true"
    />
    <div class="mobile-container relative z-10 text-center">
      <span
        v-if="badge"
        class="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest"
      >
        {{ badge }}
      </span>
      <h1 class="text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
        {{ title }}
      </h1>
      <p v-if="description" class="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-white/80 md:text-lg">
        {{ description }}
      </p>
      <slot />
    </div>
  </section>
</template>
