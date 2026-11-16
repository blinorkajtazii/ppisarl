<script setup lang="ts">
defineProps<{
  kicker: string
  lead?: string
  img?: { src: string; alt: string; width: number; height: number; pos?: string }
}>()
</script>

<template>
  <section class="page-hero wrap">
    <div class="page-hero__head">
      <p class="label" data-hero>{{ kicker }}</p>
      <h1 class="display" data-hero><slot name="title" /></h1>
      <p v-if="lead" class="page-hero__lead lead" data-hero>{{ lead }}</p>
    </div>
    <PhotoFrame
      v-if="img"
      v-bind="img"
      ratio="21 / 9"
      parallax
      eager
    />
  </section>
</template>
