<script setup lang="ts">
import { finitions, chantiers } from '~/data/projects'

const { copy, language } = useLanguage()

useSeoMeta({
  title: computed(() => `${copy.value.common.projects} | PPI Plâtrerie Peinture`),
  description: computed(() => copy.value.projects.lead),
})
useMotion()
</script>

<template>
  <div>
    <PageHero
      :kicker="copy.projects.kicker"
      :lead="copy.projects.lead"
    >
      <template #title>{{ copy.projects.title }} <em>{{ copy.projects.titleEmphasis }}</em></template>
    </PageHero>

    <section class="section wrap">
      <div class="group__head" data-reveal>
        <h2 class="title">{{ copy.common.finish }}</h2>
        <span class="label">{{ copy.projects.finishes }}</span>
      </div>
      <div class="grid">
        <template v-for="(p, i) in finitions" :key="p.type === 'before-after' ? `pair-${i}` : p.src">
          <BeforeAfter
            v-if="p.type === 'before-after'"
            :before="p.before"
            :after="p.after"
            :title="language === 'en' ? p.captionEn : p.caption"
            :description="language === 'en' ? p.descriptionEn : p.description"
          />
          <figure v-else class="grid__item">
            <PhotoFrame v-bind="{ src: p.src, alt: language === 'en' ? p.altEn : p.alt, width: p.width, height: p.height, ratio: p.ratio, pos: p.pos }" zoom />
            <figcaption data-reveal>
              <div class="gallery-caption">
                <span class="gallery-caption__title">{{ language === 'en' ? p.captionEn : p.caption }}</span>
                <p v-if="p.description" class="gallery-caption__description">{{ language === 'en' ? p.descriptionEn : p.description }}</p>
              </div>
            </figcaption>
          </figure>
        </template>
      </div>
    </section>

    <section class="section wrap" style="padding-top: 0">
      <div class="group__head" data-reveal>
        <h2 class="title">{{ copy.projects.site }}</h2>
        <span class="label">{{ copy.projects.workInProgress }}</span>
      </div>
      <div class="grid">
        <figure v-for="p in chantiers" :key="p.src" class="grid__item" :class="{ 'grid__item--wide': p.wide }">
          <PhotoFrame v-bind="{ src: p.src, alt: language === 'en' ? p.altEn : p.alt, width: p.width, height: p.height, ratio: p.ratio, pos: p.pos }" zoom />
          <figcaption data-reveal>
            <div class="gallery-caption">
              <span class="gallery-caption__title">{{ language === 'en' ? p.captionEn : p.caption }}</span>
              <p v-if="p.description" class="gallery-caption__description">{{ language === 'en' ? p.descriptionEn : p.description }}</p>
            </div>
            <span>{{ copy.common.inProgress }}</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <ContactBand />
  </div>
</template>
