export const companyPageMock = {
  hero: {
    badge: 'About Us',
    titleLine1: 'WORLDBEST',
    titleLine2: 'Marketing Agency',
    subtitle: '트렌드를 만들어가는 젊은 마케팅 에이전시',
  },
  philosophy: {
    badge: 'OUR PHILOSOPHY',
    title: '파트너는 최고가 되어야 합니다',
    description: [
      '월드베스트와 파트너십을 맺은 병원은 최고가 되어야 한다는 목표를 가지고 있습니다.',
      '우리의 이름처럼, 우리의 파트너는 세계 최고가 되어야 합니다.',
    ],
    cards: [
      {
        icon: '🎯',
        title: '트렌드를 만들어갑니다',
        description:
          '젊은 대표가 직접 트렌드를 따라가고 만들어가면서, 항상 시장을 선도하는 마케팅 전략을 제공합니다.',
        bar: 'from-[#00bba7] to-[#2b7fff]',
        iconBg: 'from-[#00bba7] to-[#009689]',
      },
      {
        icon: '💎',
        title: '최고를 만드는 사명감',
        description:
          '받은 비용만큼 하는 것이 아닌, 우리가 마케팅하는 병원은 최고로 만들어야 한다는 사명감을 가지고 있습니다.',
        bar: 'from-[#2b7fff] to-[#ad46ff]',
        iconBg: 'from-[#2b7fff] to-[#155dfc]',
      },
    ],
  },
  coreValues: {
    badge: 'CORE VALUES',
    title: '정성과 진심으로 기획합니다',
    description: '누구보다 더 정성과 진심을 담아 기획하고 움직입니다',
    cards: [
      {
        icon: '❤️',
        title: '진심',
        lines: ['모든 프로젝트에 진심을 담아', '최선을 다합니다'],
        iconBg: 'from-[#00bba7] to-[#009689]',
      },
      {
        icon: '✨',
        title: '정성',
        lines: ['디테일까지 놓치지 않는', '세심한 기획과 실행'],
        iconBg: 'from-[#2b7fff] to-[#155dfc]',
      },
      {
        icon: '🚀',
        title: '혁신',
        lines: ['끊임없는 연구와 도전으로', '트렌드를 선도합니다'],
        iconBg: 'from-[#ad46ff] to-[#9810fa]',
      },
    ],
  },
  partnership: {
    titleLine1: '월드베스트와 함께하는',
    titleHighlight: '파트너십',
    description: [
      '단순히 비용만큼 일하는 것이 아닙니다.',
      '파트너가 최고가 될 때까지, 우리는 멈추지 않습니다.',
    ],
    stats: [
      { value: '100%', label: '고객 만족 목표', color: 'text-[#009689]' },
      { value: '24/7', label: '언제나 함께', color: 'text-[#155dfc]' },
      { value: '∞', label: '무한한 가능성', color: 'text-[#9810fa]' },
    ],
  },
  cta: {
    title: '함께 최고가 되어보시겠습니까?',
    description: ['지금 바로 무료 상담을 신청하고', '월드베스트와 함께 성장을 시작하세요'],
    button: '무료 상담 신청하기',
    features: ['24시간 내 연락', '맞춤형 전략'],
  },
} as const;
