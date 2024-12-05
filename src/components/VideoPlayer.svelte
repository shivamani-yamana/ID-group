<script lang="ts">
  import { fade } from "svelte/transition";

  export let videoLink: string;
  export let captionsLink: string = "";

  let isPlaying = false;
  let isBuffering = false;
  let videoElement: HTMLVideoElement;

  const togglePlay = () => {
    if (videoElement.paused) {
      videoElement.play();
      isPlaying = true;
    } else {
      videoElement.pause();
      isPlaying = false;
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      videoElement.pause();
      isPlaying = false;
    } else {
      videoElement.play();
      isPlaying = true;
    }
  };
</script>

<div class="relative bg-gray-50 rounded-md shadow-md overflow-hidden w-full">
  <video
    bind:this={videoElement}
    src={videoLink}
    class="w-full h-auto bg-black"
    on:play={() => (isPlaying = true)}
    on:pause={() => (isPlaying = false)}
    on:waiting={() => (isBuffering = true)}
    on:playing={() => (isBuffering = false)}
    on:click={handleVideoClick}
  >
    <track
      kind="captions"
      src={captionsLink}
      srclang="en"
      label="English"
      default
    />
    Your browser does not support the video tag.
  </video>

  {#if isBuffering}
    <div class="absolute inset-0 flex items-center justify-center bg-black/40">
      <div
        class="w-12 h-12 border-4 border-gray-200 border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  {/if}

  {#if !isPlaying && !isBuffering}
    <button
      class="absolute inset-0 flex items-center justify-center bg-black/40 z-10"
      on:click={togglePlay}
      aria-label="Play"
    >
      <div
        class="w-16 h-16 bg-gray-800/70 rounded-full flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          stroke="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-10 h-10"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
    </button>
  {/if}

  {#if !isBuffering && videoElement?.ended}
    <div
      class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 text-white space-y-4"
    >
      <p class="text-lg font-semibold">Watch again</p>
      <button
        class="bg-gray-800/70 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        on:click={togglePlay}
        aria-label="Replay"
      >
        Replay
      </button>
    </div>
  {/if}
</div>
