export default function SpiceIndicator({ value }) {
  if (!value || value <= 0) return null;
  return (
    <div className="flex gap-0.5" title={`Spice level: ${value}`}>
      {Array.from({ length: value }).map((_, i) => (
        <span key={i} className="text-primary text-sm md:text-base">🌶️</span>
      ))}
    </div>
  );
}
