<script lang="ts">
  export let beforeImage: string;
  export let afterImage: string;

  let container: HTMLDivElement;
  let isDragging = false;
  let position = 50;

  function handleMouseDown(event: MouseEvent) {
    event.stopPropagation(); // Prevent the event from triggering parent handlers
    isDragging = true;
    handleMouseMove(event);
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    position = (x / rect.width) * 100;
  }

  function handleMouseUp() {
    isDragging = false;
  }
  function handleTouchMove(event: TouchEvent) {
    event.stopPropagation(); // Prevent the event from triggering parent handlers
    if (!isDragging) return;

    const touch = event.touches[0];
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    position = (x / rect.width) * 100;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      position = Math.max(0, position - 1);
    } else if (event.key === "ArrowRight") {
      position = Math.min(100, position + 1);
    }
  }
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
  bind:this={container}
  class="relative w-full aspect-[4/3] select-none overflow-hidden rounded-lg"
  role="group"
  aria-label="Image comparison"
  on:mouseup={handleMouseUp}
  on:mouseleave={handleMouseUp}
  on:mousemove={handleMouseMove}
  on:touchend|preventDefault|stopPropagation={handleMouseUp}
  on:touchcancel|preventDefault|stopPropagation={handleMouseUp}
  on:touchmove|preventDefault|stopPropagation={handleTouchMove}
  on:touchstart|stopPropagation={() => (isDragging = true)}
>
  <!-- After image (full width) -->
  <img
    src={afterImage}
    alt="After comparison"
    class="absolute inset-0 w-full h-full object-cover"
  />

  <!-- Before image (clipped) -->
  <div
    class="absolute inset-0"
    style="clip-path: inset(0 {100 - position}% 0 0)"
  >
    <img
      src={beforeImage}
      alt="Before comparison"
      class="w-full h-full object-cover"
    />
  </div>

  <!-- Slider handle -->
  <div
    role="slider"
    aria-label="Image comparison slider"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={position}
    tabindex="0"
    class="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize transform -translate-x-1/2"
    style="left: {position}%"
    on:mousedown={handleMouseDown}
    on:touchstart|preventDefault={() => (isDragging = true)}
    on:keydown={handleKeyDown}
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-lg flex items-center justify-center"
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_1546_685)">
          <rect width="50" height="50" rx="25" fill="white" />
          <path d="M10 25.25L21.25 15.5072V34.9928L10 25.25Z" fill="#292929" />
          <path d="M40 25.25L28.75 34.9928V15.5072L40 25.25Z" fill="#292929" />
        </g>
        <defs>
          <filter
            id="filter0_b_1546_685"
            x="-4"
            y="-4"
            width="58"
            height="58"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1546_685"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1546_685"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</div>

<style>
  /* Prevent text selection during dragging */
  :global(*) {
    user-select: none;
  }
</style>
