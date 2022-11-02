<script lang="ts">
  interface Item {
    inputRomaji: string;
    katakana: string;
    hiragana: string;
    id: string;
  }

  export let item: Item;
  export let handleDelete: Function;
</script>

<div
  class="bg-gray-200 shadow-md rounded-md p-4 mt-3 font-medium flex flex-col items-start justify-center"
>
  <h3>{item.inputRomaji}</h3>
  <div class="mt-2 flex text-start items-start w-full flex-col">
    <p>Katakana: {item.katakana}</p>
    <p>Hiragana: {item.hiragana}</p>
    <div class="flex w-full mt-3 justify-end">
      <button
        on:click={() => handleDelete(item.id)}
        class="bg-cyan-600 hover:bg-cyan-700 mt-1.5">Delete</button
      >
    </div>
  </div>
</div>
