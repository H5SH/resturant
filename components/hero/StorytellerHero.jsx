"use client";
import Image from "next/image";
import Link from "next/link";

export default function StorytellerHero({ heroSubVariant, heroCTA, introContent, restaurant }) {
  if (heroSubVariant === "storyteller-full") {
    return (
      <div className="relative min-h-[90vh] bg-bg-dark grain-overlay flex items-center pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 z-10">
          <div className="md:w-[55%] text-text-inverse">
            <div className="inline-block bg-primary text-white font-accent text-lg px-4 py-1 rounded-full -rotate-3 mb-6 shadow-lg">
              Est. {restaurant.established}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-none">
              {restaurant.name}
            </h1>
            <p className="font-accent text-3xl md:text-4xl text-accent-light mb-6">
              {restaurant.tagline}
            </p>
            <p className="font-body text-base md:text-lg text-text-inverse/70 mb-8 max-w-lg leading-relaxed">
              {introContent.body}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={heroCTA.primary.link} className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-md font-bold transition-colors">
                {heroCTA.primary.text}
              </a>
              <Link href={heroCTA.secondary.link} className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-md font-bold transition-colors">
                {heroCTA.secondary.text}
              </Link>
            </div>
            <div className="flex gap-8 border-t border-white/10 pt-6">
              {introContent.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="font-display text-3xl font-bold text-accent-light">{stat.value}</div>
                  <div className="font-body text-sm text-text-inverse/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[45%] relative h-[50vh] md:h-[75vh] w-full mt-12 md:mt-0 hidden md:block">
            <div className="absolute top-0 right-0 w-[90%] h-[75%] z-10 custom-clip-rough">
              <Image src={introContent.image} alt={restaurant.name} fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[45%] z-20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border-4 border-bg-dark shadow-xl">
              <Image src={introContent.founderImage} alt={introContent.founderName} fill className="object-cover" />
            </div>
            <div className="absolute bottom-[-15px] left-[5%] z-30 bg-bg-paper px-4 py-2 text-text rotate-2 shadow-lg border border-border">
              <p className="font-accent text-xl font-bold">{introContent.founderName}</p>
              <p className="text-xs text-text-muted">{introContent.founderTitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (heroSubVariant === "storyteller-split") {
    return (
      <div className="relative min-h-[90vh] flex flex-col md:flex-row pt-20 bg-bg-paper">
        <div className="md:w-1/2 h-[45vh] md:h-auto relative z-10 custom-clip-diagonal-right shadow-2xl">
          <Image src={introContent.image} alt={restaurant.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 md:p-16">
            <h1 className="font-display text-5xl md:text-7xl text-white font-bold leading-tight mb-2">
              {restaurant.name}
            </h1>
            <p className="font-accent text-3xl md:text-4xl text-accent-light">
              {restaurant.tagline}
            </p>
            <div className="absolute top-8 left-8 bg-primary text-white font-accent text-xl px-4 py-1 -rotate-2 shadow-md">
              Est. {restaurant.established}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center p-8 md:p-16 relative z-0 md:-ml-[5%]">
          <div className="max-w-md ml-auto mr-auto md:ml-[15%] text-text pt-8 md:pt-0">
            <h2 className="font-display text-3xl font-bold text-primary-dark mb-4">
              {introContent.subheading}
            </h2>
            <p className="font-body text-lg text-text-muted mb-8 leading-relaxed">
              {introContent.body}
            </p>
            <div className="flex gap-6 mb-10">
               {introContent.stats.slice(0,2).map((stat, idx) => (
                <div key={idx} className="bg-bg-soft px-5 py-4 border border-border shadow-sm">
                  <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="font-body text-xs text-text-muted uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={heroCTA.primary.link} className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-md font-bold transition-colors">
                {heroCTA.primary.text}
              </a>
              <Link href={heroCTA.secondary.link} className="bg-transparent text-primary hover:bg-primary/10 border border-primary px-8 py-3 rounded-md font-bold transition-colors">
                {heroCTA.secondary.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (heroSubVariant === "storyteller-poster") {
    return (
      <div className="relative min-h-[90vh] bg-bg-dark grain-overlay flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-3xl w-full flex flex-col items-center text-center mt-8 p-8 md:p-12 border-8 border-bg-dark outline outline-2 outline-border-dark relative bg-black/20">
          <div className="w-full h-[2px] bg-accent-light/30 mb-6"></div>
          <p className="font-accent text-2xl text-accent-light mb-4 tracking-widest uppercase">
            Since {restaurant.established}
          </p>
          <h1 className="font-display text-6xl md:text-[7rem] text-bg font-bold leading-none mb-6 drop-shadow-lg">
            {restaurant.name}
          </h1>
          <div className="flex items-center justify-center gap-4 w-full mb-8 text-accent-light">
            <div className="flex-grow h-[1px] bg-accent-light/30"></div>
            <span className="text-xl">✦</span>
            <div className="flex-grow h-[1px] bg-accent-light/30"></div>
          </div>
          <p className="font-accent text-4xl md:text-5xl text-primary-light mb-12">
            {restaurant.tagline}
          </p>
          <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-8 border-bg-paper shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-12">
            <Image src={introContent.image} alt={restaurant.name} fill className="object-cover" />
          </div>
          <p className="font-body text-xl text-text-inverse/80 max-w-xl mx-auto mb-10 leading-relaxed">
            {restaurant.taglineEn}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href={heroCTA.primary.link} className="bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-md font-bold text-lg transition-colors">
              {heroCTA.primary.text}
            </a>
          </div>
          <div className="font-body text-sm text-text-inverse/50 uppercase tracking-widest">
            <p>{restaurant.address}</p>
          </div>
        </div>
      </div>
    );
  }

  // storyteller-tape
  return (
    <div className="relative min-h-[90vh] bg-bg-dark pt-20 flex flex-col overflow-hidden">
      {/* Band 1 */}
      <div className="h-[10vh] md:h-[12vh] bg-bg-dark text-accent-light flex items-center overflow-hidden relative z-40 custom-clip-tape-bottom border-b border-white/5">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap opacity-80">
          {[...restaurant.badges, ...restaurant.badges, ...restaurant.badges, ...restaurant.badges].map((badge, idx) => (
            <span key={idx} className="font-accent text-2xl md:text-3xl mx-8">
              ★ {badge}
            </span>
          ))}
        </div>
      </div>
      {/* Band 2 */}
      <div className="h-[45vh] relative z-30 custom-clip-tape-both -mt-2 shadow-2xl">
        <Image src={introContent.image} alt={restaurant.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-12">
          <h1 className="font-display text-5xl md:text-[6rem] text-white font-bold leading-none shadow-black drop-shadow-xl">
            {restaurant.name}
          </h1>
        </div>
      </div>
      {/* Band 3 */}
      <div className="h-[12vh] md:h-[15vh] bg-primary flex items-center justify-center relative z-20 custom-clip-tape-both -mt-4 shadow-xl">
        <h2 className="font-accent text-3xl md:text-5xl text-white px-4 text-center drop-shadow-md">
          {restaurant.tagline}
        </h2>
      </div>
      {/* Band 4 */}
      <div className="flex-grow bg-bg-paper flex flex-col justify-center relative z-10 custom-clip-tape-top -mt-4 pt-16 pb-16 px-6 md:px-12 grain-overlay">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <p className="font-body text-lg md:text-xl text-text-muted leading-relaxed font-medium">{introContent.body}</p>
          </div>
          <div className="flex gap-4">
             <a href={heroCTA.primary.link} className="bg-primary text-white px-8 py-4 font-bold rounded-md hover:bg-primary-light transition-colors shadow-lg">
               {heroCTA.primary.text}
             </a>
             <Link href={heroCTA.secondary.link} className="bg-bg-dark text-white px-8 py-4 font-bold rounded-md hover:bg-black transition-colors shadow-lg">
               {heroCTA.secondary.text}
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
