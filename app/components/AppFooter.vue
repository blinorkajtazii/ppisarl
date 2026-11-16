<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer wrap">
    <div class="footer__top">
      <div>
        <NuxtLink to="/" class="footer__logo" aria-label="PPI, accueil">
          <img src="/img/logo-crop.jpg" alt="PPI" width="600" height="440" />
        </NuxtLink>
      </div>
      <div>
        <h3>Navigation</h3>
        <ul>
          <li><NuxtLink to="/prestations">Prestations</NuxtLink></li>
          <li><NuxtLink to="/realisations">Réalisations</NuxtLink></li>
          <li><NuxtLink to="/entreprise">L'entreprise</NuxtLink></li>
          <li><NuxtLink to="/contact">Demander un devis</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li><a href="tel:+41783262825">078 326 28 25</a></li>
          <li>Genève et environs</li>
          <li class="muted">Adresse à définir</li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© {{ year }} PPI Plâtrerie Peinture</span>
      <div>
        <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
        <NuxtLink to="/confidentialite">Confidentialité</NuxtLink>
      </div>
    </div>
  </footer>
</template>
