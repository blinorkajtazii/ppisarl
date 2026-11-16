<script setup lang="ts">
const { copy, language } = useLanguage()
useSeoMeta({ title: computed(() => `${copy.value.common.legal} | PPI Plâtrerie Peinture`), robots: 'noindex' })
useMotion()
</script>

<template>
  <div>
    <section class="wrap legal">
      <p class="label" data-hero>{{ copy.legal.legalLabel }}</p>
      <h1 class="title" data-hero style="margin-top: 14px">{{ copy.legal.legalTitle }}</h1>

      <h2>{{ copy.legal.publisher }}</h2>
      <p>
        PPI Plâtrerie Peinture<br />
        {{ language === 'en' ? 'Geneva, Switzerland' : 'Genève, Suisse' }}<br />
        {{ copy.legal.telephone }} : <a href="tel:+41783262825">078 326 28 25</a><br />
        {{ copy.legal.email }} : {{ copy.contact.emailAddress }}<br />
        {{ copy.legal.companyId }}
      </p>

      <h2>{{ copy.legal.hosting }}</h2>
      <p>{{ copy.legal.hostingText }}</p>

      <h2>{{ copy.legal.intellectualProperty }}</h2>
      <p>{{ copy.legal.intellectualText }}</p>

      <h2>{{ copy.legal.responsibility }}</h2>
      <p>{{ copy.legal.responsibilityText }}</p>
    </section>
  </div>
</template>
