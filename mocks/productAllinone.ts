const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const productAllinoneMock = {
  hero: {
    badge: '올인원 파트너십',
    badgeIconSrc: '/images/products/allinone/badge-icon.svg',
    titleLine1: '병원이 필요한',
    titleHighlight: '모든 마케팅을 하나로 통합',
    descriptionLines: [
      '네이버 플레이스 · 블로그 · SNS · 유튜브 · 메디컬 플랫폼 · 옥외광고 · DB 추출(메타, 틱톡광고)까지',
      '인하우스 직원 영역부터 병원 내부에서 직접 운영하기 어려운 영역까지,',
      '단순히 노출을 늘리는 광고가 아니라, 환자 유입과 상담 전환, 그리고 매출 상승으로 이어질 수 있도록',
    ],
    descriptionHighlight:
      '병원의 성장을 위한 모든 마케팅을 월드베스트가 하나의 전략 안에서 통합 관리합니다.',
  },
  strengths: {
    titleHighlight: '올인원 파트너십',
    titleSuffix: '의 강점',
    items: [
      {
        title: '통합 관리의 효율성',
        description: '모든 채널을 하나의 팀이 관리하여 일관된 메시지와 브랜드 이미지를 유지합니다.',
      },
      {
        title: '비용 절감',
        description: '개별 서비스를 따로 맡기는 것보다 최대 40% 저렴한 비용으로 운영 가능합니다.',
      },
      {
        title: '데이터 기반 최적화',
        description: '모든 채널의 데이터를 통합 분석하여 효과적인 전략을 수립합니다.',
      },
    ],
  },
  includedServices: {
    title: '포함 서비스',
    items: [
      '플레이스 상위노출 관리 (5위 내)',
      'SNS 콘텐츠 제작 및 운영',
      '자사 홈페이지형 블로그제작 및 키워드 상위노출 포스팅',
      'DB추출용 메타광고 기획부터 영상제작 및 광고 세팅',
      '메디컬 플랫폼 운영 대행',
      'YouTube채널 콘텐츠기획부터 영상 편집 및 채널 관리',
      '횟수제한 없는 오프라인 광고 디자인',
      'AI 분석 및 노출 전략',
      '병원 홈페이지 맞춤 제작 및 리뉴얼 & 유지 관리',
      '월간 미팅 및 보고',
    ],
  },
  faq: [
    {
      q: '파트너십 올인원은 어떤 서비스인가요?',
      a: '네이버 플레이스, 블로그, SNS, 유튜브, 메디컬 플랫폼, DB 추출 광고, 오프라인 디자인, 홈페이지 등 병원 마케팅 전 채널을 하나의 파트너가 통합 관리하는 서비스입니다.',
    },
    {
      q: '개별 서비스 대비 어떤 장점이 있나요?',
      a: '일관된 브랜드 메시지, 통합 데이터 분석, 단일 커뮤니케이션 창구, 최대 40% 비용 절감 등의 장점이 있습니다.',
    },
    {
      q: '계약 기간은 어떻게 되나요?',
      a: '최소 1개월 단위로 계약하며, 병원 상황에 맞게 연장 가능합니다.',
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
