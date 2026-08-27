<script setup lang="ts">
import type { HomeContent } from '~/types/home';

const props = defineProps<{
  section: HomeContent['contact'];
}>();

const source = ref('');
const sourceOpen = ref(false);
const sourceWrap = ref<HTMLElement | null>(null);
const logoVisible = ref(false);
const logoRef = ref<HTMLElement | null>(null);

const selectSource = (option: string) => {
  source.value = option;
  sourceOpen.value = false;
};

onMounted(() => {
  const onPointerDown = (event: PointerEvent) => {
    if (!sourceWrap.value?.contains(event.target as Node)) sourceOpen.value = false;
  };
  document.addEventListener('pointerdown', onPointerDown);
  onUnmounted(() => document.removeEventListener('pointerdown', onPointerDown));

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
  <section id="contact" class="scroll-mt-[72px] bg-white lg:scroll-mt-[108px]">
    <div class="relative mx-auto max-w-[1920px] px-6 py-16 lg:h-[1111px] lg:overflow-hidden lg:px-[160px] lg:py-[150px]">
      <div class="max-w-[658px] lg:absolute lg:left-[160px] lg:top-[150px] lg:w-[658px]">
        <h2 class="text-[32px] font-bold tracking-[-1px] text-black md:text-[40px]">{{ section.title }}</h2>
        <p class="mt-2 whitespace-pre-line text-[18px] font-medium leading-[1.4] tracking-[-0.6px] text-wb-slate md:text-[24px]">
          {{ section.description }}
        </p>
      </div>

      <div
        v-if="section.logoSrc"
        ref="logoRef"
        class="mt-10 hidden overflow-hidden lg:absolute lg:left-[160px] lg:top-[464px] lg:mt-0 lg:block lg:h-[556px] lg:w-[710px]"
      >
        <img
          :src="section.logoSrc"
          alt=""
          class="h-full w-full origin-left object-contain object-left transition-[opacity,transform] duration-[1080ms] ease-out"
          :class="logoVisible ? 'translate-x-0 opacity-100' : '-translate-x-[404px] opacity-0'"
        >
      </div>

      <form
        class="relative mt-10 w-full rounded-[24px] border border-[#e5e8eb] bg-white p-7 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] lg:absolute lg:left-[1000px] lg:top-[282px] lg:mt-0 lg:w-[757px] lg:px-px lg:py-[39px]"
        @submit="onSubmit"
      >
        <div class="px-0 lg:px-7">
          <p class="text-[22px] font-bold tracking-[-0.55px] text-black">{{ section.formTitle }}</p>
          <p class="mt-1 text-[14px] font-medium tracking-[-0.35px] text-wb-slate">{{ section.formSubtitle }}</p>
        </div>

        <div class="mt-8 flex flex-col gap-7 px-0 lg:px-7">
          <label class="block text-[14px] font-semibold text-[#363636]">
            {{ section.hospitalName.label }} <span class="text-[#fb2c36]">*</span>
            <input
              type="text"
              :placeholder="section.hospitalName.placeholder"
              class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3 text-[14px] outline-none placeholder:text-[#363636]/40"
              required
            >
          </label>

          <label class="block text-[14px] font-semibold text-[#363636]">
            {{ section.name.label }} <span class="text-[#fb2c36]">*</span>
            <input
              type="text"
              :placeholder="section.name.placeholder"
              class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3.5 text-[14px] outline-none placeholder:text-[#363636]/40"
              required
            >
          </label>

          <label class="block text-[14px] font-semibold text-[#363636]">
            {{ section.phone.label }} <span class="text-[#fb2c36]">*</span>
            <input
              type="tel"
              :placeholder="section.phone.placeholder"
              class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3.5 text-[14px] outline-none placeholder:text-[#363636]/40"
              required
            >
          </label>

          <template v-if="section.services?.length">
            <div>
              <p class="text-[14px] font-semibold text-[#363636]">
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
            </div>
          </template>

          <div>
            <p class="text-[14px] font-semibold leading-5 text-[#363636]">
              {{ section.source.label }}
              <span class="font-semibold text-[#9ca3af]">{{ section.source.optionalHint }}</span>
            </p>
            <div id="contact-source" ref="sourceWrap" class="relative mt-1.5">
              <input type="hidden" name="source" :value="source">
              <button
                type="button"
                class="flex h-[46px] w-full items-center justify-between rounded-xl border border-[#e5e8eb] bg-white px-4 py-3 text-left text-[14px] leading-5"
                :class="source ? 'text-[#363636]' : 'text-[rgba(54,54,54,0.4)]'"
                :aria-expanded="sourceOpen"
                aria-haspopup="listbox"
                @click="sourceOpen = !sourceOpen"
              >
                <span>{{ source || section.source.placeholder }}</span>
                <img
                  src="/images/home-figma/select-chevron.svg"
                  alt=""
                  class="size-4 shrink-0 transition-transform"
                  :class="sourceOpen ? 'rotate-180' : ''"
                >
              </button>
              <ul
                v-if="sourceOpen"
                role="listbox"
                class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-[#e5e8eb] bg-white py-1 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
              >
                <li
                  v-for="option in section.source.options"
                  :key="option"
                  role="option"
                  class="cursor-pointer px-4 py-2.5 text-[14px] leading-5 text-[#363636] hover:bg-[#f7f7fb]"
                  :aria-selected="source === option"
                  @click="selectSource(option)"
                >
                  {{ option }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-8 px-0 lg:px-7">
          <button
            type="submit"
            class="w-full rounded-full bg-wb-primary py-4 text-[18px] font-semibold leading-[18px] text-white"
          >
            {{ section.submitLabel }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
