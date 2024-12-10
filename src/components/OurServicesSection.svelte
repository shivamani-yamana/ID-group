<script lang="ts">
  import ServicesCard from "./ServicesCard.svelte";
  import SectionButton from "./SectionButton.svelte";
  import whatsappicon from "../lib/icons/whatsapp_icon.png";
  
  export let cardData;
  export let sectionTitle;
  export let headerText;
</script>

<div class="bg-pattern px-4 py-6 md:px-20 md:py-16">
  <div class="flex items-center flex-col gap-3 md:gap-5">
    <SectionButton text={sectionTitle} />
    <h2 class="text-center font-playfairDisplay font-medium text-2xl md:text-4xl text-gray-900">
      {@html headerText}
    </h2>

    <!-- Dynamically Render Service Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each cardData as card}
        <ServicesCard {...card} />
      {/each}
    </div>
  </div>
</div>

<style>
  .bg-pattern {
    background: linear-gradient(
        0deg,
        transparent 49.5%,
        /* Transparent area before stroke */ rgba(41, 41, 41, 0.03) 49.5%,
        /* Stroke color with 3% opacity */ rgba(41, 41, 41, 0.03) 50.5%,
        /* Stroke ends at 50.5% (1px thickness) */ transparent 50.5%,
        /* Transparent area after stroke */ transparent 20%,
        /* Transparent space before next stroke */ rgba(41, 41, 41, 0.03) 20%,
        /* Color section with 3% opacity */ rgba(41, 41, 41, 0.03) 21%,
        /* Stroke starts at 21% */ transparent 21%
          /* Transparent area after stroke */
      ),
      linear-gradient(
        90deg,
        transparent 49.5%,
        /* Transparent area before stroke */ rgba(41, 41, 41, 0.03) 49.5%,
        /* Stroke color with 3% opacity */ rgba(41, 41, 41, 0.03) 50.5%,
        /* Stroke ends at 50.5% (1px thickness) */ transparent 50.5%,
        /* Transparent area after stroke */ transparent 20%,
        /* Transparent space before next stroke */ rgba(41, 41, 41, 0.03) 20%,
        /* Color section with 3% opacity */ rgba(41, 41, 41, 0.03) 21%,
        /* Stroke starts at 21% */ transparent 21%
          /* Transparent area after stroke */
      );
    background-size: calc(100% / 6) calc(100% / 4); /* 6 columns, 4 rows pattern size */
    background-color: #f3f0eb; /* Background color */
    opacity: 1;
    width: 100%; /* Full width */
  }
</style>
