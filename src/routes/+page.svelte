<script lang="ts">
  import VideoPlayer from "../components/VideoPlayer.svelte";
  import OurHighlightsSection from "../components/OurHighlightsSection.svelte";
  import OurServicesSection from "$components/OurServicesSection.svelte";
  import ContactUs from "$components/ContactUs.svelte";
  import TestimonialSectionLp from "$components/TestimonialSectionLp.svelte";
  import Faq from "$components/FAQ.svelte";
  import PhotosInstallationSection from "$components/PhotosInstallationSection.svelte";
  import WhyChooseUs from "$components/WhyChooseUs.svelte";
</script>

<svelte:head>
  <title>INDUS DESIGN STUDIO</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="pt-24 w-screen">
  <div class="flex flex-col md:gap-[60px] gap-[64px]">
    <div
      class="flex flex-col gap-10 px-4 pt-[7px] pb-[7px] md:pt-10 md:pb-[60px] md:px-20 w-full justify-center"
    >
      <div
        class="text-[#292929] text-center md:text-left flex md:flex-row flex-col justify-between items-center w-full md:gap-0 gap-3"
      >
        <h1
          class="font-playfairDisplay text-[28px] md:text-[50px] font-medium md:leading-[70px] leading-8 w-full md:w-[510px]"
        >
          Transform Your Space<br />with IDStudio
        </h1>
        <p
          class="font-inter text-[14px] md:text-[20px] font-light md:leading-[32px] leading-[19.2px] w-[364px] md:w-[518px] text-[#707070]"
        >
          Elevate your home with our expert interior design solutions, from
          invisible grills to modular kitchens and personalized interiors,
          ensuring style and functionality in every corner.
        </p>
      </div>
      <div
        class="flex justify-center items-center self-stretch w-full md:h-[540px] overflow-clip rounded-md"
      >
        <VideoPlayer
          videoLink="https://s3-figma-videos-production-sig.figma.com/video/1246348018179354930/TEAM/ffd0/a01b/-d551-49c2-aa7b-5f9196e602dc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8hzfFyelU779viIAScNTNEsthOFbNYhqPFZlFuWNXGzWqbTl~ZIfaRTEsJOg-Qge9q5mtx5CUDoMHuYYTPe3dmOj0hbLoACKJgMwYBrcxUqgXUpFm17D1VFYLftGOiiS9UcjmpSaPShysJXQJNUevAOFvuzjo-1JmhQAtUaMZ-tSMkzbRvDXZ8xY6S6vLsXTjDMfKx2IXbXtzQcWVQDjA~TXy0sPa69O9FqPAOQkGejJDBXcy8n1BmEpDRzXZu-5y5Zo026UXzIUbGepAsDSWnlFkVJXC7RrLQZI7W4xKygbjbRUo99fVdEhiQFdS8-UAaY7EAoT9xbI8OkNDSKZw__"
        />
      </div>
    </div>
    <OurHighlightsSection />
    <div class="w-full px-4 md:px-20 py-[0rem] md:py-[6.25rem]">
      <TestimonialSectionLp />
    </div>
    <OurServicesSection />
    <div class="w-full py-[0rem] md:py-[6.25rem]">
      <PhotosInstallationSection />
    </div>
    <div class="flex flex-col gap-[0px] sm:gap-[100px]">
      <WhyChooseUs />
      <Faq />
      <ContactUs />
      <div></div>
    </div>
  </div>
</section>
