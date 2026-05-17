import { homeMock } from '~/mocks/home';
import type { HomeContent } from '~/types/home';

export function useHomeContent() {
  const content = useState<HomeContent>('home-content', () => homeMock);

  // 실제 API가 준비되면 이 함수에서 $fetch<HomeContent>()로 교체합니다.
  const refresh = async () => {
    content.value = homeMock;
  };

  return {
    content,
    refresh,
  };
}
