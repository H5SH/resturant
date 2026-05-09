import Link from "next/link";
import siteData from "../data/site.json";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverse py-16 relative overflow-hidden grain-overlay pb-24 md:pb-16">
      <div className="absolute -bottom-20 -right-20 text-[300px] opacity-5 select-none pointer-events-none">
        🍛
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-bold text-primary-light">
              {siteData.restaurant.name}
            </h2>
            <p className="font-accent text-2xl text-accent-light">
              {siteData.restaurant.tagline}
            </p>
            <p className="text-text-inverse/80 mt-2 max-w-sm">
              {siteData.restaurant.descriptionEn}
            </p>
            <a
              href={`https://wa.me/${siteData.restaurant.whatsapp.replace(/\D/g, "")}`}
              className="mt-4 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-bold text-center inline-block w-fit transition-colors"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg border-b border-border-dark pb-2">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/menu" className="hover:text-accent-light transition-colors">Our Menu</Link>
              <Link href="/our-story" className="hover:text-accent-light transition-colors">Our Story</Link>
              <Link href="/reviews" className="hover:text-accent-light transition-colors">Customer Reviews</Link>
              <Link href="/contact" className="hover:text-accent-light transition-colors">Visit Us</Link>
            </nav>
            <h3 className="font-bold text-lg border-b border-border-dark pb-2 mt-4">Menu</h3>
            <nav className="flex flex-col gap-3">
              {siteData.menu.categories.map(cat => (
                <Link key={cat.id} href={`/menu#${cat.id}`} className="hover:text-accent-light transition-colors">
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg border-b border-border-dark pb-2">Contact & Timing</h3>
            <div className="flex flex-col gap-2">
              <p className="flex items-start gap-2">
                <span className="text-accent-light">📍</span>
                <span>{siteData.restaurant.address}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-accent-light">📞</span>
                <span>{siteData.restaurant.phone}</span>
              </p>
            </div>
            
            <div className="mt-4 bg-black/20 p-4 rounded-md border border-border-dark">
              <h4 className="font-bold mb-2">Hours</h4>
              {siteData.restaurant.timing.map((t, i) => (
                <div key={i} className={`flex justify-between text-sm py-1 ${t.isSpecial ? 'text-accent-light font-bold' : 'text-text-inverse/80'}`}>
                  <span>{t.day}</span>
                  <span>{t.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border-dark text-center text-sm text-text-inverse/60 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {siteData.restaurant.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-accent text-lg">Taste It Once, Crave It Forever.</p>
        </div>
      </div>
    </footer>
  );
}
