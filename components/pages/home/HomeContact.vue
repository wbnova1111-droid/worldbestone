<script setup lang="ts">
import type { HomeContent } from '~/types/home';
import {
  INQUIRY_EMAIL,
  inquiryMailto,
  inquiryMessage,
  inquirySubject,
} from '~/composables/useInquiryMail';

const props = defineProps<{
  section: HomeContent['contact'];
}>();

const formRef = ref<HTMLFormElement | null>(null);
const hospitalName = ref('');
const applicantName = ref('');
const phone = ref('');
const selectedServices = ref<string[]>([]);
const source = ref('');
const sourceOpen = ref(false);
const logoVisible = ref(false);
const logoRef = ref<HTMLElement | null>(null);
const submitting = ref(false);
const submitState = ref<'idle' | 'success' | 'error'>('idle');
const errorMessage = ref('');
const fieldError = ref('');
const pageUrl = ref('');
const nextUrl = ref('');

const payload = computed(() => ({
  hospitalName: hospitalName.value.trim(),
  applicantName: applicantName.value.trim(),
  phone: phone.value.trim(),
  source: source.value,
  services: selectedServices.value.join(', '),
}));

const mailtoHref = computed(() => inquiryMailto(payload.value));
const subjectValue = computed(() => inquirySubject(payload.value));
const messageValue = computed(() => inquiryMessage(payload.value));

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
  fieldError.value = '';
};

const validate = () => {
  if (!hospitalName.value.trim()) return '병원명을 입력해주세요.';
  if (!applicantName.value.trim()) return '성함을 입력해주세요.';
  if (!phone.value.trim()) return '휴대전화번호를 입력해주세요.';
  if (props.section.services?.length && selectedServices.value.length === 0) {
    return '관심 서비스를 하나 이상 선택해주세요.';
  }
  return '';
};

const markInvalid = (message: string) => {
  fieldError.value = message;
  submitState.value = 'error';
  errorMessage.value = message;
};

