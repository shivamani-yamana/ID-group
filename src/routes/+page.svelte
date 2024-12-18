<script lang="ts">
  import VideoPlayer from "../components/VideoPlayer.svelte";
  import OurHighlightsSection from "../components/OurHighlightsSection.svelte";
  import OurServicesSection from "$components/OurServicesSection.svelte";
  import ContactUs from "$components/ContactUs.svelte";
  import TestimonialSectionLp from "$components/TestimonialSectionLp.svelte";
  import Faq from "$components/FAQ.svelte";
  import PhotosInstallationSection from "$components/PhotosInstallationSection.svelte";

  import ProjectGallerySection from "$components/ProjectGallerySection.svelte";
  import WhyChooseUs from "$components/WhyChooseUs.svelte";
  import HowItWorks from "$components/HowItWorks.svelte";
  import Frame1 from "/src/lib/images/frame1.svg";
  import Frame2 from "/src/lib/images/frame2.svg";
  import Frame3 from "/src/lib/images/frame3.svg";
  import Frame4 from "/src/lib/images/frame4.svg";
  import Frame5 from "/src/lib/images/frame5.svg";
  import ModularKitchen from "/src/lib/images/modular.png";

  interface CardData {
    Icon: string;
    Title: string;
    Description: string;
    Color1: string;
    Color2: string;
  }

  const WhyUscardData: CardData[] = [
    {
      Icon: Frame1,
      Title: "Custom Design & Efficiency",
      Description:
        "Tailored modular kitchens that optimize storage and functionality for your unique space.",
      Color1: "#ECFFeC",
      Color2: "#14B037",
    },
    {
      Icon: Frame2,
      Title: "Quality & Durability",
      Description:
        "High-quality materials and craftsmanship for long-lasting, beautiful results.",
      Color1: "#F6F4FF",
      Color2: "#855CFE",
    },
    {
      Icon: Frame3,
      Title: "End to End Handling",
      Description:
        "We manage every aspect of your project from start to finish, ensuring a seamless and stress-free experience",
      Color1: "#E8F3FF",
      Color2: "#1D6AC4",
    },
    {
      Icon: Frame4,
      Title: "After Sales Support",
      Description:
        "Comprehensive support ensures your continued satisfaction long after project completion",
      Color1: "#FFF7EF",
      Color2: "#FF9327",
    },
    {
      Icon: Frame5,
      Title: "Years of Experience",
      Description:
        "Decades of expertise ensure exceptional quality and results in every project we undertake",
      Color1: "#FFEEFA",
      Color2: "#F039B3",
    },
  ];

  import rightarrowicon from "../lib/icons/right_arrow.png";
  import InvisibleService from "../lib/images/invisible_service.png";
  import homeInteriorService from "../lib/images/home_interior.png";
  import Navbar from "$components/Navbar.svelte";

  const ServiceCardData = [
    {
      cardImage: ModularKitchen,
      heading: "Modular Kitchen Design",
      description:
        "Optimize your kitchen space with customized, stylish, and efficient modular designs.",
      iconText: "Contact Us",
      icon: rightarrowicon, // Passing as inline SVG
    },
    {
      cardImage: InvisibleService,
      heading: "Invisible Grills ",
      description:
        "Enjoy unobstructed views and enhanced safety with our sleek, durable invisible grills.",
      iconText: "Contact Us",
      icon: rightarrowicon, // Another icon example
    },
    {
      cardImage: homeInteriorService,
      heading: "Home Interior Design",
      description:
        "Transform your living spaces with personalized interior solutions that blend beauty and functionality.",
      iconText: "Contact Us",
      icon: rightarrowicon, // Another icon example
    },
  ];

  const testimonials = [
    {
      testimonialText:
        "“ Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures ”",
      customerName: "John Doe",
      customerContext: "Founder, InnovaTech Solutions",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37fc/d134/0ce8427e5730e78585b432b1eea5d095",
      videoLink:
        "https://s3-figma-videos-production-sig.figma.com/video/1246348018179354930/TEAM/52df/6aa8/-4748-4bca-8ee5-3fb2feda8c2c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=obIW7hjJKVaz1D05wGvhzZMIvt-oe01ZJO2XU17AwEGi2T6L1UoOZZTz8SYg9~8SXdeXxyDkJsWVjZLhmrScyzkxyhIkWSaU9z3CDaJzT3QjbLHtjIxJHXmbgm9MlmPUT870v3nHx~ZIlLXEn0f1bxEEn1WKindYYQJP0f8BIXwlIw04nstwGrUcy6Ybzm-QqHL8BlhFBXbtAmuYI72SXjIrO0OAY9bCw2FfVXyzJ~DNGX9zd1vw65eDrLce~CAl~Ypa~B3Fq9LN3BCW7us~zZ8fw1rlrqmEJIU0KearWSpaK0ER3DigxWhxLqCesM6MGmKke-HzqUjQv5zJMEpp-w__",
    },
    {
      testimonialText:
        "“ Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures ”",
      customerName: "Jane Smith",
      customerContext: "CEO, Bright Future Inc.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37fc/d134/0ce8427e5730e78585b432b1eea5d095",
      videoLink:
        "https://s3-figma-videos-production-sig.figma.com/video/1246348018179354930/TEAM/52df/6aa8/-4748-4bca-8ee5-3fb2feda8c2c",
    },
    {
      testimonialText:
        "“ Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures ”",
      customerName: "Michael Johnson",
      customerContext: "Founder, TechWave",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37fc/d134/0ce8427e5730e78585b432b1eea5d095",
      videoLink:
        "https://s3-figma-videos-production-sig.figma.com/video/1246348018179354930/TEAM/52df/6aa8/-4748-4bca-8ee5-3fb2feda8c2c",
    },
  ];
