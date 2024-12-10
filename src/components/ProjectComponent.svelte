<script lang="ts">
  export let data: { name: string; description: string; projectUrl: string };
</script>

<div
  class="w-[24.75rem] h-[16rem] md:w-[50rem] md:h-[32.5rem] rounded-[10px] bg-cover relative overflow-clip bg-no-repeat"
  style="background-image: url(https://s3-alpha-sig.figma.com/img/f3f9/caaf/8869d96b2b22b4dc09b9022b29ce890e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3eMlWjRAT8aE-cm83Q~-xCMB59w9gJ4qBjPpp-G1ZUlcRuh8Q5IiL024vqueBFWeeDs0nvBjHij~Gj0p7SHRIy3Mug-VcOI0m3-9w3zRoND635y2qRWgUFQvryvoQ5bvi~Do9TDB8gfiIJBjoPy-SVrSh6WvgWqIPe4CQNwjZqM~cq0FXLlsbXLaP~~lfF3qxKEws8GFc7JW5Sybqjn1g2CmTcjoZwWRPTyZ71hU0ZPZ6Qc-fMWZHr-Ui~0vojHbz-rEzSjsknGZjqcE6C6gZbSqQHfgPrKza5tlhEEk19gnKXkLeEXY1Re2VRRVd9Hsn3a6VGFNOoop5YPy6k2fw__);"
>
  <!-- bottom container -->
  <div
    class="absolute bottom-0 w-full md:h-[7.75rem] h-[7.25rem] z-10 p-6 pt-0 flex md:flex-row flex-col justify-between"
  >
    <!-- About project title and para -->
    <div class="w-full md:w-[28.5rem] md:gap-4 gap-2 self-end">
      <h3
        class="text-white text-[16px] font-inter-tight font-semibold leading-[140%] md:text-[24px] md:leading-[140%]"
      >
        {data.name}
      </h3>
      <p
        class="font-inter-tight md:text-[16px] font-light md:leading-[160%] text-[12px] text-[#EAEAEA] leading-[140%] tracking-[-0.24px] md:tracking-normal"
      >
        {data.description}
      </p>
    </div>
    <!-- View Details of project -->
    <div
      class="w-[6rem] md:w-[8.75rem] md:self-end self-auto flex items-center md:justify-end justify-start md:gap-2 gap-1"
    >
      <a
        href={data.projectUrl}
        class="text-white font-inter-tight font-normal leading-[140%] underline decoration-solid decoration-skip-ink-none custom-underline md:text-xl text-[14px]"
      >
        View Project
      </a>
      <div class="md:w-6 md:h-6 h-4 w-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_886_5969)">
            <path
              d="M5 12H19"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.9999 16L18.9999 12"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.9999 7.99951L18.9999 11.9995"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_886_5969">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
  <div
    class="w-full md:h-[13.75rem] h-[8rem] absolute bottom-0 z-0"
    style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);"
  ></div>
</div>
