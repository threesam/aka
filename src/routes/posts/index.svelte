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
	import Search from '../../components/icons/Search.svelte'
	import Categories from '../../components/icons/Categories.svelte'

	let selected = ""
	let value = ""
	$: query = new RegExp(value, 'g')
	$: more = 10

	function searchList(list, query) {
		return list.title.toLowerCase().match(query) || list.excerpt.toLowerCase().match(query)
	}

	let showSearch = false
	let showCategories = false
</script>

<style>
	section {
		padding: 0 var(--containerPadding);
		max-width: 40rem;
		margin: 0 auto;
	}

	h2 {
		font-size: var(--h5);
		font-weight: bold;
	}

	span {
		font-size: var(--h3);
	}

	.flex {
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.flex li {
		margin: 0 0.5rem 0.5rem 0;
	}
	a:hover {
		color: var(--primary);
	}
	em {
		color: var(--primary);
	}

	.empty-button {
		background: none;
		border: none;
		outline: none;
		padding: 0;
		margin: 0 0.25rem 0 0;
		box-shadow: none;
		color: inherit;
		display: block;
	}

	.empty-button:focus {
		color: var(--primary);
	}
</style>

<SEO title="Posts" description="Content" {...settings} />

<section>
	{#if selected}
	<h1>Posts <span>in <em>{selected}</em></span></h1>
	{:else}
	<h1>Posts</h1>
	{/if}
	<button class="empty-button" on:click={() => showSearch = !showSearch}><Search size="30"/></button>

	<ul class="flex">
		<li><button on:click={() => selected = ""}>All</button></li>
		{#each categories as {slug, title}}
		<li><button on:click={() => selected = slug}>{title}</button></li>
		{/each}
	</ul>
	
	{#if showSearch}
		<label for="search">
			Search
			<input type="text" bind:value />
		</label>
	{/if}
</section>
	
<section>
	<ul>
		{#each filteredPosts.filter(post => searchList(post, query)).slice(0, more) as {slug, title, excerpt, publishedAt}}
		<li>
			<a href="posts/{slug}">
				<hr>
				<h2>{title}</h2>
				<p>{excerpt}</p>
				<p><em>{format(parseISO(publishedAt), 'yyyy-MM-dd')}</em></p>
			</a>
		</li>
		{:else}
		<li>No Posts to Display</li>
		{/each}
	</ul>
	<button on:click={() => more += 10}>show more</button>
</section>
	