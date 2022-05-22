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
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #eee;
    max-width: 100%;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  .input {
    border: none;
    color: #777;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0;
    display: block;
    width: 140px;
  }
  .span {
    padding: 0rem 1.5rem;
    font-size: larger;
    text-align: center;
  }
  .increment, .decrement, .reset  {
    color: #eee;
    border: none;
    padding: 0.5rem;
    margin: 0;
  }
  .increment {
    background-color: rgb(255, 110, 110);
  }
  .increment:active {
    background-color: rgb(245, 100, 100);
  }
  .decrement {
    background-color: rgb(110, 110, 255);
  }
  .decrement:active {
    background-color: rgb(100, 100, 245);
  }
  .reset {
    background-color: rgb(255, 204, 110);
  }
  .reset:active {
    background-color: rgb(245, 194, 100);
  }
  .remove {
    color: #777;
    background-color: #eee;
    border: none;
    padding: 0.5rem;
    margin: 0 0 0 0.5rem;
  }
</style>