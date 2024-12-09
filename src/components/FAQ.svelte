<script>
  import ContactUsButton from "./ContactUsButton.svelte";
import GetInTouch from "./GetInTouch.svelte";
  import Question from "./Question.svelte";

</script>
<section class="flex max-w-[428px] items-center justify-center px-4 pt-6 pb-16 rounded-t-[30px] rounded-b-none sm:rounded-t-none sm:max-w-full sm:px-20 sm:pt-10 sm:pb-0 sm:self-stretch">
    <div class="flex flex-col w-full gap-6 justify-between items-center sm:items-start max-w-[1280px] md:flex-row sm:gap-6">
      <div class="flex flex-col gap-[16px] items-center sm:align-self-stretch lg:w-[492px] lg:gap-[60px] lg:items-start lg:flex-shrink-0">
          <GetInTouch ButtonData="" HeadingData="Frequently Asked Questions" ParagraphData="Here is the list of FAQ’s about us and how we work. Got more questions? Feel free to reach us out" />
          <div class="hidden md:block">
              <ContactUsButton />
          </div>
      </div>
      <div class="flex flex-col items-start gap-[20px]">
          <Question />
          <Question />
          <Question />
          <Question />
      </div>
    </div>
</section>