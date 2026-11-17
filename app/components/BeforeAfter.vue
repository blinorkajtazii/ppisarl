<script setup lang="ts">
import type { ProjectImage } from '~/data/projects'

defineProps<{
  before: ProjectImage
  after: ProjectImage
  title: string
  description?: string
}>()

const { language } = useLanguage()
</script>

<template>
  <figure class="before-after grid__item--wide">
    <div class="before-after__photos">
      <div class="before-after__photo">
        <span class="label">{{ language === 'en' ? 'Before' : 'Avant' }}</span>
        <PhotoFrame
          :src="before.src"
          :alt="language === 'en' ? before.altEn : before.alt"
          :width="before.width"
          :height="before.height"
          :ratio="before.ratio"
          :pos="before.pos"
          zoom
        />
      </div>
      <div class="before-after__photo">
        <span class="label">{{ language === 'en' ? 'After' : 'Après' }}</span>
        <PhotoFrame
          :src="after.src"
          :alt="language === 'en' ? after.altEn : after.alt"
          :width="after.width"
          :height="after.height"
          :ratio="after.ratio"
          :pos="after.pos"
          zoom
        />
      </div>
    </div>
    <figcaption data-reveal>
      <span class="gallery-caption__title">{{ title }}</span>
      <p v-if="description" class="gallery-caption__description">{{ description }}</p>
    </figcaption>
  </figure>
</template>
