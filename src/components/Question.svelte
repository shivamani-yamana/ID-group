<script>
  import dropDown from "/src/lib/images/drop-down.svg";
  export let HeadingData = "Heading Title ";
  export let ParagraphData =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo";

  let isExpanded = false;
  /** @type {HTMLElement} */
  let quesElement;

  const toggleExpand = () => {
    if (quesElement) {
      if (!isExpanded) {
        quesElement.style.height = `${quesElement.scrollHeight}px`; // Set to scroll height
      } else {
        quesElement.style.height = "28px"; // Collapse to fixed height
      }
    }
    isExpanded = !isExpanded;
  };
</script>

<div
  class="flex w-[396px] p-[22px_18px] justify-center items-center rounded-[5px] border border-[#0000000D] bg-white sm md:w-[500px] lg-w-[500px] 1410:w-[730px] xl:w-[600px] sm:p-5 sm:flex-col sm:items-start sm:gap-5 shrink {isExpanded
    ? 'expanded'
    : 'collapsed'}"
>
  <button on:click={toggleExpand}>
    <div
      bind:this={quesElement}
      id="ques"
      class="flex flex-col w-full items-start gap-[20px] transition-height"
      style="height: 28px;"
    >
      <div class="flex justify-between items-center self-stretch">
        <p
          class="text-[#292929] font-inter-tight text-[16px] font-normal leading-[28px] md:text-[20px]"
        >
          {HeadingData}
        </p>
        <img
          src={dropDown}
          alt="Toggle"
          class="w-[24px] h-[24px] arrow {isExpanded ? 'rotated' : ''}"
        />
      </div>
      <p
        class="flex ml-[20px] text-start text-[12px] text-[#707070] font-light leading-[1.4] font-inter-tight md:text-[16px]"
      >
        {ParagraphData}
      </p>
    </div>
  </button>
</div>

<style>
  .transition-height {
    overflow: hidden;
    transition:
      height 0.6s ease-in-out,
      background-color 0.6s ease-in-out; /* Add background-color transition */
  }
  .collapsed {
    background-color: #ffffff; /* Default background color */
  }
  .expanded {
    background-color: #f3f0eb; /* Expanded background color */
  }
  .arrow {
    transition: transform 0.5s ease; /* Smooth arrow rotation */
  }
  .arrow.rotated {
    transform: rotate(-180deg);
  }
</style>
