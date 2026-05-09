export default function ChalkTimingCard({ day, hours, isSpecial }) {
  return (
    <div className={`border-b-2 border-white/20 pb-4 mb-4 ${isSpecial ? 'text-accent-light' : 'text-white'}`}>
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-accent text-2xl md:text-3xl font-bold flex items-center gap-2">
          {isSpecial && <span>★</span>}
          {day}
        </h3>
      </div>
      <p className="font-body text-lg md:text-xl font-medium tracking-wide">
        {hours}
      </p>
    </div>
  );
}
