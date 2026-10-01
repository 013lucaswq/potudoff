import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Crosshair, ArrowUp, MessageSquare, Send } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-[#1C1C24] text-neutral-400 pt-16 pb-12 overflow-hidden">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF1E27]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A22]">
          {/* Coluna 1: Marca & Descrição */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#130708] border border-[#FF1E27]/50 flex items-center justify-center shadow-[0_0_10px_rgba(255,30,39,0.4)]">
                <Crosshair className="w-5 h-5 text-[#FF1E27]" />
              </div>
              <span className="font-orbitron font-extrabold text-xl text-white tracking-wider">
                AUXÍLIO <span className="text-[#FF1E27]">DE MIRA</span>
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              {siteConfig.footer.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0E0E12] rounded border border-[#22222B] text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>{siteConfig.brand.version} — {siteConfig.brand.statusBadge}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-widest text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 font-rajdhani font-semibold text-sm">
              {(siteConfig?.footer?.links || siteConfig?.navLinks || []).map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-neutral-400 hover:text-white hover:text-[#FF1E27] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#FF1E27] text-xs">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Comunidade & Suporte */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-widest text-white">
              Atendimento VIP
            </h4>
            <p className="text-xs text-neutral-400">
              Precisa de ajuda ou calibração personalizada?
            </p>
            <div className="space-y-2 pt-1 font-mono text-xs">
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded bg-[#0F0F14] border border-[#22222B] hover:border-[#FF1E27]/50 text-neutral-300 hover:text-white transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#FF1E27]" />
                <span>WhatsApp Oficial</span>
              </a>
              <a
                href={siteConfig.brand.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded bg-[#0F0F14] border border-[#22222B] hover:border-[#FF1E27]/50 text-neutral-300 hover:text-white transition-all"
              >
                <Send className="w-4 h-4 text-[#FF1E27]" />
                <span>Canal Telegram VIP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer / Aviso Legal */}
        <div className="py-6 text-[11px] text-neutral-500 font-sans leading-relaxed border-b border-[#14141A]">
          {siteConfig.footer.disclaimer}
        </div>

        {/* Linha Inferior com Copyright e Botão Voltar ao Topo */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div>{siteConfig.footer.copyright}</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#0E0E12] border border-[#22222A] hover:border-[#FF1E27] hover:text-white transition-all group"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF1E27] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
