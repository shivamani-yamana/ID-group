<script>
    export let Label = "Label";
    export let Value = "Value";

    let inputValue = "";

    import IndiaFlag from "/src/lib/images/india-flag.svg";
    import dropDown from "/src/lib/images/drop-down.svg";
</script>

<div class="flex flex-col items-start gap-3">
    <span class="text-[#292929] font-inter-tight text-sm leading-[160%] sm:text-base sm:leading-[160%]">
        {Label}
    </span>

    <div class="flex w-full max-w-[348px] h-[48px] px-[12px] py-[10px] items-center gap-[10px] rounded-[4px] border-[1px] border-[#0000001A] sm:w-auto sm:h-[50px] sm:px-[12px] sm:py-[10px] sm:gap-[10px] sm:rounded-[6px] sm:border-[1px] sm:border-[#0000001A] sm:self-stretch">
        <div class="flex w-[89px] h-[50px] p-[10px_8px] items-center gap-[8px] flex-wrap border-r border-[#0000001A]">
            <div class="flex items-center gap-[4px]">
                <img src={IndiaFlag} alt="India Flag" class="w-5 h-5" />
                <span class="text-[#9D9D9D] font-inter-tight font-light text-[12px] leading-[160%] sm:text-[16px] sm:leading-[160%]">+91</span>
                <button>
                    <img src={dropDown} alt="" class="w-[20px] h-[20px]">
                </button>
            </div>
        </div>
        <input class="text-[#9D9D9D] font-inter-tight font-light text-[12px] leading-[140%] sm:text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 sm:leading-[140%] focus:text-black"
        bind:value={inputValue}
        type="text" 
        name=""
        placeholder={Value}
        >
    </div>
    
    <!-- <input
        type="text"
        bind:value={inputValue}
        class="flex w-full items-center gap-2.5 max-w-[348px] h-[48px] p-[12px_16px] border border-[#0000001A] rounded-[4px] sm:w-full sm:max-w-[546px] sm:h-auto sm:rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500
        text-[#9D9D9D] font-inter-tight text-xs leading-[160%] sm:text-base sm:leading-[160%] focus:text-black"
        placeholder={Value}
    > -->

    <!-- Make text black once the user has typed in -->
    <style>
        input:not(:placeholder-shown) {
            color: black;
        }
    </style>
</div>
