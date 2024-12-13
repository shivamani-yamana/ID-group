<script lang="ts">
  import CompareImageSlider from "./CompareImageSlider.svelte";
</script>

<div>
  <div
    class="px-4 md:px-20 flex justify-between flex-col md:flex-row justif-start md:items-center items-start md:justify-between gap-6 md:gap-auto"
  >
    <h2
      class="md:text-[40px] font-playfairDisplay font-medium md:leading-[48px] text-gray-900 text-[24px] leading-[28.8px] md:w-[13.75rem]"
    >
      How does it work
    </h2>
    <p
      class="font-inter-tight md:text-[20px] font-light md:leading-[30px] text-[#545454] text-[14px] leading-[21px] md:w-[35.625rem]"
    >
      Experience a hassle-free journey from concept to completion.<br />Our
      streamlined process is designed to make your interior design project
      smooth and enjoyable
    </p>
  </div>
  <div class="py-10 px-4 md:px-20">
    <CompareImageSlider
      height="h-[16.25rem] md:h-[32.5rem]"
      beforeImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      afterImage="https://plus.unsplash.com/premium_photo-1664301231899-5a7b1a621238?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  </div>
  <!-- Consultation Section -->
  <div class="flex flex-col gap-8 w-full">
    <div class="w-full px-4 md:px-20">
      <div class="w-full h-fit flex relative">
        <div
          class="h-[6px] w-full bg-white absolute justify-center self-center"
        ></div>
        <div class="w-full flex justify-between z-10">
          <!-- Consultation -->
          <div
            class="flex items-center justify-center w-[56px] md:w-[72px] p-[14px] bg-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M18 3C9.71667 3 3 9.42536 3 17.3501C3 21.1577 4.55 24.6173 7.07834 27.1847C7.635 27.75 8.00667 28.5222 7.85667 29.3172C7.60913 30.6168 7.04811 31.8291 6.22667 32.8395C8.38793 33.2415 10.6352 32.8796 12.5625 31.8546C13.2438 31.4924 13.5844 31.3112 13.8248 31.2744C14.0652 31.2377 14.4095 31.3023 15.0981 31.4318C16.0548 31.6113 17.0261 31.7015 18 31.7001C26.2833 31.7001 33 25.2749 33 17.3501C33 16.0164 32.8098 14.7252 32.4539 13.5"
                stroke="#292929"
                stroke-width="3.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 9C21 9 22.5 9 24 12C24 12 28.7647 4.5 33 3"
                stroke="#292929"
                stroke-width="3.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.9932 18H18.0067M23.9865 18H24M12 18H12.0135"
                stroke="#292929"
                stroke-width="4.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <!-- Design Icon -->
          <div
            class="flex items-center justify-center w-[56px] md:w-[72px] p-[14px] bg-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M23.0419 12.8335V11.6668C23.0419 7.26705 23.0419 5.06717 21.675 3.70033C20.3082 2.3335 18.1083 2.3335 13.7086 2.3335H12.542C8.14225 2.3335 5.94238 2.3335 4.57554 3.70032C3.20871 5.06714 3.20869 7.267 3.20865 11.6667L3.20862 16.3335C3.20857 20.7332 3.20856 22.9331 4.57535 24.3C5.94218 25.6667 8.14214 25.6668 12.5419 25.6668"
                stroke="#BDBDBD"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.45862 8.1665H17.7919M8.45862 13.9998H17.7919"
                stroke="#BDBDBD"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <path
                d="M15.4586 24.2981V25.6668H16.8275C17.3052 25.6668 17.544 25.6668 17.7586 25.5779C17.9734 25.4889 18.1422 25.3201 18.48 24.9825L24.1075 19.3545C24.426 19.036 24.5853 18.8767 24.6704 18.705C24.8325 18.3781 24.8325 17.9944 24.6704 17.6675C24.5853 17.4956 24.426 17.3364 24.1075 17.0179C23.7889 16.6994 23.6297 16.5401 23.4578 16.4549C23.1309 16.293 22.7471 16.293 22.4202 16.4549C22.2484 16.5401 22.0891 16.6994 21.7706 17.0179L16.143 22.6459C15.8053 22.9835 15.6365 23.1523 15.5476 23.367C15.4586 23.5818 15.4586 23.8205 15.4586 24.2981Z"
                stroke="#BDBDBD"
                stroke-width="2.5"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <!-- Installation -->
          <div
            class="flex items-center justify-center w-[56px] md:w-[72px] p-[14px] bg-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M25.6667 7.87484H22.413C21.7117 7.87484 21.361 7.87484 21.0303 7.77471C20.6997 7.6746 20.4079 7.4801 19.8244 7.09107C18.9491 6.50754 17.9506 5.84186 17.4545 5.69168C16.9586 5.5415 16.4325 5.5415 15.3805 5.5415C13.95 5.5415 13.0278 5.5415 12.3846 5.80792C11.7415 6.07434 11.2357 6.58015 10.2241 7.59176L9.3338 8.48202C9.10582 8.71 8.99183 8.82399 8.92145 8.93653C8.66059 9.35372 8.6895 9.88973 8.99372 10.2764C9.07579 10.3808 9.20138 10.4818 9.45255 10.684C10.381 11.4311 11.7194 11.3565 12.5601 10.5108L14 9.06234H15.1667L22.1667 16.104C22.811 16.7522 22.811 17.803 22.1667 18.4512C21.5223 19.0994 20.4777 19.0994 19.8333 18.4512L19.25 17.8644M19.25 17.8644L15.75 14.3436M19.25 17.8644C19.8944 18.5126 19.8944 19.5635 19.25 20.2116C18.6057 20.8598 17.561 20.8598 16.9167 20.2116L15.75 19.0381M15.75 19.0381C16.3944 19.6861 16.3944 20.7371 15.75 21.3853C15.1057 22.0334 14.061 22.0334 13.4167 21.3853L11.6667 19.6248M15.75 19.0381L13.4167 16.7047M11.6667 19.6248L11.0833 19.0381M11.6667 19.6248C12.311 20.273 12.311 21.3239 11.6667 21.9721C11.0224 22.6202 9.97768 22.6202 9.33334 21.9721L6.03911 18.6092C5.36219 17.9182 5.02372 17.5727 4.59009 17.3904C4.15645 17.2081 3.67277 17.2081 2.70544 17.2081H2.33334"
                stroke="#BDBDBD"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.6667 17.2085H22.75"
                stroke="#BDBDBD"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <path
                d="M9.91668 7.875H2.33334"
                stroke="#BDBDBD"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- Description -->
    <div class="w-full px-0 md:px-20">
      <div
        class="grid md:grid-cols-3 grid-cols-1 bg-white divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0 rounded-t-lg md:rounded-lg"
      >
        <!-- 1st Box -->
        <div class="px-4 py-5 md:py-9 flex gap-8">
          <div
            class="w-[64px] h-[64px] flex items-center justify-center rounded-full bg-[#F4F4F4]"
          >
            <h3
              class="font-inter-tight text-[28px] font-light italic leading-[33.6px] text-[#111]"
            >
              01
            </h3>
          </div>
          <div class="w-[18.25rem] h-fit flex flex-col gap-[14px]">
            <h2
              class="md:text-[32px] font-playfairDisplay font-medium text-[var(--Foundation-text-text-500,#292929)] text-[18px] leading-[120%]"
            >
              Consultation
            </h2>
            <p
              class="font-inter-tight md:text-[16px] font-light md:leading-[25.6px] text-[var(--Foundation-text-text-400,#545454)] text-[14px] leading-[22.4px]"
            >
              Schedule a free consultation to discuss your needs and preferences
            </p>
          </div>
        </div>

        <!-- Design Box -->

        <div class="px-4 py-5 md:py-9 flex gap-8">
          <div
            class="w-[64px] h-[64px] flex items-center justify-center rounded-full bg-[#F4F4F4]"
          >
            <h3
              class="font-inter-tight text-[28px] font-light italic leading-[33.6px] text-[#111]"
            >
              02
            </h3>
          </div>
          <div class="w-[18.25rem] h-fit flex flex-col gap-[14px]">
            <h2
              class="md:text-[32px] font-playfairDisplay font-medium md:leading-[38.4px] text-[var(--Foundation-text-text-500,#292929)] text-[18px] leading-[21.6px]"
            >
              Design & Measure
            </h2>
            <p
              class="font-inter-tight md:text-[16px] font-light md:leading-[25.6px] text-[var(--Foundation-text-text-400,#545454)] text-[14px] leading-[22.4px]"
            >
              We create a custom design and take precise measurement
            </p>
          </div>
        </div>
        <!-- Installation Box -->

        <div class="px-4 py-5 md:py-9 flex gap-8">
          <div
            class="w-[64px] h-[64px] flex items-center justify-center rounded-full bg-[#F4F4F4]"
          >
            <h3
              class="font-inter-tight text-[28px] font-light italic leading-[33.6px] text-[#111]"
            >
              03
            </h3>
          </div>
          <div class="w-[18.25rem] h-fit flex flex-col gap-[14px]">
            <h2
              class="md:text-[32px] font-playfairDisplay font-medium md:leading-[38.4px] text-[var(--Foundation-text-text-500,#292929)] text-[18px] leading-[21.6px]"
            >
              Installation
            </h2>
            <p
              class="font-inter-tight md:text-[16px] font-light md:leading-[25.6px] text-[var(--Foundation-text-text-400,#545454)] text-[14px] leading-[22.4px]"
            >
              Our professional team installs your invisible grills in just 3
              days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
