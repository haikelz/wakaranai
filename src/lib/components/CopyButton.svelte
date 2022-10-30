<script lang="ts">
  export let handleCopyKatakana: () => void;
  export let handleCopyHiragana: () => void;
  export let isCopiedKatakana: boolean;
  export let isCopiedHiragana: boolean;
</script>

<div class="flex gap-2">
  <button
    class="px-4 py-1.5 text-lg rounded-md bg-gray-800 hover:bg-gray-900 duration-200 transition-all shadow-lg text-white font-semibold"
    on:click={handleCopyKatakana}
  >
    {isCopiedKatakana ? "Copied!" : "Katakana"}
  </button>
  <button
    class="px-4 py-1.5 text-lg rounded-md bg-gray-800 hover:bg-gray-900 duration-200 transition-all shadow-lg text-white font-semibold"
    on:click={handleCopyHiragana}
  >
    {isCopiedHiragana ? "Copied!" : "Hiragana"}
  </button>
</div>
