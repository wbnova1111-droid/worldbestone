export default defineNuxtConfig({
  compatibilityDate: '2026-05-17',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      title: 'WORLD BEST | 병원 마케팅 파트너',
      meta: [
        {
          name: 'description',
          content: '병원 성장에 필요한 브랜딩, 환자 유치, SNS 운영, 데이터 분석을 제공하는 월드베스트 마케팅 서비스입니다.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      ],
    },
  },
});
