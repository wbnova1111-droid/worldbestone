import { siteMock } from '~/mocks/site';
import type { SiteContent } from '~/types/site';

export function useSiteContent() {
  const site = useState<SiteContent>('site-content', () => siteMock);

  const refresh = async () => {
    site.value = siteMock;
  };

  return {
    site,
    refresh,
  };
}
