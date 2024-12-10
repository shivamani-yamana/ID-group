<script>
    import { onMount } from "svelte";

    export let step = {
        number: "01",
        title: "Consultation",
        description: "Schedule a free consultation to discuss your needs and preferences",
    };

    let isHighlighted = false;
    let currentSecondRemainder = 0;

    // Function to calculate if the current second remainder with 4 matches the step number remainder with 4
    const checkHighlight = () => {
        // Get the current second
        let currentSecond = new Date().getSeconds();
        currentSecond /= 2;

        // Calculate the remainders of the current second and the step number
        currentSecondRemainder = currentSecond % 4;
        const stepRemainder = parseInt(step.number) % 4;

        // Check if the remainders match
        if (currentSecondRemainder === stepRemainder) {
            isHighlighted = true;
        } else {
            isHighlighted = false;
        }
    };

    // Check every second
    onMount(() => {
        const interval = setInterval(() => {
            checkHighlight();
        }, 2000); // Check every second

        // return () => clearInterval(interval); // Cleanup on unmount
    });
</script>

<style>
    .highlighted {
        background-color: #000; /* Black background */
        color: white; /* White text color */
        transition: background-color 2s, color 2s; /* Smooth transition */
    }

    .highlighted-text {
        color: white; /* Change text color to white */
        transition: color 2s; /* Smooth transition */
    }
</style>

<div class="inline-flex justify-center items-center gap-6 self-stretch z-0">
    <div class="flex w-12 h-12 md:w-[81px] md:h-[72px] p-[14px_16px_15px_16px] justify-center items-center rounded-[333px] bg-[#FFF]"
        class:highlighted={isHighlighted}>
        <p class="text-[#111] font-inter-tight text-[16px] md:text-[28px] italic font-[300] leading-[120%]"
            class:highlighted-text={isHighlighted}>
            {step.number}
        </p>
    </div>
    <div class="flex flex-col w-full max-w-[324px] md:max-w-[474px] justify-center items-start gap-2 md:gap-3">
        <h2 class="text-[#292929] font-playfairDisplay text-[16px] md:text-[24px] font-[500] leading-[120%] md:leading-[140%]">
            {step.title}
        </h2>
        <p class="text-[#545454] font-inter-tight text-[14px] md:text-[16px] font-[300] leading-[160%]">
            {step.description}
        </p>
    </div>
</div>
