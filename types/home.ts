export type ButtonVariant = 'primary' | 'secondary' | 'light';

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon: 'home' | 'services' | 'company' | 'chat';
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: 'plan' | 'brand' | 'star' | 'content' | 'chart';
}

export interface ReasonItem {
  title: string;
  description: string;
}

export interface HomeContent {
  brandName: string;
  consultationUrl: string;
  navigation: NavigationItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    videoSrc: string;
    posterSrc: string;
    cta: CtaLink;
  };
  intro: {
    badge: string;
    title: string;
    description: string;
  };
  services: {
    title: string;
    items: ServiceFeature[];
  };
  reasons: {
    title: string;
    subtitle: string;
    imageSrc: string;
    items: ReasonItem[];
  };
  cta: {
    title: string;
    description: string;
    button: CtaLink;
  };
  footer: {
    bannerSrc: string;
    bannerAlt: string;
    copyright: string;
  };
}
