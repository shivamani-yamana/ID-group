<script>
  export let Label = "Label";
  export let Value = "Value";
  import dropDown from "/src/lib/images/drop-down.svg";

  let services = [
    "Modular Kitchen",
    "Interior Design",
    "No Grills",
    "Design Consultation",
  ];
  let selectedService = "";
  let showDropdown = false;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function selectService(service = "") {
    selectedService = service;
    showDropdown = false;
  }
</script>

<div class="flex flex-col items-start gap-3">
  <span
    class="text-[#292929] font-inter-tight text-sm leading-[160%] sm:text-base sm:leading-[160%]"
  >
    {Label}
  </span>

  <div class="relative w-full">
    <div class="relative w-full">
      <!-- Allow clicking on the input to toggle dropdown -->
      <input
        class="flex w-full items-center gap-2.5 h-[48px] p-[12px_16px] border border-[#0000001A] rounded-[4px] sm:w-full sm:h-auto sm:rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#9D9D9D] font-inter-tight text-xs leading-[160%] sm:text-base sm:leading-[160%]"
        placeholder={Value}
        bind:value={selectedService}
        on:click={toggleDropdown}
      />

      <!-- Dropdown arrow -->
      <button
        class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-transparent border-none p-0"
        on:click={toggleDropdown}
        on:keydown={(e) => e.key === 'Enter' && toggleDropdown()}
        aria-label="Toggle dropdown"
        type="button"
      >
        <img src={dropDown} alt="dropdown" />
      </button>
    </div>

    <!-- Dropdown -->
    {#if showDropdown}
      <ul
        class="absolute w-full bg-white border border-[#0000001A] rounded-lg mt-1 max-h-48 overflow-y-auto shadow-lg z-10"
      >
        {#each services as service}
          <button
            class="w-full text-left p-2 text-sm cursor-pointer hover:bg-gray-100"
            on:click={() => selectService(service)}
            on:keydown={(e) => e.key === 'Enter' && selectService(service)}
            type="button"
          >
            {service}
          </button>
        {/each}
      </ul>
    {/if}
  </div>
</div>
