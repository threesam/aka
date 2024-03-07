<script>
  export let text;
  import serializers from "$lib/components/serializers";
  import { PortableText } from "@portabletext/svelte";
</script>

<section>
  <slot name="before" />
  <PortableText blocks={text} {serializers} />
  <slot name="after" />
</section>

<style>
  section {
    max-width: 40rem;
    margin: 0 auto;
  }
</style>
