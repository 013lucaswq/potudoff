import React from "react";
import { siteConfig } from "../config/siteConfig";
import TiltCard from "./TiltCard";
import {
  Check,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Flame,
  Clock,
  Lock,
} from "lucide-react";

export default function PackSection() {
  return (
    <section id="pack" className="relative w-full py-24 bg-[#070709] overflow-hidden">
      {/* Background glow lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#E50914]/15 to-[#FF1E27]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber ambient grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#1A0608] border border-[#FF1E27]/50 text-[#FF1E27] font-orbitron text-xs tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(255,30,39,0.25)]">
            <Flame className="w-3.5 h-3.5 text-[#FF1E27] animate-pulse" />
            {siteConfig.pack.badge}
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            O PACK{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] via-[#FF1E27] to-[#FF4F57] text-glow-red">
              DEFINITIVO
            </span>
          </h2>

          <p className="mt-4 font-rajdhani font-semibold text-lg sm:text-xl text-neutral-300">
            {siteConfig.pack.tagline}
          </p>

          <p className="mt-3 font-sans text-sm sm:text-base text-neutral-400 leading-relaxed">
            {siteConfig.pack.description}
          </p>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* CARD PRINCIPAL DO PACK (3D Holographic Container)             */}
        {/* -------------------------------------------------------------- */}
        <div className="relative max-w-4xl mx-auto">
          {/* Top Floating Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
            <span className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-[#E50914] to-[#FF1E27] text-white font-orbitron text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(255,30,39,0.8)] border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              OFERTA EXCLUSIVA // MAIS RECOMENDADO
            </span>
          </div>

          <TiltCard
            maxTilt={6}
            className="p-8 sm:p-12 bg-gradient-to-b from-[#13080A] via-[#0E0E12] to-[#08080B] rounded-2xl border-2 border-[#FF1E27]/50 shadow-[0_0_50px_rgba(229,9,20,0.35)] relative overflow-hidden"
          >
            {/* Tech Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FF1E27]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF1E27]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF1E27]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF1E27]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Coluna Esquerda: Informações e Benefícios */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-tech text-xs tracking-[0.25em] text-[#FF1E27] font-semibold uppercase">
                    SUÍTE COMPLETA DE ALTA PERFORMANCE
                  </span>
                  <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white mt-1">
                    PACK AUXÍLIO DE MIRA + MIRA PRO
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Acesso imediato e irrestrito a todas as ferramentas gamers em sua versão mais potente.
                  </p>
                </div>

                {/* Lista de Benefícios */}
                <div className="space-y-3 pt-2">
                  {siteConfig.pack.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#200A0D] border border-[#FF1E27] flex items-center justify-center flex-shrink-0 shadow-[0_0_8px_rgba(255,30,39,0.5)]">
                        <Check className="w-3 h-3 text-[#FF1E27] stroke-[3]" />
                      </div>
                      <span className="font-sans text-sm text-neutral-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Compatibilidade */}
                <div className="p-3.5 bg-[#0B0B0E] border border-[#222228] rounded-lg flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FF1E27] flex-shrink-0" />
                  <p className="text-xs text-neutral-400">
                    <strong className="text-white">{siteConfig.pack.specHighlight.title}:</strong>{" "}
                    {siteConfig.pack.specHighlight.details}
                  </p>
                </div>
              </div>

              {/* Coluna Direita: Box de Preço e Ação */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 bg-[#0B0B0F]/90 rounded-xl border border-[#2B171A] shadow-inner text-center">
                <span className="px-3 py-1 rounded bg-[#2A090D] text-[#FF1E27] font-orbitron text-[11px] font-bold tracking-wider uppercase mb-3">
                  {siteConfig.pack.price.discountBadge}
                </span>

                <span className="text-neutral-500 line-through text-sm font-rajdhani">
                  De {siteConfig.pack.price.original}
                </span>

                <div className="my-2">
                  <span className="text-neutral-400 font-sans text-xs uppercase block tracking-wider">
                    Por apenas
                  </span>
                  <span className="font-orbitron font-black text-4xl sm:text-5xl text-white text-glow-red">
                    {siteConfig.pack.price.current}
                  </span>
                </div>

                <span className="text-xs text-neutral-400 font-mono mb-6">
                  {siteConfig.pack.price.installments}
                </span>

                {/* Botão de Ação VER PACK */}
                <a
                  href={siteConfig.pack.ctaButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group relative inline-flex items-center justify-center gap-2 py-4 px-6 font-orbitron font-extrabold text-sm sm:text-base tracking-[0.15em] uppercase text-white bg-gradient-to-r from-[#B30710] to-[#E50914] hover:from-[#E50914] hover:to-[#FF1E27] cyber-btn border-2 border-[#FF1E27] shadow-[0_0_25px_rgba(229,9,20,0.7)] hover:shadow-[0_0_40px_rgba(255,30,39,0.95)] transition-all duration-300"
                >
                  <span>{siteConfig.pack.ctaButton.text}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>

                {/* Selos de Confiança */}
                <div className="mt-5 grid grid-cols-2 gap-3 w-full text-left font-mono text-[10px] text-neutral-400 pt-4 border-t border-[#1C1C24]">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#FF1E27]" />
                    <span>Compra Blindada</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#FF1E27]" />
                    <span>Acesso Imediato</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
