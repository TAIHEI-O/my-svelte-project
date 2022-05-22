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
  function titleList() {
    counterPanel.map((counter) => 
      counter.title
    ).join()
  }
</script>

<div>
  {#each counterPanel as item(item.id)}
    <CounterForm id={item.id} bind:title={item.title} bind:count={item.count} on:remove={removeCounterPanel} />
  {/each}

  <button type="button" class="addcounter" on:click={addCounterPanel}>new counter</button>

  <div>
    title list: {titleList}
  </div>

  <div>sum of count: {totalCount(counterPanel)}</div>
</div>

<style>
  .addcounter {
    width: 400px;
    border: 0;
    border-radius: 5px;
    background-color: rgb(73, 197, 110);
    padding: 0.3rem;
    color: #fff;
  }
</style>