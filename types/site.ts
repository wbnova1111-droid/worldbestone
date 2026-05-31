import type { CtaLink } from '~/types/home';

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ServiceNavItem extends NavLink {
  slug: string;
}

export interface SiteFooterContact {
  phone: string;
  email: string;
  address: string;
}

export interface SiteFooter {
  tagline: string;
  quickLinks: NavLink[];
  contact: SiteFooterContact;
  copyright: string;
}

export interface SiteContent {
  brandName: string;
  logoSrc: string;
  logoAlt: string;
  consultationUrl: string;
  consultationCta: CtaLink;
  footer: SiteFooter;
  headerNav: NavLink[];
  serviceNav: ServiceNavItem[];
  bottomNav: Array<NavLink & { icon: 'home' | 'services' | 'company' | 'chat' }>;
}
