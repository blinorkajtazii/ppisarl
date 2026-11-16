<script setup lang="ts">
const { copy } = useLanguage()
</script>

<template>
  <section class="band wrap">
    <p class="label" data-reveal>{{ copy.band.prompt }}</p>
    <h2 class="display" data-reveal data-delay="0.1">{{ copy.band.heading }} <em>{{ copy.band.headingEmphasis }}</em></h2>
    <div class="band__row" data-reveal data-delay="0.2">
      <NuxtLink to="/contact" class="button button--light">{{ copy.band.quote }}</NuxtLink>
      <a class="band__tel" href="tel:+41783262825">078 326 28 25</a>
    </div>
  </section>
</template>
