import type { ProductPageContent } from '~/types/productPage';

export const productPagesMock: Record<string, ProductPageContent> = {
  allinone: {
    hero: {
      badge: 'PARTNERSHIP ALL-IN-ONE SERVICE',
      titleLines: ['병원에 필요한 모든 마케팅을'],
      titleHighlight: '월드베스트가 올인원케어 서비스로',
      subtitle: ['복잡한 마케팅 채널 관리는 이제 그만!', '모든 것을 한 곳에서 전문적으로 해결하세요'],
      ctaPrimary: '무료 상담 신청하기',
      ctaSecondary: '서비스 둘러보기',
    },
    sections: [],
    cards: {
      services: [
        { icon: '💻', title: '홈페이지 제작', desc: ['병원 맞춤형', '홈페이지 구축'] },
        { icon: '🔍', title: 'SEO 최적화', desc: ['검색 엔진', '상위 노출'] },
        { icon: '📱', title: 'SNS 마케팅', desc: ['인스타그램', '페이스북 운영'] },
        { icon: '📝', title: '블로그 관리', desc: ['네이버 블로그', '콘텐츠 제작'] },
        { icon: '📍', title: '플레이스 관리', desc: ['네이버 플레이스', '카카오맵'] },
        { icon: '🎥', title: '영상 제작', desc: ['유튜브 기획', '촬영 편집'] },
        { icon: '📊', title: '데이터 분석', desc: ['성과 측정 및', '리포트 제공'] },
        { icon: '💡', title: '컨설팅', desc: ['마케팅 전략', '수립 지원'] },
      ],
      why: [
        { icon: '⏱️', title: '시간 절약', desc: ['여러 업체 관리 불필요', '한 곳에서 모든 것 해결'] },
        { icon: '💰', title: '비용 절감', desc: ['개별 계약 대비', '합리적인 가격'] },
        { icon: '🎯', title: '통합 관리', desc: ['일관된 브랜드', '메시지 전달'] },
        { icon: '📈', title: '효율 극대화', desc: ['채널 간 시너지', '효과 극대화'] },
      ],
      process: [
        { step: 1, title: '상담', desc: '니즈 파악 및 목표 설정' },
        { step: 2, title: '분석', desc: '시장 및 경쟁사 분석' },
        { step: 3, title: '기획', desc: '맞춤 전략 수립' },
        { step: 4, title: '실행', desc: '전략 실행 및 운영' },
        { step: 5, title: '분석', desc: '성과 측정 및 리포트' },
        { step: 6, title: '최적화', desc: '지속적인 개선' },
      ],
      recommended: [
        { icon: '✓', title: '마케팅 시작이 막막한 병원', desc: '어디서부터 시작해야 할지 모르는 병원을 위한 완벽한 가이드와 실행 지원' },
        { icon: '✓', title: '시간이 부족한 병원', desc: '진료에 집중하고 싶은 병원을 위한 마케팅 전문가의 완벽한 대행 서비스' },
      ],
    },
    cta: {
      title: ['병원 마케팅의 모든 것', '하나로 해결하세요'],
      subtitle: ['복잡한 마케팅 관리는 이제 그만!', '올인원케어 서비스로 효율적이고 효과적인 마케팅을 시작하세요'],
      button: '무료 상담 신청하기',
    },
  },
  place: {
    hero: {
      variant: 'black',
      preQuote: '" 정말로 지쳐 있는데... "',
      titleLines: ['"왜 신환은', '늘지 않을까요?"'],
      subtitle: '우리 진짜 실력도 있고 시술도 잘하는데 예약문의가 없어요.',
      ctaPill: '신환은 바로 네이버 순위 때문입니다',
    },
    sections: [],
    faq: [
      { q: '플레이스 상위노출 시키지 못하면 어떻게 하나요?', a: ['상위노출 시키지 못할 시 당연히 비용은 받지않으며', '플레이스마다 차이가 있다보니 기간이 차이가 날 수 있습니다.'] },
      { q: '첫페이지까지 얼마나 걸리나요?', a: ['플레이스마다 다르다보니 차이가 발생하는데요.', '평균 2주~1개월 소요됩니다.'] },
      { q: '작업을 하다가 플레이스가 삭제될 수 있다고 들었는데 사실인가요?', a: ['네 사실입니다. 당연히 이상한 트래픽이 유입이 되는걸 네이버에서 허락하지 않는데요.', '저희는 실환자분들이 유입될 수 있는 환경을 만들기에 네이버측에서 삭제시키는 이상한 작업은 하지않습니다.'] },
    ],
    cta: {
      title: ['지금 원장님 병원에', '플레이스는 노출되고 있나요?'],
      subtitle: ['파트너가 필요하시다면', '지금 바로 문의주세요.'],
      button: '무료 상담 신청하기',
      note: '✓ 상담 신청 후 24시간 내 연락드립니다',
      variant: 'teal-blue',
    },
  },
  blog: {
    hero: {
      variant: 'black',
      badge: '우리 병원 3시간 이상 매일...',
      titleLines: ['3시간 관리 쓴 글인데,', '왜 아무도', '안 읽을까요?'],
      subtitle: ['열심히 쓴 블로그 글, 아무도 읽지 않는다면?', '문제는 노출이 안되고 있기 때문입니다'],
    },
    sections: [],
    cta: {
      title: ['내 블로그', '무료 진단받기'],
      subtitle: ['지금 신청하시면', '현재 블로그 상태 무료 진단 + 개선 방안을 제공해드립니다'],
      button: '무료 진단 신청하기',
      note: '✓ 신청 후 24시간 내 연락드립니다',
      variant: 'teal-blue',
    },
  },
  youtube: {
    hero: {
      variant: 'black',
      badge: '유튜브를 시작하고 싶은데 막막하신가요?',
      titleLines: ['기획, 대본, 촬영, 편집...'],
      titleHighlight: '혼자 하면 며칠 걸려요',
      subtitle: '영상 하나 만드는데 10시간 이상 소요됩니다',
      timeCards: [
        { label: '기획/대본', time: '3시간' },
        { label: '촬영', time: '2시간' },
        { label: '편집', time: '5시간' },
        { label: '업로드/관리', time: '1시간' },
      ],
    },
    sections: [],
    faq: [
      { q: '촬영은 얼마나 자주 하나요?', a: '월1회~2회(한달분량) 방문 촬영을 진행하며 병원 일정에 맞춰 유연하게 조정 가능합니다.' },
      { q: '영상 한 편당 비용은 얼마인가요?', a: '월 구독 형태로 진행되며, 영상 편수와 퀄리티에 따라 맞춤 견적을 제공해드립니다.' },
      { q: '영상 주제는 어떻게 정하나요?', a: '트렌드 분석과 병원 특성을 고려하여 전문 기획팀이 주제를 제안하고, 병원과 협의하여 최종 결정합니다.' },
      { q: '계약 기간은 어떻게 되나요?', a: '최소 1개월 단위로 계약하며, 월 단위로 연장 가능합니다.' },
    ],
    cta: {
      title: ['지금 시작하면', '달라진 병원을 보실 수 있습니다'],
      subtitle: ['무료 상담으로 우리 병원에 맞는', '유튜브 전략을 받아보세요'],
      button: '무료 상담 신청하기',
      note: '✓ 상담 신청 후 24시간 내 연락드립니다',
      variant: 'teal-blue',
    },
  },
  'medical-platform': {
    hero: {
      variant: 'black',
      badge: '병원 성장을 위한 가장 확실한 파트너',
      titleLines: ['메디컬 플랫폼', '운영 대행'],
      subtitle: '병원 성장을 위한 가장 확실한 파트너',
    },
    sections: [],
    faq: [
      { q: '어떤 메디컬 플랫폼을 지원하나요?', a: '강남언니, 바비톡, 여신티켓, 굿닥, 모두닥 등 주요 메디컬 플랫폼을 모두 지원합니다.' },
      { q: '입점에 얼마나 걸리나요?', a: '플랫폼별로 다르지만 일반적으로 1~2주 정도 소요되며, 서류 준비 상황에 따라 달라질 수 있습니다.' },
      { q: '운영 대행에는 어떤 것들이 포함되나요?', a: '프로필 최적화, 이벤트 기획 및 등록, 리뷰 관리 등 플랫폼 운영에 필요한 모든 업무를 대행합니다.' },
    ],
    cta: {
      title: ['메디컬 플랫폼으로', '새로운 환자를 만나보세요'],
      subtitle: ['무료 상담으로 우리 병원에 맞는', '플랫폼 전략을 받아보세요'],
      button: '무료 상담 신청하기',
      note: '✓ 상담 신청 후 24시간 내 연락드립니다',
      variant: 'teal-blue',
    },
  },
  offline: {
    hero: {
      badge: 'OFFLINE ADVERTISING',
      titleLines: ['전문 디자인으로 오프라인 광고 효과를 극대화하세요'],
      subtitle: '전문 디자이너가 직접 디자인하고 최적의 업체를 선정하여 고퀄리티 광고물을 제작합니다',
      ctaPrimary: '무료 상담 신청하기',
      backgroundImage: '/images/product-offline-hero.jpg',
    },
    sections: [],
    cards: {
      features: [
        { icon: '✓', title: '전문 디자인', desc: '브랜드에 맞는 맞춤 디자인' },
        { icon: '✓', title: '업체 선정', desc: '최적의 제작 업체 선별' },
        { icon: '✓', title: '품질 관리', desc: '제작 퀄리티 검수 및 관리' },
        { icon: '✓', title: '종합 대행', desc: '디자인부터 제작까지 원스톱' },
      ],
      benefits: [
        { title: '전문 디자인', desc: '전문가가 직접 제작하는 고품질 디자인으로 브랜드 가치를 높입니다' },
        { title: '검증된 업체', desc: '퀄리티 높은 제작 업체를 선별하여 최상의 결과물을 보장합니다' },
        { title: '시간 절약', desc: '디자인부터 업체 선정까지 모든 과정을 대행하여 시간을 절약합니다' },
      ],
    },
    cta: {
      title: '지금 바로 시작하세요',
      subtitle: ['전문가와 상담하고 병원에 맞는', '최적의 솔루션을 받아보세요'],
      button: '무료 상담 신청하기',
      note: '✓ 24시간 내 연락드립니다',
      variant: 'card',
    },
  },
  sns: {
    hero: {
      variant: 'black',
      badge: '병원 SNS는 대행 맡기세요',
      titleLines: ['SNS 따로 운영하지 말고'],
      titleHighlight: '한 번에 맡기세요',
      subtitle: [
        '수동으로 운영하는 SNS 채널을 한 번에 전문가에게 맡기고, 병원의 마케팅 전략을 효율적으로 실행하세요.',
        '전문적인 SNS 운영으로 병원의 브랜드 가치를 높이고, 환자와의 신뢰를 구축할 수 있습니다.',
      ],
    },
    sections: [],
    cta: {
      title: ['SNS 운영,', '이제 전문가에게 맡기세요'],
      subtitle: ['무료 상담으로 우리 병원에 맞는', 'SNS 전략을 받아보세요'],
      button: '무료 상담 신청하기',
      note: '✓ 상담 신청 후 24시간 내 연락드립니다',
      variant: 'teal-blue',
    },
  },
  website: {
    hero: {
      variant: 'blue-gradient',
      badge: '병원 홈페이지 제작 및 관리',
      titleLines: ['병원 홈페이지', '제작 및 관리'],
      subtitle: '전문적인 병원 홈페이지로 환자의 신뢰를 얻고 브랜드 가치를 높이세요',
    },
    sections: [],
    cta: {
      title: ['전문 홈페이지로', '병원의 가치를 높이세요'],
      subtitle: ['무료 상담으로 우리 병원에 맞는', '홈페이지 전략을 받아보세요'],
      button: '무료 상담 신청하기',
      note: '✓ 상담 신청 후 24시간 내 연락드립니다',
      variant: 'teal-blue',
    },
  },
};

export function getProductPageContent(slug: string): ProductPageContent | undefined {
  return productPagesMock[slug];
}
