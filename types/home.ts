export interface HomeNavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ReasonItem {
  title: string;
  description: string;
}

export interface HomeMarqueeItem {
  lines: string[];
  icons: string[];
  iconContain?: boolean;
}

export interface HomeAboutCard {
  title: string;
  lines: string[];
  emphasis?: string[];
  tone: 'black' | 'teal';
}

export interface HomePainPoint {
  title: string;
  description: string;
  iconSrc: string;
}

export interface HomeProcessStep {
  number: string;
  ko: string;
  en: string;
  summary: string;
  detail: string;
  imageSrc: string;
}

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export interface HomeContactField {
  label: string;
  placeholder: string;
  type: 'text' | 'tel' | 'select';
  required?: boolean;
  optionalHint?: string;
  options?: string[];
}

export interface HomeContent {
  navbar: {
    logoSrc: string;
    wordmark: string;
    tagline: string;
    navItems: HomeNavItem[];
    ctaLabel: string;
    ctaHref: string;
  };
  hero: {
    brandLines: string[];
    animationLines: string[];
    animationEmphasis: string;
    servicesHeading: string;
  };
  marquee: HomeMarqueeItem[];
  about: HomeAboutCard[];
  pain: {
    titleLines: string[];
    body: string;
    partnerPrefix: string;
    partnerEmphasis: string;
    partnerSuffix: string;
    points: HomePainPoint[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: HomeProcessStep[];
  };
  contact: {
    title: string;
    description: string;
    logoSrc?: string;
    formTitle: string;
    formSubtitle: string;
    hospitalName: HomeContactField;
    name: HomeContactField;
    phone: HomeContactField;
    servicesLabel?: string;
    services?: string[];
    source: HomeContactField;
    submitLabel: string;
  };
  faq: {
    titleLines: string[];
    prompt: string;
    email?: string;
    items: HomeFaqItem[];
  };
  ctaBanner: {
    titleLines: string[];
    buttonLabel: string;
    href: string;
  };
  floatDock: {
    items: { label: string; href: string; iconSrc: string; external?: boolean }[];
  };
  footer: {
    logoSrc: string;
    brandName: string;
    brandSub: string;
    slogan: string;
    companyLines: string[];
    introTitle?: string;
    introLinks?: HomeNavItem[];
    socialTitle?: string;
  };
}
