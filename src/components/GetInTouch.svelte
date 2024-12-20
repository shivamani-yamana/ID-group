<script>
    export let ButtonData;
    export let HeadingData;
    export let ParagraphData;
</script>

<div class="flex flex-col gap-4 md:gap-4 lg:items-start md:self-stretch md:flex-col">
    <div class="flex flex-col gap-8 sm:flex-col sm:gap-2 items-center justify-center lg:items-start lg:justify-start">
        {#if ButtonData}
        <button class="flex justify-center items-center gap-2.5 w-[98px] h-[30px] p-2.5 rounded-full border border-[#EAEAEA] bg-white" aria-label="Contact Us">
            <span class="text-[#707070] font-inter-tight text-[15px] font-normal leading-[140%]">{ButtonData}</span>
        </button>
        {/if}
        
        <h2 class="text-[#292929] font-playfairDisplay font-medium leading-[120%] capitalize text-[24px] sm:leading-[120%] lg:text-[48px] lg:leading-[120%]">
            {HeadingData}
        </h2>
    </div>
    <div class="flex flex-col md:w-full lg:w-[492px] md:items-center lg:items-start">
        <p class="text-[#707070] font-inter-tight text-sm sm:text-base lg:text-[18px] text-center lg:text-left leading-[160%] sm:leading-[160%]">
            {ParagraphData}
        </p>
    </div>
</div>