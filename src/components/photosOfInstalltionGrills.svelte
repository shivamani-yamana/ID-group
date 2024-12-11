<script lang="ts">
  import CarouselSlide from "./CarouselSlide.svelte";
  import NextButton from "./NextButton.svelte";
  import PreviousButton from "./PreviousButton.svelte";

  let carouselContainer: HTMLElement | null = null;
  let carouselSlide: number;

  // Here total this section data should be passed,each list inside CarouselData is a Project,each Project has carousel slides
  let grillsProjects = [
    [
      {
        index: 0,
        day: "Day 1",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 1,
        day: "Day 2",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 2,
        day: "Day 3",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 3,
        day: "Day 4",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 4,
        day: "Day 5",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
    ],
    [
      {
        index: 0,
        day: "Day 1",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 1,
        day: "Day 2",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 2,
        day: "Day 3",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
    ],
    [
      {
        index: 0,
        day: "Day 1",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 1,
        day: "Day 2",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 2,
        day: "Day 3",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
      {
        index: 3,
        day: "Day 4",
        projectName: "Project Name",
        imageURL:
          "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__",
      },
    ],
  ];

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
        Photos of Installations
      </h2>
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
      {#each grillsProjects as project}
        <div
          class="carousel-slide snap-center"
          bind:offsetWidth={carouselSlide}
        >
          <CarouselSlide {project} />
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
