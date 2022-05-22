<script lang="ts">
  import Counter from "./Counter.svelte";
</script>

<main>
  <h1>Multiple Counter</h1>
  <Counter />
</main>

<style>
  main {
    background-color: #f5f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: auto;
    min-height: 100vh;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    text-align: center;
    font-size: 4rem;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
