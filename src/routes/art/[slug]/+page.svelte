<script>
  export const prerender = true;
  export let data;
  const { post } = data;
  const { title, image, alt, body, publishedAt, author, cta, tags } = post;

  import { format, parseISO } from "date-fns";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "$lib/components/serializers";
  import Hero from "$lib/components/Hero.svelte";
  import Container from "$lib/components/Container.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Cta from "$lib/components/Cta.svelte";

  function isPoem(tags) {
    if (tags && tags.includes("poem")) {
      return "content poem";
    }
    return "content";
  }

  const containerClass = isPoem(tags);
</script>

<SEO {...post} />

<Hero data={{ title, image, alt }} />

<Container>
  <section class={containerClass}>
    {#if author}
      <p>
        {format(parseISO(publishedAt), "yyyy-MM-dd")}<br />by
        <a href="/about">{author}</a>
      </p>
    {/if}
    <BlockContent blocks={body} {serializers} />
    {#if cta}
      <Cta {...cta} />
    {/if}
  </section>
</Container>

<style>
  p {
    font-size: var(--smallText);
  }

  section ul {
    padding: 3rem;
  }
</style>
