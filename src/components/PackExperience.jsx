import React, { useRef } from "react";
import { siteConfig } from "../config/siteConfig";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useCheckout } from "../hooks/useCheckout";
import {
  Sparkles,
  ArrowRight,
  Check,
  Lock,
  Clock,
  Cpu,
  Crosshair,
  Target,
  Settings,
  Sliders,
  FolderSync,
  Award,
} from "lucide-react";

export default function PackExperience() {
  const containerRef = useRef(null);
  const progress = useScrollProgress(containerRef);
  const { openCheckout } = useCheckout();

  // Rotação e escala suaves
  const scale = 0.94 + Math.min(progress * 0.06, 0.06);

  return (
    <section
      id="pack"
      ref={containerRef}
      className="relative w-full min-h-[180vh] bg-[#070709] py-16"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Glow colossal de fundo */}
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-[#E50914]/20 to-[#FF1E27]/10 rounded-full blur-[200px] pointer-events-none" />

        {/* HUD de Status do Pack */}
        <div className="mb-4 flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0E0E14]/90 border border-[#FF1E27]/50 backdrop-blur-md font-mono text-[10px] sm:text-xs text-neutral-200 shadow-[0_0_15px_rgba(255,30,39,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#FF1E27] animate-ping" />
          <span className="text-[#FF1E27] font-bold">ECOSSISTEMA PACK:</span>
          <span>{progress < 0.5 ? "NÚCLEO CENTRAL & 10 FERRAMENTAS ORBITAIS" : "PACOTE COMPLETO // OFERTA VIP"}</span>
          <span className="text-white/60">({Math.round(progress * 100)}%)</span>
        </div>

        {/* Título e Headline do Pack */}
        <div className="text-center mb-5 z-20">
          <span className="font-tech text-xs tracking-[0.25em] text-[#FF1E27] font-semibold uppercase">
            {siteConfig.pack.badge}
          </span>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-white tracking-tight uppercase mt-0.5">
            {siteConfig.pack.title}
          </h2>
          <p className="font-rajdhani font-bold text-xs sm:text-base text-neutral-300 uppercase tracking-widest mt-0.5">
            {siteConfig.pack.headline}
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* COMPOSIÇÃO DO PACK COM CARDS ORBITAIS E BOX DE PREÇO              */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="relative w-full max-w-5xl transition-all duration-100 ease-out"
          style={{
            transform: `perspective(1200px) scale(${scale})`,
            opacity: 1, // Sempre visível
          }}
        >
          <div className="p-6 sm:p-8 bg-gradient-to-b from-[#16080A] via-[#0E0E14] to-[#08080C] rounded-3xl border-2 border-[#FF1E27] shadow-[0_0_60px_rgba(229,9,20,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Coluna Esquerda: O QUE VEM NO PACK + CARDS ORBITAIS */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#25090D] border border-[#FF1E27]/50 text-[#FF1E27] font-orbitron text-[10px] font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  SUÍTE ALL-IN-ONE
                </div>

                <h3 className="font-orbitron font-extrabold text-xl sm:text-2xl text-white">
                  TODOS OS PRODUTOS & RECURSOS DESBLOQUEADOS
                </h3>

                {/* Grid dos Cards Orbitais */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 font-mono text-[10px]">
                  <div className="p-2 rounded bg-[#121218] border border-[#2B171A] flex items-center gap-1.5 text-neutral-200">
                    <Crosshair className="w-3.5 h-3.5 text-[#FF1E27]" />
                    <span>AUXÍLIO DE MIRA</span>
                  </div>
                  <div className="p-2 rounded bg-[#121218] border border-[#2B171A] flex items-center gap-1.5 text-neutral-200">
                    <Target className="w-3.5 h-3.5 text-[#FF1E27]" />
                    <span>MIRA PRO</span>
                  </div>
                  <div className="p-2 rounded bg-[#121218] border border-[#2B171A] flex items-center gap-1.5 text-neutral-200">
                    <Cpu className="w-3.5 h-3.5 text-[#FF1E27]" />
                    <span>GERADOR SENS</span>
                  </div>
                  <div className="p-2 rounded bg-[#121218] border border-[#2B171A] flex items-center gap-1.5 text-neutral-200">
                    <Settings className="w-3.5 h-3.5 text-[#FF1E27]" />
                    <span>CENTRAL TOOLS</span>
                  </div>
                  <div className="p-2 rounded bg-[#121218] border border-[#2B171A] flex items-center gap-1.5 text-neutral-200">
                    <Sliders className="w-3.5 h-3.5 text-[#FF1E27]" />
                    <span>PERFIS VIP</span>
                  </div>
                  <div className="p-2 rounded bg-[#121218] border border-[#2B171A] flex items-center gap-1.5 text-neutral-200">
                    <FolderSync className="w-3.5 h-3.5 text-[#FF1E27]" />
                    <span>ATUALIZAÇÕES</span>
                  </div>
                </div>

                {/* Benefícios com Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {siteConfig.pack.whatIncludes.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#200A0D] border border-[#FF1E27] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#FF1E27] stroke-[3]" />
                      </div>
                      <span className="text-xs text-neutral-300 font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna Direita: Box de Preço e Ação */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#09090D] border border-[#2B171A] text-center shadow-inner">
                <span className="px-3 py-1 rounded bg-[#2A090D] text-[#FF1E27] font-orbitron text-[10px] font-bold tracking-wider uppercase mb-2 inline-block">
                  {siteConfig.pack.price.discountBadge}
                </span>

                <span className="text-neutral-400 line-through text-xs font-rajdhani block">
                  De {siteConfig.pack.price.original}
                </span>

                <div className="my-1">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-wider block">Por apenas</span>
                  <span className="font-orbitron font-black text-4xl sm:text-5xl text-white text-glow-red">
                    {siteConfig.pack.price.current}
                  </span>
                </div>

                <span className="text-xs text-neutral-400 font-mono block mb-4">
                  {siteConfig.pack.price.installments}
                </span>

                {/* Botão de Ação: COMPRAR PACK COMPLETO */}
                <a
                  href={siteConfig.pack.buyButton.url}
                  onClick={(e) => {
                    e.preventDefault();
                    openCheckout(siteConfig.pack.buyButton.url, "PACK DEFINITIVO");
                  }}
                  className="w-full group inline-flex items-center justify-center gap-3 py-4 px-6 font-orbitron font-black text-sm tracking-[0.18em] uppercase text-white bg-gradient-to-r from-[#B30710] via-[#E50914] to-[#FF1E27] cyber-btn border-2 border-[#FF1E27] shadow-[0_0_30px_rgba(229,9,20,0.8)] hover:shadow-[0_0_50px_rgba(255,30,39,1)] transition-all duration-300 cursor-pointer"
                >
                  <span>{siteConfig.pack.buyButton.text}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>

                <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-mono text-neutral-400 pt-3 border-t border-[#1C1C24]">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#FF1E27]" /> Seguro
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#FF1E27]" /> Vitalício
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#FF1E27]" /> Garantia 7D
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
