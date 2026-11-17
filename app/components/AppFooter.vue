<script setup lang="ts">
const year = new Date().getFullYear()
const { copy } = useLanguage()
</script>

<template>
  <footer class="footer wrap">
    <div class="footer__top">
      <div>
        <NuxtLink to="/" class="footer__logo" :aria-label="copy.common.home">
          <img src="/img/logo.png" alt="PPI" width="500" height="500" />
        </NuxtLink>
      </div>
      <div>
        <h3>{{ copy.common.navigation }}</h3>
        <ul>
          <li><NuxtLink to="/prestations">{{ copy.common.services }}</NuxtLink></li>
          <li><NuxtLink to="/realisations">{{ copy.common.projects }}</NuxtLink></li>
          <li><NuxtLink to="/entreprise">{{ copy.common.company }}</NuxtLink></li>
          <li><NuxtLink to="/contact">{{ copy.common.quote }}</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3>{{ copy.common.contact }}</h3>
        <ul>
          <li><a href="tel:+41783262825">078 326 28 25</a></li>
          <li>{{ copy.common.location }}</li>
          <li class="muted">{{ copy.contact.emailAddress }}</li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© {{ year }} PPI Plâtrerie Peinture</span>
      <div>
        <NuxtLink to="/mentions-legales">{{ copy.common.legal }}</NuxtLink>
        <NuxtLink to="/confidentialite">{{ copy.common.privacy }}</NuxtLink>
      </div>
    </div>
  </footer>
</template>
