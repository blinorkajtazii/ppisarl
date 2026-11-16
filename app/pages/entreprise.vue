<script setup lang="ts">
useSeoMeta({
  title: 'L’entreprise | PPI Plâtrerie Peinture',
  description: 'PPI Plâtrerie Peinture : une approche soignée de vos travaux intérieurs à Genève.',
})
useMotion()

const values = [
  { n: '01', t: 'La précision', d: 'Prendre le temps de préparer et de réaliser chaque étape avec attention.' },
  { n: '02', t: 'La qualité', d: 'Rechercher un rendu propre, harmonieux et adapté à votre projet.' },
  { n: '03', t: 'L’écoute', d: 'Comprendre vos attentes et maintenir un échange clair.' },
  { n: '04', t: 'Le respect', d: 'Porter attention à votre espace et à l’organisation du chantier.' },
]
</script>

<template>
  <div>
    <PageHero
      kicker="PPI · Plâtrerie & peinture"
      lead="Une approche centrée sur la qualité du travail, la préparation et le soin apporté aux finitions."
      :img="{ src: '/img/finition-appartement.jpg', alt: 'Appartement blanc avec armoire encastrée', width: 1024, height: 682, pos: '50% 60%' }"
    >
      <template #title>Le métier avec <em>exigence et attention.</em></template>
    </PageHero>

    <section class="section wrap">
      <div class="about">
        <p class="label" data-reveal>Notre philosophie</p>
        <div data-reveal data-delay="0.1">
          <h2 class="title">Un intérieur réussi <em>commence par de bonnes bases.</em></h2>
          <p class="lead" style="margin-top: 2rem">
            Chez PPI, nous considérons que chaque étape compte. Une surface bien préparée, des gestes précis et une finition adaptée contribuent à la réussite d’un projet.
          </p>
          <p class="lead muted" style="margin-top: 1.2rem">
            Nous accompagnons les particuliers et les professionnels à Genève pour leurs travaux de plâtrerie et de peinture intérieure. Notre priorité : comprendre votre besoin, vous conseiller avec clarté et réaliser un travail soigné.
          </p>
        </div>
      </div>
    </section>

    <section class="wrap" style="padding-bottom: clamp(64px, 10vw, 160px)">
      <p class="label" data-reveal>Nos principes</p>
      <h2 class="title" style="margin-top: 14px" data-reveal data-delay="0.05">Les valeurs qui <em>guident notre travail.</em></h2>
      <div class="values">
        <article v-for="(v, i) in values" :key="v.n" data-reveal :data-delay="i * 0.08">
          <span class="label">{{ v.n }}</span>
          <h3>{{ v.t }}</h3>
          <p class="muted">{{ v.d }}</p>
        </article>
      </div>
    </section>

    <ContactBand />
  </div>
</template>
