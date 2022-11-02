<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import SavedResult from "./routes/SavedResult.svelte";
</script>

<Router primary={false}>
  <Route path="/" component={Home} />
  <Route path="/saved-result" component={SavedResult} />
  <Route pat="/*" component={NotFound} />
</Router>
