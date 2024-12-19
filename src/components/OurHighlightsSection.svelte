<script lang="ts">
  import HighlightCard from "./HighlightCard.svelte";
</script>

<div
  class="grid grid-cols-2 md:grid-cols-4 border-t border-b border-black border-opacity-10 bg-white w-full justify-items-center divide-x-2 md:divide-y-0 md:px-20"
>
  <!-- Our Highlights -->
  <div
    class="flex items-center p-[12px_16px_11px_16px] md:p-[45px_60px_45px_40px] col-span-1 md:col-span-1 border-t-0"
  >
    <h2
      class="text-[#292929] font-[500] text-[24px] leading-[120%] uppercase lg:text-[48px] lg:leading-[120%] font-inter-tight"
    >
      Our Highlights
    </h2>
  </div>

  <!-- HighlightCard 1 -->
  <div
    class="flex items-center p-[12px_16px_11px_16px] md:p-[45px_60px_45px_40px] border-t-0 md:border-t"
  >
    <HighlightCard
      para="We completed 300 projects with good 
      reviews and great client satisfaction"
      numberText="290+"
    />
  </div>

  <!-- HighlightCard 2 -->
  <div
    class="flex items-center p-[12px_16px_11px_16px] md:p-[45px_60px_45px_40px] border-t-2"
  >
    <HighlightCard
      para="We completed 150 clients with good 
      reviews and great client satisfaction"
      numberText="100+"
    />
  </div>

  <!-- HighlightCard 3 -->
  <div
    class="flex items-center p-[12px_16px_11px_16px] md:p-[45px_60px_45px_40px] border-t-2"
  >
    <HighlightCard
      para="We have 12 years of experience 
      transforming space"
      numberText="10+"
    />
  </div>
</div>
