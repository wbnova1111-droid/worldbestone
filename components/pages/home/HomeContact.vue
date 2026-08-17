<script setup lang="ts">
import type { HomeContent } from '~/types/home';

const props = defineProps<{
  section: HomeContent['contact'];
}>();

const form = reactive<Record<string, string>>({});

props.section.formFields.forEach((field) => {
  form[field.label] = '';
});

function handleSubmit() {
  // TODO: API 연동
}
</script>

<template>
  <section class="bg-wb-dark">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-16 md:gap-16 md:px-8 md:py-24 lg:flex-row lg:items-center lg:gap-20 lg:px-[120px] lg:py-[120px]">
      <div class="flex-1 space-y-8 text-white">
        <p class="text-sm font-extrabold tracking-[1px] text-wb-primary">{{ section.badge }}</p>
        <h2 class="font-display text-3xl font-extrabold leading-tight md:text-[44px]">
          {{ section.titleLine1 }}<br>
          {{ section.titlePrefix }}<span class="text-wb-primary">{{ section.titleHighlight }}</span>{{ section.titleLine2 }}
        </h2>
        <p class="max-w-xl text-base leading-relaxed text-wb-mint/80">{{ section.description }}</p>
        <div class="space-y-4 pt-2">
          <div class="flex items-center gap-3">
            <img src="/images/home-new/phone.svg" alt="" class="size-6">
            <a :href="`tel:${section.phone}`" class="font-display text-xl font-extrabold md:text-[22px]">{{ section.phone }}</a>
          </div>
          <div class="flex items-center gap-3">
            <img src="/images/home-new/mail.svg" alt="" class="size-6">
            <a :href="`mailto:${section.email}`" class="text-base">{{ section.email }}</a>
          </div>
        </div>
      </div>

      <form
        class="w-full shrink-0 rounded-3xl bg-white p-6 md:p-10 lg:w-[560px]"
        @submit.prevent="handleSubmit"
      >
        <h3 class="font-display text-2xl font-extrabold text-wb-dark">{{ section.formTitle }}</h3>
        <div class="mt-6 space-y-4">
          <div v-for="field in section.formFields" :key="field.label">
            <label class="mb-2 block text-sm font-bold text-[#1e293b]">{{ field.label }}</label>
            <select
              v-if="field.type === 'select'"
              v-model="form[field.label]"
              class="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-3.5 text-[15px] text-wb-slate outline-none focus:border-wb-primary"
            >
              <option value="">{{ field.placeholder }}</option>
              <option v-for="option in field.options" :key="option" :value="option">{{ option }}</option>
            </select>
            <input
              v-else
              v-model="form[field.label]"
              :type="field.type"
              :placeholder="field.placeholder"
              class="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-3.5 text-[15px] text-wb-slate outline-none focus:border-wb-primary"
            >
          </div>
        </div>
        <button
          type="submit"
          class="mt-6 w-full rounded-lg bg-wb-primary px-7 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
        >
          {{ section.submitLabel }}
        </button>
        <p class="mt-4 text-center text-xs text-wb-slate">{{ section.disclaimer }}</p>
      </form>
    </div>
  </section>
</template>
