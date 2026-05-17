import type { CtaLink } from '~/types/home';

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ServiceNavItem extends NavLink {
  slug: string;
}

export interface SiteFooter {
  bannerSrc: string;
  bannerAlt: string;
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
