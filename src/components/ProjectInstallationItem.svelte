<script lang="ts">
  export let day: string;
  export let projectName: string;
  export let imageURL = "";
  export let onPrevious: () => void;
  export let onNext: () => void;
  export let currentSlide: number;
  export let totalSlides: number;
</script>

<div
  class="w-[24.75rem] h-[16rem] md:w-[50rem] md:h-[32.5rem] bg-cover relative overflow-clip bg-no-repeat"
  style={`background-image: url(${imageURL});`}
>
  <!-- bottom container -->
  <div
    class="absolute bottom-0 w-full md:h-[7.75rem] h-[7.25rem] z-10 p-6 pt-0 flex md:flex-row items-end justify-between"
  >
    <!-- About project title and para -->
    <div class="w-full md:w-[28.5rem] md:gap-4 gap-2 self-end">
      <h3
        class="text-white text-[20px] font-playfairDisplay font-medium leading-[140%] md:text-[40px] md:leading-[140%]"
      >
        {day}
      </h3>
      <p
        class="font-inter-tight md:text-[20px] font-light md:leading-[160%] text-[14px] text-[#EAEAEA] leading-[140%] tracking-[-0.24px] md:tracking-normal"
      >
        {projectName}
      </p>
    </div>
    <!-- View Details of project -->
    <div
      class="w-[6rem] md:w-[8.75rem] md:self-end self-auto flex items-center md:justify-end justify-start md:gap-5 gap-[10px]"
    >
      <button
        class={`flex items-center gap-[2px] md:gap-1 ${currentSlide != 0 ? "opacity-100" : "opacity-50"}`}
        on:click={onPrevious}
      >
        <!-- Icon Left -->
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="white"
          >
            <g clip-path="url(#clip0_1765_2185)">
              <path
                d="M8.82037 9.95957V2.11957C8.8204 2.03238 8.79716 1.94677 8.75306 1.87156C8.70895 1.79635 8.64558 1.73427 8.56948 1.69173C8.49338 1.64919 8.40731 1.62772 8.32014 1.62954C8.23297 1.63136 8.14787 1.6564 8.07361 1.70209L1.70361 5.62209C1.63227 5.66593 1.57335 5.72732 1.53248 5.80041C1.49161 5.87349 1.47015 5.95583 1.47015 6.03957C1.47015 6.12331 1.49161 6.20565 1.53248 6.27873C1.57335 6.35182 1.63227 6.41321 1.70361 6.45705L8.07361 10.377C8.14787 10.4227 8.23297 10.4478 8.32014 10.4496C8.40731 10.4514 8.49338 10.43 8.56948 10.3874C8.64558 10.3449 8.70895 10.2828 8.75306 10.2076C8.79716 10.1324 8.8204 10.0468 8.82037 9.95957Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1765_2185">
                <rect
                  width="11.76"
                  height="11.76"
                  fill="white"
                  transform="matrix(-1 0 0 -1 11.76 11.9199)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <h5
            class={`text-white text-[14px] md:text-[20px] font-normal font-inter-tight`}
          >
            Prev
          </h5>
        </div>
      </button>
      <!-- Icon Right -->
      <button
        class={`flex items-center gap-[2px] md:gap-1 ${currentSlide != totalSlides - 1 ? "opacity-100" : "opacity-50"}`}
        on:click={onNext}
      >
        <div>
          <h5
            class={`text-white text-[14px] md:text-[20px] font-normal font-inter-tight`}
          >
            Next
          </h5>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="white"
          >
            <g clip-path="url(#clip0_1765_2191)">
              <path
                d="M3.41962 2.12051V9.96051C3.41959 10.0477 3.44283 10.1333 3.48693 10.2085C3.53104 10.2837 3.59441 10.3458 3.67051 10.3883C3.74661 10.4309 3.83268 10.4524 3.91985 10.4505C4.00702 10.4487 4.09212 10.4237 4.16638 10.378L10.5364 6.45799C10.6077 6.41415 10.6666 6.35276 10.7075 6.27967C10.7484 6.20659 10.7698 6.12425 10.7698 6.04051C10.7698 5.95677 10.7484 5.87443 10.7075 5.80135C10.6666 5.72826 10.6077 5.66687 10.5364 5.62303L4.16638 1.70303C4.09212 1.65734 4.00702 1.6323 3.91985 1.63048C3.83268 1.62866 3.74661 1.65013 3.67051 1.69267C3.59441 1.73522 3.53104 1.79729 3.48693 1.8725C3.44283 1.94771 3.41959 2.03332 3.41962 2.12051Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1765_2191">
                <rect
                  width="11.76"
                  height="11.76"
                  fill="white"
                  transform="translate(0.47998 0.160156)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
    </div>
  </div>

  <div
    class="w-full md:h-[13.75rem] h-[8rem] absolute bottom-0 z-0"
    style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);"
  ></div>
</div>
