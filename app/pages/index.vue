<script setup lang="ts">
import { pairs } from '~/data/projects'

const { copy } = useLanguage()
const selectedPairIndex = ref(0)
const selectedPair = computed(() => pairs[selectedPairIndex.value]!)
const comparisonHintUsed = ref(false)

useSeoMeta({
  title: computed(() => copy.value.home.seoTitle),
  description: computed(() => copy.value.home.seoDescription),
})
useMotion()
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero__img">
        <picture>
          <source srcset="/img/salon-arche.webp" type="image/webp" />
          <img
            data-hero-img
            src="/img/salon-arche.jpg"
            alt="Salon aux tons beige, avec une arche"
            width="1408"
            height="786"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div class="hero__text">
        <div>
          <span class="label" data-hero>{{ copy.home.location }}</span>
          <h1 class="display" data-hero>{{ copy.home.headline }}</h1>
        </div>
        <NuxtLink to="/contact" class="button button--light" data-hero>{{ copy.home.quote }}</NuxtLink>
      </div>
    </section>

    <section class="section wrap">
      <p class="label" data-reveal>{{ copy.home.trades }}</p>
      <div class="metiers">
        <NuxtLink v-for="(m, i) in copy.home.services" :key="m.id" :to="`/prestations#${m.id}`" class="metier" data-reveal>
          <span class="metier__num">0{{ i + 1 }}</span>
          <span class="metier__name">{{ m.name }}</span>
          <span class="metier__desc">{{ m.desc }}</span>
        </NuxtLink>
      </div>
    </section>

    <section class="section wrap home-comparison">
      <div class="home-comparison__layout">
        <div class="home-comparison__copy">
          <p class="label" data-reveal>Réalisations</p>
          <h2 class="title" data-reveal>Du chantier <em>à la finition.</em></h2>
          <p class="muted home-comparison__hint" data-reveal>Faites glisser pour comparer.</p>
          <div class="home-comparison__switcher" data-reveal role="group" aria-label="Choisir une réalisation">
            <button
              v-for="(pair, index) in pairs"
              :key="pair.id"
              type="button"
              class="home-comparison__switch"
              :class="{ 'home-comparison__switch--active': pair.id === selectedPair.id }"
              :aria-pressed="pair.id === selectedPair.id"
              @click="selectedPairIndex = index"
            >
              {{ pair.switcherLabel }}
            </button>
          </div>
          <Transition name="comparison-fade" mode="out-in">
            <div :key="selectedPair.id" class="home-comparison__caption" aria-live="polite">
              <h3>{{ selectedPair.caption }}</h3>
              <p v-if="selectedPair.description" class="muted">{{ selectedPair.description }}</p>
            </div>
          </Transition>
          <NuxtLink to="/realisations" class="link home-comparison__link" data-reveal>
            Toutes les réalisations ↗
          </NuxtLink>
        </div>
        <div class="home-comparison__slider" data-reveal>
          <BeforeAfterSlider
            class="home-comparison__slider-frame"
            :before="selectedPair.before"
            :after="selectedPair.after"
            :ratio="selectedPair.ratio"
            :initial="50"
            :hint-enabled="!comparisonHintUsed"
            @hint-used="comparisonHintUsed = true"
          />
        </div>
      </div>
    </section>

    <section class="section wrap" style="padding-top: 0">
      <div class="about">
        <p class="label" data-reveal>{{ copy.home.company }}</p>
        <div data-reveal data-delay="0.1">
          <p class="title">{{ copy.home.tagline }} <em>{{ copy.home.taglineEmphasis }}</em></p>
          <p class="lead muted" style="margin-top: 1.5rem">
            {{ copy.home.description }}
          </p>
          <p style="margin-top: 2rem"><NuxtLink to="/entreprise" class="link">{{ copy.home.discover }}</NuxtLink></p>
        </div>
      </div>
    </section>

    <ContactBand />
  </div>
</template>
