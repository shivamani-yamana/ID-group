<script>
  import FormBlockType1 from "./FormBlockType1.svelte";
  import FormBlockType2 from "./FormBlockType2.svelte";
  import FormBlockType3 from "./FormBlockType3.svelte";

</script>
<div class="flex w-full justify-center items-center rounded-lg bg-[#F3F0EB] flex-col max-w-[396px] h-[537px] p-[20px_12px_19px_12px] sm:flex-row sm:max-w-[626px] sm:h-[582px] sm:p-5">
    <form class="flex gap-8 w-full rounded-md bg-white shadow-[0px_15px_25px_0px_rgba(0,0,0,0.03)] flex-col max-w-[372px] h-[498px] p-[17px_12px_16px_12px] sm:gap-10 sm:max-w-[586px] sm:h-[542px] sm:p-5 sm:flex-shrink-0">
        <div class="flex flex-col gap-5">
            <FormBlockType1 Label="Name" Value="John Doe" />
            <FormBlockType2 Label="Phone No" Value="000-000-0000" />
            <FormBlockType1 Label="Property Location" Value="Enter location of property" />
            <FormBlockType3 Label="Service Request" Value="Select Request" />
        </div>

        <div class="flex w-full justify-center items-center gap-2.5 max-w-[348px] h-[48px] p-[12px_16px] rounded-full bg-[#111] sm:w-[140px] sm:h-[50px] sm:rounded-[50px] sm:max-w-full">
            <button type="submit" class="text-white font-inter-tight text-xs font-normal leading-[140%] sm:text-base sm:leading-[140%]">
                Submit
            </button>
        </div>
    </form>
</div>

