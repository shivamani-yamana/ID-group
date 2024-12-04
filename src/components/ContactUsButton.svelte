<script lang="ts">
  import whatsappIcon from "../lib/images/whatsapp_icon.svg";
  let { tailwindCSS = "" } = $props();
</script>

<a href="https://wa.me/XXXXXXXXXXXXX?" target="_blank">
  <button
    class={`bg-gradient-to-b from-[#5BD066] to-[#27B43E] rounded-full px-3 py-4 w-[140px] h-[50px] flex items-center justify-center text-base text-white font-normal gap-[10px] ${tailwindCSS}`}
    >Contact Us
    <img src={whatsappIcon} alt="" class="w-[18px]" />
  </button>
</a>
