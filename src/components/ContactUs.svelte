<script>
  import ConnectWithUsOn from "./ConnectWithUsOn.svelte";
import ContactUsForm from "./ContactUsForm.svelte";
  import GetInTouch from "./GetInTouch.svelte";

</script>
<section class="flex max-w-[428px] items-center justify-center px-4 pt-6 pb-16 rounded-t-[30px] rounded-b-none sm:rounded-t-none sm:max-w-full sm:px-20 sm:pt-10 sm:pb-16 sm:self-stretch">
  <div class="flex flex-col w-full gap-6 justify-between items-center sm:items-start max-w-[1280px] sm:flex-row sm:gap-6">
    <div class="flex flex-col gap-[16px] items-center sm:align-self-stretch lg:w-[492px] lg:gap-[60px] lg:items-start lg:flex-shrink-0">
      <GetInTouch />  
      <div class="hidden sm:block">
        <ConnectWithUsOn />
      </div>
    </div>
    <ContactUsForm />
    <div class="sm:hidden">
      <ConnectWithUsOn />
    </div>
  </div>
  
</section>