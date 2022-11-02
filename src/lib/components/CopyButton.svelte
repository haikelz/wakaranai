<script lang="ts">
  export let handleCopyKatakana: () => void;
  export let handleCopyHiragana: () => void;
  export let isCopiedHiragana: boolean;
  export let isCopiedKatakana: boolean;
</script>

<button
  class="bg-gray-800 hover:bg-gray-900 duration-200"
  on:click={handleCopyKatakana}
>
  {isCopiedKatakana ? "Copied!" : "Katakana"}
</button>
<button
  class="bg-gray-800 hover:bg-gray-900 duration-200"
  on:click={handleCopyHiragana}
>
  {isCopiedHiragana ? "Copied" : "Hiragana"}
</button>
