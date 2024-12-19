<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import idstudioLogo from "../lib/images/Idstudio_logo.svg";
  import ContactUsButton from "./ContactUsButton.svelte";
  import { page } from '$app/stores';  

  let isMenuOpen = false; // State for mobile menu
  let isServicesOpen = false; // State for services dropdown

  export let services = [
    { service: "Modular Kitchen", link: "#service" },
    { service: "Interior Design", link: "#service" },
    { service: "No Grills", link: "#service" },
    { service: "Design Consultation", link: "#service" },
  ];

  let dropdownElement: HTMLElement; // Reference to dropdown container

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node | null; // Explicitly assert the type of event.target
    if (
      !isMenuOpen &&
      isServicesOpen == true &&
      dropdownElement &&
      !dropdownElement.contains(target)
    ) {
      isServicesOpen = false;
    }
  };

  import { onMount, onDestroy } from "svelte";
  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });
</script>

<!-- Navbar Component -->
<div
  class="flex justify-between items-center bg-white opacity-100 px-4 md:px-20 py-6 fixed w-full font-inter-tight z-50"
>
  <!-- Logo -->
  <a href="/">
    <div class="flex items-center justify-center" id="logo">
      <img src={idstudioLogo} alt="Logo" class="w-40" />
    </div>
  </a>

  <!-- Hamburger Button (Mobile) -->
  <div class="md:hidden flex items-center">
    <button
      class="relative flex justify-center items-center w-8 h-8 text-black"
      on:click={() => (isMenuOpen = !isMenuOpen)}
      aria-label="Toggle menu"
    >
      <!-- Hamburger Icon -->
      {#if !isMenuOpen}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_886_14431)">
            <path
              d="M10 6H20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 12H20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H14"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_886_14431">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      {/if}

      <!-- Close Icon -->
      {#if isMenuOpen}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="x-icon"
          in:fade={{ duration: 200 }}
        >
          <path
            d="M6 6l12 12M6 18L18 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      {/if}
    </button>
  </div>

  <!-- Desktop Navigation Links -->
  <div class="hidden md:flex gap-10 items-center">
    <a href="#how-it-works" class="text-black hover:text-gray-600"
      >How it works</a
    >

    <!-- Services Dropdown -->
    <div class="relative" bind:this={dropdownElement}>
      <button
        class="text-black hover:text-gray-600"
        on:click={() => (isServicesOpen = !isServicesOpen)}
        aria-label="Toggle services dropdown"
      >
        Our Services
      </button>
      {#if isServicesOpen}
        <div
          class="absolute bg-white shadow-lg w-48 mt-2 flex flex-col py-2 -left-12 rounded-[4px]"
          in:slide={{ duration: 300 }}
          out:slide={{ duration: 300 }}
        >
          {#each services as { service, link }}
            <a
              href={link}
              class="text-black hover:text-gray-600 px-4 py-2"
              on:click={() => {
                isServicesOpen = false;
              }}>{service}</a
            >
          {/each}
        </div>
      {/if}
    </div>

    <a href="#project-gallery" class="text-black hover:text-gray-600"
      >Portfolio</a
    >
    {#if $page.url.pathname != "/invisible-grills"}
      <a href="#faq" class="text-black hover:text-gray-600">FAQs</a>
    {/if}
    <a href="./invisible-grills" class="text-black hover:text-gray-600"
      >Invisible Grills</a
    >
  </div>

  <!-- Contact Us Button -->
  <div class="hidden md:flex">
    <ContactUsButton />
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div
      class="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col gap-6 px-4 h-screen text-start"
      in:fade={{ duration: 300 }}
      out:fade={{ duration: 300 }}
    >
      <a
        href="#how-it-works"
        class="text-black hover:text-gray-600 w-full border-b-2 py-5"
        on:click={() => {
          isMenuOpen = false;
        }}>How it works</a
      >

      <!-- Services Dropdown (Mobile) -->
      <div
        class={`relative w-full flex flex-col ${isServicesOpen ? "border-b-0" : "border-b-[0.5px]"}`}
      >
        <button
          class="text-black hover:text-gray-600 text-start py-5 w-full flex justify-between items-center"
          on:click={() => (isServicesOpen = !isServicesOpen)}
        >
          Our Services
          <div class="flex items-center justify-center w-6 h-6">
            <div
              class={`transition-all ease-in-out origin-center ${isServicesOpen ? "rotate-180" : "rotate-0"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_886_14328)">
                  <path
                    d="M18 9L12 15L6 9"
                    stroke="#292929"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_886_14328">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </button>

        {#if isServicesOpen}
          <div
            class="bg-white w-full flex flex-col items-start pb-2 text-start border-b-[0.5px]"
            in:slide={{ duration: 300 }}
            out:slide={{ duration: 300 }}
          >
            {#each services as { service, link }, index}
              {#if index === services.length - 1}
                <a
                  href={link}
                  class="text-[#888] hover:text-gray-600 py-2 w-full flex items-center"
                  on:click={() => {
                    isMenuOpen = false;
                  }}>{service}</a
                >
              {:else if index === 0}
                <a
                  href={link}
                  class="text-[#888] hover:text-gray-600 py-2 w-full flex items-center border-y-[0.5px]"
                  on:click={() => {
                    isMenuOpen = false;
                  }}>{service}</a
                >
              {:else}
                <a
                  href={link}
                  class="text-[#888] hover:text-gray-600 py-2 w-full border-b-[0.5px] flex items-center"
                  on:click={() => {
                    isMenuOpen = false;
                  }}
                >
                  {service}
                </a>
              {/if}
            {/each}
          </div>
        {/if}
      </div>

      <a
        href="#project-gallery"
        class="text-black hover:text-gray-600 w-full text-start border-b-[0.5px] py-5"
        on:click={() => {
          isMenuOpen = false;
        }}>Portfolio</a
      >
      {#if $page.url.pathname != "/invisible-grills"}
      <a
        href="#faq"
        class="text-black hover:text-gray-600 w-full text-start border-b-[0.5px] py-5"
        on:click={() => {
          isMenuOpen = false;
        }}>FAQs</a
      >
      {/if}
      <a
        href="/invisible-grills"
        class="text-black hover:text-gray-600 w-full text-start border-b-[0.5px] py-5"
        on:click={() => {
          isMenuOpen = false;
        }}>Invisible Grills</a
      >

      <div class="w-full">
        <ContactUsButton tailwindCSS="w-full" />
      </div>
    </div>
  {/if}
</div>

<style>
</style>
