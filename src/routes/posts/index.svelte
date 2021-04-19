<script context="module" lang="ts">
  import client from "../../sanityClient";

  export async function preload() {
		const siteSettings = /* groq */`*[_type == "siteSettings"][0]{"image": featuredMedia.asset->url, "alt": featuredMedia.alt}`
    const postsQuery = /* groq */`*[_type == 'post']|order(publishedAt desc){
			"slug": slug.current,
			title,
			publishedAt,
			"categories": categories[]->slug.current,
			"excerpt": excerpt[0].children[0].text
		}`
		const categories = /* groq */`*[_type == "category"]{"slug": slug.current, title}`


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

	$: filteredPosts = posts.filter(post => {
		if(selected) {
			return post.categories.includes(selected)
		} else {
			return post
		}
	})

	import {format, parseISO} from 'date-fns'
	import SEO from '../../components/SEO.svelte'

	let selected = ""
	let value = ""
	$: query = new RegExp(value, 'g')
	$: more = 10

	function searchList(list, query) {
		return list.title.toLowerCase().match(query) || list.excerpt.toLowerCase().match(query)
	}
</script>

<style>
	a:hover {
		color: var(--primary);
	}
	em {
		color: var(--primary);
	}
</style>

<SEO {...settings} />

{#if selected}
	<h1>Posts in <em>{selected}</em></h1>
{:else}
	<h1>Posts</h1>
{/if}
<ul class="flex">
	<li><button on:click={() => selected = ""}>All</button></li>
	{#each categories as {slug, title}, i}
		<li><button on:click={() => selected = slug}>{title}</button></li>
	{/each}
</ul>

<label for="search">
	Search
	<input type="text" bind:value />
</label>

<ul>
	{#each filteredPosts.filter(post => searchList(post, query)).slice(0, more) as {slug, title, excerpt, publishedAt}}
	<li>
		<a href="posts/{slug}">
			<h2>{title}</h2>
			<p>{excerpt}</p>
			<p>published: {format(parseISO(publishedAt), 'yyyy-MM-dd')}</p>
			<hr>
		</a>
	</li>
	{:else}
	<li>No Posts to Display</li>
	{/each}
</ul>
<button on:click={() => more += 10}>show more</button>

