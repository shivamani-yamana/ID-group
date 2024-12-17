<script lang="ts">
  export let Label = "Label";
  export let Value = "Value";

  let inputValue = "";

  import IndiaFlag from "/src/lib/images/india-flag.svg";
  import dropDown from "/src/lib/images/drop-down.svg";

  // Correct event type for Svelte
  function handlePhoneInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    // Only allow digits in the input
    inputValue = inputElement.value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
  }
</script>

<div class="flex flex-col items-start gap-3">
  <span
    class="text-[#292929] font-inter-tight text-sm leading-[160%] sm:text-base sm:leading-[160%]"
  >
    {Label}
  </span>

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
        <button>
          <img src={dropDown} alt="" class="w-[20px] h-[20px]" />
        </button>
      </div>
    </div>
    <input
      class="text-[#9D9D9D] w-full h-full px-[10px] font-inter-tight font-light text-[12px] leading-[140%] sm:text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 sm:leading-[140%] focus:text-black"
      bind:value={inputValue}
      type="text"
      name=""
      placeholder={Value}
      on:input={handlePhoneInput}
    />
  </div>

  <style>
    input:not(:placeholder-shown) {
      color: black;
    }
  </style>
</div>
