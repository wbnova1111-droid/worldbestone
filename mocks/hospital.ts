export const hospitalPageMock = {
  hero: {
    badge: 'Expert Medical Marketing',
    titleLine1: '진료과마다,',
    titleLine2: '마케팅이 달라야 합니다',
    subtitle: '병원 마케팅은 전문적으로 진행되어야 합니다',
    tagline: 'Professional Hospital Marketing',
  },
  whyProfessional: {
    label: 'WHY PROFESSIONAL',
    titleLine1: '비싼 고객은',
    titleHighlight: '더 신중합니다',
    subtitle: '그만큼 더 깊은 신뢰도를 만들어야 합니다',
    quote: {
      lines: [
        { text: '고가 시술을 받는 환자들은', accent: true },
        { text: '단순한 광고가 아닌', light: true },
        { text: '진정한 신뢰와 전문성을 찾습니다', accent: true },
      ],
      footer: '이것이 바로 전문가와 함께해야 하는 이유입니다',
    },
  },
  specialized: {
    label: 'SPECIALIZED APPROACH',
    titleLine1: '각 진료과마다',
    titleHighlight: '마케팅이 같을 수 없습니다',
    description: [
      '성형외과, 피부과, 치과, 외과, 한의원',
      '모두 다른 환자, 다른 니즈, 다른 전략이 필요합니다',
    ],
    departments: [
      { icon: '💉', name: '성형외과', points: ['트렌드 민감', '비주얼 중심', '신뢰 구축'] },
      { icon: '✨', name: '피부과', points: ['전후 비교', '지속성 강조', '결과 증명'] },
      { icon: '🦷', name: '치과', points: ['가격 투명성', '리뷰 중심', '기술력 강조'] },
      { icon: '🏥', name: '외과', points: ['전문성 증명', '케이스 스터디', '의료진 강조'] },
      { icon: '🌿', name: '한의원', points: ['전통과 현대', '자연치유', '건강 철학'] },
    ],
    callout: {
      lines: [
        '각 진료과는 환자층이 다르고,',
        '의사결정 과정이 다르며,',
        '요구하는 정보의 깊이가 다릅니다',
      ],
      footer: '이것이 병원 마케팅이 전문가와 함께해야 하는 이유입니다',
    },
    backgroundSrc: '/images/hospital-specialized-bg.jpg',
  },
  buildingTrust: {
    label: 'BUILDING TRUST',
    titleLine1: '신뢰도를 만드는',
    titleHighlight: '전문적인 마케팅',
    cards: [
      {
        icon: '🎯',
        title: '타겟 정확성',
        description: ['고가 시술을 고민하는 환자의', '심리와 니즈를 정확히 파악한', '맞춤형 메시지 전달'],
        iconBg: 'from-[#00bba7] to-[#009689]',
      },
      {
        icon: '📊',
        title: '전문성 증명',
        description: ['의료진의 전문성과 경험을', '효과적으로 전달하여', '환자의 신뢰를 확보'],
        iconBg: 'from-[#00bc7d] to-[#009966]',
      },
      {
        icon: '💪',
        title: '지속적 관리',
        description: ['일회성이 아닌', '장기적인 브랜드 신뢰도 구축을 위한', '체계적인 관리 시스템'],
        iconBg: 'from-[#009689] to-[#009966]',
      },
    ],
  },
  cta: {
    title: '전문가와 함께',
    titleLine2: '신뢰를 만들어가세요',
    description: [
      'WORLDBEST는 각 진료과의 특성을 이해하고',
      '깊은 신뢰도를 만드는 마케팅 전문가입니다',
    ],
    button: '무료 상담 신청하기',
    features: ['전문 상담', '맞춤형 전략', '신뢰도 구축'],
  },
} as const;
