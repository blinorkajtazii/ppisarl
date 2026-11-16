<script setup lang="ts">
const { open, toggle, close } = useMenu()
const { language, copy, setLanguage } = useLanguage()
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo" :aria-label="copy.common.home" @click="close">
      <img src="/img/logo-crop.jpg" alt="PPI" width="600" height="440" />
    </NuxtLink>
    <div class="header__side">
      <a class="header__tel" href="tel:+41783262825">078 326 28 25</a>
      <div class="language-switch" role="group" :aria-label="language === 'fr' ? 'Choisir la langue' : 'Select language'">
        <button type="button" :aria-pressed="language === 'fr'" @click="setLanguage('fr')">FR</button>
        <button type="button" :aria-pressed="language === 'en'" @click="setLanguage('en')">EN</button>
      </div>
      <button
        type="button"
        class="header__menu"
        :aria-expanded="open"
        aria-controls="menu"
        @click="toggle"
      >
        <span>{{ open ? copy.common.close : copy.common.menu }}</span>
        <span class="header__burger" aria-hidden="true" />
      </button>
    </div>
  </header>
</template>
