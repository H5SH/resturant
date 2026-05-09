export default function ReviewCard({ review }) {
  return (
    <div className="bg-bg-card p-6 md:p-8 border border-border shadow-sm flex flex-col h-full break-inside-avoid mb-6 relative">
      {/* Tape decoration at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-[#EFE9DB] border border-[#D6CBB9]/30 opacity-70 rotate-[-2deg] shadow-sm"></div>
      
      <div className="flex justify-between items-start mb-6 pt-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-border">
            <img src={review.avatar} alt={review.name} className="object-cover w-full h-full" />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-text">{review.name}</h4>
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
              <p className="font-body text-xs text-text-muted font-bold tracking-wide uppercase">{review.location}</p>
            </div>
          </div>
        </div>
        <div className="flex text-accent-light text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < review.rating ? "★" : "☆"}</span>
          ))}
        </div>
      </div>
      
      <p className="font-body text-text-muted text-base leading-relaxed italic mb-6 flex-grow">
        "{review.text}"
      </p>
      
      <div className="border-t border-border pt-4 mt-auto">
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-primary-dark">{review.dish}</span>
          <span className="text-text-muted text-xs">{review.visits}</span>
        </div>
      </div>
    </div>
  );
}
