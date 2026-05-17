<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  buttonLabel?: string;
}>();

const { site } = useSiteContent();
</script>

<template>
  <section class="bg-brand-600 py-16 text-white">
    <div class="mobile-container text-center">
      <h2 class="text-2xl font-black leading-tight md:text-4xl">{{ title }}</h2>
      <p v-if="description" class="mx-auto mt-4 max-w-md text-base font-semibold text-brand-100">
        {{ description }}
      </p>
      <BaseButton
        class="mt-8"
        :link="{ label: buttonLabel ?? '무료 상담 신청하기', href: site.consultationUrl, external: true }"
        variant="light"
      />
    </div>
  </section>
</template>
