const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const productAiStrategyMock = {
  hero: {
    badge: 'AI 분석 · 노출 전략',
    badgeIconSrc: '/images/products/ai-strategy/badge-icon.svg',
    titleLine1: '보이는 곳이 많을수록,',
    titleLine2: '선택될 가능성이 높아집니다.',
    subtitle: '병원이 더 넓은 검색 환경에서 발견될 수 있도록 올인원 마케팅을 설계합니다.',
    laptopImageSrc: '/images/products/ai-strategy/hero-laptop.png',
  },
  intro: {
    titleTeal: 'AI가 병원을 추천하는 시대,',
    titleDark: '이제 마케팅은 ‘노출’이 아니라 ‘신뢰 데이터’를 쌓는 전략입니다.',
    descriptionPrefix: '검색 노출부터 콘텐츠 운영, SNS 브랜딩, 메디컬 플랫폼 관리, 후기 축적까지',
    descriptionHighlight: '병원이 더 넓은 검색 환경에서 발견될 수 있도록 월드베스트 마케팅이 함께합니다.',
    consultation: {
      label: '무료 상담 신청',
      href: consultationUrl,
      external: true,
    },
    mockupSrc: '/images/products/ai-strategy/chatgpt-mockup.png',
  },
  cta: {
    title: '마케팅을 월드베스트에게 맡기고',
    titleHighlight: '병원은 진료에만 집중하세요',
    description: '병원 성장을 위한 모든 과정을 책임지겠습니다.',
    button: {
      label: '무료 상담 신청하기',
      href: consultationUrl,
      external: true,
    },
  },
} as const;
