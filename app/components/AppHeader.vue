<script setup lang="ts">
const { open, toggle, close } = useMenu()
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo" aria-label="PPI, accueil" @click="close">
      <img src="/img/logo-crop.jpg" alt="PPI" width="600" height="440" />
    </NuxtLink>
    <div class="header__side">
      <a class="header__tel" href="tel:+41783262825">078 326 28 25</a>
      <button
        type="button"
        class="header__menu"
        :aria-expanded="open"
        aria-controls="menu"
        @click="toggle"
      >
        <span>{{ open ? 'Fermer' : 'Menu' }}</span>
        <span class="header__burger" aria-hidden="true" />
      </button>
    </div>
  </header>
</template>
