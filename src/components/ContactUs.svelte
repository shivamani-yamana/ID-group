<script>
  import ConnectWithUsOn from "./ConnectWithUsOn.svelte";
import ContactUsForm from "./ContactUsForm.svelte";
  import GetInTouch from "./GetInTouch.svelte";

</script>
<section class="flex max-w-[428px] items-center justify-center px-4 pt-6 pb-16 rounded-t-[30px] rounded-b-none md:rounded-t-none sm:max-w-full md:px-20 md:pt-10 md:pb-16 md:self-stretch">
  <div class="flex flex-col w-full gap-6 justify-between items-center md:items-start max-w-[1280px] md:flex-row md:gap-6">
    <div class="flex flex-col gap-[16px] items-center sm:align-self-stretch lg:w-[492px] lg:gap-[60px] lg:items-start lg:flex-shrink-0">
      <GetInTouch ButtonData="Contact Us" HeadingData="Get in Touch with IDStudio" ParagraphData="Have questions or ready to start your project? Contact us to discuss your needs and schedule a consultation. We’re here to assist you every step of the way!" />  
      <div class="hidden md:block">
        <ConnectWithUsOn />
      </div>
    </div>
    <ContactUsForm />
    <div class="md:hidden">
      <ConnectWithUsOn />
    </div>
  </div>
  
</section>