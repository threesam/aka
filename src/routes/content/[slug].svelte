<script context="module">
  import client from "../../sanityClient";
	
  export async function preload({params}) {
		const {slug} = params
    const query = /* groq */`*[_type == "post" && slug.current == $slug][0]{
      title,
      "image": featuredMedia.asset->url,
      "alt": featuredMedia.alt,
      "palette": featuredMedia.asset->metadata.palette.darkMuted.background,
      body,
      publishedAt,
			"author": authors[0]->name
    }`

const post = await client
.fetch(query, {slug})
.catch((err) => this.error(500, err))

return {post}
}
</script>

<script>
	export let post;
	const {title, image, alt, body, publishedAt, author} = post
	console.log('post', post);
  import {format, parseISO} from 'date-fns'
	import BlockContent from '@movingbrands/svelte-portable-text'
	import serializers from '../../components/serializers'
	import Hero from '../../components/Hero.svelte'
	import Container from '../../components/Container.svelte'
</script>

<style>
  p {
    margin-bottom: 2rem;
    font-size: var(--smallText);
  }
</style>

<Hero data={{title, image, alt}} />

<Container>
  <section class="content">
    {#if author}
      <p>{format(parseISO(publishedAt), 'yyyy-MM-dd')}<br>by <a href="/about">{author}</a></p>
    {/if}
    <BlockContent blocks={body} {serializers} />
  </section>
</Container>

