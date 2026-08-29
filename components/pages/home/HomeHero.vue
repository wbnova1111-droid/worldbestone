<script setup lang="ts">
import type { HomeContent } from '~/types/home';

const props = defineProps<{
  hero: HomeContent['hero'];
  marquee: HomeContent['marquee'];
}>();

const route = useRoute();

const goHome = async () => {
  if (route.path !== '/') {
    await navigateTo('/');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const animLines = computed(() => [
  { text: props.hero.animationLines[0] ?? '', emphasis: false },
  { text: props.hero.animationLines[1] ?? '', emphasis: true },
  { text: props.hero.animationLines[2] ?? '', emphasis: false },
]);

const brandPositions = [
  'lg:left-[160px] lg:top-[488px]',
  'lg:left-[273px] lg:top-[568px]',
  'lg:left-[464px] lg:top-[648px]',
] as const;

const totalChars = computed(() => animLines.value.reduce((count, line) => count + [...line.text].length, 0));
const revealed = ref(0);
const brandActive = ref(0);
let typingTimer: ReturnType<typeof setTimeout> | null = null;
let brandTimer: ReturnType<typeof setInterval> | null = null;

const lineOffset = (index: number) =>
  animLines.value.slice(0, index).reduce((count, line) => count + [...line.text].length, 0);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const clearTyping = () => {
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = null;
  }
};

const clearBrandHighlight = () => {
  if (brandTimer) {
    clearInterval(brandTimer);
    brandTimer = null;
  }
};

const playTyping = () => {
  clearTyping();
  if (prefersReducedMotion()) {
    revealed.value = totalChars.value;
    return;
  }

  revealed.value = 0;
  const step = () => {
    if (revealed.value < totalChars.value) {
      revealed.value += 1;
      typingTimer = setTimeout(step, 48);
      return;
    }
    typingTimer = setTimeout(() => {
      revealed.value = 0;
      typingTimer = setTimeout(step, 180);
    }, 2200);
  };
  typingTimer = setTimeout(step, 280);
};

const playBrandHighlight = () => {
  clearBrandHighlight();
  if (prefersReducedMotion() || props.hero.brandLines.length === 0) {
    brandActive.value = -1;
    return;
  }

  brandActive.value = 0;
  brandTimer = setInterval(() => {
    brandActive.value = (brandActive.value + 1) % props.hero.brandLines.length;
  }, 1400);
};

onMounted(() => {
  playTyping();
  playBrandHighlight();
});
onUnmounted(() => {
  clearTyping();
  clearBrandHighlight();
});
</script>

<template>
  <section class="relative overflow-hidden bg-white lg:h-[1375px]">
    <h1 class="sr-only">병원 마케팅 파트너 월드베스트 WORLD BEST — 병·의원 전문 올인원 마케팅</h1>
    <a
      href="/"
      class="relative z-20 mx-auto mt-6 block h-[88px] w-[112px] md:mx-10 md:mt-8 md:h-[160px] md:w-[204px] lg:absolute lg:left-[58px] lg:top-[124px] lg:mx-0 lg:mt-0 lg:h-[398px] lg:w-[508px]"
      aria-label="홈 맨 위로 이동"
      @click.prevent="goHome"
    >
      <img
        src="/images/home-figma/logo-wb.svg"
        alt="WORLDBEST"
        class="h-full w-full object-contain object-center lg:object-left-top"
      >
    </a>

    <div class="relative mx-auto max-w-[1920px] px-5 pb-4 pt-6 md:px-10 lg:px-0 lg:pb-0 lg:pt-0">
      <div class="flex flex-col items-center gap-6 text-center lg:block lg:text-left">
        <div class="flex flex-col items-center font-display font-extrabold uppercase lg:contents">
          <p
            v-for="(line, index) in hero.brandLines"
            :key="line"
            class="w-fit whitespace-nowrap leading-none transition-[background-color,color,font-size,padding] duration-300 ease-out lg:absolute lg:leading-[56px]"
            :class="[
              brandPositions[index],
              brandActive === index
                ? 'bg-wb-primary px-2.5 py-2 text-[26px] text-white sm:text-[34px] md:px-[10px] md:py-[12px] md:text-[48px] lg:text-[56px]'
                : 'px-2.5 py-2 text-[26px] text-black sm:text-[34px] md:p-[10px] md:text-[48px] lg:text-[50px]',
            ]"
          >{{ line }}</p>
        </div>

        <div class="max-w-[472px] min-h-[6.5rem] font-display text-[17px] leading-[1.5] text-black sm:text-[22px] md:min-h-0 md:text-[28px] lg:absolute lg:left-[1093px] lg:top-[441px] lg:h-[172px] lg:w-[472px] lg:text-[31px]">
          <p
            v-for="(line, lineIndex) in animLines"
            :key="line.text"
            class="whitespace-normal lg:whitespace-pre"
            :class="[
              line.emphasis ? 'font-semibold' : 'font-normal',
              lineIndex === 2 ? 'mt-3 lg:mt-6' : '',
            ]"
          >
            <span
              v-for="(ch, charIndex) in [...line.text]"
              :key="`${lineIndex}-${charIndex}`"
              class="transition-opacity duration-75"
              :class="lineOffset(lineIndex) + charIndex < revealed ? 'text-black' : 'text-transparent'"
            >{{ ch }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="relative mt-5 overflow-hidden marquee-mask lg:absolute lg:inset-x-0 lg:top-[845px] lg:mt-0 lg:h-[88px]">
      <div class="flex w-max animate-marquee items-center gap-10 lg:gap-[120px]">
        <div
          v-for="copy in 2"
          :key="copy"
          class="flex items-center gap-10 lg:gap-[120px]"
        >
          <div
            v-for="item in marquee"
            :key="`${copy}-${item.lines.join('-')}`"
            class="flex items-center justify-center gap-4 px-2.5 py-2.5 lg:gap-10"
          >
            <p class="whitespace-nowrap text-[15px] font-bold leading-[1.35] tracking-[-0.6px] text-[#171717] md:text-[20px] lg:text-[24px]">
              <span class="block">{{ item.lines[0] }}</span>
              <span class="block">{{ item.lines[1] }}</span>
            </p>
            <div class="flex items-center gap-2 lg:gap-3">
              <div
                v-for="icon in item.icons"
                :key="icon"
                class="size-11 shrink-0 overflow-hidden rounded-[10px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] lg:size-[60px]"
              >
                <img
                  :src="icon"
                  alt=""
                  class="size-full"
                  :class="item.iconContain ? 'object-contain p-1.5 lg:p-2' : 'object-cover'"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mx-auto flex max-w-[1920px] justify-center px-5 pb-14 pt-8 lg:absolute lg:inset-x-0 lg:top-[1238px] lg:h-[88px] lg:items-center lg:pb-0 lg:pt-0">
      <h2 v-reveal class="text-center font-display text-[20px] font-extrabold leading-snug tracking-[-1px] text-black md:text-[36px] lg:text-[48px] lg:leading-[1.2]">
        {{ hero.servicesHeading }}
      </h2>
    </div>
  </section>
</template>
