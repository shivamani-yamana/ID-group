<script lang="ts">
  import "../app.css";
  import Footer from "$components/Footer.svelte";
  import Navbar from "$components/Navbar.svelte";
  import ConsultaionPopup from "$components/ConsultaionPopup.svelte";
  let { children } = $props();
</script>

<div class="app">
  <ConsultaionPopup />

  <Navbar />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>
