<script setup lang="ts">
import { gsap } from 'gsap'
import type { ProjectImage } from '~/data/projects'

const props = withDefaults(defineProps<{
  before: ProjectImage
  after: ProjectImage
  ratio?: string
  initial?: number
  hintEnabled?: boolean
}>(), {
  ratio: '3 / 2',
  initial: 50,
  hintEnabled: true,
})

const emit = defineEmits<{
  hintUsed: []
}>()

const frame = ref<HTMLElement | null>(null)
const position = ref(Math.max(0, Math.min(100, props.initial)))
const isChangingPair = ref(false)
const beforeWebp = computed(() => props.before.src.replace(/\.jpe?g$/i, '.webp'))
const afterWebp = computed(() => props.after.src.replace(/\.jpe?g$/i, '.webp'))

let activePointerId: number | null = null
let pendingPosition = position.value
let updateFrame = 0
let observer: IntersectionObserver | null = null
let hintTimeline: gsap.core.Timeline | null = null
let pairChangeTimeout: ReturnType<typeof setTimeout> | null = null
let userInteracted = false
let hasNotifiedHintUse = false

watch(() => [props.before.src, props.after.src], () => {
  position.value = Math.max(0, Math.min(100, props.initial))
  pendingPosition = position.value

  if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return

  isChangingPair.value = true
  if (pairChangeTimeout)
    clearTimeout(pairChangeTimeout)

  pairChangeTimeout = setTimeout(() => {
    isChangingPair.value = false
    pairChangeTimeout = null
  }, 150)
}, { flush: 'pre' })

function markHintUsed() {
  if (hasNotifiedHintUse)
    return

  hasNotifiedHintUse = true
  emit('hintUsed')
}

function cancelHint() {
  userInteracted = true
  markHintUsed()
  hintTimeline?.kill()
  hintTimeline = null
}

function updateFromPointer(event: PointerEvent, immediate = false) {
  const element = frame.value
  if (!element)
    return

  const bounds = element.getBoundingClientRect()
  if (!bounds.width)
    return

  pendingPosition = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100))

  if (immediate) {
    position.value = pendingPosition
    return
  }

  if (!updateFrame) {
    updateFrame = requestAnimationFrame(() => {
      position.value = pendingPosition
      updateFrame = 0
    })
  }
}

function startDrag(event: PointerEvent) {
  if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0))
    return

  const element = frame.value
  if (!element)
    return

  cancelHint()
  activePointerId = event.pointerId
  element.setPointerCapture(event.pointerId)
  updateFromPointer(event, true)
}

function moveDrag(event: PointerEvent) {
  if (activePointerId !== event.pointerId)
    return
  updateFromPointer(event)
}

function endDrag(event: PointerEvent) {
  if (activePointerId === event.pointerId)
    activePointerId = null
}

function handleKeydown(event: KeyboardEvent) {
  const step = event.shiftKey ? 10 : 2
  let nextPosition: number | null = null

  if (event.key === 'ArrowLeft')
    nextPosition = position.value - step
  else if (event.key === 'ArrowRight')
    nextPosition = position.value + step
  else if (event.key === 'Home')
    nextPosition = 0
  else if (event.key === 'End')
    nextPosition = 100
  else
    return

  event.preventDefault()
  cancelHint()
  position.value = Math.max(0, Math.min(100, nextPosition))
}

onMounted(() => {
  if (!props.hintEnabled || !frame.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return

  if (typeof IntersectionObserver === 'undefined')
    return

  observer = new IntersectionObserver((entries) => {
    if (!entries.some(entry => entry.isIntersecting))
      return

    observer?.disconnect()
    observer = null
    if (userInteracted)
      return

    markHintUsed()
    hintTimeline = gsap.timeline({
      onComplete: () => {
        hintTimeline = null
      },
    })
    hintTimeline
      .to(position, { value: 35, duration: 0.5, ease: 'sine.inOut' })
      .to(position, { value: 65, duration: 0.5, ease: 'sine.inOut' })
      .to(position, { value: 50, duration: 0.5, ease: 'sine.inOut' })
  }, { threshold: 0.35 })

  observer.observe(frame.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  hintTimeline?.kill()
  if (pairChangeTimeout)
    clearTimeout(pairChangeTimeout)
  if (updateFrame)
    cancelAnimationFrame(updateFrame)
})
</script>

<template>
  <div
    ref="frame"
    class="before-after-slider"
    :class="{ 'before-after-slider--changing': isChangingPair }"
    :style="{ aspectRatio: ratio, '--split': `${position}%` }"
    data-frame
    @pointerdown="startDrag"
    @pointermove="moveDrag"
    @pointerup="endDrag"
    @pointercancel="endDrag"
    @lostpointercapture="endDrag"
  >
    <div class="before-after-slider__layer">
      <picture>
        <source :srcset="beforeWebp" type="image/webp" />
        <img
          :src="before.src"
          :alt="before.alt"
          :width="before.width"
          :height="before.height"
          loading="lazy"
          decoding="async"
          draggable="false"
          :style="{ objectPosition: before.pos ?? '50% 50%' }"
        />
      </picture>
    </div>
    <div
      class="before-after-slider__layer before-after-slider__layer--after"
      :style="{ clipPath: `inset(0 0 0 ${position}%)` }"
    >
      <picture>
        <source :srcset="afterWebp" type="image/webp" />
        <img
          :src="after.src"
          :alt="after.alt"
          :width="after.width"
          :height="after.height"
          loading="lazy"
          decoding="async"
          draggable="false"
          :style="{ objectPosition: after.pos ?? '50% 50%' }"
        />
      </picture>
    </div>
    <span
      class="label before-after-slider__label before-after-slider__label--before"
      :class="{ 'before-after-slider__label--faded': position <= 12 }"
    >Avant</span>
    <span
      class="label before-after-slider__label before-after-slider__label--after"
      :class="{ 'before-after-slider__label--faded': position >= 88 }"
    >Après</span>
    <div class="before-after-slider__divider" :style="{ left: `${position}%` }" aria-hidden="true" />
    <div
      class="before-after-slider__handle"
      role="slider"
      tabindex="0"
      aria-label="Comparer avant et après"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="Math.round(position)"
      @keydown="handleKeydown"
    >
      <span aria-hidden="true">‹</span>
      <span aria-hidden="true">›</span>
    </div>
  </div>
</template>
