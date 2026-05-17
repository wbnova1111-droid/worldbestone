<script setup lang="ts">
defineProps<{
  badge?: string;
  heading: string | string[];
  headingHighlight?: string;
  sub?: string | string[];
  light?: boolean;
  center?: boolean;
}>();

const lines = (v: string | string[]) => (Array.isArray(v) ? v : [v]);
</script>

<template>
  <div :class="center !== false ? 'text-center' : ''">
    <span
      v-if="badge"
      class="inline-flex rounded-full bg-gradient-to-r from-[#00bba7] to-[#2b7fff] px-5 py-1.5 text-sm font-semibold text-white"
    >
      {{ badge }}
    </span>
    <h2
      class="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl"
      :class="light ? 'text-white' : 'text-[#101828]'"
    >
      <span v-for="(line, i) in lines(heading)" :key="i" class="block">{{ line }}</span>
      <span
        v-if="headingHighlight"
        class="mt-1 block bg-gradient-to-r from-[#00d5be] via-[#51a2ff] to-[#c27aff] bg-clip-text text-transparent"
      >
        {{ headingHighlight }}
      </span>
    </h2>

    <div
      v-if="sub"
      class="mx-auto mt-4 max-w-3xl space-y-1 text-lg md:text-xl"
      :class="light ? 'text-[#d1d5dc]' : 'text-[#4a5565]'"
    >
      <p v-for="line in lines(sub)" :key="line">{{ line }}</p>
    </div>
  </div>
</template>
