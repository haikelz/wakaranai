<script lang="ts">
  import { Motion } from "svelte-motion";
  export let inputRomaji: string;
  export let handleChange: Function;
</script>

<Motion
  let:motion
  transition={{ duration: 0.7, delay: 1.7 }}
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
>
  <input
    use:motion
    class="border-2 border-blue-500 px-3 py-1.5 rounded-sm border-solid bg-clip-padding font-semibold transition ease-in-out focus:ring-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
    placeholder="Type Here...."
    type="text"
    bind:value={inputRomaji}
    on:input={(event) => handleChange(event)}
  />
</Motion>
