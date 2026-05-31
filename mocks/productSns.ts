const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

const checkGradient = 'linear-gradient(135deg, #00bba7 0%, #009689 100%)';

export const productSnsMock = {
  hero: {
    badge: 'SNS 채널',
    badgeIconSrc: '/images/products/sns/badge-icon.svg',
    titlePrefix: '분산된 SNS ',
    titleHighlight: '하나의 전략으로!',
    subtitle: 'SNS 브랜딩 운영, 보여지는 병원이 더 빠르게 선택됩니다.',
    /** Figma 59:249 — 342×342 frame */
    graphicViewport: {
      width: 342,
      height: 342,
    },
    /** inset-0 object-cover inside 59:249 */
    network: {
      nodeId: '59:249',
      src: '/images/products/sns/hero-network.png',
      width: 342,
      height: 342,
    },
  },
  intro: {
    /** Figma 59:289 */
    title: '일관되게 보여지는 병원이 더 빠르게 선택됩니다.',
    /** Figma 1:3218 — scene origin y=647 (59:262 top) */
    scene: {
      width: 1560,
      height: 608,
    },
    /** Figma 59:262 — centered, 1082×608 */
    mockup: {
      nodeId: '59:262',
      src: '/images/products/sns/sns-mockup.png',
      left: 239,
      top: 0,
      width: 1082,
      height: 608,
      imageCrop: {
        width: '100%',
        height: '177.96%',
        top: '-39.97%',
        left: '0',
      },
    },
    features: [
      {
        nodeId: '59:251',
        number: '01',
        title: '채널마다 다른 역할',
        description: [
          '브랜딩, 친밀감, 확산력, 지역 노출,',
          '상담 유도까지 각 채널의 목적에 맞게',
          '운영 방향을 다르게 설계합니다.',
        ],
        left: 91,
        top: 73,
        width: 432,
        height: 174,
      },
      {
        nodeId: '59:273',
        number: '02',
        title: '운영과 마케팅을 함께 관리',
        description: [
          '단순 업로드가 아니라 콘텐츠 기획, 운영,',
          '프로모션, 협업, 데이터 분석까지 연결해',
          '실질적인 마케팅 효율을 만듭니다.',
        ],
        left: 1047,
        top: 384,
        width: 432,
        height: 174,
      },
    ],
    checkGradient,
  },
  process: {
    /** Figma 59:293 / 59:382 */
    canvasWidth: 1280,
    cardHeight: 175,
    steps: [
      { title: '콘텐츠 기획', description: '브랜드 방향에 맞는 주제 설계', left: -48.92, width: 220 },
      { title: '디자인 제작', description: '피드 · 릴스 · 숏폼 · 카드뉴스 제작', left: 240.08, width: 220 },
      { title: '채널 운영', description: '업로드 · 댓글 · 알고리즘 관리', left: 529.08, width: 221 },
      { title: '고객 소통', description: '문의 유도 · 상담 연결 · 소식 전달', left: 819.08, width: 220 },
      { title: '성과 분석', description: '리포트 제공 및 개선 제안', left: 1108.08, width: 220 },
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
