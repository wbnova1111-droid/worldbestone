import type { NoticeItem } from '~/types/notice';

export const noticesMock: NoticeItem[] = [
  {
    id: 1,
    category: '공지',
    title: '2026년 설연휴 운영 안내',
    date: '2026.01.15',
    isNew: true,
  },
  {
    id: 2,
    category: '이벤트',
    title: '신규 고객 대상 마케팅 패키지 할인 이벤트',
    date: '2026.01.10',
    isNew: true,
  },
  {
    id: 3,
    category: '공지',
    title: '홈페이지 리뉴얼 안내',
    date: '2026.01.05',
    isNew: false,
  },
  {
    id: 4,
    category: '업데이트',
    title: 'AI 분석 서비스 정식 출시',
    date: '2025.12.28',
    isNew: false,
  },
  {
    id: 5,
    category: '공지',
    title: '2025년 하반기 주요 성과 공유',
    date: '2025.12.20',
    isNew: false,
  },
];
