<script setup lang="ts">
const { copy } = useLanguage()

useSeoMeta({
  title: computed(() => `${copy.value.common.company} | PPI Plâtrerie Peinture`),
  description: computed(() => copy.value.company.lead),
})
useMotion()
</script>

<template>
  <div>
    <PageHero
      :kicker="copy.company.kicker"
      :lead="copy.company.lead"
      :img="{ src: '/img/finition-salon.jpg', alt: copy.company.image, width: 1174, height: 783, pos: '50% 50%' }"
    >
      <template #title>{{ copy.company.title }} <em>{{ copy.company.titleEmphasis }}</em></template>
    </PageHero>

    <section class="section wrap">
      <div class="about">
        <p class="label" data-reveal>{{ copy.company.philosophy }}</p>
        <div data-reveal data-delay="0.1">
          <h2 class="title">{{ copy.company.aboutTitle }} <em>{{ copy.company.aboutTitleEmphasis }}</em></h2>
          <p class="lead" style="margin-top: 2rem">
            {{ copy.company.aboutText }}
          </p>
          <p class="lead muted" style="margin-top: 1.2rem">
            {{ copy.company.aboutTextMuted }}
          </p>
        </div>
      </div>
    </section>

    <section class="wrap" style="padding-bottom: clamp(64px, 10vw, 160px)">
      <p class="label" data-reveal>{{ copy.company.principles }}</p>
      <h2 class="title" style="margin-top: 14px" data-reveal data-delay="0.05">{{ copy.company.valuesTitle }} <em>{{ copy.company.valuesTitleEmphasis }}</em></h2>
      <div class="values">
        <article v-for="(v, i) in copy.company.values" :key="v.n" data-reveal :data-delay="i * 0.08">
          <span class="label">{{ v.n }}</span>
          <h3>{{ v.t }}</h3>
          <p class="muted">{{ v.d }}</p>
        </article>
      </div>
    </section>

    <ContactBand />
  </div>
</template>
