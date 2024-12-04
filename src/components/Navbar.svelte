<script lang="ts">
  import idstudioLogo from "../lib/images/Idstudio_logo.svg";
  import ContactUsButton from "./ContactUsButton.svelte";
</script>

<div
  class="flex justify-between h-24 items-center bg-white px-[80px] fixed w-full font-inter"
>
  <a href="/">
    <div class="logo flex items-center justify-center" id="logo">
      <img src={idstudioLogo} alt="Logo" class="w-40" />
    </div>
  </a>
  <div class="flex gap-10 font-normal items-center justify-center">
    <a href="/">How it works</a>
    <a href="/">Our Services</a>
    <a href="/">Portfolio</a>
    <a href="/">FAQs</a>
    <a href="/">Invisible Grills</a>
  </div>
  <div><ContactUsButton /></div>
</div>
