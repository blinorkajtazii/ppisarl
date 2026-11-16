/** À appeler dans chaque page : lance les animations au montage, les retire au départ. */
export const useMotion = () => {
  const { $motion } = useNuxtApp()
  onMounted(() => {
    nextTick(() => $motion.init())
  })
  onBeforeUnmount(() => $motion.kill())
}
