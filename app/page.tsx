import Image from "next/image";
import Link from "next/link";
import siteData from "../data/site.json";
import HeroRenderer from "../components/hero/HeroRenderer";
import TornEdgeDivider from "../components/TornEdgeDivider";
import BadgeStamp from "../components/BadgeStamp";
import ChalkTimingCard from "../components/ChalkTimingCard";
import FoodCard from "../components/FoodCard";
import StatCounter from "../components/StatCounter";

export default function Home() {
  const { homepage, restaurant } = siteData;

  return (
    <>
      <HeroRenderer />
      
      {/* BADGES STRIP */}
      <section className="bg-bg-paper py-8 border-y border-border/50 overflow-hidden relative z-10 -mt-2 shadow-inner">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...restaurant.badges, ...restaurant.badges, ...restaurant.badges, ...restaurant.badges].map((badge, idx) => (
            <div key={idx} className="mx-8 flex items-center justify-center">
              <BadgeStamp text={badge} rotationClass={idx % 2 === 0 ? "rotate-2" : "-rotate-2"} color={idx % 3 === 0 ? "primary" : "accent"} />
            </div>
          ))}
        </div>
      </section>

      {/* TIMING (CHALKBOARD) */}
      <section className="bg-bg-dark py-24 relative grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 w-full">
              <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4 drop-shadow-md">Waqt Ki Pabandi</h2>
              <p className="font-accent text-3xl md:text-4xl text-primary-light mb-8 drop-shadow-sm">Jab chahein aayein...</p>
              <div className="border-8 border-[#3A2F2B] p-8 bg-[#1a1c18] rounded-md shadow-2xl relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/10 rounded-full"></div>
                {restaurant.timing.map((t, idx) => (
                  <ChalkTimingCard key={idx} {...t} />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left w-full hidden md:block">
              <Image src="https://picsum.photos/seed/cooking/600/600" alt="Cooking" width={600} height={600} className="rounded-md border-[12px] border-bg-paper shadow-2xl object-cover aspect-square -rotate-2" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
          <TornEdgeDivider fill="var(--color-bg-paper)" />
        </div>
      </section>

      {/* FEATURED ITEMS */}
      <section className="bg-bg-paper pt-32 pb-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="font-accent text-3xl md:text-4xl text-accent mb-3">Aaj Ki Khas Dishes</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-text">Today's Must-Haves</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {homepage.featuredItems.map((item, idx) => (
              <div key={item.id} className={idx === 1 ? "md:mt-12" : ""}>
                <FoodCard item={item} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/menu" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 font-bold text-lg rounded-md transition-colors shadow-sm">
              Pura Menu Dekhein
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
          <TornEdgeDivider fill="var(--color-bg-dark)" />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-bg-dark text-text-inverse pt-32 pb-24 relative grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-primary-light mb-6 drop-shadow-lg">Kyun Haji Sahab?</h2>
            <p className="font-body text-xl text-text-inverse/80 max-w-2xl mx-auto leading-relaxed">
              We don't cut corners. Good food takes time, pure ingredients, and a lot of heart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 max-w-5xl mx-auto">
            {homepage.whyUsPoints.map((point, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-6xl flex-shrink-0 drop-shadow-md">{point.icon}</div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-white mb-3 tracking-wide">{point.title}</h3>
                  <p className="font-body text-lg text-text-inverse/70 leading-relaxed">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
          <TornEdgeDivider fill="var(--color-bg)" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-bg pt-32 pb-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {homepage.statsBar.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-6">{stat.icon}</div>
                <div className="font-display text-6xl font-bold text-primary mb-3">
                  <StatCounter end={stat.value} />
                </div>
                <div className="font-body text-text-muted font-bold tracking-widest uppercase text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY TEASER */}
      <section className="bg-bg-paper py-24 relative bg-paper-texture">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 bg-white p-10 md:p-16 shadow-lg relative border-4 border-white outline outline-1 outline-border">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent opacity-30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary opacity-20 blur-xl"></div>
            
            <div className="md:w-[40%] relative">
              <div className="aspect-[3/4] relative rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border-[6px] border-bg shadow-xl">
                <Image src={siteData.about.founderImage} alt={siteData.about.founderName} fill className="object-cover sepia-[.4] contrast-125" />
              </div>
            </div>
            
            <div className="md:w-[60%]">
              <span className="text-[150px] leading-none absolute top-0 left-4 md:left-[35%] opacity-[0.05] text-primary font-display">"</span>
              <h3 className="font-display text-3xl md:text-5xl font-bold text-text mb-6 italic relative z-10 leading-tight">
                "{siteData.about.founderQuote}"
              </h3>
              <p className="font-body text-lg text-text-muted mb-10 italic">
                — {siteData.about.founderQuoteEn}
              </p>
              <div className="mb-10">
                <p className="font-bold text-xl text-primary-dark">{siteData.about.founderName}</p>
                <p className="text-base text-text-muted font-accent tracking-wider">Founder</p>
              </div>
              <Link href="/our-story" className="text-primary font-bold text-lg hover:underline flex items-center gap-2 w-fit group">
                Read Our Story <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="bg-bg py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="font-accent text-3xl md:text-4xl text-primary mb-3">Kuch Mukhtalif Zaroor Try Karein</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-text">Taste the Legacy</h2>
            </div>
            <Link href="/menu" className="hidden md:inline-flex items-center text-primary font-bold hover:underline text-lg">
              Full Menu Dekhein →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {siteData.menu.categories[0].items.slice(0, 4).map((item) => (
              <div key={item.id} className="flex gap-6 items-center bg-white p-5 border border-border shadow-sm group cursor-pointer hover:border-primary/50 hover:shadow-md transition-all">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover rounded shadow-inner" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-display font-bold text-xl group-hover:text-primary transition-colors">{item.name}</h4>
                    <span className="font-display font-bold text-lg text-primary">{item.price}</span>
                  </div>
                  <p className="text-base text-text-muted line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 md:hidden text-center">
            <Link href="/menu" className="text-primary font-bold hover:underline text-lg">
              Full Menu Dekhein →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-32 text-center px-4 relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-10 mix-blend-color-burn"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 drop-shadow-md">Ghar Baithe Order Karein Ya Seedha Aayein</h2>
          <p className="font-body text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
            {restaurant.deliveryNote}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a href={`https://wa.me/${restaurant.whatsapp.replace(/\D/g, "")}`} className="bg-white text-primary hover:bg-bg-paper px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl flex items-center gap-3 hover:scale-105">
              <span className="text-3xl">💬</span> WhatsApp Order
            </a>
            <div className="flex items-center gap-3 text-xl font-bold border-2 border-white/40 px-10 py-4 rounded-full shadow-lg bg-black/10">
              <span className="text-2xl">📞</span> {restaurant.phone}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
