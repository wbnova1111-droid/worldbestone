<script setup lang="ts">
const { content } = useHomeContent();
</script>

<template>
  <div class="bg-white">
    <HomeNavbar :navbar="content.navbar" />
    <slot />
    <HomeFooter :footer="content.footer" />
    <HomeFloatDock :items="content.floatDock.items" />
  </div>
</template>
