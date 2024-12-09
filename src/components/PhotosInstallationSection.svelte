<script lang="ts">
  import PhotoInstallationCard from "./PhotoInstallationCard.svelte";
  import PreviousButton from "./PreviousButton.svelte";
  import NextButton from "./NextButton.svelte";

  let currentIndex = 0;
  let isTransitioning = false;
  let startX: number = 0;
  let endX: number = 0;
  let transitionClass = "transition-all duration-500 1s ease-in-out";

  const photoCards = [
    {
      userImage:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      challengeHeading: "Clients Challenges",
      challengePara:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dolore nonumy eirmod tempor invidunt ut.",
      resultHeading: "Result",
      resultPara:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dolore nonumy eirmod tempor invidunt ut.",
      rating: 5,
      beforeImage:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      afterImage:
        "https://plus.unsplash.com/premium_photo-1664301231899-5a7b1a621238?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      userImage:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      challengeHeading: "Clients Challenges 2",
      challengePara: "Another challenge description here.",
      resultHeading: "Result 2",
      resultPara: "Another result description here.",
      rating: 5,
      beforeImage:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      afterImage:
        "https://plus.unsplash.com/premium_photo-1664301231899-5a7b1a621238?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      userImage:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      challengeHeading: "Clients Challenges 3",
      challengePara: "Third challenge description here.",
      resultHeading: "Result 3",
      resultPara: "Third result description here.",
      rating: 5,
      beforeImage:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      afterImage:
        "https://plus.unsplash.com/premium_photo-1664301231899-5a7b1a621238?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const slideTo = (index: number) => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = index;
    setTimeout(() => {
      if (currentIndex === -1) {
        // Instantly jump to the last slide (without transition)
        transitionClass = "";
        currentIndex = photoCards.length - 1;
      } else if (currentIndex === photoCards.length) {
        // Instantly jump to the first slide (without transition)
        transitionClass = "";
        currentIndex = 0;
      }
      // Re-enable transitions for normal sliding
      setTimeout(() => {
        transitionClass = "transition-transform duration-500 ease-in-out";
        isTransitioning = false;
      }, 50);
    }, 500); // Matches the transition duration
  };

  const showPrevious = () => slideTo(currentIndex - 1);
  const showNext = () => slideTo(currentIndex + 1);

  const handleTouchStart = (event: TouchEvent) => {
    startX = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) showNext();
    else if (endX - startX > 50) showPrevious();
  };
</script>

<div class="flex flex-col items-center gap-8 md:gap-10 w-full">
  <div
    class="flex justify-center md:justify-between items-center w-full px-4 md:px-20"
  >
    <h2
      class="text-[#292929] font-playfairDisplay text-2xl md:text-4xl text-center"
    >
      Photos of Installations
    </h2>
    <div class="hidden md:flex items-center gap-6 md:gap-10">
      <PreviousButton onPrevious={showPrevious} />
      <NextButton onNext={showNext} />
    </div>
  </div>

  <!-- Carousel Wrapper -->
  <div
    class="relative overflow-hidden w-full"
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
  >
    <div
      class={`flex ${transitionClass}`}
      style="transform: translateX(-{(currentIndex + 1) * 100}%);"
    >
      <!-- Duplicate last card -->
      <div class="w-full flex-shrink-0 px-4 md:px-20">
        <PhotoInstallationCard {...photoCards[photoCards.length - 1]} />
      </div>

      <!-- Main cards -->
      {#each photoCards as card}
        <div class="w-full flex-shrink-0 px-4 md:px-20">
          <PhotoInstallationCard {...card} />
        </div>
      {/each}

      <!-- Duplicate first card -->
      <div class="w-full flex-shrink-0 px-4 md:px-20">
        <PhotoInstallationCard {...photoCards[0]} />
      </div>
    </div>
  </div>

  <!-- Navigation Buttons -->
  <div class="flex md:hidden items-center gap-6 md:gap-10">
    <PreviousButton onPrevious={showPrevious} />
    <NextButton onNext={showNext} />
  </div>
</div>

<style>
  .carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-wrapper {
    overflow: hidden;
  }
</style>
