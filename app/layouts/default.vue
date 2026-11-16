<script setup lang="ts">
const { language } = useLanguage()

useHead({
  htmlAttrs: {
    lang: language,
  },
})
</script>

<template>
  <div>
    <AppHeader />
    <MenuOverlay />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
