import { writable } from "svelte/store";

type CounterPanel = {
    id: number,
    title: string,
    count: number
}
export const counterPanel = writable<CounterPanel[]>([
    {
        id: Math.floor(Math.random() * 100), 
        title: "new", 
        count: 0
    }
])