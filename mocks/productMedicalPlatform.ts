const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

const pillGradient = 'linear-gradient(174deg, #00bba7 0%, #009689 100%)';

type TextSegment = { text: string; highlight?: boolean };

function segments(...parts: TextSegment[]) {
  return parts;
}

export const productMedicalPlatformMock = {
  hero: {
    badge: '메디컬 플랫폼 통합 관리',
    badgeIconSrc: '/images/products/medical-platform/badge-icon.svg',
    titlePrefix: '메디컬 플랫폼 ',
    titleHighlight: '운영 대행',
    subtitle: '입점부터 프로모션 운영까지 관심 고객을 예약과 상담으로 연결하는 전환 설계',
    /** Figma 2:24 — logo cluster bounding box (59:415 + 59:414) */
    graphicViewport: {
      width: 599.858,
      height: 433.948,
    },
    logos: [
      {
        nodeId: '59:415',
        src: '/images/products/medical-platform/hero-gangnam.png',
        alt: '강남언니',
        left: 0,
        top: 0,
        wrapperSize: 239.27,
        imageSize: 191.445,
        rotation: -17.1,
        zIndex: 10,
      },
      {
        nodeId: '59:414',
        src: '/images/products/medical-platform/hero-babitalk.png',
        alt: '바비톡',
        left: 212,
        top: 46.09,
        wrapperSize: 387.858,
        imageSize: 295.234,
        rotation: 23.27,
        zIndex: 20,
      },
    ],
  },
  why: {
    titlePrefix: '왜 ',
    titleHighlight: '메디컬 플랫폼',
    titleSuffix: ' 관리가 중요한가요?',
    cards: [
      {
        title: '적극적인 환자 검색',
        iconSrc: '/images/products/medical-platform/icon-search.svg',
        body: segments(
          { text: '메디컬 플랫폼 사용자는 이미 ' },
          { text: '시술 의향이 높은', highlight: true },
          { text: ' 잠재 고객입니다. 병원 비교, 리뷰 확인, 가격 검토 등 구매 전 단계를 거치며 병원을 선택합니다.' },
        ),
        footnote: segments(
          { text: '연구에 따르면 메디컬 플랫폼 이용자의 ' },
          { text: '78%', highlight: true },
          { text: '가 3개월 내 실제 시술을 진행합니다.' },
        ),
      },
      {
        title: '비교 환경에서의 경쟁력',
        iconSrc: '/images/products/medical-platform/icon-star.svg',
        body: segments(
          { text: '다양한 병원이 나란히 노출되는 환경에서 ' },
          { text: '사진, 리뷰, 가격,', highlight: true },
          { text: ' ' },
          { text: '프로모션', highlight: true },
          { text: '을 전략적으로 관리하지 않으면 환자가 경쟁 병원을 선택하게 됩니다.' },
        ),
        footnote: segments(
          { text: '상위 리뷰 평점 병원이 하위 병원 대비 ' },
          { text: '3.5배', highlight: true },
          { text: ' 높은 예약률을 보입니다.' },
        ),
      },
      {
        title: '플랫폼 시장 성장세',
        iconSrc: '/images/products/medical-platform/icon-growth.svg',
        body: segments(
          { text: '메디컬 플랫폼 이용자는 매년 급증하고 있으며, 20-40대 주요 고객층이' },
          { text: ' 병원 정보의 80%를 플랫폼에서 취득', highlight: true },
          { text: '합니다.' },
        ),
        footnote: segments(
          { text: '입점하지 않으면 잠재 고객 접점을 잃게 되는 필수 채널입니다.' },
        ),
      },
      {
        title: '데이터 기반 최적화 가능',
        iconSrc: '/images/products/medical-platform/icon-chart.svg',
        body: segments(
          { text: '플랫폼은 조회수, 찜 수, 클릭률 등 ' },
          { text: '실시간 데이터', highlight: true },
          { text: '를 제공합니다. 이를 분석하여 지속적으로 프로필과 콘텐츠를 개선할 수 있습니다.' },
        ),
        footnote: segments(
          { text: '데이터 기반 최적화로 전환율을 평균 120% 향상시킬 수 있습니다.' },
        ),
      },
    ],
    conclusionPrefix: '결론:',
    conclusion: ' 메디컬 플랫폼은 시술 의향이 높은 환자를 만나는 핵심 채널이며, 전략적 관리가 신규 환자 유입의 성패를 좌우합니다.',
  },
  process: {
    titleHighlight: '월드베스트',
    titleSuffix: '의 체계적인 운영 프로세스',
    subtitle: '데이터 기반 프로모션 전략으로 메디컬 플랫폼을 완벽하게 관리합니다',
    steps: [
      {
        step: '01',
        title: '병원 맞춤 상품 구성',
        description: ['병원별 특성, 진료 항목, 타깃 환자를 분석해', '가장 적합한 플랫폼 상품과 노출 전략을 설계합니다.'],
        iconSrc: '/images/products/medical-platform/step-1.png',
      },
      {
        step: '02',
        title: '유입형 프로모션 운영',
        description: ['시즌, 트렌드, 환자 관심도에 맞춰 상담과 예약으로', '이어질 수 있는 프로모션을 기획·운영합니다.'],
        iconSrc: '/images/products/medical-platform/step-2.png',
        iconClass: '-scale-y-100 rotate-180',
      },
      {
        step: '03',
        title: '성과 분석 및 지속 최적화',
        description: ['운영 결과를 데이터로 분석하고, 유입률과 전환율을', '높이기 위해 지속적으로 개선합니다.'],
        iconSrc: '/images/products/medical-platform/step-3.png',
        iconClass: 'h-[108px] w-[108px]',
      },
    ],
    partners: [
      { name: '강남언니', src: '/images/products/medical-platform/logo-gangnam.png', class: 'h-[60px] w-auto' },
      { name: '바비톡', src: '/images/products/medical-platform/logo-babitalk.png', class: 'h-14 w-auto' },
      { name: '여신티켓', src: '/images/products/medical-platform/logo-yeoshin.png', class: 'h-[70px] w-auto' },
      { name: '굿닥', src: '/images/products/medical-platform/logo-goodoc.png', class: 'h-[70px] w-auto' },
      { name: '모두닥', src: '/images/products/medical-platform/logo-modoodoc.png', class: 'h-[70px] w-auto' },
    ],
    pills: [
      {
        text: '입점 · 상품 세팅 · 썸네일 및 상세페이지 제작 · 업로드',
        bold: true,
        widthClass: 'lg:w-[519px]',
      },
      {
        text: '프로모션 운영 · 성과 분석 · 지속 최적화',
        bold: false,
        widthClass: 'lg:w-[417px]',
      },
    ],
    pillGradient,
    differentiation: {
      title: '월드베스트만의 차별점',
      items: [
        {
          title: '다수 플랫폼 통합 관리',
          description: ['강남언니, 바비톡, 모두닥 등 여러 플랫폼을', '하나의 대시보드로 관리'],
        },
        {
          title: '의료법 준수 검증',
          description: ['모든 콘텐츠와 이벤트는 의료광고 규정 검토 후 게시'],
        },
        {
          title: '경쟁 병원 벤치마킹',
          description: ['경쟁사 분석을 통한 차별화 전략 수립 및 실행'],
        },
      ],
    },
  },
  effects: {
    titlePrefix: '기대할 수 있는 ',
    titleHighlight: '핵심 효과',
    stats: [
      { value: '+320%', label: '평균 플랫폼 조회수 증가' },
      { value: '4.6점', label: '평균 리뷰 평점 달성' },
      { value: '+180%', label: '플랫폼 유입 환자 증가' },
    ],
  },
  faq: [
    {
      q: '어떤 플랫폼을 관리해주나요?',
      a: '강남언니, 바비톡, 여신티켓, 굿닥, 모두닥 등 주요 메디컬 플랫폼을 통합 관리해 드립니다.',
    },
    {
      q: '리뷰 관리도 포함되나요?',
      a: '네, 리뷰 유도, 악성 리뷰 대응, 댓글 관리 등 리뷰 운영이 포함됩니다.',
    },
    {
      q: '플랫폼별 광고도 가능한가요?',
      a: '플랫폼 내 광고 및 프로모션 집행도 기획부터 운영까지 지원합니다.',
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
