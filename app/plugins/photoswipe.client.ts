import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export default defineNuxtPlugin(() => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: 'body',
    children: 'a[data-pswp]',
    pswpModule: () => import('photoswipe'),
  })

  lightbox.init()
})
