<script>
  export let data;
  const { aka, author, image } = data.data;
  import { blur } from "svelte/transition";

  import TextBlock from "$lib/components/TextBlock.svelte";
  import SEO from "$lib/components/SEO.svelte";

  let selected = "aka";
</script>

<SEO
  title="About"
  description="Information about ArtKillingApathy and Eleanor Goldfield"
  {image}
/>

<section>
  <div class="container">
    <h1>About</h1>
    <!-- <button
			class={selected === 'aka' ? 'selected' : ''}
			on:click={() => (selected = 'aka')}>this site</button
		>
		<button
			class={selected === 'eleanor' ? 'selected' : ''}
			on:click={() => (selected = 'eleanor')}>eleanor</button
		> -->
  </div>

  <!-- {#if selected === 'aka'} -->
  <!-- content here -->
  <div in:blur class="content">
    <TextBlock text={aka.excerpt} />
    <!-- <Cta url="/press" text="Press" /> -->
  </div>
  <!-- {:else if selected === 'eleanor'}
		<div in:blur class="content">
			<TextBlock text={author.bio} />
		</div>
	{/if} -->
</section>

<style>
  .container {
    padding: 0 var(--containerPadding);
  }
  section {
    max-width: 40rem;
    margin: 0 auto;
    position: relative;
  }

  .content {
    position: relative;
  }
  button {
    background: none;
    border: 0.125rem solid transparent;
    border-bottom: 0.125rem solid var(--textColor);
    color: var(--textColor);
    font-weight: bold;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    box-shadow: none;
  }

  .selected {
    transition: all 0.3s ease-in-out;
    border-bottom: 0.125rem solid var(--primary);
    /* border-left: 0.125rem dashed var(--primary);
		border-right: 0.125rem solid var(--primary); */
  }

  .content {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0.5rem;
  }
</style>
