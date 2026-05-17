import { productDetailsMock, productListMock } from '~/mocks/products';
import type { ProductDetail } from '~/types/product';

export function useProducts() {
  const products = useState('products-list', () => productListMock);

  const getProductBySlug = (slug: string): ProductDetail | null => {
    return productDetailsMock[slug] ?? null;
  };

  const refresh = async () => {
    products.value = productListMock;
  };

  return {
    products,
    getProductBySlug,
    refresh,
  };
}
