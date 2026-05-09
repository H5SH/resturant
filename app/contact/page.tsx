import siteData from "../../data/site.json";
import FAQAccordion from "../../components/FAQAccordion";
import ChalkTimingCard from "../../components/ChalkTimingCard";
import TornEdgeDivider from "../../components/TornEdgeDivider";

export const metadata = {
  title: `Contact | ${siteData.restaurant.name}`,
  description: "Visit us or order in.",
};

export default function ContactPage() {
  return (
    <>
      {/* SECTION A - ORDER VIA WHATSAPP */}
      <section className="bg-primary text-white py-24 md:py-36 text-center px-4 pt-32 shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-10 mix-blend-color-burn"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            {siteData.contact.heading}
          </h1>
          <p className="font-accent text-4xl md:text-5xl text-white/90 mb-16 drop-shadow-md">
            {siteData.contact.subheading}
          </p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/30 p-10 md:p-16 rounded-xl shadow-2xl max-w-2xl mx-auto mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <p className="font-body text-xl md:text-2xl mb-10 leading-relaxed font-medium">{siteData.contact.orderNote}</p>
            <a href={`https://wa.me/${siteData.restaurant.whatsapp.replace(/\D/g, "")}`} className="bg-white text-primary hover:bg-bg-paper px-10 py-5 rounded-full font-bold text-2xl transition-all shadow-xl flex items-center justify-center gap-4 w-full hover:scale-105">
              <span className="text-4xl">💬</span> Message on WhatsApp
            </a>
            <div className="mt-8 flex justify-center text-2xl font-bold border-t border-white/20 pt-6">
              <span className="mr-3">📞</span> {siteData.restaurant.phone}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
          <TornEdgeDivider fill="var(--color-bg)" />
        </div>
      </section>

      {/* SECTION B - CONTACT DETAILS & FAQ */}
      <section className="bg-bg py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
            
            {/* LEFT COLUMN */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-12">Find Us Here</h2>
              
              <div className="bg-bg-dark text-white p-10 md:p-12 rounded-lg shadow-2xl mb-12 grain-overlay relative border-b-8 border-primary">
                <div className="relative z-10">
                  <h3 className="font-accent text-4xl text-primary-light mb-8 border-b border-white/10 pb-4">Timing</h3>
                  <div className="flex flex-col gap-4">
                    {siteData.restaurant.timing.map((t, idx) => (
                      <ChalkTimingCard key={idx} {...t} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 font-body text-xl text-text-muted">
                <div className="flex items-start gap-6 p-8 bg-white border border-border shadow-sm rounded-md">
                  <span className="text-4xl">📍</span>
                  <div>
                    <p className="font-bold text-text mb-1">Address</p>
                    <p className="leading-relaxed">{siteData.restaurant.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-8 bg-white border border-border shadow-sm rounded-md">
                  <span className="text-4xl">📧</span>
                  <div>
                    <p className="font-bold text-text mb-1">Email</p>
                    <p>{siteData.restaurant.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-12">Frequently Asked Questions</h2>
              <FAQAccordion faqs={siteData.contact.faqs} />

              <div className="mt-20 bg-bg-paper p-10 border-2 border-border rounded-md shadow-md">
                <h3 className="font-display text-3xl font-bold mb-3">Catering Inquiry</h3>
                <p className="text-text-muted text-base mb-8 italic">For large events (dawat/weddings) only.</p>
                <form className="flex flex-col gap-6" action="#" method="POST">
                  <div>
                    <label className="block text-sm font-bold text-text mb-2 uppercase tracking-wider">Name</label>
                    <input type="text" className="w-full border-2 border-border p-4 focus:outline-none focus:border-primary rounded bg-white" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text mb-2 uppercase tracking-wider">Phone</label>
                    <input type="tel" className="w-full border-2 border-border p-4 focus:outline-none focus:border-primary rounded bg-white" placeholder="0300 1234567" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text mb-2 uppercase tracking-wider">Details</label>
                    <textarea className="w-full border-2 border-border p-4 focus:outline-none focus:border-primary rounded bg-white h-32 resize-none" placeholder="Number of guests, date, etc."></textarea>
                  </div>
                  <button type="button" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded transition-colors mt-4 text-lg shadow-md w-full md:w-auto">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C - DIRECTIONS / MAP */}
      <section className="bg-bg-dark py-16 relative grain-overlay border-t-8 border-primary">
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Get Directions</h2>
          <p className="font-body text-lg text-white/70">{siteData.restaurant.address}</p>
        </div>
        <div className="w-full h-[60vh] bg-black">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.311394165972!2d74.3644062!3d31.5083161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905a3b2b8c2df%3A0x6b4532b2b1a329e4!2sCavalry%20Ground%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.2)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
