<script setup lang="ts">
import { finitions, chantiers } from '~/data/projects'

useSeoMeta({
  title: 'Réalisations | PPI Plâtrerie Peinture',
  description: 'Finitions et chantiers en cours : plâtrerie, faux plafonds et peinture à Genève.',
})
useMotion()
</script>

<template>
  <div>
    <PageHero
      kicker="Réalisations"
      lead="Des intérieurs terminés, et des chantiers en cours : ce qui se voit à la fin se prépare dès le début."
    >
      <template #title>Le soin du détail <em>en images.</em></template>
    </PageHero>

    <section class="section wrap">
      <div class="group__head" data-reveal>
        <h2 class="title">Finitions</h2>
        <span class="label">Travaux terminés</span>
      </div>
      <div class="grid">
        <figure v-for="p in finitions" :key="p.src" class="grid__item">
          <PhotoFrame v-bind="{ src: p.src, alt: p.alt, width: p.width, height: p.height, ratio: p.ratio, pos: p.pos }" zoom />
          <figcaption data-reveal>{{ p.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="section wrap" style="padding-top: 0">
      <div class="group__head" data-reveal>
        <h2 class="title">Chantier</h2>
        <span class="label">Travaux en cours</span>
      </div>
      <div class="grid">
        <figure v-for="p in chantiers" :key="p.src" class="grid__item" :class="{ 'grid__item--wide': p.wide }">
          <PhotoFrame v-bind="{ src: p.src, alt: p.alt, width: p.width, height: p.height, ratio: p.ratio, pos: p.pos }" zoom />
          <figcaption data-reveal>
            {{ p.caption }}
            <span>En cours</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <ContactBand />
  </div>
</template>
