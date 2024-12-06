<script lang="ts">
  import ServicesCard from "./ServicesCard.svelte";
  import rightarrowicon from "../lib/icons/right_arrow.png";
  import whatsappicon from "../lib/icons/whatsapp_icon.png";
  import SectionButton from "./SectionButton.svelte";

  const cardData = [
    {
      cardImage:
        "https://s3-alpha-sig.figma.com/img/b874/b135/c7bf8d03db09915ec4108d8154c978d1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EaLpzRligVilvK2Meef~ShPx-Gx5UB5t4aYtefVvi0Uv30RltCuK97fLZzFYppofW4WIYtczK5dY-b6mKkkf2Vkku3xf~hOErfyZdLk3pOy9OtIr64UjX9uTXhxhA9F8aWKkFYBvsuhkrnx85LK~PDsIW4F8H16Ab8N-Hx0XspWlTt6DYvPKFc~M56eF~R~ojn~noesO1VG80oLdRO3zToRLjbwrNwG3m~dClzc2PMzsKdHArbxP8DWFF-72vR~zaAcyfzqsatK6R82hsAyrr7IgESaUNocNfml3C5k7ZXWcyoqmCI-U6Oe84wfDSleK8cyGsxYvBNWbFAL8XvYInQ__",
      heading: "Modular Kitchen Design",
      description:
        "Optimize your kitchen space with customized, stylish, and efficient modular designs.",
      iconText: "Contact Us",
      icon: rightarrowicon, // Passing as inline SVG
    },
    {
      cardImage:
        "https://s3-alpha-sig.figma.com/img/b874/b135/c7bf8d03db09915ec4108d8154c978d1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EaLpzRligVilvK2Meef~ShPx-Gx5UB5t4aYtefVvi0Uv30RltCuK97fLZzFYppofW4WIYtczK5dY-b6mKkkf2Vkku3xf~hOErfyZdLk3pOy9OtIr64UjX9uTXhxhA9F8aWKkFYBvsuhkrnx85LK~PDsIW4F8H16Ab8N-Hx0XspWlTt6DYvPKFc~M56eF~R~ojn~noesO1VG80oLdRO3zToRLjbwrNwG3m~dClzc2PMzsKdHArbxP8DWFF-72vR~zaAcyfzqsatK6R82hsAyrr7IgESaUNocNfml3C5k7ZXWcyoqmCI-U6Oe84wfDSleK8cyGsxYvBNWbFAL8XvYInQ__",

      heading: "Living Room Design",
      description:
        "Create a relaxing and functional living room with our expert designs.",
      iconText: "Contact Us",
      icon: rightarrowicon, // Another icon example
    },
    {
      cardImage:
        "https://s3-alpha-sig.figma.com/img/b874/b135/c7bf8d03db09915ec4108d8154c978d1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EaLpzRligVilvK2Meef~ShPx-Gx5UB5t4aYtefVvi0Uv30RltCuK97fLZzFYppofW4WIYtczK5dY-b6mKkkf2Vkku3xf~hOErfyZdLk3pOy9OtIr64UjX9uTXhxhA9F8aWKkFYBvsuhkrnx85LK~PDsIW4F8H16Ab8N-Hx0XspWlTt6DYvPKFc~M56eF~R~ojn~noesO1VG80oLdRO3zToRLjbwrNwG3m~dClzc2PMzsKdHArbxP8DWFF-72vR~zaAcyfzqsatK6R82hsAyrr7IgESaUNocNfml3C5k7ZXWcyoqmCI-U6Oe84wfDSleK8cyGsxYvBNWbFAL8XvYInQ__",

      heading: "Living Room Design",
      description:
        "Create a relaxing and functional living room with our expert designs.",
      iconText: "Contact Us",
      icon: rightarrowicon, // Another icon example
    },
    // Add more card objects here
  ];
</script>

<div class="bg-pattern px-4 py-6 md:px-20 md:py-16">
  <div class="flex items-center flex-col gap-3 md:gap-5">
    <SectionButton text="Our Services" />
    <h2
      class="text-center font-playfairDisplay font-medium text-2xl md:text-4xl text-gray-900"
    >
      Explore Our Comprehensive<br />
      Interior Design Services
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
