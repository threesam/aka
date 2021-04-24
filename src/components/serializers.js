// https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
// https://github.com/movingbrands/svelte-portable-text
import BlockContent from '@movingbrands/svelte-portable-text';
// https://www.npmjs.com/package/@sanity/image-url
import urlBuilder from '@sanity/image-url';
import client from '../sanityClient';
import Image from './Image.svelte';
import Author from './Author.svelte';
import Video from './Video.svelte';
import Link from './Link.svelte';

const urlFor = source => urlBuilder(client).image(source);

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
    authorReference: ({ children, node: { author } }) => ({
      component: Author,
      childNodes: children,
      props: {
        author,
      },
    }),
  },
};
