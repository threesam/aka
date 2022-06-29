import Image from './Image.svelte'
import Author from './Author.svelte'
import Video from './Video.svelte'
import Link from './Link.svelte'
import Cta from './Cta.svelte'

export default {
  marks: {
    link: ({ children, mark }) => ({
      component: Link,
      childNodes: children,
      props: mark,
    }),
  },
  types: {
    featuredMedia: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        url: node,
        alt: node.alt,
      },
    }),
    image: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        url: node
      },
    }),
    videoUrl: ({ node, children }) => ({
      component: Video,
      childNodes: children,
      props: {
        url: node.url
      },
    }),
    cta: ({ node, children }) => ({
      component: Cta,
      childNodes: children,
      props: {
        url: node.url,
        text: node.text,
        secondary: node.secondary,
        external: node.external
      },
    }),
    authorReference: ({ children, node: { author } }) => ({
      component: Author,
      childNodes: children,
      props: {
        author,
      },
    }),
  },
}
