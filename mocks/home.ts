import type { HomeContent } from '~/types/home';

const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const homeMock: HomeContent = {
  brandName: 'WORLD BEST',
  consultationUrl,
  navigation: [
    { label: '홈', href: '/', icon: 'home' },
    { label: '서비스', href: '#features', icon: 'services' },
    { label: '회사소개', href: '#about', icon: 'company' },
    { label: '상담', href: consultationUrl, icon: 'chat' },
  ],
  hero: {
    eyebrow: '',
    title: '병원 마케팅의 새로운 기준',
    description: '성공을 만들고, 성과를 만들어내는 마케팅 파트너',
    videoSrc: '/videos/main-hero.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=900&fit=crop',
    cta: {
      label: '무료 상담하기',
      href: consultationUrl,
      external: true,
    },
  },
  intro: {
    badge: 'ALL-IN-ONE',
    title: '병원 성장을 위한\n파트너십 올인원 서비스',
    description: '브랜딩부터 환자 유치, SNS 관리, 데이터 분석까지\n병원 마케팅의 모든 것을 한 곳에서 해결합니다',
  },
  services: {
    title: '주요 서비스',
    items: [
      { title: '기획', description: '마케팅 전략 수립', icon: 'plan' },
      { title: '브랜딩', description: '병원 브랜드 구축', icon: 'brand' },
      { title: 'SNS 마케팅', description: '소셜 미디어 관리', icon: 'star' },
      { title: '콘텐츠 제작', description: '전문 콘텐츠 기획', icon: 'content' },
      { title: '데이터 분석', description: '성과 측정 및 개선', icon: 'chart' },
    ],
  },
  reasons: {
    title: '왜 월드베스트와 함께 해야 할까요?',
    subtitle: '전문 마케팅 팀이 만드는 성과',
    imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=900&fit=crop',
    items: [
      {
        title: '병원 특화 전문성',
        description: '의료 마케팅 전문가들이 최적의 전략을 제공합니다.',
      },
      {
        title: '맞춤형 마케팅',
        description: '각 병원의 특성에 맞는 차별화된 전략을 수립합니다.',
      },
      {
        title: '통합 관리 시스템',
        description: '모든 마케팅 채널을 하나의 흐름에서 관리할 수 있습니다.',
      },
    ],
  },
  cta: {
    title: '병원 성장의 시작, 지금 상담하세요',
    description: '무료 컨설팅으로 맞춤형 마케팅 전략을 받아보세요.',
    button: {
      label: '무료 상담 신청하기',
      href: consultationUrl,
      external: true,
    },
  },
  footer: {
    bannerSrc: '/images/footer-banner.png',
    bannerAlt: 'World Best Marketing',
    copyright: '© 2026 World Best Marketing Agency. All rights reserved.',
  },
};
