import Image from "next/image";
import siteData from "../../data/site.json";
import TornEdgeDivider from "../../components/TornEdgeDivider";

export const metadata = {
  title: `Our Story | ${siteData.restaurant.name}`,
  description: "The story behind the steam.",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center pt-20">
        <Image src={siteData.about.founderImage} alt="Our Story" fill className="object-cover sepia-[.3] grayscale-[0.5]" priority />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-[6rem] text-white font-bold mb-6 drop-shadow-2xl">{siteData.about.heading}</h1>
          <p className="font-accent text-4xl md:text-5xl text-primary-light drop-shadow-md">{siteData.about.headingEn}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
          <TornEdgeDivider fill="var(--color-bg-paper)" />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-bg-paper py-32 bg-paper-texture">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border border-dashed z-0 md:-translate-x-1/2"></div>
          
          <div className="flex flex-col gap-20 md:gap-32 relative z-10">
            {siteData.about.story.map((entry, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-20 items-start`}>
                <div className="md:w-1/2 flex flex-col pl-20 md:pl-0 w-full">
                  <div className={`font-accent text-6xl text-primary mb-4 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {entry.year}
                  </div>
                  <div className={`bg-white p-6 md:p-8 shadow-md border border-border ${idx % 2 === 0 ? 'md:rounded-tl-none' : 'md:rounded-tr-none'} relative`}>
                    <p className={`font-body text-lg md:text-xl text-text-muted leading-relaxed`}>
                      {entry.text}
                    </p>
                  </div>
                </div>
                {/* Visual marker */}
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-bg-paper shadow-md mt-6"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-32 max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-12 text-text">A Family Tradition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg p-8 shadow-sm border border-border flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-4xl">👨🏽‍🦳</div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">1st Generation</h3>
                <p className="font-accent text-xl text-primary">The Visionary</p>
              </div>
            </div>
            <div className="bg-bg p-8 shadow-sm border border-border flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-4xl">👨🏽</div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">2nd Generation</h3>
                <p className="font-accent text-xl text-primary">The Builders</p>
              </div>
            </div>
            <div className="bg-bg p-8 shadow-sm border border-border flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-4xl">👦🏽</div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">3rd Generation</h3>
                <p className="font-accent text-xl text-primary">The Custodians</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-bg-dark text-text-inverse py-32 relative grain-overlay text-center px-4 border-t-8 border-primary">
        <div className="max-w-4xl mx-auto">
          <span className="text-[150px] leading-none absolute top-10 left-10 md:left-32 opacity-10 text-primary font-display hidden md:block">"</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 italic text-white drop-shadow-xl leading-tight">
            "{siteData.about.founderQuote}"
          </h2>
          <p className="font-body text-xl md:text-2xl text-text-inverse/70 mb-16 italic max-w-2xl mx-auto">
            — {siteData.about.founderQuoteEn}
          </p>
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary mb-6 shadow-[0_0_20px_rgba(197,58,36,0.5)]">
            <Image src={siteData.about.founderImage} alt={siteData.about.founderName} width={128} height={128} className="object-cover h-full w-full" />
          </div>
          <p className="font-bold text-2xl text-primary-light mb-1">{siteData.about.founderName}</p>
          <p className="font-accent text-xl text-text-inverse/50">Founder & Head Chef</p>
        </div>
      </section>
      
      <section className="bg-primary py-24 text-center px-4 shadow-inner">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-10 drop-shadow-md">Come Taste the Legacy</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href={`https://wa.me/${siteData.restaurant.whatsapp.replace(/\D/g, "")}`} className="bg-white text-primary px-10 py-5 rounded-md font-bold text-xl hover:bg-bg-paper transition-all shadow-xl hover:scale-105">
            Order on WhatsApp
          </a>
        </div>
        <p className="text-white/90 mt-10 font-body text-lg">{siteData.restaurant.address}</p>
      </section>
    </>
  );
}
