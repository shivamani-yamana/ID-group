<script lang="ts">
  import { onMount } from "svelte";
  import ChooseUsCard from "./ChooseUsCard.svelte";
  import NextButton from "./NextButton.svelte";
  import PreviousButton from "./PreviousButton.svelte";
  export let cardData: any;

  let scrollContainer: HTMLElement | null = null;
  let SCROLL_DISTANCE = 460;
  let isAtStart = true;
  let isAtEnd = false;

  // Dynamically calculate the current index
  const getCurrentIndex = (): number => {
    if (scrollContainer) {
      return Math.round(scrollContainer.scrollLeft / SCROLL_DISTANCE);
    }
    return 0;
  };

  // Update scroll tracking
  const updateScrollTracking = () => {
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      isAtStart = scrollLeft === 0;
      isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
    }
  };

  // Navigate to the next card
  const nextSlide = () => {
    if (scrollContainer) {
      const currentIndex = getCurrentIndex();
      if (isAtEnd) {
        scrollContainer.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        scrollContainer.scrollTo({
          left: (currentIndex + 1) * SCROLL_DISTANCE,
          behavior: "smooth",
        });
      }
    }
  };

  // Navigate to the previous card
  const prevSlide = () => {
    if (scrollContainer) {
      const currentIndex = getCurrentIndex();
      if (isAtStart) {
        scrollContainer.scrollTo({
          left: (cardData.length - 1) * SCROLL_DISTANCE,
          behavior: "smooth",
        });
      } else {
        scrollContainer.scrollTo({
          left: (currentIndex - 1) * SCROLL_DISTANCE,
          behavior: "smooth",
        });
      }
    }
  };

  // Update scroll distance based on screen size
  const updateScrollDistance = () => {
    if (window.innerWidth < 768) {
      SCROLL_DISTANCE = 340; // For mobile
    } else if (window.innerWidth < 1280) {
      SCROLL_DISTANCE = 500; // For medium screens
    } else {
      SCROLL_DISTANCE = 460; // For larger screens
    }
  };

  // Attach event listener for scrolling
  onMount(() => {
    updateScrollDistance();
    window.addEventListener("resize", updateScrollDistance);

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollTracking);
    }

    return () => {
      window.removeEventListener("resize", updateScrollDistance);
    };
  });
</script>

<section
  class="flex max-w-[428px] items-center justify-center px-4 pt-6 rounded-t-[30px] rounded-b-none sm:rounded-t-none sm:max-w-full sm:px-20 sm:pt-10 sm:pb-0 sm:self-stretch"
>
  <div class="flex flex-col items-center w-full max-w-[1280px] gap-6 md:gap-10">
    <!-- Header Section -->
    <div
      class="flex items-center justify-center md:justify-between w-full max-w-[1280px]"
    >
      <h2
        class="text-[#292929] text-center font-playfairDisplay font-medium leading-[120%] capitalize text-[24px] sm:leading-[120%] lg:text-[48px] lg:leading-[120%]"
      >
        Why Choose Us
      </h2>
      <div class="gap-10 hidden md:flex">
        <PreviousButton onPrevious={prevSlide} />
        <NextButton onNext={nextSlide} />
      </div>
    </div>

    <!-- Scrollable Slider Section -->
    <div
      bind:this={scrollContainer}
      class="flex overflow-x-auto w-full gap-4 hide-scrollbar"
    >
      {#each cardData as card, i}
        <div class="flex-shrink-0 scroll-card px-2">
          <ChooseUsCard data={card} />
        </div>
      {/each}
    </div>

    <!-- Mobile Navigation Buttons -->
    <div class="flex gap-10 md:hidden">
      <PreviousButton onPrevious={prevSlide} />
      <NextButton onNext={nextSlide} />
    </div>
  </div>
</section>

<style>
  .hide-scrollbar {
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }

  @media (min-width: 1020px) and (max-width: 1279px) {
    .scroll-card {
      width: calc(50% - 16px); /* Two cards per row, with a gap */
    }
  }

  @media (min-width: 1280px) {
    .scroll-card {
      width: calc(33.33% - 16px); /* Three cards per row */
    }
  }
</style>
