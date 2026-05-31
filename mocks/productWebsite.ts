const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const productWebsiteMock = {
  hero: {
    badge: '반응형 홈페이지 제작 · 관리',
    badgeIconSrc: '/images/products/website/badge-icon.svg',
    titleLine1: '병원에 맞는 홈페이지를',
    titleLine2: '완성해 드립니다.',
    subtitle: '보여지는 디자인, 검색되는 구조, 전환되는 흐름까지',
    devicesImageSrc: '/images/products/website/hero-devices.png',
  },
  intro: {
    titleTeal: '보여지는 디자인, 검색되는 구조, 전환되는 흐름까지 고려한',
    titleDark: '병원 맞춤형 홈페이지를 제작하고 관리합니다.',
    paragraphs: [
      '월드베스트는 병원의 진료 방향, 강점, 타깃 환자층을 분석해',
      '홈페이지는 단순히 예쁘게 보이는 공간이 아니라,  환자가 병원을 검색하고, 신뢰를 느끼고,',
      '문의까지 이어지는 온라인 상담 창구입니다.',
    ],
    mockupSrc: '/images/products/website/website-mockup.png',
    cards: [
      { src: '/images/products/website/card-1.png', alt: '홈페이지 맞춤 홈페이지 제작 및 리뉴얼' },
      { src: '/images/products/website/card-2.png', alt: '병원 전용 사진 · 영상 콘텐츠 제작' },
      { src: '/images/products/website/card-3.png', alt: '검색과 AI에 유리한 웹사이트 설계' },
      { src: '/images/products/website/card-4.png', alt: '운영 및 유지 관리까지 지원' },
    ],
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
