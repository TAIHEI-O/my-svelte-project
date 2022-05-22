<script lang="ts">
  import CounterForm from "./CounterForm.svelte";


  type CounterPanel = {
		id?: number,
		title?: string,
		count?: number
	}

  export let counterPanel: CounterPanel[] = [{ id: 0, title: "new", count: 0 }]
  export let newID: number = 1;
  export let title: string = "new";
  export let count: number = 0;


  function addCounterPanel(): void {
    counterPanel = counterPanel.concat({id: newID, title: title, count: count})
    newID ++;
  }
  function removeCounterPanel(event) {
    counterPanel = counterPanel.filter((item) => item.id != event.detail.id)
  }

  function totalCount(CounterPanel: CounterPanel[]): number {
    return (
      CounterPanel.reduce((preVal, curVal) => 
        preVal + curVal.count, 0
      )
    )
  }
  function titleList(CounterPanel: CounterPanel[]): string {
    return (
      CounterPanel.map((counter) => 
        counter.title
      ).join(", ")
    )
  }
</script>

<div>
  {#each counterPanel as item(item.id)}
    <CounterForm id={item.id} bind:title={item.title} bind:count={item.count} on:remove={removeCounterPanel} />
  {/each}

  <button type="button" class="addcounter" on:click={addCounterPanel}>new counter</button>

  <div>title list: {titleList(counterPanel)}</div>
  <div>sum of count: {totalCount(counterPanel)}</div>
</div>

<style>
  .addcounter {
    width: 230px;
    border: 0;
    border-radius: 5px;
    background-color: rgb(73, 197, 110);
    color: #fff;
    margin: 0.5rem;
  }
  .addcounter:active {
    background-color: rgb(63, 187, 100);
  }
</style>