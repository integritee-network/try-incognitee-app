import { defineNuxtPlugin } from '#imports'
import { useScrollLock } from '@vueuse/core'

export default defineNuxtPlugin(() => {
  const isLocked = useScrollLock(window.document.body)
  return {
    provide: {
      lockScroll: (locked: boolean) => (isLocked.value = locked),
    },
  }
})

//    name: 'lockScroll',
