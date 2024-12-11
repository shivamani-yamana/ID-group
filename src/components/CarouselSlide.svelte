<script lang="ts">
  import ProjectInstallationItem from "./ProjectInstallationItem.svelte";
  let carouselContainer: HTMLElement | null = null;
  let carouselSlide = 0;
  let currentSlide = 0;
  export let project;
  let totalSlides = project.length;

  const updateSlideWidth = () => {
    carouselSlide = carouselContainer?.offsetWidth || 0;
  };
  const slideNext = () => {
    if (carouselContainer && currentSlide != totalSlides - 1) {
      carouselContainer.scrollBy({
        left: carouselSlide, // Scroll by container width
        behavior: "smooth", // Smooth scrolling
      });
      currentSlide++;
    }
  };
  const slidePrevious = () => {
    if (carouselContainer && currentSlide != 0) {
      console.log(carouselSlide);
      carouselContainer.scrollBy({
        left: carouselSlide * -1, // Scroll by container width
        behavior: "smooth", // Smooth scrolling
      });
      currentSlide--;
    }
  };
  $: updateSlideWidth();
</script>

<div class="flex flex-col items-center gap-8 md:gap-10 w-full">
  <!-- Carousel -->
  <div
    class="flex items-center justify-start overflow-x-scroll no-scrollbar snap-x w-[24.75rem] h-[16rem] md:w-[50rem] md:h-[32.5rem] rounded-[10px]"
    bind:this={carouselContainer}
  >
    <div class="carousel-container">
      {#each project as { index, day, projectName, imageURL }}
        <div class="carousel-slide snap-start" bind:offsetWidth={carouselSlide}>
          <ProjectInstallationItem
            onNext={slideNext}
            onPrevious={slidePrevious}
            currentSlide={index}
            {totalSlides}
            {day}
            {projectName}
            {imageURL}
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .carousel-container {
    display: flex;
    transition: transform ease-in-out;
  }

  .carousel-slide {
    flex: 1 1 100%; /* Default: one slide visible (mobile) */
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .carousel-slide {
      flex: 1 1 100%; /* Two slides visible on desktop */
    }
  }
</style>
