<script>
    export let type;
</script>

{#if type === "line"}
    <hr />
{:else if type === "break"}
    <br />
{/if}
