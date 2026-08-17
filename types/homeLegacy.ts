import type { ReasonItem } from '~/types/home';

export interface HomeLegacyServiceItem {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
}

export interface HomeLegacyProcessStep {
  step: number;
  title: string;
  description: string;
  iconSrc: string;
}

export interface HomeLegacyPartnershipStat {
  value: string;
  label: string;
  color: 'teal' | 'blue' | 'purple';
}

export interface HomeLegacyCoreValueItem {
  icon: string;
  title: string;
  description: string;
  gradient: 'teal' | 'blue' | 'purple';
}

export interface HomeLegacyContent {
  hero: {
    subtitle: string;
    titleHighlight: string;
    titleSuffix: string;
    titleGradient: string;
    videoSrc: string;
    posterSrc: string;
    cta: {
      label: string;
      href: string;
      external?: boolean;
    };
  };
  services: {
    badge: string;
    title: string;
    description: string;
    items: HomeLegacyServiceItem[];
  };
  process: {
    badge: string;
    title: string;
    description: string;
    items: HomeLegacyProcessStep[];
  };
  partnership: {
    title: string;
    titleHighlight: string;
    description: string;
    stats: HomeLegacyPartnershipStat[];
  };
  coreValues: {
    badge: string;
    title: string;
    description: string;
    items: HomeLegacyCoreValueItem[];
  };
  cta: {
    title: string;
    titleHighlight: string;
    description: string;
    button: {
      label: string;
      href: string;
      external?: boolean;
    };
  };
  intro?: {
    badge: string;
    title: string;
    description: string;
  };
  reasons?: {
    title: string;
    subtitle: string;
    imageSrc: string;
    items: ReasonItem[];
  };
}
