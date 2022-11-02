<script>
  import { Motion } from "svelte-motion";
  import Layout from "../lib/components/Layout.svelte";
  import MetaTitle from "../lib/components/MetaTitle.svelte";
</script>

<MetaTitle title="Not Found" />
<Layout>
  <Motion
    transition={{ duration: 0.7 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    let:motion
  >
    <h2 use:motion>Sorry, the page that you want is not found :(</h2>
  </Motion>
</Layout>
