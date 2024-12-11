<script>
  import SectionButton from "./SectionButton.svelte";

  import singleTick from "$lib/icons/single_tick.svg";
  import doubleTick from "$lib/icons/double_tick.svg";
  import cross from "$lib/icons/cross.svg";

  let features = [
    "Design & Aesthetics",
    "Material",
    "Functionality",
    "Installation & Maintenance",
    "Security & Safety"
  ];

  let invisibleGrills = [
    {
      text:"Modern and sleek appearance.",
      symbol: doubleTick
    },
    {
      text:"Strong and durable",
      symbol: doubleTick
    },
    {
      text:"Provides a secure barrier without obstructing the view",
      symbol: doubleTick
    },
    {
      text:"Minimal maintenance required for longevity.",
      symbol: doubleTick
    },
    {
      text:"Ensures safety without obstructing the view",
      symbol: doubleTick
    }
  ];

  let aluminumGrills = [
    {
      text:"Classic and antique appearance.",
      symbol: singleTick
    },
    {
      text:"Strong and durable",
      symbol: doubleTick
    },
    {
      text:"Provides a secure barrier without obstructing the view",
      symbol: cross
    },
    {
      text:"Minimal maintenance required for longevity.",
      symbol: cross
    },
    {
      text:"Provides a strong physical barrier",
      symbol: singleTick
    }
  ];

</script>
<section class="flex max-w-[428px] items-center justify-center px-4 pt-6 pb-16 rounded-t-[30px] rounded-b-none sm:rounded-t-none sm:max-w-full sm:px-20 sm:pt-10 sm:pb-0 sm:self-stretch">
    <div class="flex flex-col w-full gap-6 justify-center items-center max-w-[1280px] md:gap-10">
      <div class="flex items-center flex-col gap-3 md:gap-5">
        <SectionButton text="Comparative Analysis" />
        <h2
          class="text-center font-playfairDisplay font-medium text-2xl md:text-4xl text-gray-900"
        >
          Invisible Grills vs Aluminium
        </h2>
      </div>
      <table class="hidden md:block">
        <tbody>
          <tr>
            <th class="p-[19px_0px_19px_24px] text-start text-[#2929292] font-playfairDisplay text-[24px] font-[500] leading-[140%] bg-[#F1F2F9] border-[2px] border-[#E7ECF7]">Feature</th>
            <th class="p-[19px_0px_19px_24px] text-start text-[#2929292] font-playfairDisplay text-[24px] font-[500] leading-[140%] bg-[#F1F2F9] border-[2px] border-[#E7ECF7]">Invisible Grills</th>
            <th class="p-[19px_0px_19px_24px] text-start text-[#2929292] font-playfairDisplay text-[24px] font-[500] leading-[140%] bg-[#F1F2F9] border-[2px] border-[#E7ECF7]">Aluminum Grills</th>
          </tr>
          {#each features as feature, index}
          <tr>
            <td data-label="Feature" class="p-[24px] border-[2px] border-[#E7ECF7]">{feature}</td>
            <td data-label="Invisible Grills" class="p-[24px] border-[2px] border-[#E7ECF7]">
              <div class="flex gap-2">
                <img src={invisibleGrills[index].symbol} alt="symbol"/>
                <span>{invisibleGrills[index].text}</span>
              </div>
            </td>
            <td data-label="Aluminium Grills" class="p-[24px] border-[2px] border-[#E7ECF7]">
              <div class="flex gap-2">
                <img src={aluminumGrills[index].symbol} alt="symbol"/>
                <span>{aluminumGrills[index].text}</span>
              </div>
            </td>
          </tr>
          {/each}
        </tbody>
      </table>



      <!-- For Mobile -->
      <table class="md:hidden">
        <tbody>
          <tr>
            <th class="p-[13px_0px_12px_12px] text-start text-[#2929292] font-playfairDisplay text-[18px] font-[500] leading-[140%] bg-[#F1F2F9] border-[2px] border-[#E7ECF7]">Feature</th>
            <th class="p-[13px_0px_12px_12px] text-start text-[#2929292] font-playfairDisplay text-[18px] font-[500] leading-[140%] bg-[#F1F2F9] border-[2px] border-[#E7ECF7]">Invisible Grills</th>
          </tr>
          {#each features as feature, index}
          <tr>
            <td data-label="Feature" class="p-[12px] border-[2px] border-[#E7ECF7] font-inter-tight text-[12px] font-[400] leading=[160%]">{feature}</td>
            <td data-label="Invisible Grills" class="p-[12px] border-[2px] border-[#E7ECF7] font-inter-tight text-[12px] font-[400] leading=[160%]">
              <div class="flex gap-2 items-center">
                <img class="w-[16px] h-[16px]" src={invisibleGrills[index].symbol} alt="symbol"/>
                <span>{invisibleGrills[index].text}</span>
              </div>
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
      <table class="md:hidden">
        <tbody>
          <tr>
            <th class="p-[13px_0px_12px_12px] text-start text-[#2929292] font-playfairDisplay text-[18px] font-[500] leading-[140%] bg-[#F1F2F9] border-[2px] border-[#E7ECF7]">Feature</th>
            <th class="p-[13px_0px_12px_12px] text-start text-[#2929292] font-playfairDisplay text-[18px] font-[500] leading-[140%] bg-[#F1F2F9] border-[2px] border-[#E7ECF7]">Aluminium Grills</th>
          </tr>
          {#each features as feature, index}
          <tr>
            <td data-label="Feature" class="p-[12px] border-[2px] border-[#E7ECF7] font-inter-tight text-[12px] font-[400] leading=[160%]">{feature}</td>
            <td data-label="Aluminium Grills" class="p-[12px] border-[2px] border-[#E7ECF7] font-inter-tight text-[12px] font-[400] leading=[160%]">
              <div class="flex gap-2 items-center">
                <img class="w-[16px] h-[16px]" src={aluminumGrills[index].symbol} alt="symbol"/>
                <span>{aluminumGrills[index].text}</span>
              </div>
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
    </div>
</section>