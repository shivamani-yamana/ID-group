<script lang="ts">
  export let onPrevious: () => void;
</script>

<button
  on:click={onPrevious}
  class="flex justify-center items-center border-2 border-[#292929] bg-white rounded-full w-[60px] h-[60px] p-[10px] focus:outline-none hover:bg-[#292929] hover:border-[#292929] transition-all duration-500 ease-in-out"
  aria-label="Previous testimonial"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    class="arrow transition-all duration-500 ease-in-out"
  >
    <g clip-path="url(#clip0_1383_1060)">
      <path
        d="M31.6666 20L8.33329 20"
        stroke="#292929"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="arrow-path"
      />
      <path
        d="M15 13.3333L8.33333 20"
        stroke="#292929"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="arrow-path"
      />
      <path
        d="M15 26.6667L8.33333 20.0001"
        stroke="#292929"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="arrow-path"
      />
    </g>
    <defs>
      <clipPath id="clip0_1383_1060">
        <rect
          width="40"
          height="40"
          fill="white"
          transform="matrix(-1 0 0 -1 40 40)"
        />
      </clipPath>
    </defs>
  </svg>
</button>

<style>
  /* Mobile styles with Tailwind's responsive utilities */
  @media (max-width: 768px) {
    button {
      width: 36px;
      height: 36px;
      padding: 6px;
      border-radius: 30px;
      border-width: 1.2px;
      border-color: #292929;
    }
  }
  /* Hover effect: invert arrow stroke when button background changes */
  button:hover .arrow-path {
    stroke: white; /* Invert arrow stroke color when hovering */
  }
  button {
    transition: all 0.5s ease-in-out;
  }
  /* Hover effect */
  button:hover {
    background-color: #292929; /* Dark background on hover */
    border-color: #292929; /* Border color change to match background */
  }
  /* Click effect only for arrow */
  button:active .arrow-path {
    transform: scale(0.95); /* Shrink arrow slightly on click */
  }
</style>
