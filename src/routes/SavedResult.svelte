<script lang="ts">
  import { Motion } from "svelte-motion";
  import { saveData } from "../lib/helpers/saveData";
  import Layout from "../lib/components/Layout.svelte";
  import Card from "../lib/components/Card.svelte";
  import MetaTitle from "../lib/components/MetaTitle.svelte";

  let result: any = localStorage.getItem("result");
  $: result = JSON.parse(localStorage.getItem("result"));

  function handleDelete(id: string) {
    const data = [...result];
    const filteredData = data.filter((value) => value.id !== id);

    result = filteredData;
    saveData(result);
  }
</script>

<MetaTitle title="Saved Result" />
<Layout>
  <section class="max-w-full w-full lg:w-9/12">
    <Motion
      transition={{ duration: 0.7 }}
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      let:motion
    >
      <h1 class="text-center" use:motion>Saved Result</h1>
    </Motion>
    <Motion
      transition={{ duration: 0.7, delay: 0.5 }}
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      let:motion
    >
      {#if result.length}
        <div
          use:motion
          class="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {#each result as item}
            <Card {item} {handleDelete} />
          {/each}
        </div>
      {:else}
        <p use:motion class="text-center font-medium text-xl mt-1">
          There isn't any data yet
        </p>
      {/if}
    </Motion>
  </section>
</Layout>
