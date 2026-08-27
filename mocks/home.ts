import type { HomeContent } from '~/types/home';

const asset = (name: string) => `/images/home-figma/${name}`;

export const homeMock: HomeContent = {
  navbar: {
    logoSrc: asset('header-mark.svg'),
    wordmark: 'WORLD BEST',
    tagline: '병의원 올인원 마케팅',
    navItems: [
      { label: '회사 소개', href: '/company' },
      { label: '마케팅 서비스', href: '/products' },
    ],
    ctaLabel: '문의하기',
    ctaHref: '#contact',
  },
  hero: {
    brandLines: ['WORLD BEST', 'MARKETING', 'Agency'],
    animationLines: ['병·의원에 필요한', '모든 마케팅을 하나로', '병·의원 전문 올인원 마케팅 월드베스트'],
    animationEmphasis: '모든 마케팅을 하나로',
    servicesHeading: '업무의 효율이 달라지는 올인원 서비스',
  },
  marquee: [
    { lines: ['GEO · AEO', '최적화'], icons: [asset('marquee/geo-icon.png'), asset('marquee/aeo-icon.png')] },
    { lines: ['병원 맞춤', '소프트웨어 개발'], icons: [asset('marquee/software.png')], iconContain: true },
    { lines: ['병원 맞춤', '홈페이지 제작'], icons: [asset('marquee/homepage.png')] },
    { lines: ['네이버 플레이스', '지도 상위노출'], icons: [asset('marquee/place.png')] },
    { lines: ['네이버 브랜딩', '블로그 대행'], icons: [asset('marquee/blog.png')] },
    { lines: ['유튜브', '기획 · 촬영 · 편집'], icons: [asset('marquee/youtube.png')] },
    { lines: ['SNS', '콘텐츠 관리 및 운영'], icons: [asset('marquee/sns.png'), asset('marquee/sns-2.png')] },
    { lines: ['메디컬플랫폼', '입점 · 관리'], icons: [asset('marquee/medical-1.png'), asset('marquee/medical-2.png'), asset('marquee/medical-3.png')] },
    { lines: ['온 · 오프라인', '디자인'], icons: [asset('marquee/ad.png')] },
  ],
  about: [
    {
      title: '시간은아끼고',
      lines: ['업체마다 반복해서 설명하고', '요청사항을 전달할 필요 없이', '한 곳에서 빠르게', '소통해보세요.'],
      emphasis: ['한 곳에서 빠르게'],
      tone: 'teal',
    },
    {
      title: '성과는 더 크고',
      lines: ['병원에 필요한 모든 영역을', '일관된 메시지로', '통합 관리하여 마케팅 성과를', '극대화시킵니다.'],
      emphasis: ['마케팅 성과를', '극대화'],
      tone: 'black',
    },
    {
      title: '효율을 높이는',
      lines: ['여러 업체를 각각 계약하고', '관리하는 비용을 줄여', '마케팅 예산을 더 효율적으로', '사용할 수 있습니다.'],
      emphasis: ['마케팅 예산을 더 효율적'],
      tone: 'teal',
    },
    {
      title: '인하우스처럼\n함께하는 파트너십',
      lines: ['병원의 성장을 목표로 하고', '인하우스보다 가까이,', '한 번 맡기고 끝이 아닌,', '함께 고민하고 성장하는', '든든한 파트너입니다.'],
      emphasis: ['든든한 파트너'],
      tone: 'black',
    },
  ],
  pain: {
    titleLines: ['수정 한 번 요청할 때마다', '추가 비용부터 걱정하고 계신가요?'],
    body: '배너 문구 하나, 디자인 수정 하나, 콘텐츠 방향 변경 하나에도\n추가 견적을 고민하고 확인해야 한다면 마케팅은 점점 느려질 수밖에 없습니다.',
    partnerPrefix: '월드베스트는 단순 제작 대행이 아니라',
    partnerEmphasis: '병원과 함께 운영하는 마케팅 파트너를 지향',
    partnerSuffix: '합니다.',
    points: [
      {
        title: '요청은 더 편하게',
        description: '작은 수정 하나에도 비용부터 고민하지 않도록.',
        iconSrc: asset('pain/request.png'),
      },
      {
        title: '피드백은 더 빠르게',
        description: '병원의 의견을 바로 반영해 기다림을 최소화.',
        iconSrc: asset('pain/feedback.png'),
      },
      {
        title: '제안은 더 자유롭게',
        description: '“이것도 가능한가요?” 망설이지 않고 편하게.',
        iconSrc: asset('pain/suggest.png'),
      },
      {
        title: '운영은 더 유연하게',
        description: '수시로 바뀌는 내부 이벤트에 맞춰 더욱 발빠르게.',
        iconSrc: asset('pain/operate.png'),
      },
    ],
  },
  process: {
    title: '체계적인 마케팅 프로세스',
    subtitle: '하나부터 열까지. 병원의 상황을 분석하고, 맞춤 솔루션을 제공합니다.',
    steps: [
      {
        number: '01',
        ko: '병원 분석',
        en: 'Hospital Analysis',
        summary: '병원의 운영 상태와 유입 경로, 경쟁 상권을 분석합니다',
        detail:
          '마케팅을 시작하기 전 병원과 상권, 경쟁 병원부터 꼼꼼하게 살펴봐요. 현재 운영 중인 방향과 검색 환경까지 분석해 우리 병원만의 강점을 찾아냅니다.',
        imageSrc: asset('process/step-1.png'),
      },
      {
        number: '02',
        ko: '전략 설계',
        en: 'Strategy Design',
        summary: '병원에 맞는 마케팅 전략을 설계합니다',
        detail: '병원의 핵심 진료 · 시술과 지역 특성, 병원의 강점을 바탕으로 마케팅 우선순위와 방향을 설정합니다.',
        imageSrc: asset('process/step-2.png'),
      },
      {
        number: '03',
        ko: '기획 실행',
        en: 'Planning & Execution',
        summary: '맞춤 컨텐츠를 기획하고 직접 실행합니다',
        detail:
          '좋은 기획도 그대로 실행되지 않으면 의미가 없어요. 콘텐츠 제작, 디자인, 촬영, 영상 편집, 광고 집행, 채널 운영까지 기획한 전략을 직접 실행합니다.',
        imageSrc: asset('process/step-3.png'),
      },
      {
        number: '04',
        ko: '성과 분석',
        en: 'Performance Analysis',
        summary: '광고와 콘텐츠의 성과를 데이터로 확인합니다',
        detail: '유입·문의·예약·전환 데이터를 바탕으로 효과적인 채널과 개선이 필요한 지점을 명확하게 구분합니다.',
        imageSrc: asset('process/step-4.png'),
      },
      {
        number: '05',
        ko: '지속 개선',
        en: 'Improvement',
        summary: '분석한 결과를 다시 실행에 반영합니다',
        detail: '병원의 운영 현황과 마케팅 성과를 바탕으로 효율이 낮은 부분은 보완하고, 효과가 검증된 방향은 더욱 강화합니다.',
        imageSrc: asset('process/step-5.png'),
      },
    ],
  },
  contact: {
    title: '문의를 남겨주세요',
    description: '병원마케팅, 어디서부터 시작해야 할지 고민이신가요?\n간단한 문의를 남겨주시면 병원 상황에 맞는 방향을 제안해드립니다.',
    logoSrc: asset('contact-logo.svg'),
    formTitle: '월드베스트 마케팅 문의하기',
    formSubtitle: '평균 1 영업일 이내 담당자가 회신드립니다.',
    hospitalName: { label: '병원명', placeholder: '병원명을 입력해주세요', type: 'text', required: true },
    name: { label: '성함', placeholder: '예: 홍길동', type: 'text', required: true },
    phone: { label: '휴대전화번호', placeholder: '010-0000-0000', type: 'tel', required: true },
    source: {
      label: '월드베스트를 알게 된 경로',
      optionalHint: '(선택)',
      placeholder: '경로를 선택해주세요',
      type: 'select',
      options: ['네이버 검색', '지인 소개', '블로그', '인스타그램', '유튜브', '기타'],
    },
    submitLabel: '상담 신청하기',
  },
  faq: {
    titleLines: ['원장님들이', '자주 묻는 질문 FAQ'],
    prompt: '더 궁금하신게 있으신가요? 문의 주시면 자세한 상담 도와드리겠습니다.',
    items: [
      {
        question: '병·의원 마케팅만 전문적으로 하시나요? 어떤 서비스에서 차이가 있나요?',
        answer:
          '네, 맞습니다. 저희 월드베스트는 병의원 전문 마케팅 회사로, 병의원에 필요한 모든 마케팅 서비스를 제공하려고 노력하며 항상 트렌드에 맞춰 성장하고 지속적으로 발전하고 있습니다.',
      },
      {
        question: '계약 기간이 어떻게 되나요?',
        answer: '계약 기간은 기본 1개월 계약으로 진행합니다.',
      },
      {
        question: '비용은 어느 정도인가요?',
        answer: '경쟁 강도, 위치에 따라 차이가 발생합니다. 문의 주시면 자세한 상담 도와드리겠습니다.',
      },
      {
        question: '필요한 서비스만 선택하여 진행할 수도 있나요?',
        answer: '물론입니다. 다만 마케팅 관점에서 필요해 보이시는 건 추천해 드릴 수는 있습니다.',
      },
      {
        question: '이미 인하우스 마케팅 담당자가 있어도 이용할 수 있나요?',
        answer: '네. 저희는 인하우스 이상의 파트너가 되는 것이 목표이며, 단순 바이럴이 아닌 상위노출과 전문적인 부분만 함께 맞춰 나가셔도 됩니다.',
      },
    ],
  },
  ctaBanner: {
    titleLines: ['기획부터 실행까지,', '올인원 마케팅이 더 궁금하다면?'],
    buttonLabel: '마케팅 서비스 보러가기 →',
    href: '/products',
  },
  floatDock: {
    items: [
      {
        label: '24시간 전화 상담',
        href: 'tel:010-4492-3816',
        iconSrc: asset('float/phone.png'),
      },
      {
        label: '1:1 카톡 문의',
        href: 'https://open.kakao.com/o/sqLSGEoi',
        iconSrc: asset('float/kakao.png'),
        external: true,
      },
      {
        label: '인스타그램',
        href: 'https://www.instagram.com/worldbest_marketingagency/',
        iconSrc: asset('float/instagram.png'),
        external: true,
      },
    ],
  },
  footer: {
    logoSrc: asset('footer/logo.svg'),
    brandName: 'WORLDBEST',
    brandSub: 'Marketing Agency',
    slogan: '병원 성장을 함께 만드는 올인원 마케팅 파트너',
    companyLines: [
      '상호: 월드베스트',
      '대표: 임원빈',
      '주소: 경기도 고양시 일산동구 호수로 646-30',
      '이메일: wbnova@naver.com',
      '사업자등록번호: 192-67-00786',
      '© 2025 월드베스트. All rights reserved.',
    ],
  },
};
