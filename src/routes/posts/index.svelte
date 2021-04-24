<script context="module" lang="ts">
  import client from "../../sanityClient";

  export async function preload() {
		const siteSettings = /* groq */`*[_type == "siteSettings"][0]{"image": featuredMedia.asset->url, "alt": featuredMedia.alt}`
    const postsQuery = /* groq */`*[_type == 'post']|order(publishedAt desc){
			"id": _id,
			"slug": slug.current,
			title,
			publishedAt,
			"categories": categories[]->slug.current,
			"excerpt": excerpt[0].children[0].text,
			// "image": featuredMedia.asset->url,
			// "alt": featuredMedia.alt
		}`
		const categories = /* groq */`*[_type == "category"]|order(order asc){"slug": slug.current, title, order}`


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

	
	import {slide, fade, fly} from 'svelte/transition'
	import SEO from '../../components/SEO.svelte'
	import ListCard from '../../components/ListCard.svelte'
	import Search from '../../components/icons/Search.svelte'
	
	let selected = {
		slug: '',
		title: ''
	}

	$: filterPosts = (posts) => posts.filter(post => {
		if(selected.slug) {
			return post.categories.includes(selected.slug)
		} else {
			return post
		}
	}).filter(post => searchList(post, query))

	function focus(node) {
		return node.focus()
	} 

	let value = ""
	$: query = new RegExp(value, 'g')

	$: more = 10

	function searchList(list, query) {
		return list.title.toLowerCase().match(query) || list.excerpt.toLowerCase().match(query)
	}

	let showSearch = false
	// let showCategories = false

	let width
  function parentWidth(node) {
    width = node.parentElement.clientWidth;
  }
</script>

<style>
	main {
		min-height: 100vh;
		padding: 3rem var(--containerPadding);
	}
	section {
		max-width: 40rem;
		margin: 0 auto;
	}

	span {
		font-size: var(--h5);
	}

	span em {
		font-size: var(--h4);
		margin-left: 0.25rem;
	}

	.flex {
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.flex li {
		margin: 0 0.5rem 0.5rem 0;
	}

	.search {
		display: relative;
		height: 2rem;
		width: 100%;
	}
	.empty-button {
		background: none;
		border: none;
		outline: none;
		padding: 0;
		/* margin: 0 0.25rem 0 0; */
		box-shadow: none;
		color: inherit;
		/* display: block; */
		/* position: absolute; */

		z-index: 20;
	}

	.empty-button:focus {
		color: var(--primary);
	}

	ul.flex {
		margin: 0.5rem 0;
	}

	button {
		background: none;
		border: 0.125rem solid transparent;
		border-bottom: 0.125rem solid var(--textColor);
		color: var(--textColor);
		font-weight: bold;
		padding: 0.5rem;
		border-radius: 2px;
		transition: all 0.3s ease-in-out;
		box-shadow: none;
	}
	
	.selected {
		transition: all 0.3s ease-in-out;
		border-bottom: 0.125rem solid var(--primary);
		/* border-left: 0.125rem dashed var(--primary);
		border-right: 0.125rem solid var(--primary); */
	}

	label {
		max-width: 40rem;
		height: 100%;
		position: relative;
	}

	input {
		border: 0.125rem solid var(--textColor);
		font-size: 1rem;
		border-radius: 0;
		background: var(--background);
		color: var(--textColor);
		padding: 0.28rem; 
	}
	/* magic number to match svg search icon */

	input:focus {
		border: 0.125rem solid transparent;
		outline: 0.125rem solid var(--primary);
		outline-style: groove;
	}

	.flex {
		justify-content: space-between;
	}

	@media(max-width: 500px) {
		.flex {
		justify-content: flex-start;
		}
	}

	em {
		color: var(--primary);
	}

	.flex-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
		margin: 3rem 0 0.5rem 0;
	}

	h1 {
		margin: 0;
	}
</style>

<SEO title="Posts" description="Content" {...settings} />

<main>

	<section>
		<!-- TITLE -->
		<div class="flex-container">
			{#if selected.slug}
			<h1>Posts <span>in <em>{selected.title}</em></span></h1>
			{:else}
			<h1>Posts</h1>
			{/if}
			<button in:fade={{delay: 400}} role="search" class="empty-button" on:click={() => showSearch = !showSearch}><Search size="30"/></button>
		</div>
		
		<!-- SEARCH -->
		<div class="search">
			{#if showSearch}
				<label use:parentWidth for="search">
					<input use:focus style="width: ${width};" transition:slide={{duration: 400}} type="text" bind:value placeholder="search" />
				</label>
			{/if}
		</div>

		<!-- CATEGORIES -->
		<ul class="flex">
			<li><button class={!selected.slug ? 'selected' : ''} on:click={() => {
				selected.slug = ""
				selected.title = ""
				value = ""
				showSearch = false
				}}>all</button></li>
			{#each categories.filter(category => category.slug !== 'uncategorized') as {slug, title}}
				<li><button class={selected.slug === slug ? 'selected' : ''} on:click={() => {
					selected.slug = slug
					selected.title = title
					value = ""
					showSearch = false
					}}>{title.toLowerCase()}</button></li>
			{/each}
		</ul>
		
		<!-- SEARCH RESULTS -->
		{#if value && filterPosts(posts).length}
			{#if selected.slug}
				<p transition:slide>{filterPosts(posts).length} posts match "{value}" in <em>{selected.title}</em></p>	
			{:else}
				<p transition:slide>{filterPosts(posts).length} posts match "{value}"</p>
			{/if}
		{/if}
	</section>
	
	<!-- POSTS -->
	<section>
		<ul>
			{#each filterPosts(posts).slice(0, more) as post, i (post.id)}
				<ListCard data={post} {i} />
			{:else}
				{#if selected.slug && !value}
					<li in:fly={{y: 50}}>No posts in <em>{selected.title}</em></li>
				{:else}
					<li in:fly={{y: 50}}>No posts to display</li>
				{/if}
			{/each}
		</ul>
		{#if filterPosts(posts).filter(post => searchList(post, query)).length > 9}
			 <button on:click={() => more += 10}>show more</button>
		{/if}
	</section>
	
</main>