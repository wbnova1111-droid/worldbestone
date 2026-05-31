<script setup lang="ts">
import type { SiteContent } from '~/types/site';

defineProps<{
  site: SiteContent;
}>();
</script>

<template>
  <div class="min-h-screen bg-white pb-20 md:pb-0">
    <MobileHeader
      :brand-name="site.brandName"
      :logo-src="site.logoSrc"
      :logo-alt="site.logoAlt"
      :cta="site.consultationCta"
      :header-nav="site.headerNav"
      :service-nav="site.serviceNav"
    />
    <main>
      <slot />
    </main>
    <MobileFooter
      :logo-src="site.logoSrc"
      :logo-alt="site.logoAlt"
      :tagline="site.footer.tagline"
      :quick-links="site.footer.quickLinks"
      :contact="site.footer.contact"
      :copyright="site.footer.copyright"
    />
    <BottomNavigation :items="site.bottomNav" />
  </div>
</template>
