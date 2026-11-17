<script setup lang="ts">
import { gsap } from 'gsap'

const { open, close } = useMenu()
const { copy } = useLanguage()
const route = useRoute()
const nuxtApp = useNuxtApp()
const root = ref<HTMLElement | null>(null)

const links = [
  { to: '/', key: 'home' },
  { to: '/prestations', key: 'services' },
  { to: '/realisations', key: 'projects' },
  { to: '/entreprise', key: 'company' },
  { to: '/contact', key: 'quote' },
]

watch(open, (isOpen) => {
  const motion = nuxtApp.$motion
  document.documentElement.classList.toggle('menu-open', isOpen)
  if (isOpen) motion?.lenis?.stop()
  else motion?.lenis?.start()

  if (isOpen && !motion?.reduced && root.value) {
    gsap.fromTo(
      root.value.querySelectorAll('[data-menu-item]'),
      { yPercent: 115 },
      { yPercent: 0, duration: 0.9, stagger: 0.07, delay: 0.15, ease: 'power4.out' },
    )
  }
})

watch(() => route.fullPath, close)

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && open.value) close()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div id="menu" ref="root" class="menu" :class="{ 'is-open': open }" :inert="!open" :aria-hidden="!open">
    <ul class="menu__list">
      <li v-for="(l, i) in links" :key="l.to">
        <NuxtLink :to="l.to" class="menu__link">
          <span class="menu__num">0{{ i + 1 }}</span>
          <span class="menu__mask">
            <span class="menu__text" data-menu-item>{{ copy.common[l.key] }}</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
    <div class="menu__foot">
      <span>{{ copy.common.companyShort }}</span>
    </div>
  </div>
</template>
