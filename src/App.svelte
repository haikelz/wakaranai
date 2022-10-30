<script lang="ts">
  import { Motion } from "svelte-motion";
  import { toKatakana, toHiragana } from "wanakana";
  import { copyToClipboard } from "./lib/helpers/copyToClipboard";
  import CopyButton from "./lib/components/CopyButton.svelte";
  import InputRomaji from "./lib/components/InputRomaji.svelte";
  import Layout from "./lib/components/Layout.svelte";

  type InputRomajiEvent = Event & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  let inputRomaji: string = "";
  let isCopiedHiragana: boolean = false;
  let isCopiedKatakana: boolean = false;

  $: katakana = toKatakana(inputRomaji);
  $: hiragana = toHiragana(inputRomaji);

  function handleChange<T extends InputRomajiEvent>(event: T) {
    inputRomaji = (event.target as HTMLInputElement).value;
  }

  function handleCopyHiragana() {
    if (inputRomaji === "") return false;

    copyToClipboard(hiragana)
      .then(() => {
        isCopiedHiragana = !isCopiedHiragana;
        setTimeout(() => {
          isCopiedHiragana = isCopiedHiragana;
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCopyKatakana() {
    if (inputRomaji === "") return false;

    copyToClipboard(katakana)
      .then(() => {
        isCopiedKatakana = !isCopiedKatakana;
        setTimeout(() => {
          isCopiedKatakana = isCopiedKatakana;
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }
</script>

<Layout>
  <section class="flex justify-center items-center p-4 flex-col">
    <Motion
      transition={{ duration: 0.7 }}
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      let:motion
    >
      <div use:motion class="tracking-wide font-bold text-5xl">
        <span class="bg-red-300 text-black pl-2 rounded-l-sm">Waka</span><span
          class="bg-gray-900 text-white pr-2 rounded-r-sm">ranai</span
        >
      </div>
    </Motion>
    <Motion
      transition={{ duration: 0.7, delay: 0.7 }}
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      let:motion
    >
      <div use:motion>
        <p class="font-semibold text-xl my-3">
          Convert your <span class="text-blue-600">Romaji</span> to{" "}
          <span class="text-red-500">Hiragana</span> and{" "}
          <span class="text-lime-600">Katakana!</span>
        </p>
        <InputRomaji {inputRomaji} {handleChange} />
      </div>
    </Motion>
    <Motion
      transition={{ duration: 0.7, delay: 1.4 }}
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      let:motion
    >
      <div use:motion class="flex flex-col justify-center items-center">
        <div class="flex my-3 flex-col">
          <p class="my-1 font-semibold">Katakana: {katakana}</p>
          <p class="my-1 font-semibold">Hiragana: {hiragana}</p>
        </div>
        <CopyButton
          {handleCopyHiragana}
          {handleCopyKatakana}
          {isCopiedHiragana}
          {isCopiedKatakana}
        />
      </div>
    </Motion>
  </section>
</Layout>
