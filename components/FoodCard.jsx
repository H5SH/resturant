import Image from "next/image";
import SpiceIndicator from "./SpiceIndicator";

export default function FoodCard({ item }) {
  const tagBg = item.tagColor === "primary" ? "bg-primary" : "bg-accent";
  
  return (
    <div className="bg-bg-paper border border-border overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
      <div className="relative aspect-square overflow-hidden">
        {item.tag && (
          <div className={`absolute top-4 left-4 z-10 ${tagBg} text-white font-accent text-lg px-4 py-1 -rotate-2 shadow-md`}>
            {item.tag}
          </div>
        )}
        <Image 
          src={item.image} 
          alt={item.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-display text-2xl font-bold text-text mb-1">{item.name}</h3>
            <p className="font-accent text-xl text-primary-dark">{item.nameUrdu}</p>
          </div>
          <SpiceIndicator value={item.spice} />
        </div>
        <p className="font-body text-text-muted mt-4 mb-6 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center border-t border-border pt-4">
          <span className="font-display text-2xl font-bold text-primary">{item.price}</span>
        </div>
      </div>
    </div>
  );
}
