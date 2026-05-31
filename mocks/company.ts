const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const companyPageMock = {
  hero: {
    title: 'INTRODUCE WORLDBEST',
    paragraphs: [
      '네이버 플레이스 · 블로그 · SNS · 유튜브 · 메디컬 플랫폼 · 옥외광고 · DB 추출(메타, 틱톡광고)까지',
      '인하우스 직원 영역부터 병원 내부에서 직접 운영하기 어려운 영역까지,',
      '단순히 노출을 늘리는 광고가 아니라, 환자 유입과 상담 전환, 그리고 매출 상승으로 이어질 수 있도록',
    ],
    highlight: '병원의 성장을 위한 모든 마케팅을 월드베스트가 하나의 전략 안에서 통합 관리합니다.',
    watermarkSrc: '/images/company/hero-watermark.png',
  },
  goal: {
    titleLine1: '병원의 성장이',
    titleLine2: '우리의 목표입니다',
    paragraphs: [
      [
        '월드베스트는 병원 마케팅에 특화된 올인원 에이전시입니다.',
        '원장님들이 진료에만 집중할 수 있도록 복잡한 마케팅 업무를 전문적으로 대행하며 실질적인 성과를 만들어냅니다.',
      ],
      [
        '단순히 채널을 운영하는 것이 아니라, 병원의 브랜드 가치를 높이고',
        '신뢰를 구축하는 전략적 파트너가 되겠습니다.',
      ],
    ],
    traits: [
      {
        title: '전문성',
        description: '병원 마케팅 분야의 깊은 이해와 노하우',
        iconSrc: '/images/company/goal-expertise.png',
      },
      {
        title: '신뢰',
        description: '투명한 소통과 정직한 성과 보고',
        iconSrc: '/images/company/goal-trust.png',
      },
      {
        title: '성과',
        description: '데이터 기반의 실질적인 결과 창출',
        iconSrc: '/images/company/goal-result.png',
      },
    ],
  },
  whyAllInOne: {
    badge: 'WHY WE NEED',
    titlePrefix: '왜 ',
    titleHighlight: '올인원케어',
    titleSuffix: ' 서비스가 필요한가?',
    description: '병원 마케팅의 새로운 패러다임을 경험하세요',
    items: [
      {
        title: '시간 절약',
        lines: ['여러 업체 관리 불필요', '한 곳에서 모든 것 해결'],
        iconSrc: '/images/company/why-time.svg',
      },
      {
        title: '비용 절감',
        lines: ['개별 계약 대비', '합리적인 가격'],
        iconSrc: '/images/company/why-cost.svg',
      },
      {
        title: '통합 관리',
        lines: ['일관된 브랜드', '메시지 전달'],
        iconSrc: '/images/company/why-integrated.svg',
      },
      {
        title: '효율 극대화',
        lines: ['채널 간 시너지', '효과 극대화'],
        iconSrc: '/images/company/why-efficiency.svg',
      },
    ],
  },
  marketing: {
    badge: 'BUILDING TRUST',
    titleLine1: '신뢰도를 만드는',
    titleHighlight: '전문적인 마케팅',
    items: [
      {
        title: '병원 특화 전문성',
        description: '의료법과 광고 규정을 완벽히 준수하며, 병원 산업에 대한 깊이 있는 이해를 바탕으로 최적의 마케팅 전략 수립',
        iconSrc: '/images/company/marketing-hospital.png',
      },
      {
        title: '통합 마케팅 시스템',
        description: '디지털부터 오프라인까지, 모든 채널을 하나의 일관된 메시지로 통합 관리하여 브랜드 가치 극대화',
        iconSrc: '/images/company/marketing-integrated.png',
      },
      {
        title: '데이터 기반 성과',
        description: '실시간 데이터 분석을 통해 마케팅 효과를 측정하고, 지속적인 최적화를 통한 투자 대비 성과 극대화',
        iconSrc: '/images/company/marketing-data.png',
      },
      {
        title: '타깃 정확성',
        description: '환자의 고민이 시작되는 지점을 분석하고 환자의 니즈를 맞춘 커뮤니케이션 형성',
        iconSrc: '/images/company/marketing-target.png',
      },
      {
        title: '전문성 증명',
        description: '의료진의 전문성과 경험을 효과적으로 전달하여 환자의 신뢰 확보',
        iconSrc: '/images/company/marketing-proof.png',
      },
      {
        title: '지속적 관리',
        description: '일회성이 아닌 장기적인 브랜드 신뢰도 구축을 위한 체계적인 관리 시스템',
        icon: '♻️',
      },
    ],
  },
  philosophy: {
    badge: 'OUR PHILOSOPHY',
    title: '파트너는 최고가 되어야 합니다',
    description: [
      '우리의 이름처럼 파트너의 성장도 더 높은 곳을 향해야 합니다.',
      '월드베스트는 병원의 가능성을 발견하고 신뢰받는 브랜드로 성장할 수 있도록 전략부터 실행까지 함께합니다',
    ],
    cards: [
      {
        icon: '🎯',
        title: '트렌드를 만들어갑니다',
        description: '젊은 대표가 직접 트렌드를 따라가고 만들어가며 시장을 선도하는 마케팅 전략을 제공합니다',
        bar: 'from-[#00bba7] to-[#2b7fff]',
        iconBg: 'from-[#00bba7] to-[#009689]',
      },
      {
        icon: '💎',
        title: '최고를 만드는 사명감',
        description: '받은 비용만큼 하는 것이 아닌, 우리가 마케팅하는 병원은 최고로 만들어야 한다는 사명감을 가지고 있습니다',
        bar: 'from-[#2b7fff] to-[#ad46ff]',
        iconBg: 'from-[#2b7fff] to-[#155dfc]',
      },
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
