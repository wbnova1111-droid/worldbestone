import type { SiteContent } from '~/types/site';

const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const siteMock: SiteContent = {
  brandName: 'WORLD BEST',
  logoSrc: '/images/logo.png',
  logoAlt: 'WORLD BEST 마케팅 로고',
  consultationUrl,
  consultationCta: {
    label: '무료 상담하기',
    href: consultationUrl,
    external: true,
  },
  footer: {
    tagline: '병원 성장을 함께 만드는\n올인원 마케팅 파트너',
    quickLinks: [
      { label: '회사 소개', href: '/company' },
      { label: '마케팅 서비스', href: '/products' },
      { label: '무료 상담하기', href: consultationUrl, external: true },
    ],
    contact: {
      phone: '010-4492-3816',
      email: 'wbnova@naver.com',
      address: '경기도 고양시 일산동구 호수로 646-30',
    },
    copyright: '© 2026 월드베스트. All rights reserved.',
  },
  headerNav: [
    { label: '회사 소개', href: '/company' },
    { label: '마케팅 서비스', href: '/products' },
  ],
  serviceNav: [
    { slug: 'products', label: '마케팅 서비스', href: '/products' },
  ],
  bottomNav: [
    { label: '홈', href: '/', icon: 'home' },
    { label: '서비스', href: '/products', icon: 'services' },
    { label: '회사소개', href: '/company', icon: 'company' },
    { label: '상담', href: consultationUrl, icon: 'chat', external: true },
  ],
};
