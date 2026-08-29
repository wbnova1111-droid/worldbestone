<script setup lang="ts">
import type { HomeContent } from '~/types/home';

const CONTACT_EMAIL = 'wbnova@naver.com';

const props = defineProps<{
  section: HomeContent['contact'];
}>();

const hospitalName = ref('');
const applicantName = ref('');
const phone = ref('');
const selectedServices = ref<string[]>([]);
const source = ref('');
const sourceOpen = ref(false);
const sourceWrap = ref<HTMLElement | null>(null);
const logoVisible = ref(false);
const logoRef = ref<HTMLElement | null>(null);
const submitting = ref(false);
const submitState = ref<'idle' | 'success' | 'error'>('idle');
const errorMessage = ref('');

const selectSource = (option: string) => {
  source.value = option;
  sourceOpen.value = false;
};

const resetForm = () => {
  hospitalName.value = '';
  applicantName.value = '';
  phone.value = '';
  selectedServices.value = [];
  source.value = '';
  submitState.value = 'idle';
  errorMessage.value = '';
};

const mailtoHref = computed(() => {
  const lines = [
    `병원명: ${hospitalName.value}`,
    `성함: ${applicantName.value}`,
    `휴대전화번호: ${phone.value}`,
    selectedServices.value.length ? `관심 서비스: ${selectedServices.value.join(', ')}` : '',
    `알게 된 경로: ${source.value || '미선택'}`,
  ].filter(Boolean);
  const subject = `[월드베스트 문의] ${hospitalName.value} / ${applicantName.value}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
});

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

const onSubmit = async (event: Event) => {
  event.preventDefault();
  if (submitting.value) return;

  if (props.section.services?.length && selectedServices.value.length === 0) {
    submitState.value = 'error';
    errorMessage.value = '관심 서비스를 하나 이상 선택해주세요.';
    return;
  }

  submitting.value = true;
  submitState.value = 'idle';
  errorMessage.value = '';
  sourceOpen.value = false;

  const payload = {
    _subject: `[월드베스트 문의] ${hospitalName.value} / ${applicantName.value}`,
    _template: 'table',
    _captcha: false,
    _honey: '',
    병원명: hospitalName.value.trim(),
    성함: applicantName.value.trim(),
    휴대전화번호: phone.value.trim(),
    관심서비스: selectedServices.value.join(', ') || '선택 없음',
    알게된경로: source.value || '미선택',
  };

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const result = await response.json().catch(() => ({} as { success?: boolean | string; message?: string }));
    const ok = response.ok && (result.success === true || result.success === 'true');
    if (!ok) {
      throw new Error(result.message || '전송 실패');
    }
    submitState.value = 'success';
  } catch {
    submitState.value = 'error';
    errorMessage.value = `문의 전송에 실패했습니다. 잠시 후 다시 시도하거나 ${CONTACT_EMAIL}으로 직접 보내주세요.`;
  } finally {
    window.clearTimeout(timer);
    submitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="relative z-20 scroll-mt-[72px] bg-white pb-28 lg:scroll-mt-[108px] lg:pb-0">
    <div class="relative mx-auto max-w-[1920px] px-6 py-16 lg:min-h-[1111px] lg:overflow-visible lg:px-[160px] lg:py-[150px]">
      <div v-reveal class="max-w-[658px] lg:absolute lg:left-[160px] lg:top-[150px] lg:w-[658px]">
        <h2 class="break-keep text-[28px] font-bold tracking-[-1px] text-black md:text-[40px]">{{ section.title }}</h2>
        <p class="mt-2 whitespace-pre-line text-[16px] font-medium leading-[1.45] tracking-[-0.5px] text-wb-slate md:text-[24px]">
          {{ section.description }}
        </p>
      </div>

      <div
        v-if="section.logoSrc"
        ref="logoRef"
        class="pointer-events-none mt-8 hidden overflow-hidden lg:absolute lg:left-[160px] lg:top-[464px] lg:mt-0 lg:block lg:h-[556px] lg:w-[710px]"
      >
        <img
          :src="section.logoSrc"
          alt=""
          class="h-auto w-[min(70%,280px)] origin-left object-contain object-left transition-[opacity,transform] duration-[1080ms] ease-out lg:h-full lg:w-full"
          :class="logoVisible ? 'translate-x-0 opacity-25 lg:opacity-100' : '-translate-x-16 opacity-0 lg:-translate-x-[404px]'"
        >
      </div>

      <form
        class="relative z-30 mt-8 w-full rounded-[24px] border border-[#e5e8eb] bg-white p-5 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] sm:p-7 lg:absolute lg:left-[1000px] lg:top-[282px] lg:mt-0 lg:w-[757px] lg:px-px lg:py-[39px]"
        @submit.prevent="onSubmit"
      >
        <div class="px-0 lg:px-7">
          <p class="text-[22px] font-bold tracking-[-0.55px] text-black">{{ section.formTitle }}</p>
          <p class="mt-1 text-[14px] font-medium tracking-[-0.35px] text-wb-slate">{{ section.formSubtitle }}</p>
        </div>

        <div v-if="submitState === 'success'" class="mt-10 px-0 text-center lg:px-7">
          <p class="text-[18px] font-bold tracking-[-0.45px] text-wb-primary">문의가 접수되었습니다.</p>
          <p class="mt-3 text-[14px] font-medium leading-[1.55] text-wb-slate">
            {{ CONTACT_EMAIL }}으로 내용이 전달되었습니다.<br>
            평균 1 영업일 이내 담당자가 회신드립니다.
          </p>
          <button
            type="button"
            class="mt-8 w-full rounded-full border border-[#e5e8eb] py-4 text-[16px] font-semibold text-[#363636]"
            @click="resetForm"
          >
            새 문의 작성하기
          </button>
        </div>

        <template v-else>
          <div class="mt-8 flex flex-col gap-7 px-0 lg:px-7">
            <label class="block text-[14px] font-semibold text-[#363636]">
              {{ section.hospitalName.label }} <span class="text-[#fb2c36]">*</span>
              <input
                v-model="hospitalName"
                type="text"
                name="hospitalName"
                autocomplete="organization"
                :placeholder="section.hospitalName.placeholder"
                class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3 text-[14px] outline-none placeholder:text-[#363636]/40"
                required
              >
            </label>

            <label class="block text-[14px] font-semibold text-[#363636]">
              {{ section.name.label }} <span class="text-[#fb2c36]">*</span>
              <input
                v-model="applicantName"
                type="text"
                name="applicantName"
                autocomplete="name"
                :placeholder="section.name.placeholder"
                class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3.5 text-[14px] outline-none placeholder:text-[#363636]/40"
                required
              >
            </label>

            <label class="block text-[14px] font-semibold text-[#363636]">
              {{ section.phone.label }} <span class="text-[#fb2c36]">*</span>
              <input
                v-model="phone"
                type="tel"
                name="phone"
                autocomplete="tel"
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
                    <input v-model="selectedServices" type="checkbox" :value="service" class="size-5 rounded border-2 border-[#d1d6db]">
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

          <p v-if="submitState === 'error'" class="mt-6 px-0 text-[14px] font-medium leading-[1.5] text-[#fb2c36] lg:px-7">
            {{ errorMessage }}
            <a :href="mailtoHref" class="mt-2 block font-semibold text-wb-primary underline-offset-2 hover:underline">
              이메일 앱으로 보내기
            </a>
          </p>

          <div class="mt-8 px-0 lg:px-7">
            <button
              type="submit"
              class="relative z-10 w-full cursor-pointer rounded-full bg-wb-primary py-4 text-[18px] font-semibold leading-[18px] text-white disabled:cursor-not-allowed disabled:opacity-70"
              :disabled="submitting"
            >
              {{ submitting ? '보내는 중...' : section.submitLabel }}
            </button>
          </div>
        </template>
      </form>
    </div>
  </section>
</template>
