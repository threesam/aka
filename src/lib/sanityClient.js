import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'ppo5s5uj',
  dataset: 'production',
  apiVersion: '2021-04-18',
  useCdn: true
})

export default client