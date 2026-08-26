<script setup lang="ts">
import type { HomeContent } from '~/types/home';

defineProps<{
  content: HomeContent;
}>();
</script>

<template>
  <div id="home-top" class="bg-white">
    <HomeNavbar :navbar="content.navbar" />
    <HomeHero :hero="content.hero" :marquee="content.marquee" />
    <HomeAbout :cards="content.about" />
    <HomeProcess :section="content.process" />
    <HomeFaq :section="content.faq" />
    <HomeContact :section="content.contact" />
    <HomeCtaBanner :section="content.ctaBanner" />
    <HomeFooter :footer="content.footer" />
    <HomeFloatDock :items="content.floatDock.items" />
  </div>
</template>
