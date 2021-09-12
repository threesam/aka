<script context="module">
  import client from "../../sanityClient";
	
  export async function preload({params}) {
		const {slug} = params
    const query = /* groq */`*[_type == "post" && slug.current == $slug][0]{
      title,
      cta,
      "image": featuredMedia.asset->url,
      "alt": featuredMedia.alt,
      "palette": featuredMedia.asset->metadata.palette.darkMuted.background,
      "description": excerpt[0].children[0].text,
      body,
      publishedAt,
			"author": authors[0]->name,
      "tags": tags[]->slug.current
    }`

const post = await client
.fetch(query, {slug})
.catch((err) => this.error(500, err))

return {post}
}
</script>

<script>
	export let post;
	const {title, image, alt, body, publishedAt, author, cta, tags} = post
  
  import {format, parseISO} from 'date-fns'
	import BlockContent from '@movingbrands/svelte-portable-text'
	import serializers from '../../components/serializers'
	import Hero from '../../components/Hero.svelte'
	import Container from '../../components/Container.svelte'
	import SEO from '../../components/SEO.svelte'
	import Cta from '../../components/Cta.svelte'

  function isPoem(tags) {
    return tags?.includes('poem') ? 'content poem' : 'content'
  }

  const containerClass = isPoem(tags)
</script>

<style>
  p {
    margin-bottom: 2rem;
    font-size: var(--smallText);
  }
</style>

<SEO {...post} />

<Hero data={{title, image, alt}} />

<Container>
  <section class={containerClass}>
    {#if author}
      <p>{format(parseISO(publishedAt), 'yyyy-MM-dd')}<br>by <a href="/about">{author}</a></p>
    {/if}
    <BlockContent blocks={body} {serializers} />
    {#if cta}
      <Cta {...cta} />
    {/if}
  </section>
</Container>

