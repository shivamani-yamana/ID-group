<script lang="ts">
  import VideoPlayer from "./VideoPlayer.svelte";
  export let backgroundColor = "#DFE0AF"; // Passed as a prop
  export let testimonialText;
  export let customerName;
  export let customerContext;
  export let imageUrl;
  export let videoLink;
</script>

<div
  class="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 p-6 md:p-12 rounded-lg h-[430px] md:h-[460px] w-full flex-shrink-0"
  style="background: {backgroundColor}"
>
  <!-- Video Section -->
  <div
    class="col-span-6 md:col-span-7 flex justify-center items-center bg-[#292929] rounded-t-lg md:rounded-l-lg md:rounded-none overflow-hidden h-max md:h-auto"
  >
    <VideoPlayer {videoLink} />
  </div>

  <!-- Testimonial Section -->
  <div
    class="col-span-6 md:col-span-5 flex flex-col justify-between items-start gap-6 p-4 py-5 md:p-10 bg-white rounded-b-lg md:rounded-r-lg md:rounded-none"
  >
    <blockquote
      class="text-[#292929] font-[400] font-inter italic text-[14px] leading-[160%] md:text-[20px] md:leading-relaxed tracking-[-0.28px] text-start"
    >
      {testimonialText}
    </blockquote>
    <div class="flex items-center gap-4">
      <!-- Customer Image -->
      <div
        class="h-12 w-12 rounded-full bg-cover bg-center"
        style="background: url({imageUrl}) lightgray 50% / cover no-repeat"
      ></div>

      <!-- Customer Info -->
      <div class="flex flex-col justify-center items-start gap-1">
        <p
          class="text-[#292929] font-semibold text-base md:text-lg leading-tight font-playfairDisplay"
        >
          {customerName}
        </p>
        <p
          class="text-[#545454] font-light text-sm leading-relaxed md:text-base font-inter"
        >
          {customerContext}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  /* Optional custom styles */
</style>
