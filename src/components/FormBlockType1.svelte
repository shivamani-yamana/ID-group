<script>
    export let Label = "Label";
    export let Value = "Value";

    let inputValue = "";
</script>

<div class="flex flex-col items-start gap-3">
    <span class="text-[#292929] font-inter-tight text-sm leading-[160%] sm:text-base sm:leading-[160%]">
        {Label}
    </span>

    <input
        type="text"
        bind:value={inputValue}
        class="flex w-full items-center gap-2.5 max-w-[348px] h-[48px] p-[12px_16px] border border-[#0000001A] rounded-[4px] sm:w-full sm:max-w-[546px] sm:h-auto sm:rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500
        text-[#9D9D9D] font-inter-tight text-xs leading-[160%] sm:text-base sm:leading-[160%] focus:text-black"
        placeholder={Value}
    >

    <!-- Make text black once the user has typed in -->
    <style>
        input:not(:placeholder-shown) {
            color: black;
        }
    </style>
</div>
