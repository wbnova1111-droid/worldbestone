export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductListItem {
  slug: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProductDetailFeature {
  title: string;
  desc: string;
}

export interface ProductDetailBenefit {
  title: string;
  desc: string;
}

export interface ProductDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  mainTitle: string;
  mainDesc: string;
  features: ProductDetailFeature[];
  benefits: ProductDetailBenefit[];
  /** place | youtube | blog | sns | medical-platform | allinone | website | offline | ai-strategy | default */
  template: 'place' | 'youtube' | 'blog' | 'sns' | 'medical-platform' | 'allinone' | 'website' | 'offline' | 'ai-strategy' | 'default';
}
