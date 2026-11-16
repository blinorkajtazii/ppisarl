<script setup lang="ts">
useSeoMeta({
  title: 'PPI Plâtrerie Peinture | Genève',
  description:
    'PPI, plâtrerie et peinture à Genève : cloisons, peinture intérieure, faux plafonds, enduits et ratissage. Un travail soigné, de la préparation à la finition.',
})
useMotion()

const metiers = [
  { id: 'platrerie', name: 'Plâtrerie', desc: 'Cloisons, doublages et aménagements intérieurs.' },
  { id: 'peinture', name: 'Peinture', desc: 'Murs, plafonds et finitions soignées.' },
  { id: 'faux-plafonds', name: 'Faux plafonds', desc: 'Des plafonds adaptés à vos volumes.' },
  { id: 'enduits', name: 'Enduits', desc: 'Préparation et lissage avant finition.' },
]
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero__img">
        <img
          data-hero-img
          src="/img/hero-sejour.jpg"
          alt="Séjour avec lattes de bois, niche lumineuse et parquet en chevrons"
          width="1024"
          height="682"
          fetchpriority="high"
        />
      </div>
      <div class="hero__text">
        <div>
          <span class="label" data-hero>Genève · Suisse</span>
          <h1 class="display" data-hero>Plâtrerie et peinture · Genève</h1>
        </div>
        <NuxtLink to="/contact" class="button button--light" data-hero>Demander un devis ↗</NuxtLink>
      </div>
    </section>

    <section class="project wrap">
      <PhotoFrame
        src="/img/finition-appartement.jpg"
        alt="Appartement blanc avec armoire encastrée et applique murale"
        :width="1024"
        :height="682"
        ratio="16 / 8"
        parallax
      />
      <div class="project__meta" data-reveal>
        <span class="label">Finitions</span>
        <h2 class="project__title">Appartement — murs et plafonds blancs</h2>
        <NuxtLink to="/realisations" class="link">Toutes les réalisations ↗</NuxtLink>
      </div>
    </section>

    <section class="project wrap">
      <div class="project--split">
        <PhotoFrame
          src="/img/finition-ouverture.jpg"
          alt="Mur blanc perforé avec ouverture circulaire"
          :width="768"
          :height="1024"
          ratio="4 / 5"
          parallax
        />
        <div class="project__meta" data-reveal>
          <span class="label">Finitions</span>
          <h2 class="project__title">Mur acoustique perforé et ouverture circulaire</h2>
          <p class="muted">Plaques perforées, ouverture sur mesure, peinture nette : chaque détail est préparé avant la finition.</p>
        </div>
      </div>
    </section>

    <section class="section wrap">
      <p class="label" data-reveal>Nos métiers</p>
      <div class="metiers">
        <NuxtLink v-for="(m, i) in metiers" :key="m.id" :to="`/prestations#${m.id}`" class="metier" data-reveal>
          <span class="metier__num">0{{ i + 1 }}</span>
          <span class="metier__name">{{ m.name }}</span>
          <span class="metier__desc">{{ m.desc }}</span>
        </NuxtLink>
      </div>
    </section>

    <section class="section wrap" style="padding-top: 0">
      <div class="about">
        <p class="label" data-reveal>L'entreprise</p>
        <div data-reveal data-delay="0.1">
          <p class="title">Un bel intérieur commence par <em>un travail bien préparé.</em></p>
          <p class="lead muted" style="margin-top: 1.5rem">
            De la plâtrerie aux dernières couches de peinture, nous portons une attention particulière à la qualité d’exécution et à l’harmonie du résultat.
          </p>
          <p style="margin-top: 2rem"><NuxtLink to="/entreprise" class="link">Découvrir PPI ↗</NuxtLink></p>
        </div>
      </div>
    </section>

    <ContactBand />
  </div>
</template>
