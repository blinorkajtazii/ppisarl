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
const dialog = ref<HTMLDialogElement | null>(null)
const webpSrc = computed(() => props.src.replace(/\.jpe?g$/i, '.webp'))

const openLightbox = () => {
  if (!props.zoom || !dialog.value) return

  dialog.value.showModal()
  document.documentElement.classList.add('lightbox-open')
}

const closeLightbox = () => {
  dialog.value?.close()
  document.documentElement.classList.remove('lightbox-open')
}

onBeforeUnmount(() => {
  if (dialog.value?.open) closeLightbox()
})
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
      <button
        v-if="zoom"
        type="button"
        class="frame__trigger"
        :aria-label="copy.common.openImage"
        @click="openLightbox"
      />
    </div>
    <dialog
      v-if="zoom"
      ref="dialog"
      class="lightbox"
      :aria-label="alt"
      @click.self="closeLightbox"
      @cancel.prevent="closeLightbox"
    >
      <button type="button" class="lightbox__close" :aria-label="copy.common.closeImage" @click="closeLightbox">×</button>
      <img :src="src" :alt="alt" :width="width" :height="height" />
    </dialog>
  </div>
</template>
