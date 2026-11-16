<script setup lang="ts">
useSeoMeta({
  title: 'Prestations | PPI Plâtrerie Peinture',
  description: 'Plâtrerie, peinture intérieure, faux plafonds, enduits et ratissage à Genève.',
})
useMotion()

const services = [
  {
    id: 'platrerie',
    kicker: '01 / Plâtrerie',
    title: ['Structurer', 'vos espaces.'],
    text: 'Nous réalisons vos travaux de plâtrerie pour aménager, transformer et optimiser vos espaces intérieurs.',
    items: ['Pose de plaques de plâtre', 'Création de cloisons', 'Doublage des murs', 'Habillages et aménagements'],
    img: { src: '/img/chantier-plaques.jpg', alt: 'Plafond en plaques de plâtre sur structure acier', width: 768, height: 1024, ratio: '4 / 5' },
  },
  {
    id: 'peinture',
    kicker: '02 / Peinture intérieure',
    title: ['Révéler', 'vos ambiances.'],
    text: 'La préparation des supports et le choix des finitions contribuent à un résultat harmonieux et soigné.',
    items: ['Peinture des murs et plafonds', 'Préparation des surfaces', 'Rafraîchissement intérieur', 'Finitions décoratives selon le projet'],
    img: { src: '/img/finition-bureau.jpg', alt: 'Bureau avec plafond bleu et retombée courbe', width: 768, height: 1024, ratio: '4 / 5' },
  },
  {
    id: 'faux-plafonds',
    kicker: '03 / Faux plafonds',
    title: ['Donner du rythme', 'à vos volumes.'],
    text: 'Des solutions de plafonds adaptées à la configuration de vos pièces et à l’esthétique recherchée.',
    items: ['Faux plafonds en plaques de plâtre', 'Plafonds suspendus', 'Retombées et habillages', 'Préparation des surfaces avant peinture'],
    img: { src: '/img/finition-cafeteria.jpg', alt: 'Cafétéria avec faux plafond acoustique perforé', width: 768, height: 1024, ratio: '4 / 5' },
  },
  {
    id: 'enduits',
    kicker: '04 / Enduits & ratissage',
    title: ['Préparer la base', 'd’une belle finition.'],
    text: 'Un support régulier est essentiel pour obtenir un rendu final de qualité. Nous préparons les surfaces avec minutie.',
    items: ['Enduisage des murs et plafonds', 'Ratissage', 'Rebouchage des imperfections', 'Ponçage et préparation avant peinture'],
    img: { src: '/img/chantier-ouverture.jpg', alt: 'Mur en plaques avec joints enduits avant peinture', width: 1024, height: 1024, ratio: '4 / 5', pos: '55% 50%' },
  },
]
</script>

<template>
  <div>
    <PageHero
      kicker="Prestations · Genève"
      lead="Des travaux préparés avec soin, exécutés avec précision et adaptés à votre intérieur."
      :img="{ src: '/img/chantier-sejour.jpg', alt: 'Séjour en plaques de plâtre avant enduit', width: 1024, height: 786, pos: '50% 45%' }"
    >
      <template #title>Des prestations <em>pensées pour durer.</em></template>
    </PageHero>

    <section class="wrap" style="padding-top: clamp(32px, 6vw, 96px)">
      <article v-for="s in services" :id="s.id" :key="s.id" class="service">
        <div class="service__text">
          <p class="label" data-reveal>{{ s.kicker }}</p>
          <h2 class="title" data-reveal data-delay="0.05">{{ s.title[0] }} <em>{{ s.title[1] }}</em></h2>
          <p class="lead" data-reveal data-delay="0.1">{{ s.text }}</p>
          <ul class="service__list" data-reveal data-delay="0.15">
            <li v-for="item in s.items" :key="item">{{ item }}</li>
          </ul>
        </div>
        <PhotoFrame v-bind="s.img" zoom />
      </article>
    </section>

    <div style="height: clamp(48px, 8vw, 120px)" />
    <ContactBand />
  </div>
</template>
