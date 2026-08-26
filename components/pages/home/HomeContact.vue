<script setup lang="ts">
import type { HomeContent } from '~/types/home';

const props = defineProps<{
  section: HomeContent['contact'];
}>();

const source = ref('');
const logoVisible = ref(false);
const logoRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!props.section.logoSrc || !logoRef.value) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) logoVisible.value = true;
    },
    { threshold: 0.2 },
  );
  observer.observe(logoRef.value);
  onUnmounted(() => observer.disconnect());
});

const onSubmit = (event: Event) => {
  event.preventDefault();
};
</script>

<template>
  <section id="contact" class="scroll-mt-[72px] bg-white lg:scroll-mt-[116px]">
    <div class="mx-auto flex max-w-[1920px] flex-col items-start gap-12 px-6 py-16 lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[160px] lg:py-[150px] xl:gap-[133px]">
      <div class="flex w-full max-w-[710px] shrink-0 flex-col gap-10 lg:gap-[80px] xl:gap-[123px]">
        <div class="max-w-[658px]">
          <h2 class="text-[32px] font-bold tracking-[-1px] text-black md:text-[40px]">{{ section.title }}</h2>
          <p class="mt-2 whitespace-pre-line text-[18px] font-medium leading-[1.4] tracking-[-0.6px] text-wb-slate md:text-[24px]">
            {{ section.description }}
          </p>
        </div>
        <div
          v-if="section.logoSrc"
          ref="logoRef"
          class="hidden w-full max-w-[710px] overflow-hidden lg:block"
        >
          <img
            :src="section.logoSrc"
            alt=""
            class="h-auto w-full origin-left object-contain object-left transition-[opacity,transform] duration-[1080ms] ease-out"
            :class="logoVisible ? 'translate-x-0 opacity-100' : '-translate-x-[404px] opacity-0'"
          >
        </div>
      </div>

      <form
        class="w-full max-w-[757px] rounded-[24px] border border-[#e5e8eb] bg-white p-7 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"
        @submit="onSubmit"
      >
        <p class="text-[22px] font-bold tracking-[-0.55px] text-black">{{ section.formTitle }}</p>
        <p class="mt-1 text-[14px] font-medium tracking-[-0.35px] text-wb-slate">{{ section.formSubtitle }}</p>

        <label class="mt-8 block text-[14px] font-semibold text-[#363636]">
          {{ section.hospitalName.label }} <span class="text-[#fb2c36]">*</span>
        </label>
        <input
          type="text"
          :placeholder="section.hospitalName.placeholder"
          class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3 text-[14px] outline-none placeholder:text-[#363636]/40"
          required
        >

        <label class="mt-6 block text-[14px] font-semibold text-[#363636]">
          {{ section.name.label }} <span class="text-[#fb2c36]">*</span>
        </label>
        <input
          type="text"
          :placeholder="section.name.placeholder"
          class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3.5 text-[14px] outline-none placeholder:text-[#363636]/40"
          required
        >

        <label class="mt-6 block text-[14px] font-semibold text-[#363636]">
          {{ section.phone.label }} <span class="text-[#fb2c36]">*</span>
        </label>
        <input
          type="tel"
          :placeholder="section.phone.placeholder"
          class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3.5 text-[14px] outline-none placeholder:text-[#363636]/40"
          required
        >

        <template v-if="section.services?.length">
          <p class="mt-6 text-[14px] font-semibold text-[#363636]">
            {{ section.servicesLabel }} <span class="text-[#fb2c36]">*</span>
          </p>
          <div class="mt-2.5 flex flex-col gap-2.5">
            <label
              v-for="service in section.services"
              :key="service"
              class="flex items-center gap-3 rounded-xl border border-[#e5e8eb] px-4 py-3"
            >
              <input type="checkbox" :value="service" class="size-5 rounded border-2 border-[#d1d6db]">
              <span class="text-[14px] text-[#363636]">{{ service }}</span>
            </label>
          </div>
        </template>

        <label class="mt-6 block text-[14px] font-semibold text-[#363636]">
          {{ section.source.label }}
          <span class="font-semibold text-[#9ca3af]"> {{ section.source.optionalHint }}</span>
        </label>
        <select
          v-model="source"
          class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3 text-[14px] text-[#363636] outline-none"
        >
          <option value="" disabled>{{ section.source.placeholder }}</option>
          <option v-for="option in section.source.options" :key="option" :value="option">{{ option }}</option>
        </select>

        <button
          type="submit"
          class="mt-8 w-full rounded-full bg-wb-primary py-4 text-[18px] font-semibold leading-[18px] text-white"
        >
          {{ section.submitLabel }}
        </button>
      </form>
    </div>
  </section>
</template>
