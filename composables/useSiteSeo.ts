export const SITE = {
  name: '월드베스트',
  nameEn: 'WORLD BEST',
  tagline: '병원 마케팅 파트너',
  email: 'wbnova@naver.com',
  phone: '010-4492-3816',
  address: '경기도 고양시 일산동구 호수로 646-30',
  kakao: 'https://open.kakao.com/o/sqLSGEoi',
  instagram: 'https://www.instagram.com/worldbest_marketingagency/',
  ogImage: '/images/footer-banner-source.png',
  keywords: [
    '병원마케팅',
    '병원 마케팅 파트너',
    '월드베스트',
    'WORLD BEST',
    '병의원 마케팅',
    '병원 올인원 마케팅',
    '의료 마케팅',
    '네이버 플레이스 병원',
    '병원 블로그 마케팅',
    '병원 SNS 마케팅',
    '병원 유튜브',
    'GEO 마케팅',
    'AEO 최적화',
    '의료광고',
    '병원 홈페이지 제작',
  ],
} as const;

export function useSiteSeo(page: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: string;
  jsonLd?: Record<string, unknown>[];
}) {
  const config = useRuntimeConfig();
  const siteUrl = String(config.public.siteUrl || '').replace(/\/$/, '');
  const keywordText = [...SITE.keywords, ...(page.keywords ?? [])].join(', ');
  const image = siteUrl ? `${siteUrl}${SITE.ogImage}` : SITE.ogImage;
  const canonical = siteUrl ? `${siteUrl}${page.path}` : page.path;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'ProfessionalService'],
      name: `${SITE.name} ${SITE.nameEn}`,
      alternateName: ['월드베스트 마케팅', 'WORLD BEST Marketing Agency', '병원 마케팅 파트너 월드베스트'],
      description:
        '병·의원 전문 올인원 마케팅 파트너 월드베스트. 기획부터 콘텐츠, 디자인, 광고, 홈페이지, GEO·AEO까지 한 곳에서 운영합니다.',
      email: SITE.email,
      telephone: SITE.phone,
      url: siteUrl || undefined,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '호수로 646-30',
        addressLocality: '고양시 일산동구',
        addressRegion: '경기도',
        addressCountry: 'KR',
      },
      areaServed: 'KR',
      sameAs: [SITE.kakao, SITE.instagram],
      knowsAbout: ['병원 마케팅', '병의원 마케팅', 'GEO', 'AEO', '네이버 플레이스', '의료광고'],
    },
    ...(page.jsonLd ?? []),
  ];

  useSeoMeta({
    title: page.title,
    ogTitle: page.title,
    twitterTitle: page.title,
    description: page.description,
    ogDescription: page.description,
    twitterDescription: page.description,
    ogType: page.type || 'website',
    ogLocale: 'ko_KR',
    ogSiteName: `${SITE.nameEn} | ${SITE.tagline}`,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterImage: image,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    author: SITE.name,
    keywords: keywordText,
  });

  useHead({
    htmlAttrs: { lang: 'ko' },
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'application-name', content: `${SITE.nameEn} ${SITE.tagline}` },
      { name: 'theme-color', content: '#09bea3' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(jsonLd),
      },
    ],
  });
}
