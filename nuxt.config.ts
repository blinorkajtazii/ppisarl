// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'PPI Plâtrerie Peinture | Genève',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      script: [
        {
          // Les états initiaux « cachés » ne s'appliquent que si le JS tourne
          // et que le visiteur n'a pas demandé moins d'animation.
          innerHTML:
            "if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js');setTimeout(function(){if(!window.__motion)document.documentElement.classList.remove('js')},4000)}",
          tagPosition: 'head',
        },
      ],
    },
  },
  vite: {
    optimizeDeps: { include: ['gsap', 'gsap/ScrollTrigger', 'lenis'] },
  },
  nitro: {
    prerender: { routes: ['/'], crawlLinks: true },
  },
})