</script>

<svelte:head>
  <title>INDUS DESIGN STUDIO</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Navbar />

<section class="pt-24">
  <div class="flex flex-col md:gap-[6.25rem] gap-[4rem]">
    <div
      class="flex flex-col gap-10 px-4 pt-[7px] pb-[7px] md:pt-10 md:pb-[60px] md:px-20 w-full justify-center"
    >
      <div
        class="text-[#292929] text-center md:text-left flex md:flex-row flex-col justify-between items-center w-full md:gap-0 gap-3"
      >
        <h1
          class="font-playfairDisplay text-[28px] md:text-[50px] font-medium md:leading-[70px] leading-8 w-full md:w-[510px]"
        >
          Transform Your Space<br />with IDStudio
        </h1>
        <p
          class="font-inter-tight text-[14px] md:text-[20px] font-light md:leading-[32px] leading-[19.2px] w-[364px] md:w-[518px] text-[#707070]"
        >
          Elevate your home with our expert interior design solutions, from
          invisible grills to modular kitchens and personalized interiors,
          ensuring style and functionality in every corner.
        </p>
      </div>
      <div
        class="flex justify-center items-center self-stretch w-full md:h-[540px] overflow-clip rounded-md"
      >
        <VideoPlayer
          videoLink="https://s3-figma-videos-production-sig.figma.com/video/1246348018179354930/TEAM/ffd0/a01b/-d551-49c2-aa7b-5f9196e602dc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8hzfFyelU779viIAScNTNEsthOFbNYhqPFZlFuWNXGzWqbTl~ZIfaRTEsJOg-Qge9q5mtx5CUDoMHuYYTPe3dmOj0hbLoACKJgMwYBrcxUqgXUpFm17D1VFYLftGOiiS9UcjmpSaPShysJXQJNUevAOFvuzjo-1JmhQAtUaMZ-tSMkzbRvDXZ8xY6S6vLsXTjDMfKx2IXbXtzQcWVQDjA~TXy0sPa69O9FqPAOQkGejJDBXcy8n1BmEpDRzXZu-5y5Zo026UXzIUbGepAsDSWnlFkVJXC7RrLQZI7W4xKygbjbRUo99fVdEhiQFdS8-UAaY7EAoT9xbI8OkNDSKZw__"
        />
      </div>
    </div>
    <OurHighlightsSection />
    <div class="w-full px-4 md:px-20 py-[0rem]">
      <TestimonialSectionLp
        testimonialHeader="Here’s what others have to say<br />about INDUS Studio"
        {testimonials}
        bgColor="#DFE0AF"
      />
    </div>
    <div id="service" class="-mt-[100px] pt-[100px]">
      <OurServicesSection
        cardData={ServiceCardData}
        sectionTitle="Our Services"
        headerText="Explore Our Comprehensive<br/>Interior Design Services"
      />
    </div>
    <div class="w-full">
      <PhotosInstallationSection />
    </div>

    <div id="project-gallery" class="-mt-[100px] pt-[100px]">
      <div class="w-full]">
        <ProjectGallerySection />
      </div>
    </div>

    <div class="flex flex-col gap-[4rem] sm:gap-[6.25rem]">
      <!-- Applying negative margin (-mt-[100px]) and padding-top (pt-[100px]) to adjust the navigation alignment when linking to the "how-it-works" section.
       This ensures the section header is correctly positioned below a fixed header or navbar, improving the visual alignment and user experience. -->
      <section id="how-it-works" class="-mt-[100px] pt-[100px]">
        <HowItWorks />
      </section>

      <WhyChooseUs cardData={WhyUscardData} />

      <section id="faq" class="-mt-[100px] pt-[100px]">
        <Faq />
      </section>
      <ContactUs />
    </div>
  </div>
</section>
