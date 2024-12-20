<script>
    import crossIcon from "$lib/icons/cross.svg";
    import NextButton from "./NextButton.svelte";
    import PreviousButton from "./PreviousButton.svelte";
    import VideoPlayer2 from "./VideoPlayer2.svelte";
  
    import imgLink from "$lib/images/Project_Gallery.png";
    import VideoPlayer from "./VideoPlayer.svelte";
    export let data;
    export let closeModal;
    let index = 0;
  </script>
  
  <div
    id="modal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <div
      class="relative w-full max-w-[24.75rem] h-[518px] lg:max-w-[1100px] lg:h-full lg:max-h-[740px] bg-white pb-[20px] lg:pb-[38px] rounded-lg shadow-lg flex flex-col gap-[24px] lg:gap-[32px]"
    >
      <div class="w-full p-[16px] lg:p-[20px_32px] flex justify-between border-b border-black/10">
        <h3
          id="modal-title"
          class="text-[20px] lg:text-[24px] font-playfairDisplay font-[500] leading-[140%]"
        >
          {data.name}
        </h3>
        <button
          on:click={closeModal}
          class=""
          aria-label="Close Modal"
        >
          <img
            src={crossIcon}
            alt="Close"
            class="w-6 h-6 lg:w-8 lg:h-8"
            style="filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);"
          />
        </button>
      </div>
      <p
        id="modal-description"
        class="font-inter-tight text-[14px] lg:text-[18px] font-[300] leading-[160%] p-[0px_16px] lg:p-[0px_32px]"
      >
        {data.description}
      </p>
      <div class="p-[0px_16px] lg:p-[0px_32px]">
        <div class="flex flex-col lg:flex-row gap-2">
          <!-- Main Video Section -->
          <div class="relative w-full lg:w-[calc(100%-238px)]">
            {#if data.videoOrImage[index].endsWith(".mp4")}
            <VideoPlayer2 videoLink={data.videoOrImage[index]} />
            {:else}
            <img
              class="w-full h-[240px] lg:h-[508px] bg-black object-cover rounded-lg cursor-pointer"
              src={data.videoOrImage[index]}
              alt=""
            />
            {/if}
            <!-- Navigation Buttons -->
            <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
              <PreviousButton
                onPrevious={(index != 0) ? () => { index--; } : () => {}}
              />
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
              <NextButton
                onNext={(index != data.videoOrImage.length - 1) ? () => { index++; } : () => {}}
              />
            </div>
          </div>
  
          <!-- Thumbnail Gallery -->
          <div class="w-full lg:w-[238px] flex lg:flex-col gap-[11px] lg:gap-[19px]">
            {#if index + 1 < data.videoOrImage.length}
            <div
              class="w-[114px] h-[86px] lg:w-full lg:h-[156px] items-center bg-black justify-center flex rounded-lg relative overflow-hidden"
            >
              <div
                class="z-10 absolute inset-0"
                style="filter: blur(0.5px); background: rgba(0, 0, 0, 0.3); mix-blend-mode: luminosity; backdrop-filter: blur(2px);"
              ></div>
              {#if data.videoOrImage[index + 1].endsWith(".mp4")}
              <VideoPlayer videoLink={data.videoOrImage[index + 1]} />
              {:else}
              <img
                class="w-full h-full object-cover rounded-lg cursor-pointer"
                src="{data.videoOrImage[index + 1]}"
                alt=""
              />
              {/if}
            </div>
            {/if}
  
            {#if index + 2 < data.videoOrImage.length}
            <div
              class="w-[114px] h-[86px] lg:w-full lg:h-[156px] items-center bg-black justify-center flex rounded-lg relative overflow-hidden"
            >
              <div
                class="z-10 absolute inset-0"
                style="filter: blur(0.5px); background: rgba(0, 0, 0, 0.3); mix-blend-mode: luminosity; backdrop-filter: blur(2px);"
              ></div>
              {#if data.videoOrImage[index + 2].endsWith(".mp4")}
              <VideoPlayer videoLink={data.videoOrImage[index + 2]} />
              {:else}
              <img
                class="w-full h-full object-cover rounded-lg cursor-pointer"
                src="{data.videoOrImage[index + 2]}"
                alt=""
              />
              {/if}
            </div>
            {/if}
  
            {#if index + 3 < data.videoOrImage.length}
            <div
              class="relative w-[114px] h-[86px] lg:w-full lg:h-[156px] items-center bg-black justify-center flex rounded-lg overflow-hidden"
            >
              <div
                class="z-10 absolute inset-0"
                style="filter: blur(2px); background: rgba(0, 0, 0, 0.3); mix-blend-mode: luminosity; backdrop-filter: blur(2px);"
              ></div>
              {#if data.videoOrImage[index + 3].endsWith(".mp4")}
              <VideoPlayer videoLink={data.videoOrImage[index + 3]} />
              {:else}
              <img
                class="w-full h-full object-cover rounded-lg cursor-pointer"
                src="{data.videoOrImage[index + 3]}"
                alt=""
              />
              {/if}
  
              <!-- Remaining Count -->
              {#if data.videoOrImage.length > index + 4}
              <span
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-[70px] font-inter-tight z-10"
              >
                {data.videoOrImage.length - (index + 4)}+
              </span>
              {/if}
            </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
  