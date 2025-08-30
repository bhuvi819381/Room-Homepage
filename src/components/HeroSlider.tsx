import { useState } from "react";

interface HeroSliderProps {
  id: number;
  desktop: string;
  mobile: string;
  title: string;
  paragraph: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const data: HeroSliderProps[] = [
    {
      id: 1,
      desktop: "/images/desktop-image-hero-1.jpg",
      mobile: "/images/mobile-image-hero-1.jpg",
      title: "Discover innovative ways to decorate",
      paragraph:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      id: 2,
      desktop: "/images/desktop-image-hero-2.jpg",
      mobile: "/images/mobile-image-hero-2.jpg",
      title: "We are available all across the globe",
      paragraph:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      id: 3,
      desktop: "/images/desktop-image-hero-3.jpg",
      mobile: "/images/mobile-image-hero-3.jpg",
      title: "Manufactured with the best materials",
      paragraph:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };
  return (
    <section className="flex items-center justify-between border-blue-500 p-6 *:border md:flex-row md:p-0">
      {/* Image Slider part */}
      <div className="relative h-[33.375rem] w-[52.5rem] border-green-500">
        <img
          src={data[currentSlide].desktop}
          alt={data[currentSlide].title}
          className="hidden w-full transition-all duration-500 ease-in-out md:block"
        />
        <img
          src={data[currentSlide].mobile}
          alt={data[currentSlide].title}
          className="w-full transition-all duration-500 ease-in-out md:hidden"
        />
        {/* Button Part */}
        <div className="absolute -right-40 bottom-0 z-10 flex h-[5rem] w-[10rem]">
          <button
            type="button"
            aria-label="previous slide"
            className="hover:bg-Gray-500 bg-Black flex h-full w-1/2 items-center justify-center border-none transition-transform duration-150 outline-none active:scale-95"
            onClick={prevSlide}
          >
            <img src="/images/icon-angle-left.svg" alt="" />
          </button>
          <button
            type="button"
            aria-label="next slide"
            className="hover:bg-Gray-500 flex h-full w-1/2 items-center justify-center border-none bg-black transition-transform duration-150 outline-none active:scale-95"
            onClick={nextSlide}
          >
            <img src="/images/icon-angle-right.svg" alt="" />
          </button>
        </div>
      </div>

      {/* Text part */}
      <div className="flex h-[33.375rem] w-[37.5rem] flex-col items-center justify-center gap-6 p-24">
        <h1 className="text-[2.8rem] leading-none font-semibold">
          {data[currentSlide].title}
        </h1>
        <p className="text-Gray-500 text-[1.059rem] leading-6">
          {data[currentSlide].paragraph}
        </p>
        <div className="flex cursor-pointer items-center justify-between gap-5 border">
          <button
            type="button"
            className="text-md cursor-pointer tracking-[.5em] uppercase"
          >
            Shop now
          </button>
          <span>
            <img src="/images/icon-arrow.svg" alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};
export default HeroSlider;
