import React, { useRef, useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useCheckout } from "../hooks/useCheckout";
import { ArrowRight } from "lucide-react";

export default function MiraProExperience() {
  const containerRef = useRef(null);
  const progress = useScrollProgress(containerRef);
  const { openCheckout } = useCheckout();
  const [selectedStyle, setSelectedStyle] = useState("cross");
  const [crosshairColor, setCrosshairColor] = useState("#FF1E27");

  // Rotação 3D que se alinha com o scroll
  const rotateX = Math.max(0, (1 - progress * 2) * 10);
  const scale = 0.94 + Math.min(progress * 0.06, 0.06);

  return (
    <section
      id="mira-pro"
      ref={containerRef}
      className="relative w-full min-h-[160vh] bg-[#050505] py-16"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Glow de fundo */}
        <div className="absolute w-[600px] h-[600px] bg-[#E50914]/15 rounded-full blur-[160px] pointer-events-none" />

        {/* HUD de progresso no Topo */}
        <div className="mb-4 flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0A0A0E]/90 border border-[#FF1E27]/50 backdrop-blur-md font-mono text-[10px] sm:text-xs text-neutral-200 shadow-[0_0_15px_rgba(255,30,39,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#FF1E27] animate-ping" />
          <span className="text-[#FF1E27] font-bold">MIRA PRO // ESTÚDIO TÁTICO:</span>
          <span>{progress < 0.5 ? "CALIBRAGEM ÓPTICA & RETÍCULOS" : "ESTÚDIO COMPLETO // ACESSO LIBERADO"}</span>
          <span className="text-white/60">({Math.round(progress * 100)}%)</span>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* CONTAINER 3D DA MIRA PRO                                           */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="relative w-full max-w-[480px] sm:max-w-[540px] transition-all duration-100 ease-out"
          style={{
            transform: `perspective(1200px) rotateX(${rotateX}deg) scale(${scale})`,
            opacity: 1, // Sempre 100% visível
          }}
        >
          <div className="p-6 sm:p-7 bg-gradient-to-b from-[#16080A] via-[#0E0E12] to-[#08080A] rounded-3xl border border-[#FF1E27] shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_30px_rgba(229,9,20,0.3)] relative overflow-hidden">
            {/* Header da Seção */}
            <div className="text-center pb-4 border-b border-[#20202A] mb-4">
              <span className="font-tech text-xs tracking-[0.25em] text-[#FF1E27] font-semibold uppercase">
                SUÍTE DE RETÍCULOS TÁTICOS
              </span>
              <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-white tracking-wider flex items-center justify-center gap-2 mt-1">
                MIRA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#FF1E27] text-glow-red">
                  PRO
                </span>
              </h2>
            </div>

            {/* Viewport Interativo da Mira */}
            <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-[#09090D] border border-[#22222E] flex items-center justify-center overflow-hidden mb-4 select-none">
              <div className="absolute inset-0 bg-cyber-grid opacity-25" />
              <div className="absolute w-40 h-40 rounded-full border border-neutral-800" />
              <div className="absolute w-24 h-24 rounded-full border border-dashed border-[#FF1E27]/40 animate-spin" />

              {/* Mira Renderizada Central */}
              <div className="relative z-10 flex items-center justify-center">
                {selectedStyle === "dot" && (
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{
                      backgroundColor: crosshairColor,
                      boxShadow: `0 0 15px ${crosshairColor}, 0 0 2px #fff`,
                    }}
                  />
                )}

                {selectedStyle === "cross" && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: crosshairColor }} />
                    <div className="absolute w-[2px] h-4 -top-5" style={{ backgroundColor: crosshairColor, boxShadow: `0 0 8px ${crosshairColor}` }} />
                    <div className="absolute w-[2px] h-4 -bottom-5" style={{ backgroundColor: crosshairColor, boxShadow: `0 0 8px ${crosshairColor}` }} />
                    <div className="absolute h-[2px] w-4 -left-5" style={{ backgroundColor: crosshairColor, boxShadow: `0 0 8px ${crosshairColor}` }} />
                    <div className="absolute h-[2px] w-4 -right-5" style={{ backgroundColor: crosshairColor, boxShadow: `0 0 8px ${crosshairColor}` }} />
                  </div>
                )}

                {selectedStyle === "circle" && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: crosshairColor }} />
                    <div
                      className="w-8 h-8 rounded-full border-2"
                      style={{ borderColor: crosshairColor, boxShadow: `0 0 12px ${crosshairColor}` }}
                    />
                  </div>
                )}

                {selectedStyle === "dynamic" && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: crosshairColor }} />
                    <div
                      className="w-10 h-10 rounded-full border border-dashed animate-spin"
                      style={{ borderColor: crosshairColor, boxShadow: `0 0 12px ${crosshairColor}` }}
                    />
                    <div className="absolute w-1 h-3 -top-5" style={{ backgroundColor: crosshairColor }} />
                    <div className="absolute w-1 h-3 -bottom-5" style={{ backgroundColor: crosshairColor }} />
                  </div>
                )}
              </div>

              <div className="absolute bottom-2 left-3 font-mono text-[9px] text-neutral-400">
                ZOOM: 1.0X | OPACITY: 100%
              </div>
              <div className="absolute bottom-2 right-3 font-mono text-[9px] text-[#FF1E27]">
                RETICLE_ACTIVE
              </div>
            </div>

            {/* Módulos e Seletores */}
            <div className="space-y-2.5">
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: "dot", name: "DOT" },
                  { id: "cross", name: "CROSS" },
                  { id: "circle", name: "CIRCLE" },
                  { id: "dynamic", name: "DYNAMIC" },
                ].map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-2 rounded-lg font-orbitron font-bold text-xs uppercase tracking-wider transition-all ${
                      selectedStyle === style.id
                        ? "bg-[#25090D] border border-[#FF1E27] text-white shadow-[0_0_10px_rgba(255,30,39,0.5)]"
                        : "bg-[#111116] border border-[#22222B] text-neutral-400 hover:text-white"
                    }`}
                  >
                    {style.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0F0F14] border border-[#20202A]">
                <span className="font-orbitron text-xs text-neutral-300 font-semibold">
                  COR NEON:
                </span>
                <div className="flex items-center gap-2.5">
                  {["#FF1E27", "#00F0FF", "#39FF14", "#FFFFFF"].map((hex) => (
                    <button
                      key={hex}
                      onClick={() => setCrosshairColor(hex)}
                      style={{ backgroundColor: hex }}
                      className={`w-5 h-5 rounded-full border transition-all ${
                        crosshairColor === hex ? "scale-125 border-white shadow-[0_0_8px_currentColor]" : "border-transparent opacity-60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* BOTÃO DE COMPRA DA MIRA PRO                                        */}
        {/* ------------------------------------------------------------------ */}
        <div className="relative z-40 mt-6 text-center max-w-lg mx-auto">
          <div className="mb-2">
            <span className="font-tech text-xs tracking-[0.25em] text-[#FF1E27] uppercase font-bold block">
              MIRA PRO
            </span>
            <h3 className="font-orbitron font-black text-xl sm:text-2xl text-white tracking-wider uppercase">
              CONHEÇA TODOS OS RECURSOS
            </h3>
          </div>

          <a
            href={siteConfig.miraPro.buyButton.url}
            onClick={(e) => {
              e.preventDefault();
              openCheckout(siteConfig.miraPro.buyButton.url, "MIRA PRO");
            }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-4 sm:py-5 font-orbitron font-black text-base sm:text-lg tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#B30710] via-[#E50914] to-[#FF1E27] cyber-btn border-2 border-[#FF1E27] shadow-[0_0_35px_rgba(229,9,20,0.85)] hover:shadow-[0_0_55px_rgba(255,30,39,1)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>{siteConfig.miraPro.buyButton.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <p className="mt-2 text-[11px] font-mono text-neutral-400">
            Mais de 30 retículos inclusos • Acesso vitalício imediato
          </p>
        </div>
      </div>
    </section>
  );
}
