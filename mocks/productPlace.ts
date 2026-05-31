const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const productPlaceMock = {
  hero: {
    badge: '플레이스 상위노출',
    badgeIconSrc: '/images/products/place/badge-icon.svg',
    titleLine1: '환자의 90%는 방문 전',
    titleHighlight: '지도 채널',
    titleSuffix: '을 검색합니다.',
    subtitlePrefix: '신환이 없는 원인은 단 하나, ',
    subtitleHighlight: '‘플레이스 순위’',
    subtitleSuffix: ' 때문입니다.',
  },
  importance: {
    titlePrefix: '왜 ',
    titleHighlight: '플레이스 상위노출',
    titleSuffix: '이 중요한가요?',
    cards: [
      {
        title: '환자의 병원 검색 여정',
        iconSrc: '/images/products/place/icon-search.svg',
        paragraphs: [
          '현대 환자의 90% 이상이 병원 방문 전 온라인으로 병원을 검색합니다. 이 중 대부분은 네이버나 카카오 지도에서 ‘내 주변 병원’을 찾습니다.',
        ],
        highlight: {
          before: '검색 결과 ',
          emphasis: '상위 3개 병원',
          after: '이 전체 클릭의 70%를 차지합니다.',
        },
      },
      {
        title: '신뢰도 형성의 시작',
        iconSrc: '/images/products/place/icon-star.svg',
        paragraphs: [
          '플레이스 상위 노출은 단순히 많이 보이는 것을 넘어 ‘이 지역에서 인기 있는 병원’이라는 신뢰 신호를 전달합니다.',
          '리뷰, 블로그, 정보 등 플레이스가 체계적으로 관리되어야 환자의 신뢰를 얻을 수 있습니다.',
        ],
      },
    ],
    conclusionPrefix: '결론:',
    conclusion: ' 플레이스 첫페이지 노출 = 신규 환자 유입의 시작점',
  },
  process: {
    titleGradient: 'linear-gradient(177.5deg, #00bba7 0%, #009689 100%)',
    titleHighlight: '노출 → 클릭 → 문의 → 방문',
    titleSuffix: '까지 이어지는 구조로 설계합니다.',
    steps: [
      {
        step: 1,
        title: '플레이스 상위노출',
        description: '병원 정보, 카테고리, 키워드 최적화로 검색 알고리즘에 맞게 세팅',
      },
      {
        step: 2,
        title: '콘텐츠 업데이트',
        description: '정기적인 정보 업데이트와 유입 채널 등록으로 활동성 강화',
      },
      {
        step: 3,
        title: '리뷰 관리',
        description: '리뷰 유도 전략 수립 및 악플 관리, 댓글 대응 가이드 제공',
      },
      {
        step: 4,
        title: '순위 모니터링',
        description: '주간 순위 리포트 제공 및 지속적인 개선 작업',
      },
    ],
    differentiation: {
      title: '차별화 포인트',
      items: [
        {
          title: '지역별 맞춤 전략',
          description: '경쟁 병원 분석을 통한 지역 특화 키워드 발굴',
        },
        {
          title: '의료법 준수',
          description: '모든 콘텐츠는 전문가가 의료광고 규정 검토 후 게시',
        },
        {
          title: '투명한 리포팅',
          description: '순위 변동과 유입 수치를 주간 리포트로 제공',
        },
      ],
    },
  },
  effects: {
    titlePrefix: '기대할 수 있는 ',
    titleHighlight: '핵심 효과',
    stats: [
      { value: '+350%', label: '평균 플레이스 조회수 증가' },
      { value: '1~5위', label: '주요 키워드 검색 순위' },
      { value: '+120%', label: '신규 환자 문의 증가' },
    ],
  },
  faq: [
    {
      q: '플레이스 상위노출은 얼마나 걸리나요?',
      a: '플레이스마다 차이가 있으나 평균 2주~1개월 정도 소요됩니다. 경쟁 상황과 현재 순위에 따라 기간이 달라질 수 있습니다.',
    },
    {
      q: '네이버와 카카오 모두 관리해주시나요?',
      a: '네, 네이버 플레이스와 카카오맵 등 주요 지도 채널을 통합 관리해 드립니다.',
    },
    {
      q: '리뷰 관리도 포함되나요?',
      a: '리뷰 유도 전략, 악플 관리, 댓글 대응 가이드까지 플레이스 운영에 필요한 리뷰 관리가 포함됩니다.',
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
