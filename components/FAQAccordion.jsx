"use client";
import { useState } from "react";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`border border-border bg-bg-card overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-primary/30' : ''}`}
        >
          <button 
            className="w-full px-6 py-4 flex justify-between items-center focus:outline-none text-left"
            onClick={() => toggle(index)}
          >
            <div>
              <h3 className="font-display font-bold text-lg text-text mb-1 pr-8">{faq.q}</h3>
              <p className="font-body text-sm text-text-muted">{faq.qEn}</p>
            </div>
            <span className={`text-primary transition-transform duration-300 text-2xl font-light ${openIndex === index ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-6 pb-6 pt-2 border-t border-border mx-6">
              <p className="font-body text-text-muted leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
