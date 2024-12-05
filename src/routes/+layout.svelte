<script lang="ts">
  import "../app.css";
  import Footer from "$components/Footer.svelte";
  import Navbar from "$components/Navbar.svelte";
  let { children } = $props();
</script>

<div class="app">
  <Navbar />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>