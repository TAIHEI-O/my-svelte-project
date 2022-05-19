<script lang="ts">
  import { createEventDispatcher } from "svelte";


  export let id: number;
  export let title: string = "";
  export let count: number = 0;


  export function incrementCount(): void {
    count ++;
  }
  export function decrementCount(): void { 
    if (count > 0) {
      count --;
    }
  }
  export const resetCount = () => {
    count = 0;
  }

  const dispach = createEventDispatcher()
  function removeCounterPanel(): void {
    dispach("remove", { id: id })
  }
</script>

<form class="counterform">
  <input type="text" class="input" bind:value={title} />
  <span class="span">{count}</span>
  <button type="button" class="increment" on:click={incrementCount}>+</button>
  <button type="button" class="decrement" on:click={decrementCount}>-</button>
  <button type="button" class="reset" on:click={resetCount}>0</button>
  <button type="button" class="remove" on:click={removeCounterPanel}>x</button>
</form>

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
</style>