<script lang="ts">
    import { onMount } from "svelte";
    import ChooseUsCard from "./ChooseUsCard.svelte";
    import NextButton from "./NextButton.svelte";
    import PreviousButton from "./PreviousButton.svelte";

    interface CardData {
        Icon: string;
        Title: string;
        Description: string;
        Color1: string;
        Color2: string;
    }

    const cardData: CardData[] = [
        {
            Icon: "/src/lib/icons/frame1.svg",
            Title: "Custom Design & Efficiency",
            Description: "Tailored modular kitchens that optimize storage and functionality for your unique space.",
            Color1: "#ECFFeC",
            Color2: "#14B037"
        },
        {
            Icon: "/src/lib/icons/frame2.svg",
            Title: "Quality & Durability",
            Description: "High-quality materials and craftsmanship for long-lasting, beautiful results.",
            Color1: "#F6F4FF",
            Color2: "#855CFE"
        },
        {
            Icon: "/src/lib/icons/frame3.svg",
            Title: "End to End Handling",
            Description: "We manage every aspect of your project from start to finish, ensuring a seamless and stress-free experience",
            Color1: "#E8F3FF",
            Color2: "#1D6AC4"
        },
        {
            Icon: "/src/lib/icons/frame4.svg",
            Title: "After Sales Support",
            Description: "Comprehensive support ensures your continued satisfaction long after project completion",
            Color1: "#FFF7EF",
            Color2: "#FF9327"
        },
        {
            Icon: "/src/lib/icons/frame5.svg",
            Title: "Years of Experience",
            Description: "Decades of expertise ensure exceptional quality and results in every project we undertake",
            Color1: "#FFEEFA",
            Color2: "#F039B3"
        }
    ];

    let scrollContainer: HTMLElement | null = null; // Explicitly type the variable

    // Scroll the container by a smaller distance
    const SCROLL_DISTANCE = 340; // Set the distance to scroll in pixels

    const nextSlide = () => {
        if (scrollContainer) {
            scrollContainer.scrollBy({
                left: SCROLL_DISTANCE, // Scroll by a smaller fixed distance
                behavior: "smooth"
            });
        }
    };

    const prevSlide = () => {
        if (scrollContainer) {
            scrollContainer.scrollBy({
                left: -SCROLL_DISTANCE, // Scroll by a smaller fixed distance
                behavior: "smooth"
            });
        }
    };
</script>

<style>
    /* Hide scrollbar but enable scrolling */
    .hide-scrollbar {
        scrollbar-width: none; /* For Firefox */
        -ms-overflow-style: none; /* For Internet Explorer and Edge */
    }

    .hide-scrollbar::-webkit-scrollbar {
        display: none; /* For Chrome, Safari, and Opera */
    }
</style>

<section class="flex max-w-[428px] items-center justify-center px-4 pt-6 pb-16 rounded-t-[30px] rounded-b-none sm:rounded-t-none sm:max-w-full sm:px-20 sm:pt-10 sm:pb-0 sm:self-stretch">
    <div class="flex flex-col items-center w-full max-w-[1280px] gap-6 md:gap-10">
        <!-- Header Section -->
        <div class="flex items-center justify-center md:justify-between w-full max-w-[1280px]">
            <h2 class="text-[#292929] text-center font-playfairDisplay font-medium leading-[120%] capitalize text-[24px] sm:leading-[120%] lg:text-[48px] lg:leading-[120%]">
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
                <div class="flex-shrink-0 w-[90%] sm:w-1/3 px-2">
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
