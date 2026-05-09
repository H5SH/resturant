import siteData from "../../data/site.json";
import MenuItemRow from "../../components/MenuItemRow";
import TornEdgeDivider from "../../components/TornEdgeDivider";

export const metadata = {
  title: `Menu | ${siteData.restaurant.name}`,
  description: "Explore our authentic Pakistani menu.",
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-bg-dark text-text-inverse py-24 md:py-36 text-center grain-overlay pt-32 relative">
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-wide drop-shadow-lg text-primary-light">
          Hamara Menu
        </h1>
        <p className="font-accent text-3xl md:text-5xl text-white/80">
          Khana jo dil ko bhaye
        </p>
        <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
          <TornEdgeDivider fill="var(--color-bg-paper)" />
        </div>
      </section>

      <section className="bg-bg-paper py-24 bg-paper-texture">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            {siteData.menu.categories.map((cat, idx) => (
              <a 
                key={cat.id} 
                href={`#${cat.id}`}
                className={`bg-white border-2 border-border text-text font-accent text-xl px-6 py-2 ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'} hover:rotate-0 hover:bg-accent hover:text-white hover:border-accent transition-all shadow-md`}
              >
                {cat.icon} {cat.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-24">
            {siteData.menu.categories.map(cat => (
              <div key={cat.id} id={cat.id} className="scroll-mt-32">
                <div className="mb-10 border-b-4 border-border pb-6 relative">
                  <div className="absolute right-4 bottom-4 text-7xl opacity-10 grayscale pointer-events-none drop-shadow-lg">
                    {cat.icon}
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-primary flex items-center gap-4">
                    <span className="text-5xl">{cat.icon}</span> {cat.name}
                  </h2>
                  <p className="font-accent text-3xl text-text-muted mt-3">{cat.nameUrdu}</p>
                  <p className="font-body text-lg text-text-muted mt-3 italic">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
                  {cat.items.map(item => (
                    <MenuItemRow key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-10 bg-primary/10 border-4 border-primary border-dashed rounded-lg text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 text-[100px] opacity-10 rotate-12">📦</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-text mb-4 relative z-10">Bulk Orders & Catering</h3>
            <p className="text-text-muted text-lg mb-8 relative z-10 max-w-2xl mx-auto">{siteData.contact.orderNote}</p>
            <a 
              href={`https://wa.me/${siteData.restaurant.whatsapp.replace(/\D/g, "")}`}
              className="inline-block bg-primary text-white font-bold text-lg px-10 py-4 rounded-md hover:bg-primary-dark transition-all shadow-lg hover:scale-105 relative z-10"
            >
              Contact for Dawat
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
