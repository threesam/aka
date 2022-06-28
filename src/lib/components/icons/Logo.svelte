<script>
  export let home = false
  
  import MediaQuery from "svelte-media-query";
  import {darkMode} from '$lib/utils/darkMode'
</script>

<style>
  img {
    height:1.5rem;
    padding-bottom: .25rem;
    width: inherit;
  }

  .home {
    width: 100%;
    height: auto
  }
</style>

<MediaQuery query="(max-width: 767px)" let:matches>
  {#if matches}
    {#if $darkMode}
      <img src="/favicon-light.svg" alt="logo for art killing apathy">
    {:else if !$darkMode}
      <img src="/favicon.svg" alt="logo for art killing apathy">
    {/if}
  {/if}
</MediaQuery>

<MediaQuery query="(min-width: 768px)" let:matches>
  {#if matches}
    {#if $darkMode}
      <img class:home src="ArtKill-light.svg" alt="full logo for art killing apathy">
    {:else if !$darkMode}
      <img class:home src="ArtKilling.svg" alt="full logo for art killing apathy">
    {/if}
  {/if}
</MediaQuery>