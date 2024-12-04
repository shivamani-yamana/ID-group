<script lang="ts">
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  let { children } = $props();
</script>

<div class="app">
  <Navbar />
  <main>
    {@render children()}
  </main>
  <footer></footer>
</div>
