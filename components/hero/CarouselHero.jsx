"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CarouselHero({ heroSubVariant, heroCTA, carouselSlides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  if (heroSubVariant === "carousel-overlay") {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-bg-dark">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image src={slide.image} alt={slide.heading} fill className="object-cover" priority={index === 0} />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 pb-24 md:pb-32">
              <div className="container mx-auto">
                <div className="absolute top-24 left-6 md:left-12 bg-bg-paper text-text border border-border px-4 py-2 -rotate-3 shadow-md z-20">
                  <span className="font-accent text-2xl">{slide.tag}</span>
                </div>
                <div className="max-w-2xl relative z-20">
                  <span className="font-accent text-3xl md:text-5xl text-accent-light block mb-2">{slide.headingEn}</span>
                  <h1 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight mb-4">{slide.heading}</h1>
                  <p className="font-body text-lg md:text-xl text-text-inverse/90 mb-8">{slide.subheading}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={heroCTA.primary.link} className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-md font-bold transition-colors">
                      {heroCTA.primary.text}
                    </a>
                    <Link href={heroCTA.secondary.link} className="bg-bg/20 hover:bg-bg/30 text-white backdrop-blur-sm border border-white/30 px-8 py-3 rounded-md font-bold transition-colors">
                      {heroCTA.secondary.text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 right-6 md:right-12 z-20 flex gap-2">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === current ? "bg-accent-light w-8" : "bg-white/50"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[90vh] pt-24 pb-12 w-full overflow-hidden bg-bg-dark flex items-center justify-center grain-overlay">
      <div className="w-full max-w-[1400px] flex items-center relative z-10 px-0 mt-8">
        {carouselSlides.map((slide, index) => {
          let position = "hidden";
          let classes = "opacity-0 scale-90";
          if (index === current) {
            position = "center";
            classes = "opacity-100 scale-100 z-30 shadow-2xl relative w-[85%] md:w-[60%] mx-auto";
          } else if (index === (current - 1 + carouselSlides.length) % carouselSlides.length) {
            position = "prev";
            classes = "opacity-40 scale-90 -translate-x-[60%] md:-translate-x-[40%] z-20 absolute left-0 cursor-pointer hover:opacity-60";
          } else if (index === (current + 1) % carouselSlides.length) {
            position = "next";
            classes = "opacity-40 scale-90 translate-x-[60%] md:translate-x-[40%] z-20 absolute right-0 cursor-pointer hover:opacity-60";
          }

          if (position === "hidden") return null;

          return (
            <div
              key={index}
              onClick={() => position !== "center" && setCurrent(index)}
              className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${classes}`}
            >
              <div className="relative aspect-[3/4] md:aspect-[16/9] overflow-hidden bg-bg-paper p-3 md:p-6 shadow-xl">
                <div className="relative w-full h-full">
                  <Image src={slide.image} alt={slide.heading} fill className="object-cover" />
                  {position === "center" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12 text-center md:text-left">
                       <span className="font-accent text-3xl md:text-4xl text-accent-light mb-2 block">{slide.headingEn}</span>
                       <h1 className="font-display text-3xl md:text-5xl text-white font-bold leading-tight mb-2">{slide.heading}</h1>
                       <p className="font-body text-base md:text-lg text-text-inverse/90 mb-6">{slide.subheading}</p>
                       <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                         <a href={heroCTA.primary.link} className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-md font-bold transition-colors">
                           {heroCTA.primary.text}
                         </a>
                       </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
