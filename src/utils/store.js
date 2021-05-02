import { writable } from 'svelte/store'

export const initializedCategory = {
  title: '',
  slug: '',
  description: ''
}

export const selected = writable(initializedCategory)

export const more = writable(10)

export const splashMulti = writable(0.5)