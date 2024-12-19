<script lang="ts">
  export let cardImage: string; // Image URL or import for the card background
  export let heading: string;
  export let description: string;
  export let icon: string; // Icon as an image
  export let iconText: string;
  export let link: string;
</script>

<div class="flex flex-col justify-center items-center p-5 rounded-lg bg-white">
  <div class="flex flex-col items-start gap-6">
    <!-- Card Background Image -->
    <div class="w-full h-auto">
      <img
        src={cardImage}
        alt={heading ? `${heading} - card image` : "Card image"}
        class="w-full h-auto rounded-t-md object-cover"
      />
    </div>

    <!-- Content Section -->
    <div class="flex flex-col items-start gap-8 w-full sm:gap-6">
      <div class="flex flex-col items-start gap-4 w-full sm:gap-3">
        <!-- Heading -->
        <h2
          class="text-[#292929] font-playfairDisplay text-xl font-medium leading-[140%] sm:text-lg"
        >
          {heading}
        </h2>

        <!-- Description -->
        <p
          class="text-[#545454] font-inter-tight text-base font-light leading-[160%] sm:text-sm"
        >
          {description}
        </p>
      </div>

      <!-- Icon Section -->
      <div class="flex items-center gap-2">
        <a href="{link}" class="flex">
          <span
            class="text-transparent bg-gradient-to-r from-[#5BD066] to-[#27B43E] bg-clip-text text-base font-medium leading-[140%] sm:text-sm sm:text-[#27B43E]"
          >
            {iconText}
          </span>
          {#if icon}
            <img
              src={icon}
              alt={iconText ? `${iconText} icon` : "Icon"}
              class="w-5 h-5"
            />
          {/if}
        </a>
      </div>
    </div>
  </div>
</div>
