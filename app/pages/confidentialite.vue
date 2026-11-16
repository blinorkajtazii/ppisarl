<script setup lang="ts">
const { copy } = useLanguage()
useSeoMeta({ title: computed(() => `${copy.value.common.privacy} | PPI Plâtrerie Peinture`), robots: 'noindex' })
useMotion()
</script>

<template>
  <div>
    <section class="wrap legal">
      <p class="label" data-hero>{{ copy.legal.privacyLabel }}</p>
      <h1 class="title" data-hero style="margin-top: 14px">{{ copy.legal.privacyTitle }}</h1>

      <h2>{{ copy.legal.formData }}</h2>
      <p>{{ copy.legal.formDataText }}</p>

      <h2>{{ copy.legal.whatsapp }}</h2>
      <p>{{ copy.legal.whatsappText }}</p>

      <h2>{{ copy.legal.cookies }}</h2>
      <p>{{ copy.legal.cookiesText }}</p>

      <h2>{{ copy.legal.yourRights }}</h2>
      <p>{{ copy.legal.rightsText }} <a href="tel:+41783262825">078 326 28 25</a>.</p>
    </section>
  </div>
</template>
