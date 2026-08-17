<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  content: HomeContent;
}>();
</script>

<template>
  <div class="bg-white">
    <HomeNavbar :navbar="content.navbar" />
    <HomeHero :hero="content.hero" />
    <HomePainSolution :section="content.painSolution" />
    <HomeServices :section="content.services" />
    <HomeDifferentiators :section="content.differentiators" />
    <HomePortfolio id="portfolio" :section="content.portfolio" />
    <HomeSocialProof :section="content.socialProof" />
    <HomeContact id="contact" :section="content.contact" />
    <HomeFooter :footer="content.footer" />
  </div>
</template>
