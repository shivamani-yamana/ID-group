<script lang="ts">
  export let para; // Paragraph text prop
  export let numberText; // Number text prop
</script>

<div class="flex flex-col items-start gap-[16px] md:gap-[16px]">
  <p
    class="text-[#545454] font-[300] text-[12px] leading-[160%] md:text-[14px] md:leading-[160%] font-inter"
  >
    {para}
  </p>

  <div
    class="text-[#292929] font-[500] text-[24px] leading-[120%] md:text-[40px] md:leading-[120%] font-inter"
  >
    {numberText}
  </div>
</div>
