<script>
  import ContactUsButton from "./ContactUsButton.svelte";
  import GetInTouch from "./GetInTouch.svelte";
  import circleTick from "../lib/icons/circle_tick.svg";
  import VideoPlayer from "./VideoPlayer.svelte";
</script>

<section
  class="flex max-w-[428px] items-center justify-center px-4 rounded-t-[30px] rounded-b-none sm:rounded-t-none sm:max-w-full sm:px-20 sm:self-stretch"
>
  <div
    class="flex flex-col-reverse w-full gap-6 justify-between items-center sm:items-start max-w-[1280px] lg:flex-row sm:gap-6"
  >
    <div
      class="flex flex-col gap-[24px] items-start sm:align-self-stretch lg:w-[492px] lg:gap-[40px] lg:items-start lg:flex-shrink-0"
    >
      <!-- <GetInTouch ButtonData="" HeadingData="Our Guarantee" ParagraphData="We focus on our clients' needs and uphold strict quality standards to ensure long-term success. Quality is key to our longevity in the market."/> -->
      <div
        class="flex flex-col gap-4 md:gap-4 md:items-start md:self-stretch md:flex-col"
      >
        <div
          class="flex flex-col gap-8 sm:flex-col sm:gap-12 items-start justify-center md:items-start md:justify-start"
        >
          <h2
            class="text-[#292929] font-playfairDisplay font-medium leading-[120%] capitalize text-[24px] sm:leading-[120%] lg:text-[48px] lg:leading-[120%]"
          >
            Our Guarantee
          </h2>
        </div>
        <div
          class="flex flex-col md:w-full lg:w-[492px] md:items-center lg:items-start"
        >
          <p
            class="text-[#707070] font-inter-tight text-sm sm:text-base lg:text-[18px] text-start md:text-left leading-[160%] sm:leading-[160%]"
          >
            We focus on our clients' needs and uphold strict quality standards
            to ensure long-term success. Quality is key to our longevity in the
            market.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col flex-start gap-[24px] md:gap-[24px] self-stretch"
      >
        <div class="flex md:min-w-[540px]">
          <div class="flex gap-2 items-center w-[50%]">
            <img class="w-[24px] h-[24px]" src={circleTick} alt="" />
            <p
              class="text-[#292929] font-inter-tight text-[14px] lg:text-[18px] font-[400] leading-[160%]"
            >
              Unobstructed views
            </p>
          </div>
          <div class="flex gap-2 items-center w-[50%]">
            <img class="w-[24px] h-[24px]" src={circleTick} alt="" />
            <p
              class="text-[#292929] font-inter-tight text-[14px] lg:text-[18px] font-[400] leading-[160%]"
            >
              User-friendly Maintainance
            </p>
          </div>
        </div>
        <div class="flex md:min-w-[540px]">
          <div class="flex gap-2 items-center w-[50%]">
            <img class="w-[24px] h-[24px]" src={circleTick} alt="" />
            <p
              class="text-[#292929] font-inter-tight text-[14px] lg:text-[18px] font-[400] leading-[160%]"
            >
              Top-tier Designs
            </p>
          </div>
          <div class="flex gap-2 items-center w-[50%]">
            <img class="w-[24px] h-[24px]" src={circleTick} alt="" />
            <p
              class="text-[#292929] font-inter-tight text-[14px] lg:text-[18px] font-[400] leading-[160%]"
            >
              Maximum Safety
            </p>
          </div>
        </div>
      </div>
      <ContactUsButton />
    </div>
    <div
      class="flex items-center justify-center self-stretch w-full lg:w-[600px] lg:h-[412px] overflow-clip rounded-md"
    >
      <VideoPlayer
        videoLink="https://s3-figma-videos-production-sig.figma.com/video/1246348018179354930/TEAM/ffd0/a01b/-d551-49c2-aa7b-5f9196e602dc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8hzfFyelU779viIAScNTNEsthOFbNYhqPFZlFuWNXGzWqbTl~ZIfaRTEsJOg-Qge9q5mtx5CUDoMHuYYTPe3dmOj0hbLoACKJgMwYBrcxUqgXUpFm17D1VFYLftGOiiS9UcjmpSaPShysJXQJNUevAOFvuzjo-1JmhQAtUaMZ-tSMkzbRvDXZ8xY6S6vLsXTjDMfKx2IXbXtzQcWVQDjA~TXy0sPa69O9FqPAOQkGejJDBXcy8n1BmEpDRzXZu-5y5Zo026UXzIUbGepAsDSWnlFkVJXC7RrLQZI7W4xKygbjbRUo99fVdEhiQFdS8-UAaY7EAoT9xbI8OkNDSKZw__"
      />
    </div>
  </div>
</section>
