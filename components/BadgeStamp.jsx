export default function BadgeStamp({ text, rotationClass = "-rotate-2", color = "accent" }) {
  const colorClass = color === "primary" ? "border-primary text-primary" : "border-accent text-accent";
  return (
    <div className={`inline-block border-2 ${colorClass} px-5 py-2 font-accent text-2xl md:text-3xl ${rotationClass} hover:rotate-0 hover:scale-105 transition-all cursor-default select-none shadow-sm bg-bg-paper whitespace-nowrap`}>
      {text}
    </div>
  );
}
