import { writable } from 'svelte/store'

export const selected = writable({
  title: '',
  slug: '',
  description: ''
})

export const more = writable(10)