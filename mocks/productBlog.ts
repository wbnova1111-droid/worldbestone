const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

const cardGradient = 'linear-gradient(151deg, #00bba7 0%, #009689 100%)';

export const productBlogMock = {
  hero: {
    badge: '블로그 관리',
    badgeIconSrc: '/images/products/blog/badge-icon.svg',
    titleLine1: '핵심 키워드로',
    titleHighlight: '블로그 상위노출',
    subtitle: '환자가 검색하는 핵심 키워드를 선점해 블로그 상위노출부터 상담 전화까지 연결합니다.',
  },
  value: {
    titlePrefix: '상위에 노출된 ',
    titleHighlight: '단 1건의 \'잘 쓰여진 칼럼\'',
    titleSuffix: '이\n100장의 전단지보다 더 많은 신규 고객을 데려옵니다.',
    description:
      '환자가 검색하는 지역명, 진료과목, 증상, 치료명 키워드를 분석해 병원에 맞는 블로그 콘텐츠를 제작하고, 목표 키워드 상위노출을 중심으로 마케팅을 설계합니다.',
    cards: [
      {
        title: '검색 유입 증가',
        description: '환자들이 궁금해하는 의료 정보를 블로그로 제공하면 네이버·구글 검색 유입이 급증합니다.',
        gradient: cardGradient,
      },
      {
        title: '전문성 입증',
        description: '정확한 의료 정보를 지속적으로 발행하면 환자들이 병원을 전문가로 인식합니다.',
        gradient: cardGradient,
      },
      {
        title: '장기적 자산',
        description: '한 번 작성된 콘텐츠는 지속적으로 검색되어 장기간 마케팅 효과를 발휘합니다.',
        gradient: cardGradient,
      },
    ],
    mockup: {
      nodeId: '56:46',
      src: '/images/products/blog/blog-mockup.png',
      width: 1002,
      height: 338,
      imageCrop: {
        width: '100%',
        height: '295.86%',
        top: '-97.71%',
        left: '0.07%',
      },
    },
  },
  faq: [
    {
      q: '블로그 포스팅은 얼마나 자주 하나요?',
      a: '병원 상황과 키워드 전략에 따라 다르지만, 일반적으로 주 2~3회 정기 포스팅을 권장합니다.',
    },
    {
      q: 'SEO 최적화도 포함되나요?',
      a: '네, 키워드 분석, 제목·본문 최적화, 내부 링크 구조 등 SEO 최적화가 기본 포함됩니다.',
    },
    {
      q: '원장님 감수가 필요한가요?',
      a: '의료 정보의 정확성을 위해 초기 가이드와 주요 콘텐츠에 대한 감수를 요청드릴 수 있습니다.',
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
