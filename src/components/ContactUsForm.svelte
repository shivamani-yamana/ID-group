<script>
  import FormBlockType1 from "./FormBlockType1.svelte";
  import FormBlockType3 from "./FormBlockType3.svelte";

  export let Label = "Phone No";
  export let Value = "000-000-0000";

  let inputValue = "";
  let errorMessage = "";

  import IndiaFlag from "/src/lib/images/india-flag.svg";
  import dropDown from "/src/lib/images/drop-down.svg";

  function validatePhoneNumber() {
    if (inputValue.length !== 10) {
      errorMessage = "Phone number must be exactly 10 digits.";
    } else {
      errorMessage = "";
      // Proceed with form submission
      alert("Form submitted successfully!");
    }
  }
</script>

<div
  class="flex w-full justify-center items-center rounded-lg bg-[#F3F0EB] flex-col max-w-[396px] h-[537px] p-[20px_12px_19px_12px] sm:flex-row sm:max-w-[626px] sm:h-[582px] sm:p-5"
>
  <form
    class="flex gap-8 w-full rounded-md bg-white shadow-[0px_15px_25px_0px_rgba(0,0,0,0.03)] flex-col max-w-[372px] h-[498px] p-[17px_12px_16px_12px] sm:gap-10 sm:max-w-[586px] sm:h-[542px] sm:p-5 sm:flex-shrink-0"
  >
    <div class="flex flex-col gap-5">
      <FormBlockType1 Label="Name" Value="John Doe" />
      <div class="flex flex-col items-start gap-3">
        <div class="flex gap-3 justify-center items-center">
          <span
            class="text-[#292929] font-inter-tight text-sm leading-[160%] sm:text-base sm:leading-[160%]"
          >
            {Label}
          </span>

          {#if errorMessage}
            <span class="text-red-500 text-xs sm:text-sm">{errorMessage}</span>
          {/if}
        </div>

        <div
          class="flex w-full max-w-[348px] h-[48px] items-center rounded-[4px] border-[1px] border-[#0000001A] divide-x-2 sm:max-w-[546px] sm:h-[50px] sm:rounded-[6px] sm:border-[1px] sm:border-[#0000001A] sm:self-stretch"
        >
          <div class="flex w-[89px] h-[50px] items-center gap-[8px] flex-wrap">
            <div class="flex items-center gap-[4px] p-[10px_8px]">
              <img src={IndiaFlag} alt="India Flag" class="w-5 h-5" />
              <span
                class="text-[#9D9D9D] font-inter-tight font-light text-[12px] leading-[160%] sm:text-[16px] sm:leading-[160%]"
              >
                +91
              </span>
              <!-- <button>
                <img src={dropDown} alt="" class="w-[20px] h-[20px]" />
                </button> -->
            </div>
          </div>
          <input
            class="text-[#9D9D9D] w-full h-full px-[10px] font-inter-tight font-light text-[12px] leading-[140%] sm:text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 sm:leading-[140%] focus:text-black"
            bind:value={inputValue}
            type="text"
            placeholder={Value}
          />
        </div>

        <style>
          input:not(:placeholder-shown) {
            color: black;
          }
        </style>
      </div>
      <FormBlockType1
        Label="Property Location"
        Value="Enter location of property"
      />
      <FormBlockType3 Label="Service Request" Value="Select Request" />
    </div>

    <div
      class="flex w-full justify-center items-center gap-2.5 max-w-[348px] h-[48px] p-[12px_16px] rounded-full bg-[#111] sm:w-[140px] sm:h-[50px] sm:rounded-[50px] sm:max-w-full"
    >
      <button
        type="submit"
        class="text-white font-inter-tight text-xs font-normal leading-[140%] sm:text-base sm:leading-[140%]"
        on:click|preventDefault={validatePhoneNumber}
      >
        Submit
      </button>
    </div>
  </form>
</div>
