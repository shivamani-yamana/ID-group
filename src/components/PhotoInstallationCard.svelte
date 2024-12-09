<script lang="ts">
  import CompareImageSlider from "./CompareImageSlider.svelte";
  import UserReview from "./UserReview.svelte";
  export let userImage = "";
  export let challengeHeading = "";
  export let challengePara = "";
  export let resultHeading = "";
  export let resultPara = "";
  export let rating;
  export let beforeImage = "";
  export let afterImage = "";
</script>

<div
  class="flex items-center justify-between w-full flex-col md:flex-row gap-6 md:gap-0"
>
  <div
    class="w-[396px] md:w-[650px] h-[260px] md:h-[420px] flex items-center justify-center overflow-hidden rounded-lg"
  >
    <CompareImageSlider {beforeImage} {afterImage} />
  </div>
  <div
    class="flex flex-col w-full md:w-[32rem] justify-between h-auto md:h-[420px] gap-6 md:gap-0"
  >
    <!-- About Installation Text -->
    <div class="flex flex-col items-start gap-6 md:gap-8">
      <!-- Challenges -->
      <div class="flex flex-col items-start gap-3">
        <h3
          class="text-[#292929] font-playfairDisplay font-medium leading-[130%] text-[16px] md:text-[24px] md:leading-[120%]"
        >
          {challengeHeading}
        </h3>
        <p
          class="text-[#545454] font-inter-tight font-inter font-light text-[14px] leading-[160%] md:text-[18px] md:leading-[160%]"
        >
          {challengePara}
        </p>
      </div>
      <!-- Challenge Outcome -->
      <div class="flex flex-col items-start gap-3">
        <h3
          class="text-[#292929] font-playfairDisplay font-medium leading-[130%] text-[16px] md:text-[24px] md:leading-[120%]"
        >
          {resultHeading}
        </h3>
        <p
          class="text-[#545454] font-inter-tight font-light text-[14px] leading-[160%] md:text-[18px] md:leading-[160%]"
        >
          {resultPara}
        </p>
      </div>
    </div>
    <!-- User Icon and Rating -->
    <UserReview imageSrc={userImage} {rating} />
  </div>
</div>
