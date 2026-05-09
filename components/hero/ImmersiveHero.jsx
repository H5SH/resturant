"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImmersiveHero({ heroSubVariant, heroCTA, introContent, restaurant }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (heroSubVariant === "immersive-parallax") {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [heroSubVariant]);

  if (heroSubVariant === "immersive-steam") {
    return (
      <div className="relative h-screen w-full bg-bg-dark overflow-hidden pt-20">
        <Image src={introContent.image} alt={restaurant.name} fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Steam effect */}
        <div className="absolute inset-0 z-10 pointer-events-none flex justify-center overflow-hidden mix-blend-screen opacity-40">
          <div className="w-[100px] h-full absolute animate-[steam_6s_ease-in-out_infinite]" style={{left: '20%', bottom: '-10%', background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.4) 50%, transparent)', filter: 'blur(30px)'}}></div>
          <div className="w-[150px] h-full absolute animate-[steam_8s_ease-in-out_infinite_1s]" style={{left: '50%', bottom: '-20%', background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.5) 50%, transparent)', filter: 'blur(40px)'}}></div>
          <div className="w-[120px] h-full absolute animate-[steam_7s_ease-in-out_infinite_2.5s]" style={{left: '70%', bottom: '-5%', background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.3) 50%, transparent)', filter: 'blur(25px)'}}></div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
          <p className="font-accent text-2xl md:text-3xl text-accent-light tracking-[0.2em] mb-4">
            ——— EST. {restaurant.established} ———
          </p>
          <h1 className="font-display text-5xl md:text-[6rem] text-white font-bold tracking-[0.1em] md:tracking-[0.2em] mb-6 animate-[letter-settle_1.5s_ease-out_forwards] drop-shadow-2xl leading-tight">
            {restaurant.name}
          </h1>
          <div className="w-0 h-[2px] bg-primary-light mb-8 animate-[draw-line_0.8s_ease-out_1s_forwards]"></div>
          <p className="font-accent text-4xl md:text-5xl text-bg-paper mb-12 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards] drop-shadow-md">
            {restaurant.tagline}
          </p>
          <div className="flex gap-6 opacity-0 animate-[fade-in_1s_ease-out_2s_forwards]">
            <a href={heroCTA.primary.link} className="bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-xl">
              {heroCTA.primary.text}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // immersive-parallax
  return (
    <div className="relative h-screen w-full bg-bg-dark overflow-hidden pt-20">
      <div 
        className="absolute inset-[-10%] w-[120%] h-[120%] z-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Image src={introContent.image} alt={restaurant.name} fill className="object-cover blur-[3px] opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>
      <div 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <div className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10 shadow-2xl inline-flex flex-col items-center">
          <p className="font-accent text-2xl text-primary-light mb-2">Est. {restaurant.established}</p>
          <h1 className="font-display text-6xl md:text-[6rem] text-white font-bold mb-4 drop-shadow-2xl leading-none">
            {restaurant.name}
          </h1>
          <div className="w-24 h-1 bg-accent-light mb-6"></div>
          <p className="font-accent text-3xl md:text-5xl text-text-inverse/90 mb-10 drop-shadow-md">
            {restaurant.tagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={heroCTA.primary.link} className="bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-md font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(197,58,36,0.5)]">
              {heroCTA.primary.text}
            </a>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 z-20 pointer-events-none flex justify-between items-end pb-10 px-4 md:px-20 opacity-90 hidden md:flex"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      >
        <span className="text-[150px] md:text-[250px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] rotate-12">🌿</span>
        <span className="text-[120px] md:text-[200px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] -rotate-12 mb-20">🌶️</span>
      </div>
    </div>
  );
}
