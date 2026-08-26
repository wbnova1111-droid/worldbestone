export default defineNuxtConfig({
  compatibilityDate: '2026-05-17',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  nitro: {
    preset: 'static'
  },
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
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2407-2@1.0/Paperlogy-4Regular.css',
        },
      ],
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
