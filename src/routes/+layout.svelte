<script lang="ts">
  import "../app.css";
  import Footer from "$components/Footer.svelte";
  import Navbar from "$components/Navbar.svelte";
  import ConsultaionPopup from "$components/ConsultaionPopup.svelte";
  import WhatsappIconSticky from "$components/WhatsappIconSticky.svelte";
  let { children } = $props();
</script>

<div class="app">
  <div
    class="fixed right-[1rem] bottom-[2rem] md:bottom-[5.5rem] md:right-[7rem] z-50"
  >
    <WhatsappIconSticky />
  </div>

  <ConsultaionPopup />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>
