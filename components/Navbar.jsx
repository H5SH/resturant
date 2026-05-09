"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import siteData from "../data/site.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg shadow-md py-3" : "bg-bg/95 py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="font-display text-2xl md:text-3xl font-bold text-primary">
            {siteData.restaurant.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/menu" className="hover:text-primary transition-colors">Menu</Link>
          <Link href="/our-story" className="hover:text-primary transition-colors">Our Story</Link>
          <Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <a
            href={`https://wa.me/${siteData.restaurant.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-full font-bold transition-colors inline-flex items-center gap-2"
          >
            Order Now
          </a>
        </div>

        <button
          className="md:hidden text-text p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg border-t border-border shadow-lg">
          <div className="px-4 py-6 flex flex-col gap-6">
            <div className="text-center pb-4 border-b border-border">
              <p className="text-sm text-text-muted mb-2">Order via WhatsApp</p>
              <p className="font-display text-xl font-bold text-primary">{siteData.restaurant.whatsapp}</p>
            </div>
            <nav className="flex flex-col gap-4 text-lg font-medium text-center">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
              <Link href="/our-story" onClick={() => setMenuOpen(false)}>Our Story</Link>
              <Link href="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
