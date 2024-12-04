<script lang="ts">
  import VideoPlayer from "../components/VideoPlayer.svelte";
</script>

<svelte:head>
  <title>INDUS DESIGN STUDIO</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="pt-24 w-full">
  <div class="flex flex-col gap-10 px-4 md:px-20 w-full justify-center">
    <div
      class="text-[#292929] text-center md:text-left flex md:flex-row flex-col justify-between items-center w-full md:gap-0 gap-3"
    >
      <h1
        class="font-playfairDisplay text-[28px] md:text-[50px] font-medium md:leading-[70px] leading-8 w-full md:w-[510px]"
      >
        Transform Your Space<br />with IDStudio
      </h1>
      <p
        class="font-inter text-[14px] md:text-[20px] font-light md:leading-[32px] leading-[19.2px] w-[364px] md:w-[518px]"
      >
        Elevate your home with our expert interior design solutions, from
        invisible grills to modular kitchens and personalized interiors,
        ensuring style and functionality in every corner.
      </p>
    </div>
    <VideoPlayer
      videoLink="https://videos.pexels.com/video-files/4549682/4549682-hd_1920_1080_30fps.mp4"
    />
  </div>
</section>
