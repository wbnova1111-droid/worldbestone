import type { HomeContent } from '~/types/home';

const asset = (name: string) => `/images/home-new/${name}`;

export const homeMock: HomeContent = {
  navbar: {
    logoSrc: asset('wb-logo.png'),
    navItems: [
      { label: '회사소개', href: '/company' },
      { label: '병원마케팅', href: '/hospital-marketing' },
      { label: '마케팅 서비스', href: '/products' },
      { label: '포트폴리오', href: '#portfolio' },
      { label: 'CONTACT', href: '#contact' },
    ],
    ctaLabel: '마케팅 상담하기',
    ctaHref: '#contact',
  },
  hero: {
    badge: '병원·의원 마케팅의 확실한 해결책',
    titleLine1: '클라이언트가 아닌',
    titleHighlight: '파트너',
    titleLine2: '병의원 전문 올인원 마케팅',
    description:
      '기획부터 디자인, 촬영, 영상, 콘텐츠, 웹개발까지 — 병원에 필요한 모든 마케팅 활동을 외주 파편화 없이 한 곳에서 밀착 관리해 드립니다.',
    primaryCta: '무료 마케팅 상담 신청',
    secondaryCta: '서비스 알아보기',
    checks: [
      { label: '의료 광고법 준수' },
      { label: '원내 직접 촬영 원칙' },
      { label: '디자이너·개발자 상주' },
    ],
    imageSrc: asset('hero-image.png'),
  },
  painSolution: {
    badge: 'WHY WORLDBEST?',
    title: '원장님, 매번 마케팅 업체 조율에 스트레스 받으셨나요?',
    description:
      '광고대행사 따로, 디자이너 따로, 개발사 따로... 파편화된 마케팅은 시간 낭비와 일관되지 않는 브랜딩을 초래합니다.',
    beforeTitle: '여러 업체 관리의 번거로움 (기존 방식)',
    beforeItems: [
      { text: '대행업체와의 미팅 및 피드백 전달에 소요되는 시간 낭비' },
      { text: '기획 의도가 디자인과 개발 단계를 거치며 변질되는 브랜딩 불일치' },
      { text: '광고 효율이 떨어질 때 서로 책임을 미루는 업체 간의 마찰' },
      { text: '신규 채널 개설 시마다 추가되는 계약과 이중 지출' },
    ],
    afterTitle: '올인원 마케팅 전담 파트너 (월드베스트)',
    afterItems: [
      { text: '병원 전문 PM이 기획부터 최종 성과 분석까지 원스톱 밀착 커뮤니케이션' },
      { text: '원내 자체 스튜디오 디렉팅으로 일관성 있게 정렬되는 프리미엄 브랜딩' },
      { text: '의료 마케팅 법률 전문 검수를 완친 무사고 안전 지향 전략 광고' },
      { text: '한 번의 계약으로 디자인, 촬영, 모바일웹까지 추가 비용 없이 통합 지원' },
    ],
  },
  services: {
    badge: 'OUR EXPERTISE',
    title: '병원에 꼭 필요한 핵심 올인원 마케팅 솔루션',
    description:
      '기획부터 디자인, 웹 개발까지 분야별 병원 전담 팀이 직접 진행하여 확실한 환자 성장 지표를 증명합니다.',
    items: [
      {
        iconSrc: asset('search.svg'),
        tag: '플레이스 & 광고',
        title: '네이버 메디컬 마케팅',
        description:
          '네이버 플레이스 상위 최적화, 파워링크 및 검색광고 정밀 튜닝으로 가장 확실한 지역 기반 가망 환자를 확보합니다.',
        href: '/products/place',
      },
      {
        iconSrc: asset('edit.svg'),
        tag: '블로그 운영',
        title: '블로그 & 콘텐츠 브랜딩',
        description:
          '의학 전문 작가진이 집필하는 신뢰도 높은 치료 정보와 진정성 있는 원내 스토리텔링으로 신환 유입을 유도합니다.',
        href: '/products/blog',
      },
      {
        iconSrc: asset('instagram.svg'),
        tag: '인스타 피드',
        title: 'SNS 감성 마케팅',
        description:
          '인스타그램 릴스, 카드뉴스 제작을 통해 젊은 세대 타겟의 정형화되지 않은 친근하고 트렌디한 병원 이미지를 구축합니다.',
        href: '/products/sns',
      },
      {
        iconSrc: asset('video.svg'),
        tag: '영상 기획·편집',
        title: '유튜브 영상 마케팅',
        description:
          '원장님 밀착 인터뷰, 숏폼 콘텐츠 제작, 병원 투어 기획 및 전문 영상 촬영팀이 직접 제작하여 채널 활성화를 책임집니다.',
        href: '/products/youtube',
      },
      {
        iconSrc: asset('layers.svg'),
        tag: '플랫폼 대행',
        title: '메디컬 플랫폼 관리',
        description:
          '바비톡, 강남언니, 모두닥 등 메디컬 플랫폼 내 후기 관리, 이벤트 기획 및 광고 집행을 통합 최적화합니다.',
        href: '/products/medical-platform',
      },
      {
        iconSrc: asset('palette.svg'),
        tag: '아이덴티티 디자인',
        title: '브랜딩 & CI/BI 디자인',
        description:
          '병원의 철학을 담은 고급 로고 디자인부터 원내 안내 책자, 오프라인 인쇄물까지 일관된 톤앤매너를 설계합니다.',
        href: '/products/offline',
      },
      {
        iconSrc: asset('globe.svg'),
        tag: '지역 검색 노출',
        title: 'GEO (지역 최적화)',
        description:
          '네이버지도, 구글 맵스, 지역 내 커뮤니티 정밀 침투 타겟팅으로 동네 기반 핵심 단골 환자의 신뢰를 독점합니다.',
        href: '/products/ai-strategy',
      },
      {
        iconSrc: asset('code.svg'),
        tag: '반응형 웹개발',
        title: '홈페이지 & 웹 개발',
        description:
          '환자 예약 및 조회 기능을 갖춘 가볍고 빠른 반응형 홈페이지를 제작하여 광고에서 최종 예약까지 매끄럽게 연결합니다.',
        href: '/products/website',
      },
    ],
  },
  differentiators: {
    badge: 'DIFFERENTIATORS',
    title: '오직 병원 마케팅 성과만을 위한 확실한 4가지 차별점',
    items: [
      {
        number: '01',
        badge: '전문성 특화',
        title: '병·의원 전용 세일즈 노하우',
        description:
          '일반 대행사와는 다릅니다. 다년간 쌓아온 수많은 전문병원 마케팅 레퍼런스를 바탕으로 전문 의학 용어 이해 및 엄격한 보건소 의료광고 가이드라인을 백퍼센트 준수합니다.',
      },
      {
        number: '02',
        badge: '올인원 원스톱',
        title: '모든 프로세스의 수직 계열화',
        description:
          '기획자, 디자이너, 영상 에디터, 개발자가 외주 없이 월드베스트 본사에 함께 근무하며 밀착 협업합니다. 소통 오류 없는 완벽한 크리에이티브 결과물을 자부합니다.',
      },
      {
        number: '03',
        badge: '자체 제작 역량',
        title: '원내 직접 출장 및 전문 촬영',
        description:
          '인터넷 스톡 이미지는 환자들에게 감동을 줄 수 없습니다. 저희 전문 촬영팀이 원장님의 실제 진료 현장과 청결한 원내 분위기를 고품질 고해상도 카메라로 생생하게 담아냅니다.',
      },
      {
        number: '04',
        badge: '책임 전담 파트너',
        title: '병원의 든든한 외부 마케팅부',
        description:
          '단순히 광고비 소진이 목적인 일반적인 대행 대리인이 아닙니다. 실시간 예약 유입율, 매월 누적 환자 성장을 추적 분석하여 매주 정기 리포트를 드리는 마케팅 부서입니다.',
      },
    ],
  },
  portfolio: {
    badge: 'PORTFOLIO',
    title: '성공을 입증하는 월드베스트 메디컬 포트폴리오',
    ctaLabel: '더 많은 포트폴리오 보기',
    items: [
      {
        imageSrc: asset('portfolio-1.png'),
        category: '브랜딩 & 플레이스 최적화',
        title: '바른정형외과의원',
        result: '신규 개원 3개월 만에 월 신환 1,200명 돌파',
      },
      {
        imageSrc: asset('portfolio-2.png'),
        category: '유튜브 영상 & SNS 마케팅',
        title: '예쁜피부과의원',
        result: '유튜브 브랜딩 영상 누적 조회수 45만 돌파',
      },
      {
        imageSrc: asset('portfolio-3.png'),
        category: '반응형 웹사이트 제작',
        title: '화이트치과그룹',
        result: '웹사이트 기반 모바일 신환 예약 전환률 320% 증가',
      },
    ],
  },
  socialProof: {
    stats: [
      { value: '200+', label: '누적 관리 병·의원 파트너' },
      { value: '94.2%', label: '연장 및 재계약 유지율' },
      { value: '10년+', label: '의료 마케팅 한 우물 업력' },
      { value: '0건', label: '의료 광고 심의 무사고 위반율' },
    ],
    testimonialsTitle: '함께 성장 중인 원장님들의 리얼 후기',
    testimonials: [
      {
        quote:
          '"개원 초기에 주변 경쟁 병원이 너무 많아 불면증에 시달렸습니다. 월드베스트를 만난 후, 브랜드 블로그와 네이버 지도 최적화를 동시에 진행하면서 예약 문의가 예전의 4배로 늘었습니다. 이제는 믿고 전권을 맡깁니다."',
        author: '서울강남정형외과 이강민 대표원장',
      },
      {
        quote:
          '"의료 심의 가이드라인 때문에 다른 광고 대행사들과는 항상 갈등이 있었습니다. 월드베스트는 기획 단계부터 자체 의료 자문 검수를 거쳐 광고를 진행하기 때문에 무사고 안전성이 매우 높으며, 영상 퀄리티도 업계 최고 수준입니다."',
        author: '클리어피부과의원 장소희 대표원장',
      },
    ],
  },
  contact: {
    badge: 'FREE AUDIT & STRATEGY CALL',
    titleLine1: '병원 마케팅,',
    titlePrefix: '이제 제대로 된 ',
    titleHighlight: '올인원',
    titleLine2: '으로 한 곳에서 완전히 해결하세요.',
    description:
      '신청해 주시면 원장님의 현 병원 마케팅 채널 현황(플레이스 노출, 블로그 품질, 네이버 경쟁 등)을 정밀 분석한 무료 마케팅 진단 보고서를 48시간 내로 발송해 드립니다.',
    phone: '1544-0000',
    email: 'consult@worldbestmarketing.com',
    formTitle: '무료 마케팅 정밀 진단 신청',
    formFields: [
      { label: '병원명 (진료과목)', placeholder: '예: 월드베스트 성형외과의원', type: 'text' },
      { label: '담당자 성함 및 직함', placeholder: '예: 홍길동 원장 / 김지현 실장', type: 'text' },
      { label: '연락처 (휴대폰 번호)', placeholder: '010-0000-0000', type: 'tel' },
      {
        label: '가장 필요하신 마케팅 마인드셋',
        placeholder: '선택해 주세요 (예: 플레이스 노출, 유튜브)',
        type: 'select',
        options: ['플레이스 노출', '블로그/콘텐츠', 'SNS/유튜브', '홈페이지 제작', '올인원 통합'],
      },
    ],
    submitLabel: '무료 진단 및 상담 신청 완료하기',
    disclaimer:
      '*개인정보 수집 및 이용에 동의하며, 작성하신 정보는 오직 마케팅 무료 진단 및 비공개 법률 상담 목적으로만 사용됩니다.',
  },
  footer: {
    logoSrc: asset('wb-logo.png'),
    description:
      '월드베스트 마케팅은 전국 우수 병·의원 전문 1대1 파트너쉽 올인원 대행사입니다. 보건복지부 산하 의료광고 심의 기준에 완벽 부합하는 최상의 성과와 신뢰를 보장합니다.',
    linkGroups: [
      {
        title: '주요 서비스',
        links: ['네이버 메디컬 광고', '메디컬 전문 블로그', '원내 인터뷰 유튜브', '홈페이지 맞춤형 개발'],
      },
      {
        title: '회사 안내',
        links: ['회사 소개', '성공 레퍼런스', '자체 스튜디오', '보안 및 가이드라인'],
      },
    ],
    companyInfo:
      '(주)월드베스트 마케팅 | 대표이사: 홍길동 | 사업자등록번호: 000-00-00000 | 서울특별시 강남구 테헤란로 123, 7층',
    copyright: '© 2026 WORLDBEST MARKETING Inc. All rights reserved. Medical Ad Act Compliant.',
    legalLinks: ['이용약관', '개인정보처리방침', '의료광고 심의안내'],
  },
};
