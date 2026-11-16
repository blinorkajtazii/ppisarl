export const useMenu = () => {
  const open = useState('menu-open', () => false)
  return {
    open,
    toggle: () => {
      open.value = !open.value
    },
    close: () => {
      open.value = false
    },
  }
}
