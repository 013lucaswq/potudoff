import React, { useRef } from "react";
import { siteConfig } from "../config/siteConfig";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { Sparkles } from "lucide-react";

export default function SensitivityExperience() {
  const containerRef = useRef(null);
  const progress = useScrollProgress(containerRef);

  const rotateX = Math.max(0, (1 - progress * 2) * 10);
  const scale = 0.94 + Math.min(progress * 0.06, 0.06);

  return (
    <section
      id="sensibilidade"
      ref={containerRef}
      className="relative w-full min-h-[160vh] bg-[#050505] py-16"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Glow de fundo */}
        <div className="absolute w-[600px] h-[600px] bg-[#E50914]/15 rounded-full blur-[170px] pointer-events-none" />

        {/* HUD de progresso no Topo */}
        <div className="mb-4 flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0A0A0E]/90 border border-[#FF1E27]/50 backdrop-blur-md font-mono text-[10px] sm:text-xs text-neutral-200 shadow-[0_0_15px_rgba(255,30,39,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#FF1E27] animate-ping" />
          <span className="text-[#FF1E27] font-bold">SENSITIVITY MATRIX:</span>
          <span>{progress < 0.5 ? "CALIBRAGEM DE DPI & CONTROLE" : "MATRIZ DE SENSIBILIDADE COMPLETA"}</span>
          <span className="text-white/60">({Math.round(progress * 100)}%)</span>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* INTERFACE DO GERADOR                                               */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="relative w-full max-w-3xl transition-all duration-100 ease-out"
          style={{
            transform: `perspective(1200px) rotateX(${rotateX}deg) scale(${scale})`,
            opacity: 1, // Sempre visível
          }}
        >
          <div className="p-6 sm:p-9 bg-gradient-to-b from-[#13080A] via-[#0D0D12] to-[#070709] rounded-3xl border border-[#FF1E27] shadow-[0_0_50px_rgba(0,0,0,0.95),0_0_30px_rgba(229,9,20,0.3)] relative overflow-hidden">
            {/* Header da Ferramenta */}
            <div className="text-center pb-4 border-b border-[#20202A] mb-5">
              <span className="font-tech text-xs tracking-[0.25em] text-[#FF1E27] font-semibold uppercase">
                {siteConfig.sensitivity.badge}
              </span>
              <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-white tracking-wider flex items-center justify-center gap-2 mt-1">
                GERADOR DE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#FF1E27] text-glow-red">
                  SENSIBILIDADE
                </span>
              </h2>
              <p className="mt-1 text-xs font-mono text-neutral-400">
                {siteConfig.sensitivity.description}
              </p>
            </div>

            {/* Painel de Controles Visuais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div className="p-3.5 rounded-xl bg-[#0F0F15] border border-[#22222E]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-orbitron text-xs text-white font-bold">DPI DO DISPOSITIVO</span>
                  <span className="font-mono text-xs text-[#FF1E27] font-bold">800 DPI</span>
                </div>
                <div className="w-full bg-[#181822] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#FF1E27] h-full w-[45%]" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0F0F15] border border-[#22222E]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-orbitron text-xs text-white font-bold">SENSIBILIDADE BASE</span>
                  <span className="font-mono text-xs text-[#FF1E27] font-bold">1.45 PRO</span>
                </div>
                <div className="w-full bg-[#181822] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#FF1E27] h-full w-[65%]" />
                </div>
              </div>
            </div>

            {/* Métricas: PRECISÃO, CONTROLE, VELOCIDADE */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="p-3 rounded-xl bg-[#0B0B10] border border-[#262635] text-center">
                <span className="block text-[10px] font-mono text-neutral-400 uppercase">PRECISÃO</span>
                <span className="font-orbitron font-extrabold text-base sm:text-lg text-white text-glow-red mt-1 block">
                  98.6%
                </span>
                <div className="w-full bg-[#181822] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-green-500 h-full w-[98%]" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0B0B10] border border-[#262635] text-center">
                <span className="block text-[10px] font-mono text-neutral-400 uppercase">CONTROLE</span>
                <span className="font-orbitron font-extrabold text-base sm:text-lg text-white text-glow-red mt-1 block">
                  96.2%
                </span>
                <div className="w-full bg-[#181822] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#FF1E27] h-full w-[96%]" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0B0B10] border border-[#262635] text-center">
                <span className="block text-[10px] font-mono text-neutral-400 uppercase">VELOCIDADE</span>
                <span className="font-orbitron font-extrabold text-base sm:text-lg text-white text-glow-red mt-1 block">
                  94.8%
                </span>
                <div className="w-full bg-[#181822] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#FF1E27] h-full w-[94%]" />
                </div>
              </div>
            </div>

            {/* Botão Demonstrativo GERAR SENSIBILIDADE */}
            <div className="text-center pt-1">
              <button
                type="button"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 font-orbitron font-black text-sm tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#B30710] to-[#E50914] hover:from-[#E50914] hover:to-[#FF1E27] cyber-btn border-2 border-[#FF1E27] shadow-[0_0_25px_rgba(229,9,20,0.7)] hover:shadow-[0_0_40px_rgba(255,30,39,0.9)] transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>GERAR SENSIBILIDADE</span>
              </button>
              <p className="mt-2 text-[10px] font-mono text-neutral-400">
                [DEMONSTRAÇÃO VISUAL // ESTRUTURA PREPARADA PARA FUNCIONALIDADE FUTURA]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
