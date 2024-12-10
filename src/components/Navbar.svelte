<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import idstudioLogo from "../lib/images/Idstudio_logo.svg";
  import ContactUsButton from "./ContactUsButton.svelte";

  let isMenuOpen = false; // State for mobile menu
  let isServicesOpen = false; // State for services dropdown
</script>

<!-- Navbar Component -->
<div
  class="flex justify-between items-center bg-white opacity-100 px-4 md:px-20 py-6 fixed w-full font-inter-tight z-20"
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
    <a href="/" class="text-black hover:text-gray-600">How it works</a>

    <!-- Services Dropdown -->
    <div class="relative">
      <button
        class="text-black hover:text-gray-600"
        on:click={() => (isServicesOpen = !isServicesOpen)}
        aria-label="Toggle services dropdown"
      >
        Our Services
      </button>
      {#if isServicesOpen}
        <div
          class="absolute bg-white shadow-lg w-48 mt-2 flex flex-col gap-2 py-2 -left-12"
          in:slide={{ duration: 300 }}
          out:slide={{ duration: 300 }}
        >
          <a href="/" class="text-black hover:text-gray-600 px-4 py-2"
            >Service 1</a
          >
          <a href="/" class="text-black hover:text-gray-600 px-4 py-2"
            >Service 2</a
          >
          <a href="/" class="text-black hover:text-gray-600 px-4 py-2"
            >Service 3</a
          >
        </div>
      {/if}
    </div>

    <a href="/" class="text-black hover:text-gray-600">Portfolio</a>
    <a href="/" class="text-black hover:text-gray-600">FAQs</a>
    <a href="/" class="text-black hover:text-gray-600">Invisible Grills</a>
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
      <a href="/" class="text-black hover:text-gray-600 w-full border-b-2 py-6"
        >How it works</a
      >

      <!-- Services Dropdown (Mobile) -->
      <div class="relative w-full flex flex-col border-b-2 py-6">
        <div class="flex">
          <button
            class="text-black hover:text-gray-600 w-full text-start"
            on:click={() => (isServicesOpen = !isServicesOpen)}
          >
            Our Services
          </button>
        </div>

        {#if isServicesOpen}
          <div
            class="bg-white w-full mt-2 flex flex-col items-start gap-2 py-2 text-start"
            in:slide={{ duration: 300 }}
            out:slide={{ duration: 300 }}
          >
            <a
              href="/"
              class="text-black hover:text-gray-600 px-4 py-2 w-full border-b-2"
              >Service 1</a
            >
            <a
              href="/"
              class="text-black hover:text-gray-600 px-4 py-2 w-full border-b-2"
              >Service 2</a
            >
            <a href="/" class="text-black hover:text-gray-600 px-4 pt-2 w-full"
              >Service 3</a
            >
          </div>
        {/if}
      </div>

      <a
        href="/"
        class="text-black hover:text-gray-600 w-full text-start border-b-2 py-6"
        >Portfolio</a
      >
      <a
        href="/"
        class="text-black hover:text-gray-600 w-full text-start border-b-2 py-6"
        >FAQs</a
      >
      <a
        href="/"
        class="text-black hover:text-gray-600 w-full text-start border-b-2 py-6"
        >Invisible Grills</a
      >

      <div class="w-full">
        <ContactUsButton tailwindCSS="w-full" />
      </div>
    </div>
  {/if}
</div>

<style>
</style>
