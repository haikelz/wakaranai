<script lang="ts">
  import { Motion } from "svelte-motion";
  import { toKatakana, toHiragana } from "wanakana";
  import { copyToClipboard } from "../lib/helpers/copyToClipboard";
  import { Link } from "svelte-navigator";
  import { nanoid } from "nanoid";
  import { saveData } from "../lib/helpers/saveData";
  import CopyButton from "../lib/components/CopyButton.svelte";
  import InputRomaji from "../lib/components/InputRomaji.svelte";
  import Layout from "../lib/components/Layout.svelte";
  import WakaranaiText from "../lib/components/WakaranaiText.svelte";
  import Desc from "../lib/components/Desc.svelte";

  type InputRomajiEvent = Event & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  type EventSubmit = {
    preventDefault: () => void;
  };

  let inputRomaji: string = "";
  let isCopiedHiragana: boolean = false;
  let isCopiedKatakana: boolean = false;
  let isSaved: boolean = false;

  /**
   * - Jika localStorage bernilai null, maka setItem nya ke array terlebih dahulu
   * - Jika tidak, maka parse-kan nilai localStorage yang tersedia
   */
  let result =
    JSON.parse(localStorage.getItem("result")) === null
      ? []
      : JSON.parse(localStorage.getItem("result"));

  $: katakana = toKatakana(inputRomaji);
  $: hiragana = toHiragana(inputRomaji);

  saveData(result);

  function handleChange<T extends InputRomajiEvent>(event: T) {
    inputRomaji = (event.target as HTMLInputElement).value;
  }

  function handleSubmit<T extends EventSubmit>(event: T) {
    event.preventDefault();
    if (inputRomaji === "") return false;
    const data = [...result];
    isSaved = true;

    data.push({
      id: nanoid(),
      inputRomaji: inputRomaji,
      katakana: katakana,
      hiragana: hiragana,
    });

    result = data;
    saveData(result);
  }

  function handleCopyHiragana() {
    if (inputRomaji === "") return false;

    copyToClipboard(hiragana)
      .then(() => {
        isCopiedHiragana = true;
        setTimeout(() => {
          isCopiedHiragana = false;
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
        isCopiedKatakana = true;
        setTimeout(() => {
          isCopiedKatakana = false;
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleResult() {
    !isSaved;
    setTimeout(() => {
      isSaved = false;
    }, 1500);
  }
</script>

<Layout>
  <section class="flex justify-center items-center p-4 flex-col">
    <Motion
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      let:motion
    >
      <div use:motion class="tracking-wide font-bold text-5xl">
        <WakaranaiText />
      </div>
    </Motion>
    <Motion
      transition={{ duration: 0.5, delay: 0.5 }}
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      let:motion
    >
      <div use:motion>
        <Desc />
        <InputRomaji {inputRomaji} {handleChange} />
      </div>
    </Motion>
    <Motion
      transition={{ duration: 0.5, delay: 1 }}
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      let:motion
    >
      <div use:motion class="flex flex-col justify-center items-center">
        <div class="flex my-3 flex-col">
          <p class="my-1 font-semibold text-lg">Katakana: {katakana}</p>
          <p class="my-1 font-semibold text-lg">Hiragana: {hiragana}</p>
        </div>
        <div class="flex flex-col md:flex-row gap-2">
          <CopyButton
            {handleCopyHiragana}
            {handleCopyKatakana}
            {isCopiedHiragana}
            {isCopiedKatakana}
          />
          <form on:submit={handleSubmit}>
            <button
              type="submit"
              on:click={handleResult}
              class="bg-rose-400 hover:bg-rose-500 duration-200"
              >{isSaved ? "Saved!" : "Save Result"}</button
            >
          </form>
          <Link to="/saved-result">
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-600 duration-200"
              >Go to result</button
            >
          </Link>
        </div>
      </div>
    </Motion>
  </section>
</Layout>
