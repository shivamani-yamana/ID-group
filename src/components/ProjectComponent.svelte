<script lang="ts">
  import crossIcon from "$lib/icons/cross.svg";
  import NextButton from "./NextButton.svelte";
  import PreviousButton from "./PreviousButton.svelte";
  import VideoPlayer2 from "./VideoPlayer2.svelte";

  const imgLink =
    "https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__";

  export let data: { name: string; description: string; projectUrl: string };

  let isModalOpen = false;

  // Open modal and focus on it
  function openModal() {
    isModalOpen = true;
    // Ensure focus is set to the modal for accessibility
    setTimeout(() => document.getElementById("modal")?.focus(), 0);
    document.body.style.overflow = "hidden"; // Disable scrolling
  }

  // Close modal and return focus to trigger button
  function closeModal() {
    isModalOpen = false;
    // Return focus to the triggering element
    setTimeout(
      () => document.getElementById("view-project-button")?.focus(),
      0
    );
    document.body.style.overflow = ""; // Re-enable scrolling
  }

  // Handle keyboard events (e.g., Escape key)
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
</script>

<!-- Project Card -->
<div
  class="h-[16rem] md:w-[50rem] md:h-[32.5rem] rounded-[10px] bg-cover relative overflow-clip bg-no-repeat"
  style="background-image: url(https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__); width: calc(100vw - 32px)"
>
  <div
    class="absolute bottom-0 w-full md:h-[7.75rem] h-[7.25rem] z-10 p-6 pt-0 flex md:flex-row flex-col justify-between"
  >
    <div class="w-full md:w-[28.5rem] md:gap-4 gap-2 self-end">
      <h3
        class="text-white text-[16px] font-inter-tight font-semibold leading-[140%] md:text-[24px] md:leading-[140%]"
      >
        {data.name}
      </h3>
      <p
        class="font-inter-tight md:text-[16px] font-light md:leading-[160%] text-[12px] text-[#EAEAEA] leading-[140%]"
      >
        {data.description}
      </p>
    </div>
    <div
      class="w-[6rem] md:w-[8.75rem] md:self-end self-auto flex items-center md:justify-end justify-start"
    >
      <button
        id="view-project-button"
        on:click={openModal}
        class="text-white font-inter-tight font-normal leading-[140%] underline md:text-xl text-[14px]"
      >
        View Project
      </button>
    </div>
  </div>
  <div
    class="w-full md:h-[13.75rem] h-[8rem] absolute bottom-0 z-0"
    style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);"
  ></div>
</div>

<!-- Modal -->
{#if isModalOpen}
  <div
    id="modal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <div
      class="relative w-full max-w-[24.75rem] h-[518px] md:max-w-[1100px] md:h-full md:max-h-[740px] bg-white pb-[20px] md:pb-[38px] rounded-lg shadow-lg flex flex-col gap-[24px] md:gap-[32px["
    >
      <div
        class="w-full p-[16px] md:p-[20px_32px] flex justify-between border-b border-black/10"
      >
        <h3
          id="modal-title"
          class="text-[20px] md:text-[24px] font-playfairDisplay font-[500] leading-[140%]"
        >
          {data.name}
        </h3>
        <button on:click={closeModal} class="" aria-label="Close Modal">
          <img
            src={crossIcon}
            alt="Close"
            class="w-6 h-6 md:w-8 md:h-8"
            style="filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);"
          />
        </button>
      </div>
      <p
        id="modal-description"
        class="font-inter-tight text-[14px] md:text-[18px] font-[300] leading-[160%] p-[0px_16px] md:p-[0px_32px]"
      >
        {data.description}
      </p>
      <div class="p-[0px_16px] md:p-[0px_32px]">
        <div class="flex space-x-4 flex-col md:flex-row">
          <!-- Main Video Section -->
          <div class="relative w-full md:w-[calc(100%-238px)]">
            <VideoPlayer2
              videoLink="https://s3-figma-videos-production-sig.figma.com/video/1246348018179354930/TEAM/ffd0/a01b/-d551-49c2-aa7b-5f9196e602dc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8hzfFyelU779viIAScNTNEsthOFbNYhqPFZlFuWNXGzWqbTl~ZIfaRTEsJOg-Qge9q5mtx5CUDoMHuYYTPe3dmOj0hbLoACKJgMwYBrcxUqgXUpFm17D1VFYLftGOiiS9UcjmpSaPShysJXQJNUevAOFvuzjo-1JmhQAtUaMZ-tSMkzbRvDXZ8xY6S6vLsXTjDMfKx2IXbXtzQcWVQDjA~TXy0sPa69O9FqPAOQkGejJDBXcy8n1BmEpDRzXZu-5y5Zo026UXzIUbGepAsDSWnlFkVJXC7RrLQZI7W4xKygbjbRUo99fVdEhiQFdS8-UAaY7EAoT9xbI8OkNDSKZw__"
            />

            <!-- Navigation Buttons -->
            <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
              <PreviousButton onPrevious={() => {}} />
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
              <NextButton onNext={() => {}} />
            </div>
          </div>

          <!-- Thumbnail Gallery -->
          <div
            class="w-full md:w-[238px] space-y-4 flex md:flex-col gap-[10px] md:gap-[4px]"
          >
            <div
              class="relative top-4 -left-4 md:-left-0 md:top-0 w-[114px] h-[76px] md:w-full md:h-[156px]"
            >
              <img
                src={imgLink}
                alt="Thumbnail"
                class="w-full h-auto object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
            <!-- More Thumbnails -->
            <div
              class="relative -left-4 md:-left-0 w-[114px] h-[76px] md:w-full md:h-[156px]"
            >
              <img
                src={imgLink}
                alt="Thumbnail"
                class="w-full h-auto object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
            <!-- 10+ Thumbnails -->
            <div
              class="relative flex items-center justify-center w-[114px] -left-4 md:-left-0 md:w-full h-[76px] md:h-[156px]"
            >
              <span
                class="absolute z-50 inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 text-white text-xl font-[500] font-inter-tight leading-[120%] rounded-lg text-[31.652px] md:text-[70px]"
                >10+</span
              >
              <img
                src={imgLink}
                alt="Thumbnail"
                class="w-full h-auto object-cover rounded-lg opacity-40 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