onMounted(() => {
  const url = new URL(window.location.href);
  pageUrl.value = `${url.origin}${url.pathname}#contact`;
  nextUrl.value = `${url.origin}${url.pathname}?inquiry=sent#contact`;

  if (url.searchParams.get('inquiry') === 'sent') {
    submitState.value = 'success';
    url.searchParams.delete('inquiry');
    url.hash = 'contact';
    history.replaceState({}, '', `${url.pathname}${url.hash}`);
  }

  if (url.hash === '#contact') {
    requestAnimationFrame(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

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
  if (submitting.value) {
    event.preventDefault();
    return;
  }
  sourceOpen.value = false;

  const invalid = validate();
  if (invalid) {
    event.preventDefault();
    markInvalid(invalid);
    return;
  }

  submitting.value = true;
  submitState.value = 'idle';
  errorMessage.value = '';
  fieldError.value = '';
};
</script>

<template>
  <section id="contact" class="relative z-50 isolate scroll-mt-[72px] bg-white pb-28 lg:scroll-mt-[108px] lg:pb-16">
    <div class="relative mx-auto flex max-w-[1920px] flex-col gap-10 px-6 py-16 min-[1800px]:block min-[1800px]:min-h-[1111px] min-[1800px]:px-[160px] min-[1800px]:py-[150px] lg:flex-row lg:items-start lg:justify-between">
      <div v-reveal class="max-w-[658px] min-[1800px]:absolute min-[1800px]:left-[160px] min-[1800px]:top-[150px] min-[1800px]:w-[658px]">
        <h2 class="break-keep text-[28px] font-bold tracking-[-1px] text-black md:text-[40px]">{{ section.title }}</h2>
        <p class="mt-2 whitespace-pre-line text-[16px] font-medium leading-[1.45] tracking-[-0.5px] text-wb-slate md:text-[24px]">
          {{ section.description }}
        </p>
      </div>

      <div
        v-if="section.logoSrc"
        ref="logoRef"
        class="pointer-events-none hidden overflow-hidden min-[1800px]:absolute min-[1800px]:left-[160px] min-[1800px]:top-[464px] min-[1800px]:block min-[1800px]:h-[556px] min-[1800px]:w-[710px]"
      >
        <img
          :src="section.logoSrc"
          alt=""
          class="h-auto w-full origin-left object-contain object-left transition-[opacity,transform] duration-[1080ms] ease-out"
          :class="logoVisible ? 'translate-x-0 opacity-100' : '-translate-x-[404px] opacity-0'"
        >
      </div>

      <form
        ref="formRef"
        class="relative z-50 w-full max-w-[757px] pointer-events-auto rounded-[24px] border border-[#e5e8eb] bg-white p-5 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] sm:p-7 min-[1800px]:absolute min-[1800px]:left-[1000px] min-[1800px]:top-[282px] min-[1800px]:mt-0 min-[1800px]:px-px min-[1800px]:py-[39px]"
        :action="`https://formsubmit.co/${INQUIRY_EMAIL}`"
        method="POST"
        accept-charset="UTF-8"
        novalidate
        @submit="onSubmit"
      >
        <input type="hidden" name="_subject" :value="subjectValue">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_honey" value="">
        <input type="hidden" name="_url" :value="pageUrl">
        <input type="hidden" name="_next" :value="nextUrl">
        <input type="hidden" name="hospital" :value="hospitalName">
        <input type="hidden" name="name" :value="applicantName">
        <input type="hidden" name="source" :value="source || '미선택'">
        <input type="hidden" name="services" :value="selectedServices.join(', ') || '선택 없음'">
        <input type="hidden" name="message" :value="messageValue">

        <div class="px-0 min-[1800px]:px-7">
          <p class="text-[22px] font-bold tracking-[-0.55px] text-black">{{ section.formTitle }}</p>
          <p class="mt-1 text-[14px] font-medium tracking-[-0.35px] text-wb-slate">{{ section.formSubtitle }}</p>
        </div>

        <div v-if="submitState === 'success'" class="mt-10 px-0 text-center min-[1800px]:px-7">
          <p class="text-[18px] font-bold tracking-[-0.45px] text-wb-primary">문의가 접수되었습니다.</p>
          <p class="mt-3 text-[14px] font-medium leading-[1.55] text-wb-slate">
            {{ INQUIRY_EMAIL }}으로 내용이 전달되었습니다.<br>
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
          <div class="relative z-10 mt-8 flex flex-col gap-7 overflow-visible px-0 min-[1800px]:px-7">
            <label class="block text-[14px] font-semibold text-[#363636]">
              {{ section.hospitalName.label }} <span class="text-[#fb2c36]">*</span>
              <input
                v-model="hospitalName"
                type="text"
                name="hospitalName"
                autocomplete="organization"
                :placeholder="section.hospitalName.placeholder"
                class="mt-1.5 w-full rounded-xl border border-[#e5e8eb] px-4 py-3 text-[14px] outline-none placeholder:text-[#363636]/40"
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
              <div class="relative mt-1.5" :class="sourceOpen ? 'z-40' : ''">
                <button
                  type="button"
                  class="flex h-[46px] w-full items-center justify-between rounded-xl border border-[#e5e8eb] bg-white px-4 py-3 text-left text-[14px] leading-5"
                  :class="source ? 'text-[#363636]' : 'text-[rgba(54,54,54,0.4)]'"
                  :aria-expanded="sourceOpen"
                  aria-haspopup="listbox"
                  @click.stop="sourceOpen = !sourceOpen"
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
                  class="absolute inset-x-0 top-full z-40 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-[#e5e8eb] bg-white py-1 shadow-[0_16px_32px_rgba(0,0,0,0.16)]"
                >
                  <li
                    v-for="option in section.source.options"
                    :key="option"
                    role="option"
                    class="cursor-pointer px-4 py-2.5 text-[14px] leading-5 text-[#363636] hover:bg-[#f7f7fb]"
                    :aria-selected="source === option"
                    @click.stop="selectSource(option)"
                  >
                    {{ option }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p v-if="fieldError || submitState === 'error'" class="mt-6 px-0 text-[14px] font-medium leading-[1.5] text-[#fb2c36] min-[1800px]:px-7">
            {{ errorMessage || fieldError }}
            <a
              v-if="submitState === 'error' && !fieldError"
              :href="mailtoHref"
              class="mt-2 block font-semibold text-wb-primary underline-offset-2 hover:underline"
            >
              이메일 앱으로 보내기
            </a>
          </p>

          <div class="relative z-0 mt-8 px-0 min-[1800px]:px-7">
            <button
              type="submit"
              class="relative z-0 w-full cursor-pointer rounded-full bg-wb-primary py-4 text-[18px] font-semibold leading-[18px] text-white transition-transform active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
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
