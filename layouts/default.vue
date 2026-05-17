<script setup lang="ts">
const { site } = useSiteContent();
</script>

<template>
  <MobileShell :site="site">
    <slot />
  </MobileShell>
</template>
