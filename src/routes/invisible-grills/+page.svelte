<script>
  import OurServicesSection from "$components/OurServicesSection.svelte";
  import WhyChooseUs from "$components/WhyChooseUs.svelte";
  import Frame1 from "/src/lib/images/frame1.svg";
  import Frame2 from "/src/lib/images/frame2.svg";
  import Frame3 from "/src/lib/images/frame3.svg";

  let services = [
    { service: "Mosquito Net", link: "#service" },
    { service: "Rolling Blind Grills", link: "#service" },
    { service: "Invisible Grills", link: "#service" },
  ];

  const cardData = [
    {
      Icon: Frame1,
      Title: "Unobstructed views",
      Description:
        "Tailored modular kitchens that optimize storage and functionality for your unique space.",
      Color1: "#ECFFeC",
      Color2: "#14B037",
    },
    {
      Icon: Frame2,
      Title: "Maximum Safety",
      Description:
        "High-quality materials and craftsmanship for long-lasting, beautiful results.",
      Color1: "#F6F4FF",
      Color2: "#855CFE",
    },
    {
      Icon: Frame3,
      Title: "Quick Installation",
      Description:
        "We manage every aspect of your project from start to finish, ensuring a seamless and stress-free experience",
      Color1: "#E8F3FF",
      Color2: "#1D6AC4",
    },
  ];

  import InvisibleSafetyGrills from "$lib/images/invisible_safety.png";
  import rollingBlind from "$lib/images/rolling_blind.png";
  import mosquitoNet from "$lib/images/mosquito_net.png";
  import rightarrowicon from "$lib/icons/right_arrow.png";
  import TestimonialSectionLp from "$components/TestimonialSectionLp.svelte";
  import ContactUs from "$components/ContactUs.svelte";
  import ComparativeAnalysis from "$components/ComparativeAnalysis.svelte";
  import OurGuarantee from "$components/OurGuarantee.svelte";
  import PhotosOfInstalltionGrills from "$components/photosOfInstalltionGrills.svelte";
  import HowDoesItWork from "$components/HowDoesItWork.svelte";

  import invisibleGrills from "$lib/images/invisible_grills.png";
  import Navbar from "$components/Navbar.svelte";

  const invisibleGrillsType = [
    {
      cardImage: mosquitoNet,
      heading: "Mosquito Net",
      description:
        "Keep your home insect-free while maintaining a clear and open view.",
      iconText: "Contact Us",
      icon: rightarrowicon, // Passing as inline SVG
    },
    {
      cardImage: rollingBlind,
      heading: "Rolling Blind Grills",
      description:
        "Versatile grills that can be rolled up for an open view or down for added privacy and security.",
      iconText: "Contact Us",
      icon: rightarrowicon, // Another icon example
    },
    {
      cardImage: InvisibleSafetyGrills,
      heading: "Invisible Grills",
      description:
        "Sleek and nearly invisible, these grills provide safety without obstructing your scenery.",
      iconText: "Contact Us",
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
  <title>INVISIBLE GRILLS</title>
  <meta name="description" content="Invisible grills" />
</svelte:head>

<Navbar {services} />

<section class="pt-24">
  <div class="flex flex-col md:gap-[6.25rem] gap-[4rem]">
    <div
      class="flex flex-col gap-10 px-4 pt-[7px] md:pt-10 md:px-20 w-full justify-center"
    >
      <div
        class="text-[#292929] text-center md:text-left flex md:flex-row flex-col justify-between items-center w-full md:gap-0 gap-3"
      >
        <h1
          class="font-playfairDisplay text-[28px] md:text-[50px] md:leading-[70px] font-[600] leading-8 w-full md:w-[600px]"
        >
          Invisible Grills<br /><span class="font-[300]"
            >Redefining Style & Safety</span
          >
        </h1>
        <p
          class="font-inter-tight text-[14px] md:text-[20px] font-light md:leading-[32px] leading-[19.2px] w-[364px] md:w-[478px] text-[#707070] justify"
        >
          Upgrade your space with virtually invisible protection. Experience the
          difference today. Chat with us and get Installed in 3 days!
        </p>
      </div>
      <div
        class="flex justify-start items-center self-stretch w-full md:h-[33.75rem] overflow-clip rounded-md"
      >
        <img src={invisibleGrills} alt="" class="w-full" />
      </div>
    </div>
    <div class="flex flex-col">
      <WhyChooseUs {cardData} />
    </div>
    <div id="service" class="-mt-[100px] pt-[100px]">
      <OurServicesSection
        cardData={invisibleGrillsType}
        sectionTitle="Types of Invisible Grills"
        headerText="Choose Your Ideal Invisible <br/> Grill Solution"
      />
    </div>
    <ComparativeAnalysis />
    <OurGuarantee />

    <div class="-mt-[100px] pt-[100px]" id="project-gallery">
      <PhotosOfInstalltionGrills />
    </div>

    <div id="how-it-works" class="-mt-[100px] pt-[100px]">
      <HowDoesItWork />
    </div>
    <div class="w-full px-4 md:px-20">
      <TestimonialSectionLp
        testimonialHeader="Trusted by Homeowners Everywhere!"
        {testimonials}
        bgColor="#F3F0EB"
      />
    </div>
    <ContactUs />
  </div>
</section>
