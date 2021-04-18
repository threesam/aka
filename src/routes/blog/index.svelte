<script context="module" lang="ts">
  import client from "../../sanityClient";

  export async function preload() {
		const siteSettings = /* groq */`*[_type == "siteSettings"][0]{"image": featuredMedia.asset->url, "alt": featuredMedia.alt}`
    const postsQuery = /* groq */`*[_type == 'post']|order(publishedAt desc){
			"slug": slug.current,
			title,
			publishedAt,
			"categories": categories[]->slug.current
		}`
		const categories = /* groq */`*[_type == "category"]{"slug": slug.current}`


		const query = `{
			"settings": ${siteSettings},
			"posts": ${postsQuery},
			"categories": ${categories}
		}`
		
    const data = await client
      .fetch(query)
			.catch((err) => this.error(500, err))
    
    return {data}
  }
</script>

<script>
	export let data
	const {settings, posts, categories} = data
	console.log(categories)

	$: filteredPosts = posts

	import {format, parseISO} from 'date-fns'
	import SEO from '../../components/SEO.svelte'

	const filters = categories.map(category => category.slug)
	let selected = ""

	let value =""
	$: query = new RegExp(value, 'g')
	$: search = value
</script>

<SEO {...settings} />

<h1>Posts</h1>
<ul>

	{#each filters as filter, i}
		<li><button on:click={() => selected = filter}>{filter}</button></li>
	{/each}
</ul>

<h5>{selected}</h5>

<input type="text" bind:value />
<h5>{value}</h5>

<ul>
	{#each posts.filter(post => post.title.toLowerCase().match(query)) as {slug, title, publishedAt}}
	<li>
		<a href="blog/{slug}">
			<h2>{title}</h2>
			<p>published: {format(parseISO(publishedAt), 'yyyy-MM-dd')}</p>
			<hr>
		</a>
	</li>
	{:else}
	<li>No Posts to Display</li>
	{/each}
</ul>

