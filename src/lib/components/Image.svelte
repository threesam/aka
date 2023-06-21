<script lang="ts">
  import { onMount } from "svelte";
  import { urlFor } from "$lib/utils/sanity";

  export let url;
  export let alt = "";
  export let caption;
  export let rounded = false;

  let width;

  function parentWidth(node) {
    width = node.parentElement.clientWidth;
  }

  // function convertRemToPixels(rem) {
  //   return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  // }

  let loaded = false;
  let thisImage;

  onMount(() => {
    // overflow container
    // const rem = convertRemToPixels(6)
    // width = width + rem

    // mount when image loads
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<figure class:rounded use:parentWidth {width}>
  <img
    {width}
    class:loaded
    src={urlFor(url).width(width).auto("format").url()}
    bind:this={thisImage}
    {alt}
    loading="lazy"
  />
  {#if caption}
    <figcaption><em>{caption}</em></figcaption>
  {/if}
</figure>

<style>
  figure {
    margin: 0;
    position: relative;
  }

  .rounded {
    overflow: hidden;
  }
  img {
    filter: brightness(90%);
    position: relative;
    opacity: 0;
    transition: opacity 1200ms ease-out;
    width: 100%;
    height: 100%;
  }

  img.loaded {
    opacity: 1;
  }

  figcaption {
    margin: 0 auto;
    font-size: var(--smallText);
    max-width: 40rem;
    padding: 0 var(--containerPadding) var(--containerPadding)
      var(--containerPadding);
  }
</style>
