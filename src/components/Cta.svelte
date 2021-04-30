<script>
  export let url, text, external, secondary
</script>

<style>
  a {
    display: inline-block;
    text-decoration: none;
    background: var(--primary);
    color: var(--background);
    border-radius: 3px;
    font-family: var(--headingFont);
    padding: 5px 13px;
    margin-right: 0.5rem;
    border: 0.125rem solid var(--primary);
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    transform: scale(.98);
  }

  .secondary {
    background: none;
    color: var(--textColor);
    border: 0.125rem solid transparent;
  }

  .secondary:hover {
    color: var(--primary);
  }
</style>

<p role="presentation">
  <a 
    class={secondary ? 'cta secondary' : 'cta'} 
    role="button" 
    target={external ? '_blank' : ''} 
    rel="noopener"
    href={url}
  >{text}</a>
</p>