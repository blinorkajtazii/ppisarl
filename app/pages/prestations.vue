<script setup lang="ts">
const { copy } = useLanguage()

useSeoMeta({
  title: computed(() => `${copy.value.common.services} | PPI Plâtrerie Peinture`),
  description: computed(() => copy.value.services.lead),
})
useMotion()

const serviceImages = [
  { src: '/img/chantier-plaques.jpg', width: 768, height: 1024, ratio: '4 / 5' },
  { src: '/img/finition-bureau.jpg', width: 768, height: 1024, ratio: '4 / 5' },
  { src: '/img/finition-cafeteria.jpg', width: 768, height: 1024, ratio: '4 / 5' },
  { src: '/img/chantier-ouverture.jpg', width: 1024, height: 1024, ratio: '4 / 5', pos: '55% 50%' },
]

const services = computed(() => copy.value.services.items.map((service, index) => ({
  ...service,
  img: { ...serviceImages[index], alt: service.alt },
})))
</script>

<template>
  <div>
    <PageHero
      :kicker="copy.services.kicker"
      :lead="copy.services.lead"
      :img="{ src: '/img/chantier-sejour.jpg', alt: copy.services.image, width: 1024, height: 786, pos: '50% 45%' }"
    >
      <template #title>{{ copy.services.title }} <em>{{ copy.services.titleEmphasis }}</em></template>
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
