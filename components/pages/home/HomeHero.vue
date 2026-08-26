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
      typingTimer = setTimeout(step, 55);
      return;
    }
    typingTimer = setTimeout(() => {
      revealed.value = 0;
      typingTimer = setTimeout(step, 180);
    }, 2200);
  };
  typingTimer = setTimeout(step, 350);
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
    <a
      href="/"
      class="absolute left-[18px] top-[24px] z-20 block h-[180px] w-[230px] cursor-pointer md:h-[280px] md:w-[360px] lg:left-[58px] lg:top-[124px] lg:h-[398px] lg:w-[508px]"
      aria-label="홈 맨 위로 이동"
      @click.prevent="goHome"
    >
      <img
        src="/images/home-figma/logo-wb.svg"
        alt="WORLDBEST"
        class="h-full w-full object-contain object-left-top"
      >
    </a>

    <div class="relative mx-auto max-w-[1920px] px-6 pb-10 pt-48 md:px-16 lg:px-0 lg:pb-0 lg:pt-0">
      <div class="flex flex-col gap-10 lg:block">
        <div class="flex flex-col font-display font-extrabold uppercase lg:contents">
          <p
            v-for="(line, index) in hero.brandLines"
            :key="line"
            class="w-fit whitespace-nowrap leading-[56px] transition-[background-color,color,font-size,padding] duration-300 ease-out lg:absolute"
            :class="[
              brandPositions[index],
              brandActive === index
                ? 'bg-wb-primary px-[10px] py-[12px] text-[40px] text-white md:text-[48px] lg:text-[56px]'
                : 'p-[10px] text-[40px] text-black md:text-[48px] lg:text-[50px]',
            ]"
          >{{ line }}</p>
        </div>

        <div class="max-w-[472px] font-display text-[22px] leading-[1.4] text-black md:text-[28px] lg:absolute lg:left-[1093px] lg:top-[441px] lg:h-[172px] lg:w-[472px] lg:text-[31px]">
          <p
            v-for="(line, lineIndex) in animLines"
            :key="line.text"
            class="whitespace-pre"
            :class="[
              line.emphasis ? 'font-semibold' : 'font-normal',
              lineIndex === 2 ? 'mt-6' : '',
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

    <div class="relative mt-16 overflow-hidden lg:absolute lg:inset-x-0 lg:top-[845px] lg:mt-0 lg:h-[88px]">
      <div class="flex w-max animate-marquee items-center gap-[120px]">
        <div
          v-for="copy in 2"
          :key="copy"
          class="flex items-center gap-[120px]"
        >
          <div
            v-for="item in marquee"
            :key="`${copy}-${item.lines.join('-')}`"
            class="flex items-center justify-center gap-10 px-2.5 py-2.5"
          >
            <p class="whitespace-nowrap text-[20px] font-bold leading-[1.4] tracking-[-0.6px] text-[#171717] md:text-[24px]">
              <span class="block">{{ item.lines[0] }}</span>
              <span class="block">{{ item.lines[1] }}</span>
            </p>
            <div class="flex items-center gap-3">
              <div
                v-for="icon in item.icons"
                :key="icon"
                class="size-[60px] shrink-0 overflow-hidden rounded-[10px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              >
                <img
                  :src="icon"
                  alt=""
                  class="size-full"
                  :class="item.iconContain ? 'object-contain p-2' : 'object-cover'"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mx-auto flex max-w-[1920px] justify-center px-5 pb-16 pt-10 lg:absolute lg:inset-x-0 lg:top-[1238px] lg:h-[88px] lg:items-center lg:pb-0 lg:pt-0">
      <h2 class="text-center font-display text-[28px] font-extrabold tracking-[-1px] text-black md:text-[36px] lg:text-[48px] lg:leading-[1.2]">
        {{ hero.servicesHeading }}
      </h2>
    </div>
  </section>
</template>
