<script lang="ts">
    export let text: string; // Prop for the button text
  </script>
  
  <!-- Component for Button like heading -->
  <div
    class="flex justify-center items-center gap-[10px] px-[10px] py-[5px] rounded-full border border-[#EAEAEA] bg-white
             text-[#707070] font-playfairDisplay text-[12px] md:text-[14px] leading-[140%] w-fit"
  >
    <span class="text-center">{text}</span>
  </div>