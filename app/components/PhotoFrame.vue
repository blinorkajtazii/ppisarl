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

const { copy } = useLanguage()
const webpSrc = computed(() => props.src.replace(/\.jpe?g$/i, '.webp'))
</script>

<template>
  <div>
    <div
      class="frame"
      :class="{ 'frame--zoom': zoom }"
      :style="{ aspectRatio: ratio ?? `${props.width} / ${props.height}`, '--pos': pos }"
      data-frame
      :data-parallax="parallax ? '' : undefined"
    >
      <component
        :is="zoom ? 'a' : 'div'"
        class="frame__zoom"
        :href="zoom ? src : undefined"
        :data-pswp="zoom ? '' : undefined"
        :data-pswp-width="zoom ? width : undefined"
        :data-pswp-height="zoom ? height : undefined"
        :aria-label="zoom ? copy.common.openImage : undefined"
      >
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
      </component>
    </div>
  </div>
</template>
