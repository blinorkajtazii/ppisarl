<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  width: number
  height: number
  ratio?: string
  pos?: string
  parallax?: boolean
  eager?: boolean
  zoom?: boolean
}>()

const webpSrc = computed(() => props.src.replace(/\.jpe?g$/i, '.webp'))
</script>

<template>
  <div
    class="frame"
    :class="{ 'frame--zoom': zoom }"
    :style="{ aspectRatio: ratio ?? `${props.width} / ${props.height}`, '--pos': pos }"
    data-frame
    :data-parallax="parallax ? '' : undefined"
  >
    <div class="frame__zoom">
      <picture>
        <source :srcset="webpSrc" type="image/webp" />
        <img
          :src="src"
          :alt="alt"
          :width="width"
          :height="height"
          :loading="eager ? 'eager' : 'lazy'"
          :fetchpriority="eager ? 'high' : undefined"
          decoding="async"
        />
      </picture>
    </div>
  </div>
</template>
