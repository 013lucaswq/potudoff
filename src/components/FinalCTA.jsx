import React from "react";
import { siteConfig } from "../config/siteConfig";
import { useCheckout } from "../hooks/useCheckout";
import { ChevronRight, Zap, Lock, ShieldCheck, Clock } from "lucide-react";

export default function FinalCTA() {
  const { finalCta } = siteConfig;
  const { openCheckout } = useCheckout();

  return (
    <section className="relative w-full py-28 bg-[#050505] border-b border-[#1A1A22] overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF0000]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#160608] border border-[#FF0000]/50 text-[#FF0000] font-mono text-xs font-bold tracking-widest uppercase mb-6">
          <Zap className="w-4 h-4 text-[#FF0000]" />
          {finalCta.badge}
        </div>

        {/* Título Principal de Conversão */}
        <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
          {finalCta.title}
        </h2>

        {/* Subtítulo */}
        <p className="mt-4 max-w-2xl mx-auto font-rajdhani font-semibold text-lg sm:text-2xl text-neutral-300 leading-relaxed">
          {finalCta.subtitle}
        </p>

        {/* Botão de Ação Definitivo */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <a
            href={finalCta.ctaButton.url}
            onClick={(e) => {
              e.preventDefault();
              openCheckout(finalCta.ctaButton.url, "AUXÍLIO DE MIRA");
            }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-5 font-orbitron font-black text-base sm:text-lg tracking-wider uppercase text-white bg-[#FF0000] hover:bg-[#D60000] cyber-btn border-2 border-[#FF0000] shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:shadow-[0_0_50px_rgba(255,0,0,0.9)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{finalCta.ctaButton.text}</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Selos de Confiança */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#00FF41]" /> Pagamento 100% Seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FF0000]" /> Envio Imediato no E-mail
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00FF41]" /> 7 Dias de Garantia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
