<script>
    import { onMount } from "svelte";
    import { scale } from "svelte/transition";
    import SplashFilter from "./SplashFilter.svelte";

    import { urlFor } from "$lib/utils/sanity";

    let w;
    let h;
    function parentWidth(node) {
        w = node.parentElement.clientWidth;
        h = node.parentElement.clientHeight;
    }

    export let data;
    const { image: src, alt, title } = data;

    let show = false;
    onMount(() => (show = true));
</script>

{#if show && src}
    <section>
        <div>
            <h1 id={title}>{title}</h1>
            <slot />
        </div>
        <img
            use:parentWidth
            in:scale={{ duration: 2000, start: 1.2, opacity: 0.2 }}
            src={urlFor(src)
                .width(w)
                .height(h)
                .fit("crop")
                .crop("entropy")
                .auto("format")
                .url()}
            {alt}
        />
        <SplashFilter opacity="0.8" />
    </section>
{:else}
    <div class="title-only">
        <h1 id={title}>{title}</h1>
        <slot />
    </div>
{/if}

<style>
    .title-only {
        width: 100%;
        padding-top: 6rem;
        display: flex;
        justify-content: center;
    }

    .title-only h1 {
        text-align: left;
        width: 40rem;
        padding: var(--containerPadding);
        max-width: 100%;
    }

    section {
        position: relative;
        height: 50vh;
        width: 100%;
        display: grid;
        place-content: center;
        text-align: center;
        overflow: hidden;
        padding: var(--containerPadding);
        box-shadow: var(--level-1);
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: -10;
    }

    h1 {
        font-size: clamp(var(--h3), 5vw, var(--bigH));
        max-width: 70rem;
        margin: 0;
        line-height: 1.1;
    }
</style>
