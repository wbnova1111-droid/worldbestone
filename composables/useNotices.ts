import { noticesMock } from '~/mocks/notices';
import type { NoticeItem } from '~/types/notice';

export function useNotices() {
  const notices = useState<NoticeItem[]>('notices', () => noticesMock);

  const refresh = async () => {
    notices.value = noticesMock;
  };

  return {
    notices,
    refresh,
  };
}
