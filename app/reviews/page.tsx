import siteData from "../../data/site.json";
import ReviewCard from "../../components/ReviewCard";
import TornEdgeDivider from "../../components/TornEdgeDivider";

export const metadata = {
  title: `Reviews | ${siteData.restaurant.name}`,
  description: "What our customers say about us.",
};

export default function ReviewsPage() {
  const uniqueLocations = [...new Set(siteData.reviews.items.map(r => r.location))];

  return (
    <>
      <section className="bg-bg-dark text-text-inverse py-24 md:py-36 text-center grain-overlay pt-32 relative">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-primary-light">
          {siteData.reviews.heading}
        </h1>
        <p className="font-body text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {siteData.reviews.subheading}
        </p>
        <div className="flex items-center justify-center gap-4 text-5xl mb-6 text-accent-light drop-shadow-md">
          ★★★★★
        </div>
        <p className="font-display text-4xl font-bold text-white">
          {siteData.reviews.averageRating} <span className="text-2xl text-white/60 font-body font-normal">from {siteData.reviews.totalReviews} reviews</span>
        </p>
        <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
          <TornEdgeDivider fill="var(--color-bg-paper)" />
        </div>
      </section>

      <section className="bg-bg-paper py-32 bg-paper-texture">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* NEIGHBOURHOOD MAP LEGEND */}
          <div className="max-w-4xl mx-auto mb-24 text-center">
            <h2 className="font-display text-4xl font-bold text-text mb-8">Kahan Kahan Se Aate Hain</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {uniqueLocations.map((loc, idx) => (
                <span key={idx} className="bg-white border-2 border-border px-5 py-3 font-accent text-2xl text-primary-dark shadow-sm">
                  📍 {loc}
                </span>
              ))}
              <span className="bg-primary text-white border-2 border-primary-dark px-5 py-3 font-accent text-2xl shadow-md">
                And many more...
              </span>
            </div>
          </div>

          {/* REVIEWS GRID (Masonry layout using columns) */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8">
            {siteData.reviews.items.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

        </div>
      </section>

      <section className="bg-bg-dark py-24 text-center px-4 relative grain-overlay border-t-8 border-border-dark">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Share Your Experience</h2>
        <p className="font-body text-xl text-text-inverse/70 max-w-xl mx-auto mb-10">
          Your feedback helps us keep the fire burning and the pot full.
        </p>
        <div className="flex justify-center">
          <a href="#" className="bg-white text-text px-10 py-5 rounded-md font-bold text-xl hover:bg-bg-paper transition-all shadow-xl border-4 border-border flex items-center gap-4 hover:scale-105">
            <span className="text-3xl text-blue-500">G</span> Leave a Google Review
          </a>
        </div>
      </section>
    </>
  );
}
