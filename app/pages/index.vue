<script setup lang="ts">
const { copy } = useLanguage()

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
        <img
          data-hero-img
          src="/img/hero-sejour.jpg"
          :alt="copy.home.imageLivingRoom"
          width="1024"
          height="682"
          fetchpriority="high"
        />
      </div>
      <div class="hero__text">
        <div>
          <span class="label" data-hero>{{ copy.home.location }}</span>
          <h1 class="display" data-hero>{{ copy.home.headline }}</h1>
        </div>
        <NuxtLink to="/contact" class="button button--light" data-hero>{{ copy.home.quote }}</NuxtLink>
      </div>
    </section>

    <section class="project wrap">
      <PhotoFrame
        src="/img/finition-appartement.jpg"
        :alt="copy.home.imageApartment"
        :width="1024"
        :height="682"
        ratio="16 / 8"
        parallax
      />
      <div class="project__meta" data-reveal>
        <span class="label">{{ copy.home.finishes }}</span>
        <h2 class="project__title">{{ copy.home.apartment }}</h2>
        <NuxtLink to="/realisations" class="link">{{ copy.home.allProjects }}</NuxtLink>
      </div>
    </section>

    <section class="project wrap">
      <div class="project--split">
        <PhotoFrame
          src="/img/finition-ouverture.jpg"
          :alt="copy.home.imageOpening"
          :width="768"
          :height="1024"
          ratio="4 / 5"
          parallax
        />
        <div class="project__meta" data-reveal>
          <span class="label">{{ copy.home.finishes }}</span>
          <h2 class="project__title">{{ copy.home.acousticWall }}</h2>
          <p class="muted">{{ copy.home.acousticDesc }}</p>
        </div>
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
