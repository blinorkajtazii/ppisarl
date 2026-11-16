import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Défilement fluide (Lenis) + révélations au scroll (GSAP ScrollTrigger).
 * Les éléments sont pilotés par attributs :
 *   data-hero          apparition au chargement (titre)
 *   data-hero-img      zoom d'entrée de la photo hero
 *   data-reveal        fondu + montée au scroll (data-delay en secondes)
 *   data-frame         cadre photo : fondu + montée, image qui se pose
 *   data-parallax      léger parallaxe de l'image dans son cadre
 */
export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let lenis: Lenis | null = null
  let ctx: gsap.Context | null = null

  if (!reduced) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis!.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    // L'en-tête se range quand on descend, revient quand on remonte.
    lenis.on('scroll', ({ scroll, direction }: { scroll: number; direction: number }) => {
      document.documentElement.classList.toggle('nav-hidden', direction === 1 && scroll > 240)
    })
  }

  const kill = () => {
    ctx?.revert()
    ctx = null
  }

  const init = () => {
    kill()
    document.documentElement.classList.remove('nav-hidden')

    const hash = window.location.hash
    if (hash && lenis) {
      const target = document.querySelector(hash)
      if (target) lenis.scrollTo(target as HTMLElement, { offset: -96, immediate: true })
    } else if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true })
    }

    if (reduced) return

    ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-hero]').forEach((el, i) => {
        gsap.to(el, { opacity: 1, y: 0, duration: 1.2, delay: 0.2 + i * 0.14, ease: 'power3.out' })
      })

      gsap.utils.toArray<HTMLElement>('[data-hero-img]').forEach((el) => {
        gsap.fromTo(el, { scale: 1.12 }, { scale: 1, duration: 2.2, ease: 'power2.out' })
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: Number(el.dataset.delay || 0),
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-frame]').forEach((frame) => {
        const img = frame.querySelector('img')
        const st = { trigger: frame, start: 'top 90%', once: true }
        gsap.to(frame, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: st })
        if (img) gsap.to(img, { scale: 1, duration: 1.8, ease: 'power2.out', scrollTrigger: st })
      })

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((frame) => {
        const inner = frame.querySelector('.frame__zoom')
        if (!inner) return
        gsap.fromTo(
          inner,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    })

    ScrollTrigger.refresh()
  }

  window.addEventListener('load', () => ScrollTrigger.refresh())
  ;(window as unknown as { __motion: boolean }).__motion = true

  return {
    provide: {
      motion: {
        init,
        kill,
        reduced,
        get lenis() {
          return lenis
        },
      },
    },
  }
})
