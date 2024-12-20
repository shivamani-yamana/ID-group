<script lang="ts">
  import { Container } from "postcss";
  import NextButton from "./NextButton.svelte";
  import PreviousButton from "./PreviousButton.svelte";
  import ProjectComponent from "./ProjectComponent.svelte";
  import imgLink from "$lib/images/Project_Gallery.png";
  import VideoLink from "$lib/videos/home.mp4";


  let tabs = [
    { id: 0, name: "All Projects" },
    { id: 1, name: "Modular Kitchen Design" },
    { id: 2, name: "Home Interior Design" },
  ];

  const projects: Record<
    number,
    { name: string; description: string; projectUrl: string; videoOrImage: Array<string> }[]
  > = {
    0: [
      {
        name: "Project 1",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dolore",
        projectUrl: "/",
        videoOrImage: [VideoLink, imgLink, imgLink, imgLink, VideoLink, imgLink],
      },
      { name: "Project 2", description: "Description 2", projectUrl: "/", videoOrImage: [VideoLink, imgLink, imgLink, imgLink] },
      { name: "Project 3", description: "Description 3", projectUrl: "/", videoOrImage: [VideoLink, imgLink, imgLink, imgLink] },
    ],
    1: [
      {
        name: "Modular Kitchen 1",
        description: "Description 1",
        projectUrl: "/",
        videoOrImage: [VideoLink, imgLink, imgLink, imgLink],
      },
      {
        name: "Modular Kitchen 2",
        description: "Description 2",
        projectUrl: "/",
        videoOrImage: [VideoLink, imgLink, imgLink, imgLink],
      },
    ],
    2: [
      {
        name: "Home Interior 1",
        description: "Description 1",
        projectUrl: "/",
        videoOrImage: [VideoLink, imgLink, imgLink, imgLink],
      },
      {
        name: "Home Interior 2",
        description: "Description 2",
        projectUrl: "/",
        videoOrImage: [VideoLink, imgLink, imgLink, imgLink],
      },
    ],
  };

  let visibleProjects: {
    name: string;
    description: string;
    projectUrl: string;
  }[] = [];
  $: visibleProjects = projects[activeTab];
  let carouselContainer: HTMLElement | null = null;
  let carouselSlide: number;
  let activeTab: number = 0;
  let isTransitioning: boolean = false;

  const setActiveTab = (index: number) => {
    if (index === activeTab || isTransitioning) return; // Prevent repeated transitions
    let temp = 0;
    if (carouselContainer && carouselSlide) {
      temp = Math.abs(carouselContainer.scrollLeft / 1000);
    }
    if (carouselContainer) {
      carouselContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
    setTimeout(() => {
      activeTab = index; // Update the active tab
      isTransitioning = false; // Allow new interactions
    }, temp * 1000); // Adjust delay to match scroll duration
  };

  const slideNext = () => {
    if (carouselContainer) {
      console.log(carouselSlide);
      carouselContainer.scrollBy({
        left: carouselSlide, // Scroll by container width
        behavior: "smooth", // Smooth scrolling
      });
    }
  };
  const slidePrevious = () => {
    if (carouselContainer) {
      console.log(carouselSlide);
      carouselContainer.scrollBy({
        left: carouselSlide * -1, // Scroll by container width
        behavior: "smooth", // Smooth scrolling
      });
    }
  };
</script>

<div class="flex flex-col items-center gap-8 md:gap-10 w-full">
  <!-- Tabs -->
  <div
    class="flex justify-center md:justify-between items-center w-full px-4 md:px-20"
  >
    <div
      class="flex flex-col gap-3 text-[12px] md:text-[16px] md:w-auto w-full"
    >
      <h2
        class="text-[#292929] font-playfairDisplay text-2xl md:text-4xl md:text-left text-center font-medium"
      >
        Projects Gallery
      </h2>
      <div class="relative w-fit">
        <div class="flex md:gap-6 gap-4 pt-[7px]">
          {#each tabs as tab}
            <div class="relative">
              <button
                class="py-[8px] px-[4px] font-inter-tight font-normal {activeTab ===
                tab.id
                  ? 'text-[#292929]'
                  : 'text-[#707070]'}"
                on:click={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
              {#if activeTab === tab.id}
                <div class="w-full h-[2px] bg-[#292929] rounded-t-[4px]"></div>
              {/if}
            </div>
          {/each}
        </div>
        <div class="h-[1px] bg-[#0000000d] absolute bottom-0 w-full"></div>
      </div>
    </div>
    <div class="hidden md:flex items-center gap-6 md:gap-10">
      <PreviousButton onPrevious={slidePrevious} />
      <NextButton onNext={slideNext} />
    </div>
  </div>

  <!-- Carousel -->
  <div
    class="w-full flex items-center justify-start overflow-x-scroll no-scrollbar snap-x"
    bind:this={carouselContainer}
  >
    <div class="carousel-container px-4 gap-4 md:px-20 md:gap-10">
      {#each visibleProjects as project}
        <div
          class="carousel-slide snap-center"
          bind:offsetWidth={carouselSlide}
        >
          <ProjectComponent data={project} />
        </div>
      {/each}
    </div>
  </div>

  <!-- Mobile Navigation -->
  <div class="flex md:hidden items-center gap-6">
    <PreviousButton onPrevious={slidePrevious} />
    <NextButton onNext={slideNext} />
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
