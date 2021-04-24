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
			"image": featuredMedia.asset->url,
			"alt": featuredMedia.alt
		}`
		const categories = /* groq */`*[_type == "category"]|order(order asc){"slug": slug.current, title}`


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

	$: filterPosts = (posts) => posts.filter(post => {
		if(selected) {
			return post.categories.includes(selected)
		} else {
			return post
		}
	})

	import {slide} from 'svelte/transition'
	import SEO from '../../components/SEO.svelte'
	import ListCard from '../../components/ListCard.svelte'
	import Search from '../../components/icons/Search.svelte'

	let selected = ""
	let value = ""
	$: query = new RegExp(value, 'g')
	$: more = 10

	function searchList(list, query) {
		return list.title.toLowerCase().match(query) || list.excerpt.toLowerCase().match(query)
	}

	// let showSearch = false
	// let showCategories = false
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
	/* .empty-button {
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
	} */

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
	}

	/* label {
		width: 100%;
		height: 100%;
	} */

	/* input {
		border: 0.125rem solid transparent;
		font-size: 1.2rem;
		border-radius: 0;
		background: var(--textColor);
		padding: 0.28rem; 
	} */
	/* magic number to match svg search icon */

	/* input:focus {
		outline: 0.125rem solid var(--primary);
		outline-style: groove;
	} */

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
</style>

<SEO title="Posts" description="Content" {...settings} />

<main>

	<section>
		{#if selected}
		<h1>Posts <span>in <em>{selected}</em></span></h1>
		{:else}
		<h1>Posts</h1>
		{/if}
		
		<!-- <div class="search">
			{#if !showSearch}
				<button class="empty-button" on:click={() => showSearch = !showSearch}><Search size="30"/></button>
			{:else}
				<label for="search">
					<input type="text" bind:value placeholder="search" />
				</label>
			{/if}
		</div> -->

		<ul class="flex">
			<li><button class={!selected ? 'selected' : ''} on:click={() => selected = ""}>all</button></li>
			{#each categories.filter(category => category.slug !== 'uncategorized') as {slug, title}}
				<li><button class={selected === slug ? 'selected' : ''} on:click={() => selected = slug}>{title.toLowerCase()}</button></li>
			{/each}
		</ul>
		
	</section>
	
	<section>
		<ul>
			<!-- {#each filteredPosts.filter(post => searchList(post, query)).slice(0, more) as post, i} -->
			{#each filterPosts(posts).slice(0, more) as post, i (post.id)}
				<ListCard data={post} {i} />
			{:else}
				<li>No posts match</li>
			{/each}
		</ul>
		{#if filterPosts(posts).length > 9}
			 <button on:click={() => more += 10}>show more</button>
		{/if}
	</section>
	
</main>