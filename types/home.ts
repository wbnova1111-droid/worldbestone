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

export interface ReasonItem {
  title: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: 'plan' | 'brand' | 'star' | 'content' | 'chart';
}

export interface HomeNavItem {
  label: string;
  href: string;
}

export interface HomeHeroCheck {
  label: string;
}

export interface HomeComparisonItem {
  text: string;
}

export interface HomeServiceItem {
  iconSrc: string;
  tag: string;
  title: string;
  description: string;
  href?: string;
}

export interface HomeDifferentiatorItem {
  number: string;
  badge: string;
  title: string;
  description: string;
}

export interface HomePortfolioItem {
  imageSrc: string;
  category: string;
  title: string;
  result: string;
}

export interface HomeStatItem {
  value: string;
  label: string;
}

export interface HomeTestimonialItem {
  quote: string;
  author: string;
}

export interface HomeFooterLinkGroup {
  title: string;
  links: string[];
}

export interface HomeContactFormField {
  label: string;
  placeholder: string;
  type: 'text' | 'tel' | 'select';
  options?: string[];
}

export interface HomeContent {
  navbar: {
    logoSrc: string;
    navItems: HomeNavItem[];
    ctaLabel: string;
    ctaHref: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    checks: HomeHeroCheck[];
    imageSrc: string;
  };
  painSolution: {
    badge: string;
    title: string;
    description: string;
    beforeTitle: string;
    beforeItems: HomeComparisonItem[];
    afterTitle: string;
    afterItems: HomeComparisonItem[];
  };
  services: {
    badge: string;
    title: string;
    description: string;
    items: HomeServiceItem[];
  };
  differentiators: {
    badge: string;
    title: string;
    items: HomeDifferentiatorItem[];
  };
  portfolio: {
    badge: string;
    title: string;
    ctaLabel: string;
    items: HomePortfolioItem[];
  };
  socialProof: {
    stats: HomeStatItem[];
    testimonialsTitle: string;
    testimonials: HomeTestimonialItem[];
  };
  contact: {
    badge: string;
    titleLine1: string;
    titlePrefix: string;
    titleHighlight: string;
    titleLine2: string;
    description: string;
    phone: string;
    email: string;
    formTitle: string;
    formFields: HomeContactFormField[];
    submitLabel: string;
    disclaimer: string;
  };
  footer: {
    logoSrc: string;
    description: string;
    linkGroups: HomeFooterLinkGroup[];
    companyInfo: string;
    copyright: string;
    legalLinks: string[];
  };
}
