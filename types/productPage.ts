export interface ProductPageHero {
  badge?: string;
  titleLines: string[];
  titleHighlight?: string;
  subtitle?: string | string[];
  ctaPrimary?: string;
  ctaSecondary?: string;
  variant?: 'dark-gradient' | 'black' | 'blue-gradient';
  backgroundImage?: string;
  preQuote?: string;
  ctaPill?: string;
  timeCards?: { label: string; time: string }[];
}

export interface ProductPageSection {
  badge?: string;
  heading: string | string[];
  headingHighlight?: string;
  sub?: string | string[];
  variant?: 'light' | 'dark' | 'gradient' | 'black' | 'teal' | 'blue';
}

export interface ProductPageCard {
  icon?: string;
  title: string;
  desc?: string | string[];
  color?: string;
  step?: number | string;
}

export interface ProductPageFaq {
  q: string;
  a: string | string[];
}

export interface ProductPageCta {
  title: string | string[];
  subtitle?: string | string[];
  button: string;
  note?: string;
  variant?: 'gradient' | 'card' | 'teal-blue';
}

export interface ProductPageContent {
  hero: ProductPageHero;
  sections: ProductPageSection[];
  cards?: Record<string, ProductPageCard[]>;
  faq?: ProductPageFaq[];
  cta: ProductPageCta;
  extra?: Record<string, unknown>;
}
