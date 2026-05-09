import Image from "next/image";
import SpiceIndicator from "./SpiceIndicator";

export default function MenuItemRow({ item }) {
  return (
    <div className={`flex gap-4 p-4 border-b border-border border-dashed relative ${!item.isAvailable ? 'opacity-50 grayscale' : ''}`}>
      {!item.isAvailable && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="border-4 border-primary text-primary px-4 py-2 text-3xl font-accent font-bold rotate-[-15deg] bg-bg-paper/80 shadow-md">
            SOLD OUT
          </div>
        </div>
      )}
      
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-md overflow-hidden border border-border">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-xl font-bold text-text">{item.name}</h3>
            {item.tag && (
              <span className="bg-primary-light/20 text-primary px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider hidden md:inline-block">
                {item.tag}
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="font-display text-xl font-bold text-primary">{item.price}</div>
          </div>
        </div>
        
        <p className="font-accent text-lg text-primary-dark mb-1">{item.nameUrdu}</p>
        <div className="flex justify-between items-end mt-auto">
          <p className="font-body text-sm text-text-muted">{item.description}</p>
          <div className="flex-shrink-0 ml-4">
            <SpiceIndicator value={item.spice} />
          </div>
        </div>
      </div>
    </div>
  );
}
