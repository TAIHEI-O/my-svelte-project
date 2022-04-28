<script lang="ts">
  import { counterPanel } from "./store";
  import { onMount } from "svelte";

  export let title: string = "new";
  export let count: number = 0;
  let newID: number = Math.floor(Math.random() * 100);
  let newCounterPanel = null;

  onMount(() => {
    newCounterPanel.focus()
  })

  export function incrementCount() {
    count ++;
  }
  export function decrementCount() { 
    count --;
    if (count < 0) {
      count = 0;
    };
  }
  export const resetCount = () => {
    count = 0;
  }
  $: console.log(count)

  function addCounterPanel() {
    $counterPanel = [...$counterPanel, {id: newID, title: title, count: 0}]
  }
  function removeCounterPanel(idx: number) {
    $counterPanel.splice(idx, 1)
    $counterPanel = $counterPanel
  }
</script>

<div>
  {#each $counterPanel as item, index}
    <form class="counterform" bind:this={newCounterPanel}>
      <input type="text" class="input" bind:value={item.title} />
      <span class="span">{count}</span>
      <button type="button" class="increment" on:click={incrementCount}>+</button>
      <button type="button" class="decrement" on:click={decrementCount}>-</button>
      <button type="button" class="reset" on:click={resetCount}>0</button>
      <button type="button" class="remove" on:click={() => removeCounterPanel(index)}>x</button>
    </form>
  {/each}

  <!-- <CounterForm /> -->

  <button type="button" class="addcounter" on:click={addCounterPanel}>new counter</button>

  <div>
    title list:
    {#each $counterPanel as item}
      {item.title}, 
    {/each}
  </div>

  <div>sum of count: {count}</div>
</div>

<style>
  .counterform {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .input {
    padding: 0.5rem 1rem;
    border: none;
    background-color: rgb(253, 253, 253);
    color: #777;
    width: 170px;
  }
  .span {
    padding: 0.5rem 2rem;
    font-size: larger;
  }
  .increment, .decrement, .reset  {
    color: #eee;
    border: none;
    padding: 0.5rem;
  }
  .increment {
    background-color: rgb(255, 110, 110);
  }
  .decrement {
    background-color: rgb(110, 110, 255);
  }
  .reset {
    background-color: rgb(255, 204, 110);
  }
  .remove {
    color: #777;
    background-color: #fff;
    border: none;
    margin-left: 1rem;
  }
  .addcounter {
    width: 400px;
    border: 0;
    border-radius: 5px;
    background-color: rgb(73, 197, 110);
    padding: 0.3rem;
    color: #fff;
  }
</style>