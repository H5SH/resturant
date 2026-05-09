import siteData from "../data/site.json";

export default function FloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-bg shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <a
        href={`tel:${siteData.restaurant.phone.replace(/\D/g, "")}`}
        className="flex-1 py-4 text-center font-bold text-text border-r border-border flex items-center justify-center gap-2 hover:bg-bg-soft transition-colors"
      >
        <span>📞</span> Call
      </a>
      <a
        href={`https://wa.me/${siteData.restaurant.whatsapp.replace(/\D/g, "")}`}
        className="flex-1 py-4 text-center font-bold text-white bg-primary flex items-center justify-center gap-2 transition-colors"
      >
        <span>💬</span> WhatsApp
      </a>
    </div>
  );
}
