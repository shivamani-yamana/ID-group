<script>
    import Frame1 from "/src/lib/images/frame1.svg";
    export let data = {
        Icon: Frame1,
        Title: "Custom Design & Efficiency",
        Description: "Tailored modular kitchens that optimize storage and functionality for your unique space.",
        Color1: "#ECFFeC",
        Color2: "#ECFFeC", // Color2 is the new background color
    }
</script>

<div class="w-[340px] h-[238px] md:w-[420px] md:h-[312px] rounded-[10px] border border-[rgba(0,_0,_0,_0.05)] bg-white relative group">
    <div class="flex flex-col w-[300px] md:w-[380px] items-start gap-[32px] md:gap-[60px] p-[20px_30px_20px_20px] md:p-[20px_20px_20px_50px]">
        <div class="flex w-16 h-16 p-3 justify-center items-center md:w-20 md:h-20 rounded-[9.6px]" style="background-color: {data.Color1};">
            <img class="w-10 h-10 md:w-12 md:h-12" src="{data.Icon}" alt="">
        </div>
        <div class="flex flex-col w-[293px] items-start gap-4 self-stretch md:w-full">
            <p class="font-playfairDisplay text-[18px] text-[#292929] font-medium leading-[120%] md:text-[24px] md:leading-[140%]">
                {data.Title}
            </p>
            <p class="font-inter-tiger text-[#545454] text-[14px] font-light leading-[160%] self-stretch md:text-[16px]">
                {data.Description}
            </p>
        </div>
    </div>
    <div class="absolute h-[10px] bottom-0 left-[2px] w-0 rounded-bl-[10px] rounded-br-[10px] transition-all duration-1000 group-hover:w-[336px] md:group-hover:w-[416px]" style="background-color: {data.Color2};"></div>
</div>
