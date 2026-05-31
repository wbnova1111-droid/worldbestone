import type { HomeContent } from '~/types/home';

const consultationUrl = 'https://open.kakao.com/o/sqLSGEoi';

export const homeMock: HomeContent = {
  brandName: 'WORLD BEST',
  consultationUrl,
  navigation: [
    { label: '홈', href: '/', icon: 'home' },
    { label: '서비스', href: '#services', icon: 'services' },
    { label: '회사소개', href: '/company', icon: 'company' },
    { label: '상담', href: consultationUrl, icon: 'chat' },
  ],
  hero: {
    subtitle: '복잡한 마케팅은 월드베스트가, 원장님은 진료에만 집중하세요',
    titleHighlight: '병원 성장',
    titleSuffix: '을 함께 만드는',
    titleGradient: '올인원 마케팅 파트너',
    videoSrc: '/videos/main-hero.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=900&fit=crop',
    cta: {
      label: '무료 상담 신청하기',
      href: consultationUrl,
      external: true,
    },
  },
  services: {
    badge: 'OUR SERVICES',
    title: '병원에 필요한 모든 마케팅을 하나로',
    description: '병원의 성장을 위한 모든 마케팅을 월드베스트가 하나의 전략 안에서 통합 관리합니다.',
    items: [
      {
        title: '네이버 플레이스 상위노출',
        description: '네이버 플레이스 SEO 최적화 (순위 5위 내 노출)',
        iconSrc: '/images/home/service-place.png',
        href: '/products/place',
      },
      {
        title: '네이버 블로그 키워드 선점',
        description: '핵심 키워드를 선점하여 블로그 상위노출까지',
        iconSrc: '/images/home/service-blog.png',
        href: '/products/blog',
      },
      {
        title: 'SNS 채널',
        description: '분산된 SNS, 하나의 전략으로 통합 운영',
        iconSrc: '/images/home/service-sns.png',
        href: '/products/sns',
      },
      {
        title: '유튜브 기획 · 촬영 · 편집',
        description: '콘텐츠 기획부터 채널 운영관리',
        iconSrc: '/images/home/service-youtube.png',
        href: '/products/youtube',
      },
      {
        title: '메디컬 플랫폼',
        description: '입점부터 상품이미지 제작 모로모션 운영까지',
        iconSrc: '/images/home/service-medical.png',
        href: '/products/medical-platform',
      },
      {
        title: '오프라인 광고 · 디자인',
        description: '디자인 퀄리티는 높이고 비용은 합리적으로',
        iconSrc: '/images/home/service-offline.png',
        href: '/products/offline',
      },
      {
        title: 'AI 분석 · 노출 전략',
        description: '넓은 노출환경을 위해 신뢰 데이터를 쌓는 전략',
        iconSrc: '/images/home/service-ai.png',
        href: '/products/ai-strategy',
      },
      {
        title: '반응형 홈페이지 제작 · 관리',
        description: '병원 맞춤 홈페이지 제작부터 유지 관리까지 지원',
        iconSrc: '/images/home/service-website.png',
        href: '/products/website',
      },
    ],
  },
  process: {
    badge: 'PROCESS',
    title: '올인원케어 서비스 프로세스',
    description:
      '네이버 플레이스 · 블로그 · SNS · 유튜브 · 메디컬 플랫폼 · 옥외광고 · DB 추출(메타, 틱톡광고)\n인하우스 직원 영역부터 병원 내부에서 직접 운영하기 어려운 영역까지',
    items: [
      {
        step: 1,
        title: '분석',
        description: '병원의 방향성과 목표를 파악하고 현재 상황을 분석합니다.',
        iconSrc: '/images/home/process-analysis.png',
      },
      {
        step: 2,
        title: '기획',
        description: '분석 내용을 바탕으로 병원에 맞는 마케팅 전략을 기획합니다.',
        iconSrc: '/images/home/process-planning.png',
      },
      {
        step: 3,
        title: '운영',
        description: '기본 노출 채널을 세팅하고 유입 경로를 분석하여 상담과 매출로 연결합니다.',
        iconSrc: '/images/home/process-operation.png',
      },
      {
        step: 4,
        title: '브랜딩',
        description: 'SNS 채널과 콘텐츠 운영을 통해 병원의 신뢰도와 브랜드 가치를 지속적으로 강화합니다.',
        iconSrc: '/images/home/process-branding.png',
      },
    ],
  },
  partnership: {
    title: '월드베스트와 함께하는',
    titleHighlight: '파트너십',
    description: '단순히 비용만큼 일하는 것이 아닙니다\n파트너가 최고가 될 때까지 우리는 멈추지 않습니다',
    stats: [
      { value: '100%', label: '고객 만족 목표', color: 'teal' },
      { value: '24/7', label: '언제나 함께', color: 'blue' },
      { value: '∞', label: '무한한 가능성', color: 'purple' },
    ],
  },
  coreValues: {
    badge: 'CORE VALUES',
    title: '병원 마케팅에서 가장 중요한 \'진심\'을 설계해 드립니다.',
    description: '기획부터 실행까지 모든 걸 해결해 주는 파트너십',
    items: [
      {
        icon: '❤️',
        title: '진심',
        description: '모든 프로젝트에 진심을 담아 최선을 다합니다',
        gradient: 'teal',
      },
      {
        icon: '✨',
        title: '정성',
        description: '디테일까지 놓치지 않는 세심한 기획과 실행',
        gradient: 'blue',
      },
      {
        icon: '🚀',
        title: '혁신',
        description: '끊임없는 연구와 도전으로 트렌드를 선도합니다',
        gradient: 'purple',
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
};
