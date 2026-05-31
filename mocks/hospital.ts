const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const hospitalPageMock = {
  hero: {
    titleHighlight: '병원 마케팅',
    titleSuffix: '은 특별합니다',
    subtitle: '일반 마케팅과는 다른 병원만의 특수성을 이해하고, 최적화된 전략을 제공합니다',
  },
  whyExpert: {
    titlePrefix: '왜 병원 마케팅은 ',
    titleHighlight: '전문가',
    titleSuffix: '가 필요할까요?',
    items: [
      {
        title: '엄격한 의료법 규제',
        description:
          '의료광고 심의를 통과해야 하며, 과대광고나 비교광고가 금지되어 있습니다. 법규를 정확히 이해하지 못하면 과태료나 행정처분을 받을 수 있습니다.',
        iconSrc: '/images/hospital/icon-law.svg',
      },
      {
        title: '높은 환자 신뢰도 요구',
        description:
          '환자들은 자신의 건강을 맡기기 전에 병원의 전문성과 신뢰도를 꼼꼼히 확인합니다. 따라서 브랜드 이미지와 리뷰 관리가 매우 중요합니다.',
        iconSrc: '/images/hospital/icon-trust.svg',
      },
      {
        title: '지역 기반 검색 최적화',
        description:
          '대부분의 환자는 가까운 병원을 찾기 때문에 네이버 플레이스, 카카오맵 등 지도 기반 채널에서의 노출이 결정적입니다.',
        iconSrc: '/images/hospital/icon-local.svg',
      },
      {
        title: '전문 콘텐츠 제작',
        description:
          '의료 정보는 정확해야 하며, 환자들이 이해하기 쉽게 전달되어야 합니다. 전문성과 접근성을 동시에 갖춘 콘텐츠가 필요합니다.',
        iconSrc: '/images/hospital/icon-content.svg',
      },
    ],
  },
  comparison: {
    titleLine1: '병원 마케팅, 열심히 하는데',
    titleHighlight: '왜 문의는 늘지 않을까요?',
    subtitle: '채널은 많은데 성과는 보이지 않는 이유',
    vsTitle: '따로 맡기는 마케팅',
    vsHighlight: '올인원 마케팅',
    traditional: {
      title: '기존 방식',
      items: [
        '채널별 다른 업체 관리 필요',
        '톤앤매너 일관성 없음',
        '복잡한 커뮤니케이션',
        '높은 관리 비용과 시간',
        '데이터 통합 분석 어려움',
      ],
    },
    allInOne: {
      title: '올인원 마케팅',
      items: [
        '하나의 파트너로 통합 관리',
        '일관된 브랜드 이미지',
        '간편한 소통 창구',
        '효율적인 비용 관리',
        '통합 데이터 분석 리포트',
      ],
    },
    summaryPrefix: '각각 다른 업체에 맡기다 보니 ',
    summaryHighlight: '일관성도 없고, 관리도 어렵고, 비용도 부담',
    summarySuffix: '됩니다',
  },
  strategy: {
    titleHighlight: '월드베스트',
    titleSuffix: '의 병원 마케팅 전략',
    items: [
      {
        step: 1,
        title: '법규 준수 검증',
        description: '모든 콘텐츠는 의료법 및 광고 규정을 준수하여 제작되며 심의 과정을 거쳐 안전하게 게시됩니다.',
      },
      {
        step: 2,
        title: '브랜드 신뢰 구축',
        description: '환자 후기 관리, 전문 콘텐츠 제작, 온라인 평판 관리를 통해 병원의 신뢰도를 높입니다.',
      },
      {
        step: 3,
        title: '데이터 기반 최적화',
        description: '실시간 데이터 분석을 통해 어떤 채널이 가장 효과적인지 파악하고, 지속적으로 전략을 개선합니다.',
      },
    ],
  },
  recommended: {
    badge: 'RECOMMENDED FOR',
    title: '이런 병원에 추천합니다',
    description: '전문가의 도움이 필요한 순간, 월드베스트가 함께합니다',
    items: [
      {
        title: '마케팅 시작이 막막한 병원',
        description: '어디서부터 시작해야 할지 모르는 병원을 위한 완벽한 가이드와 실행 지원',
        iconGradient: 'linear-gradient(135deg, #00bba7 0%, #009689 100%)',
        barGradient: 'linear-gradient(90deg, #00bba7 0%, #2b7fff 100%)',
      },
      {
        title: '시간이 부족한 병원',
        description: '진료에 집중하고 싶은 병원을 위한 마케팅 전문가의 완벽한 대행 서비스',
        iconGradient: 'linear-gradient(135deg, #2b7fff 0%, #155dfc 100%)',
        barGradient: 'linear-gradient(90deg, #2b7fff 0%, #ad46ff 100%)',
      },
      {
        title: '인지도를 높이고 싶은 병원',
        description: '잠재 환자에게 병원의 강점을 반복적으로 전달하는 브랜드 노출 구조 구축',
        iconGradient: 'linear-gradient(135deg, #ad46ff 0%, #009689 100%)',
        barGradient: 'linear-gradient(90deg, #00bba7 0%, #2b7fff 100%)',
      },
      {
        title: '매출 상승을 목표로 하는 병원',
        description: '핵심 진료와 시술 문의를 실제 예약으로 연결하는 성과 중심 유입 설계',
        iconGradient: 'linear-gradient(135deg, #f6339a 0%, #ad46ff 100%)',
        barGradient: 'linear-gradient(90deg, #00bba7 0%, #2b7fff 100%)',
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
