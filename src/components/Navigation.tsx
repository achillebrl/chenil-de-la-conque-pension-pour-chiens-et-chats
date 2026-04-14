"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/tarifs", label: "Tarifs" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#faf8f3]/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[rgba(74,124,63,0.3)] shadow-sm">
              <Image
                src="/assets/logo.png"
                alt="Chenil de la Conque"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-[family-name:var(--font-playfair)] font-700 text-base leading-tight transition-colors ${
                  scrolled ? "text-[#3d2f1a]" : "text-white"
                }`}
              >
                Chenil de la Conque
              </p>
              <p
                className={`text-[10px] tracking-[0.18em] uppercase transition-colors ${
                  scrolled ? "text-[#4a7c3f]" : "text-[rgba(255,255,255,0.8)]"
                }`}
              >
                Pension Animale · Izon
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm tracking-[0.1em] uppercase font-[family-name:var(--font-raleway)] font-500 transition-colors ${
                  activePage === link.href
                    ? "active text-[#4a7c3f]"
                    : scrolled
                    ? "text-[#3d2f1a] hover:text-[#4a7c3f]"
                    : "text-white hover:text-[#c8a84b]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0784082666"
              className={`flex items-center gap-2 text-sm font-[family-name:var(--font-raleway)] font-600 transition-all px-4 py-2 rounded-full border ${
                scrolled
                  ? "border-[#4a7c3f] text-[#4a7c3f] hover:bg-[#4a7c3f] hover:text-white"
                  : "border-white/60 text-white hover:border-[#c8a84b] hover:text-[#c8a84b]"
              }`}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              07 84 08 26 66
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              scrolled ? "text-[#3d2f1a]" : "text-white"
            }`}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#3d2f1a]/90 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-[#faf8f3] flex flex-col justify-center px-10 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-[#3d2f1a] hover:text-[#4a7c3f] transition-colors"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-8">
            <p className="font-[family-name:var(--font-playfair)] italic text-[#4a7c3f] text-sm tracking-wider">
              Chenil de la Conque
            </p>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-[family-name:var(--font-playfair)] text-2xl font-600 transition-colors hover:text-[#4a7c3f] ${
                  activePage === link.href ? "text-[#4a7c3f]" : "text-[#3d2f1a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-6 border-t border-[rgba(74,124,63,0.2)]">
              <a
                href="tel:0784082666"
                className="flex items-center gap-3 text-[#3d2f1a] hover:text-[#4a7c3f] transition-colors"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="font-[family-name:var(--font-raleway)] font-600">07 84 08 26 66</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}