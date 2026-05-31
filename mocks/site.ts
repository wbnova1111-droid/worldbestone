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
      { label: '병원 마케팅', href: '/hospital-marketing' },
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
    { label: '병원 마케팅', href: '/hospital-marketing' },
  ],
  serviceNav: [
    { slug: 'allinone', label: '파트너십 올인원 서비스', href: '/products/allinone' },
    { slug: 'place', label: '플레이스 상위노출', href: '/products/place' },
    { slug: 'blog', label: '블로그 상위노출', href: '/products/blog' },
    { slug: 'youtube', label: '유튜브 기획 및 촬영 편집', href: '/products/youtube' },
    { slug: 'medical-platform', label: '메디컬 플랫폼', href: '/products/medical-platform' },
    { slug: 'offline', label: '오프라인 광고', href: '/products/offline' },
    { slug: 'sns', label: 'SNS 채널 운영', href: '/products/sns' },
    { slug: 'ai-strategy', label: 'AI 분석 · 노출 전략', href: '/products/ai-strategy' },
    { slug: 'website', label: '홈페이지 제작 및 관리', href: '/products/website' },
  ],
  bottomNav: [
    { label: '홈', href: '/', icon: 'home' },
    { label: '서비스', href: '/products', icon: 'services' },
    { label: '회사소개', href: '/company', icon: 'company' },
    { label: '상담', href: consultationUrl, icon: 'chat', external: true },
  ],
};
