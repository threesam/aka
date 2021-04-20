<style>
  footer {
    display: grid;
    place-content: center;
    height: 69vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: linear-gradient(var(--background), var(--cardBg));
  }

  h3 {
    font-size: var(--h5);
    font-weight: bold;
  }
  .grid {
    padding: var(--containerPadding);
    width: 40rem;
    max-width: 100%;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <script src="https://gumroad.com/js/gumroad.js"></script>
</svelte:head>

<footer>
  <div class="grid cols-2">
    <div class="box">
      <h3>info</h3>
      <ul>
        <li>about</li>
        <li>press</li>
        <li>contact</li>
      </ul>
    </div>
    <div class="box">
      <h3>store</h3>
      <ul>
        <li><a href="https://gumroad.com/l/USSMK" target="_blank">Hard Road of Hope</a></li>
        <li><a href="https://gumroad.com/l/DsNX" target="_blank">Paradigm Lost</a></li>
        <li><a href="https://gumroad.com/l/TTxgI" target="_blank">He Had Dirty Energy (Poetry Plate Series)</a></li>
        <li><a href="https://gumroad.com/l/zmgPs" target="_blank">Toast Despair (Poetry Plate Series)</a></li>
        <li><a href="https://gumroad.com/l/Xgyzs" target="_blank">Fire At Midnight (Poetry Plate Series)</a></li>
      </ul>
    </div>
  </div>
</footer>