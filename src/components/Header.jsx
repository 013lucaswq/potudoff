import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { useCheckout } from "../hooks/useCheckout";
import { Crosshair, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCheckout } = useCheckout();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        scrolled
          ? "opacity-100 translate-y-0 bg-[#060608]/95 backdrop-blur-md border-b border-[#FF0000]/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          : "opacity-0 -translate-y-full pointer-events-none py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-3 group select-none"
          >
            <div className="relative w-10 h-10 rounded bg-[#0A0A0E] border border-[#FF0000]/60 flex items-center justify-center group-hover:border-[#FF0000] group-hover:shadow-[0_0_15px_rgba(255,0,0,0.7)] transition-all duration-300">
              <Crosshair className="w-5 h-5 text-[#FF0000] group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-lg tracking-wider text-white flex items-center gap-1.5">
                AUXÍLIO <span className="text-[#FF0000] drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">DE MIRA</span>
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase">
                {siteConfig.brand.creator} • {siteConfig.brand.version}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative font-rajdhani font-bold text-sm tracking-wider uppercase text-neutral-300 hover:text-white transition-colors duration-200 py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF0000] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#FF0000]" />
              </a>
            ))}
          </nav>

          {/* Action CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => openCheckout(siteConfig.aimAssist.buyButton.url, "AUXÍLIO DE MIRA")}
              className="relative hidden sm:inline-flex items-center justify-center px-5 py-2.5 font-orbitron font-extrabold text-xs uppercase tracking-wider text-white bg-[#FF0000] hover:bg-[#D60000] cyber-btn border border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,0,0,0.9)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>QUERO O AUXÍLIO DE MIRA</span>
              <ChevronRight className="w-4 h-4 ml-1 -mr-1" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-[#0A0A0E] border border-[#222228] text-neutral-200 hover:text-[#FF0000] hover:border-[#FF0000]/60 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070709]/98 border-b border-[#FF0000]/30 px-6 py-6 mt-3 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-300">
          <div className="space-y-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="flex items-center justify-between py-3 px-4 rounded bg-[#0E0E12] border border-[#1A1A22] text-neutral-200 hover:text-white hover:border-[#FF0000]/60 font-rajdhani font-bold text-base tracking-wider uppercase"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#FF0000]" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCheckout(siteConfig.aimAssist.buyButton.url, "AUXÍLIO DE MIRA");
              }}
              className="w-full flex items-center justify-center py-3.5 font-orbitron font-extrabold text-sm tracking-wider uppercase text-white bg-[#FF0000] cyber-btn border border-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.6)] cursor-pointer"
            >
              QUERO O AUXÍLIO DE MIRA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
