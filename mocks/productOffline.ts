const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

const pillGradient = 'linear-gradient(172deg, #00bba7 0%, #009689 100%)';

export const productOfflineMock = {
  hero: {
    badge: '오프라인 광고 · 디자인',
    badgeIconSrc: '/images/products/offline/badge-icon.svg',
    titlePrefix: '병원의 첫인상까지 ',
    titleHighlight: '디자인합니다',
    subtitle: '디지털 광고와 병원 내부 디자인을 통일된 톤앤매너로 제작하여 강력한 브랜드를 만듭니다',
  },
  branding: {
    title: '최고의 디자인 더 합리적인 인쇄',
    description: [
      '병원의 브랜드 이미지는 온라인에서만 만들어지지 않습니다.',
      '내원 고객이 직접 마주하는 모든 공간과 인쇄물 또한',
      '브랜드의 신뢰와 고급감을 결정하는 중요한 요소입니다.',
    ],
    card: {
      title: '브랜딩 디자인',
      items: [
        '병원 내부 포스터 및 배너',
        '리플릿 및 팜플렛, 브로슈어 디자인',
        '옥외광고(버스, 지하철 등)',
        '디지털 광고물(사이니지) 및 간판, 외벽시트 디자인',
      ],
    },
    experience: {
      title: '통일된 브랜드 경험',
      textPrefix: '온라인에서 병원을 알게 된 환자가 방문했을 때, 같은 톤앤매너의 디자인을 보면',
      textHighlight: ' 브랜드 신뢰도',
      textSuffix: '가 크게 향상됩니다.',
    },
    pillGradient,
  },
  faq: [
    {
      q: '인쇄는 직접 맡겨야 하나요?',
      a: '아닙니다. 디자인부터 인쇄 업체 선정, 제작·검수까지 월드베스트가 원스톱으로 대행해 드립니다.',
    },
    {
      q: '오프라인 광고는 무엇인가요?',
      a: '병원 내부 포스터·배너, 리플릿·브로슈어, 옥외광고, 사이니지·간판 등 환자가 직접 마주하는 모든 오프라인 광고물을 말합니다.',
    },
    {
      q: '광고 예산은 얼마나 필요한가요?',
      a: '제작물 종류, 수량, 규격에 따라 달라집니다. 무료 상담을 통해 병원에 맞는 합리적인 견적을 안내해 드립니다.',
    },
  ],
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
