<script>
  import HowItWorksTextBox from "./HowItWorksTextBox.svelte";
  const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Schedule a free consultation to discuss your needs and preferences",
  },
  {
    number: "02",
    title: "Design Proposal",
    description: "Receive a customized design plan with 3D renderings.",
  },
  {
    number: "03",
    title: "Approval",
    description: "Review and approve the design for final adjustments",
  },
  {
    number: "04",
    title: "Installation",
    description: "Our skilled team installs your project with precision and care",
  },
];

</script>
<div class="flex flex-col w-full gap-[24px] items-center justify-center p-[24px_0px] md:h-auto md:flex-row md:p-[60px_80px_60px_0px] md:self-stretch md:justify-start md:items-start md:gap-[100px] bg-[#DFE0AF]">
    <div class="flex flex-col gap-[12px] md:gap-[20px] md:justify-between md:item" style="max-width: fit-content;">
        <img class="w-full h-auto" src="/src/lib/images/hiw.svg" alt="Main">
        <div class="flex gap-3 md:gap-5">
            <img class="w-[calc(50%-6px)] md:w-[calc(50%-10px)] h-auto" src="/src/lib/images/hiw_img2.svg" alt="Secondary 1">
            <img class="w-[calc(50%-6px)] md:w-[calc(50%-10px)] h-auto" src="/src/lib/images/hiw_img3.svg" alt="Secondary 2">
        </div>
    </div>
    <div class="w-full p-[0px_10px] max-w-[396px] flex flex-col items-start gap-[24px] md:gap-[40px] md:max-w-[570px]">
        <div class="flex flex-col flex-start gap-[12px] md:gap-[20px] self-stretch">
            <h2 class="text-[#292929] font-playfairDisplay text-[24px] md:text-[40px] font-[600] md:font-[500] leading-[120%] ms:leading[130%]">
                How It Works
            </h2>
            <p class="w-full text-[#707070] font-inter-tiger text-[14px] md:text-[20px] font-[300] leading-[150%]">
                Experience a hassle-free journey from concept to completion. Our streamlined process is designed to make your interior design project smooth and enjoyable
            </p>
        </div>
        <div class="w-full flex flex-col max-w-[396px] md:max-w-[570px] items-center gap-8 relative">
            <div class="absolute h-[calc(100%-60px)] w-[6px] bg-[#FFF] left-[21px] md:left-[34px] top-[28px] -z-1"></div>
            {#each steps as step}
                <HowItWorksTextBox step={step} />
            {/each}
        </div>
    </div>
</div>
