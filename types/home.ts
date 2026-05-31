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

export interface HomeServiceItem {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconSrc: string;
}

export interface PartnershipStat {
  value: string;
  label: string;
  color: 'teal' | 'blue' | 'purple';
}

export interface CoreValueItem {
  icon: string;
  title: string;
  description: string;
  gradient: 'teal' | 'blue' | 'purple';
}

export interface HomeContent {
  brandName: string;
  consultationUrl: string;
  navigation: NavigationItem[];
  hero: {
    subtitle: string;
    titleHighlight: string;
    titleSuffix: string;
    titleGradient: string;
    videoSrc: string;
    posterSrc: string;
    cta: CtaLink;
  };
  services: {
    badge: string;
    title: string;
    description: string;
    items: HomeServiceItem[];
  };
  process: {
    badge: string;
    title: string;
    description: string;
    items: ProcessStep[];
  };
  partnership: {
    title: string;
    titleHighlight: string;
    description: string;
    stats: PartnershipStat[];
  };
  coreValues: {
    badge: string;
    title: string;
    description: string;
    items: CoreValueItem[];
  };
  cta: {
    title: string;
    titleHighlight: string;
    description: string;
    button: CtaLink;
  };
}
