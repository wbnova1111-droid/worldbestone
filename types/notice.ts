export interface NoticeItem {
  id: number;
  category: '공지' | '이벤트' | '업데이트';
  title: string;
  date: string;
  isNew: boolean;
}
