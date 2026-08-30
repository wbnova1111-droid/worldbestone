export default defineNuxtConfig({
  compatibilityDate: '2026-05-17',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  nitro: {
    preset: 'static',
  },
  runtimeConfig: {
    public: {
      siteUrl: '',
    },
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
      htmlAttrs: { lang: 'ko' },
      title: '병원 마케팅 파트너 월드베스트 | WORLD BEST',
      titleTemplate: '%s',
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
        { rel: 'icon', type: 'image/svg+xml', href: '/images/home-figma/header-mark.svg' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            '병원 마케팅 파트너 월드베스트(WORLD BEST). 병·의원 전문 올인원 마케팅으로 기획·콘텐츠·디자인·광고·홈페이지·GEO·AEO까지 한 곳에서 밀착 운영합니다.',
        },
        {
          name: 'keywords',
          content:
            '병원마케팅, 병원 마케팅 파트너, 월드베스트, WORLD BEST, 병의원 마케팅, 올인원 마케팅, 의료 마케팅, 네이버 플레이스, 병원 블로그, 병원 SNS, GEO, AEO, 의료광고',
        },
        { name: 'author', content: '월드베스트 WORLD BEST' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'referrer', content: 'origin' },
        { name: 'theme-color', content: '#09bea3' },
        { name: 'application-name', content: 'WORLD BEST 병원 마케팅 파트너' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ko_KR' },
        { property: 'og:site_name', content: 'WORLD BEST | 병원 마케팅 파트너' },
        { property: 'og:title', content: '병원 마케팅 파트너 월드베스트 | WORLD BEST' },
        {
          property: 'og:description',
          content: '병·의원 전문 올인원 마케팅 파트너 월드베스트. 기획부터 실행, GEO·AEO까지 한 곳에서 관리합니다.',
        },
        { property: 'og:image', content: '/images/footer-banner-source.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '병원 마케팅 파트너 월드베스트 | WORLD BEST' },
        {
          name: 'twitter:description',
          content: '병·의원 전문 올인원 마케팅 파트너 월드베스트. 기획부터 실행까지 밀착 운영합니다.',
        },
        { name: 'twitter:image', content: '/images/footer-banner-source.png' },
      ],
    },
  },
});
