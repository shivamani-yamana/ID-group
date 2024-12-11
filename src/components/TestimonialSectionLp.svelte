<script lang="ts">
    import TestimonialCard from "./TestimonialCard.svelte";
    import PreviousButton from "./PreviousButton.svelte";
    import NextButton from "./NextButton.svelte";
    import SectionButton from "./SectionButton.svelte";


    export let testimonialHeader;
    export let bgColor;
    export let testimonials;

    let currentIndex = 0;
    let isTransitioning = false;
    let startX: number = 0;
    let endX: number = 0;
    let transitionClass = "transition-transform duration-500 ease-in-out";
    
    const slideTo = (index: number) => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = index;
      setTimeout(() => {
        if (currentIndex === -1) {
          // Instantly jump to the last slide (without transition)
          transitionClass = "";
          currentIndex = testimonials.length - 1;
        } else if (currentIndex === testimonials.length) {
          // Instantly jump to the first slide (without transition)
          transitionClass = "";
          currentIndex = 0;
        }
        // Re-enable transitions for normal sliding
        setTimeout(() => {
          transitionClass = "transition-transform duration-500 ease-in-out";
          isTransitioning = false;
        }, 50); // Allow time for the DOM update
      }, 500); // Matches the transition duration
    };
    const showPrevious = () => slideTo(currentIndex - 1);
    const showNext = () => slideTo(currentIndex + 1);
    // Detect swipe gestures for touch devices
    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
    };
    const handleTouchEnd = (event: TouchEvent) => {
      endX = event.changedTouches[0].clientX;
      if (startX - endX > 50) {
        // Swipe left (next)
        showNext();
      } else if (endX - startX > 50) {
        // Swipe right (previous)
        showPrevious();
      }
    };
  </script>
  
  <div class="flex flex-col items-center gap-6 md:gap-10 w-full">
    <div class="flex items-center flex-col gap-3 md:gap-5">
      <SectionButton text="Customer's Testimonial" />
      <h2
        class="text-center font-playfairDisplay font-medium text-2xl md:text-4xl text-gray-900"
      >
        {@html testimonialHeader}
      </h2>
    </div>
  
    <!-- Carousel Wrapper -->
    <div
      class="relative overflow-hidden w-full pt-3 md:pt-5"
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
    >
      <div
        class={`flex ${transitionClass}`}
        style="transform: translateX(-{(currentIndex + 1) * 100}%);"
      >
        <!-- Duplicate last testimonial for seamless looping -->
        <TestimonialCard
          testimonialText={testimonials[testimonials.length - 1].testimonialText}
          customerName={testimonials[testimonials.length - 1].customerName}
          customerContext={testimonials[testimonials.length - 1].customerContext}
          imageUrl={testimonials[testimonials.length - 1].imageUrl}
          videoLink={testimonials[testimonials.length - 1].videoLink}
          backgroundColor={bgColor}
        />
  
        <!-- Main Testimonials -->
        {#each testimonials as testimonial}
          <TestimonialCard
            testimonialText={testimonial.testimonialText}
            customerName={testimonial.customerName}
            customerContext={testimonial.customerContext}
            imageUrl={testimonial.imageUrl}
            videoLink={testimonial.videoLink}
            backgroundColor={bgColor}
          />
        {/each}
  
        <!-- Duplicate first testimonial for seamless looping -->
        <TestimonialCard
          testimonialText={testimonials[0].testimonialText}
          customerName={testimonials[0].customerName}
          customerContext={testimonials[0].customerContext}
          imageUrl={testimonials[0].imageUrl}
          videoLink={testimonials[0].videoLink}
          backgroundColor={bgColor}
        />
      </div>
    </div>
  
    <!-- Navigation Buttons -->
    <div class="flex gap-4">
      <PreviousButton onPrevious={showPrevious} />
      <NextButton onNext={showNext} />
    </div>
  </div>
  
  <style>
    .carousel-wrapper {
      overflow: hidden;
    }
    .testimonial-card {
      transition: transform 2s ease-in-out;
    }
  </style>