import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import TiltCard from "./TiltCard";
import { Crosshair, Zap, ChevronRight } from "lucide-react";

export default function MiraProSection() {
  const [selectedStyle, setSelectedStyle] = useState("cross"); // 'dot' | 'cross' | 'circle' | 'dynamic'
  const [crosshairColor, setCrosshairColor] = useState("#FF1E27");
  const [gap, setGap] = useState(4);
  const [firing, setFiring] = useState(false);

  const colors = [
    { name: "Neon Red", hex: "#FF1E27" },
    { name: "Cyan Pro", hex: "#00F0FF" },
    { name: "Lime Target", hex: "#39FF14" },
    { name: "White Ghost", hex: "#FFFFFF" },
  ];

  const handleTestShot = () => {
    setFiring(true);
    setTimeout(() => setFiring(false), 250);
  };

  const scrollToPack = (e) => {
    e.preventDefault();
    const section = document.querySelector("#pack");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="mira-pro" className="relative w-full py-24 bg-[#050505] overflow-hidden">
      {/* Background Red Light Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#E50914]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#FF1E27]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#160608] border border-[#FF1E27]/40 text-[#FF1E27] font-orbitron text-xs tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(255,30,39,0.2)]">
            <Crosshair className="w-3.5 h-3.5 text-[#FF1E27]" />
            {siteConfig.miraPro.badge}
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            MIRA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] via-[#FF1E27] to-[#FF4F57] text-glow-red">
              PRO
            </span>
          </h2>

          <p className="mt-4 font-rajdhani font-semibold text-lg sm:text-xl text-neutral-300">
            {siteConfig.miraPro.tagline}
          </p>

          <p className="mt-3 font-sans text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {siteConfig.miraPro.description}
          </p>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* COMPOSIÇÃO VISUAL: ESTÚDIO INTERATIVO DE RETÍCULO PRO          */}
        {/* -------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Painel Interativo de Teste e Visualização da Mira */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={8}
              className="p-6 bg-[#0B0B0E] rounded-2xl border border-[#2B1518] shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(229,9,20,0.15)] overflow-hidden"
            >
              {/* Header do Simulador */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E1E26] mb-5">
                <div className="flex items-center gap-2 font-orbitron text-xs text-neutral-300 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#FF1E27] animate-pulse" />
                  PRO CROSSHAIR STUDIO 3D
                </div>
                <div className="font-mono text-[11px] text-neutral-500">
                  FOV_RENDER: 100%
                </div>
              </div>

              {/* Viewport da Mira (Alvo com Crosshair estilizado) */}
              <div
                onClick={handleTestShot}
                className="relative w-full h-72 sm:h-80 bg-gradient-to-br from-[#0E0E12] via-[#050507] to-[#0A0A0E] rounded-xl border border-[#22222B] flex items-center justify-center cursor-crosshair overflow-hidden group select-none"
              >
                {/* HUD Overlay Lines */}
                <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
                <div className="absolute w-48 h-48 rounded-full border border-neutral-800/80 pointer-events-none" />
                <div className="absolute w-72 h-72 rounded-full border border-neutral-800/40 pointer-events-none" />

                {/* Marcadores HUD nos 4 cantos */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-500">
                  X: 1920 | Y: 1080
                </div>
                <div className="absolute top-3 right-3 text-[10px] font-mono text-[#FF1E27]">
                  [CLICK TO FIRE]
                </div>

                {/* Flash de disparo */}
                {firing && (
                  <div className="absolute inset-0 bg-[#FF1E27]/10 animate-ping pointer-events-none" />
                )}

                {/* ---------------- MIRA ESTILIZADA RENDERIZADA ---------------- */}
                <div
                  className="relative flex items-center justify-center transition-transform duration-100"
                  style={{
                    transform: firing ? "scale(1.35)" : "scale(1)",
                  }}
                >
                  {/* Estilo: DOT (Ponto Cirúrgico) */}
                  {selectedStyle === "dot" && (
                    <div
                      className="w-3 h-3 rounded-full transition-all"
                      style={{
                        backgroundColor: crosshairColor,
                        boxShadow: `0 0 12px ${crosshairColor}, 0 0 2px #000`,
                      }}
                    />
                  )}

                  {/* Estilo: CROSS (Cruz Tática) */}
                  {selectedStyle === "cross" && (
                    <div className="relative flex items-center justify-center">
                      {/* Ponto central */}
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: crosshairColor }}
                      />
                      {/* Barra Superior */}
                      <div
                        className="absolute w-[2px] h-3.5 transition-all"
                        style={{
                          backgroundColor: crosshairColor,
                          top: `-${14 + gap + (firing ? 6 : 0)}px`,
                          boxShadow: `0 0 8px ${crosshairColor}`,
                        }}
                      />
                      {/* Barra Inferior */}
                      <div
                        className="absolute w-[2px] h-3.5 transition-all"
                        style={{
                          backgroundColor: crosshairColor,
                          bottom: `-${14 + gap + (firing ? 6 : 0)}px`,
                          boxShadow: `0 0 8px ${crosshairColor}`,
                        }}
                      />
                      {/* Barra Esquerda */}
                      <div
                        className="absolute h-[2px] w-3.5 transition-all"
                        style={{
                          backgroundColor: crosshairColor,
                          left: `-${14 + gap + (firing ? 6 : 0)}px`,
                          boxShadow: `0 0 8px ${crosshairColor}`,
                        }}
                      />
                      {/* Barra Direita */}
                      <div
                        className="absolute h-[2px] w-3.5 transition-all"
                        style={{
                          backgroundColor: crosshairColor,
                          right: `-${14 + gap + (firing ? 6 : 0)}px`,
                          boxShadow: `0 0 8px ${crosshairColor}`,
                        }}
                      />
                    </div>
                  )}

                  {/* Estilo: CIRCLE (Círculo de Aquisição) */}
                  {selectedStyle === "circle" && (
                    <div className="relative flex items-center justify-center">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: crosshairColor }}
                      />
                      <div
                        className="rounded-full border-2 transition-all"
                        style={{
                          borderColor: crosshairColor,
                          width: `${24 + gap * 2 + (firing ? 10 : 0)}px`,
                          height: `${24 + gap * 2 + (firing ? 10 : 0)}px`,
                          boxShadow: `0 0 10px ${crosshairColor}`,
                        }}
                      />
                    </div>
                  )}

                  {/* Estilo: DYNAMIC (Retículo Híbrido HUD) */}
                  {selectedStyle === "dynamic" && (
                    <div className="relative flex items-center justify-center">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: crosshairColor }}
                      />
                      <div
                        className="absolute rounded-full border border-dashed transition-all animate-spin"
                        style={{
                          borderColor: crosshairColor,
                          width: `${34 + gap * 2 + (firing ? 14 : 0)}px`,
                          height: `${34 + gap * 2 + (firing ? 14 : 0)}px`,
                          boxShadow: `0 0 12px ${crosshairColor}`,
                        }}
                      />
                      <div
                        className="absolute w-1 h-3 -top-6"
                        style={{ backgroundColor: crosshairColor }}
                      />
                      <div
                        className="absolute w-1 h-3 -bottom-6"
                        style={{ backgroundColor: crosshairColor }}
                      />
                    </div>
                  )}
                </div>

                {/* Dica de clique */}
                <div className="absolute bottom-3 text-center text-xs font-rajdhani text-neutral-400 group-hover:text-white transition-colors">
                  Clique na tela para testar a resposta e animação de disparo
                </div>
              </div>

              {/* Controles do Estúdio */}
              <div className="mt-5 space-y-4">
                {/* Seletor de Tipo de Mira */}
                <div>
                  <label className="block font-orbitron text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Estilo do Retículo:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {siteConfig.miraPro.crosshairs.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => setSelectedStyle(ch.id)}
                        className={`p-2.5 rounded-lg border font-rajdhani font-bold text-xs uppercase tracking-wider transition-all text-center ${
                          selectedStyle === ch.id
                            ? "bg-[#25090D] border-[#FF1E27] text-white shadow-[0_0_12px_rgba(255,30,39,0.4)]"
                            : "bg-[#111116] border-[#22222B] text-neutral-400 hover:text-white hover:border-neutral-700"
                        }`}
                      >
                        {ch.name.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Controle de Abertura / Gap do Retículo */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-orbitron text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Espaçamento / Abertura:
                    </span>
                    <span className="font-mono text-xs text-[#FF1E27] font-bold">
                      {gap}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={gap}
                    onChange={(e) => setGap(Number(e.target.value))}
                    className="w-full accent-[#FF1E27] cursor-pointer"
                  />
                </div>

                {/* Seletor de Cor Neon */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-orbitron text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Cor Neon:
                  </span>
                  <div className="flex items-center gap-3">
                    {colors.map((c) => (
                      <button
                        key={c.hex}
                        onClick={() => setCrosshairColor(c.hex)}
                        style={{ backgroundColor: c.hex }}
                        className={`w-6 h-6 rounded-full border-2 transition-all ${
                          crosshairColor === c.hex
                            ? "scale-125 border-white shadow-[0_0_10px_currentColor]"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Cards de Recursos e Vantagens */}
          <div className="lg:col-span-5 space-y-4">
            {siteConfig.miraPro.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 bg-gradient-to-r from-[#0F0F14] to-[#0A0A0D] rounded-xl border border-[#222228] hover:border-[#FF1E27]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#19090C] border border-[#FF1E27]/40 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_12px_rgba(255,30,39,0.4)] transition-all">
                    <Zap className="w-5 h-5 text-[#FF1E27]" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-base text-white group-hover:text-[#FF1E27] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Botão de Ação */}
            <div className="pt-4">
              <a
                href={siteConfig.miraPro.ctaButton.url}
                onClick={scrollToPack}
                className="w-full group inline-flex items-center justify-center gap-3 py-4 px-8 font-orbitron font-black text-sm tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#B30710] to-[#E50914] hover:from-[#E50914] hover:to-[#FF1E27] cyber-btn border-2 border-[#FF1E27] shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:shadow-[0_0_35px_rgba(255,30,39,0.9)] transition-all duration-300"
              >
                <span>{siteConfig.miraPro.ctaButton.text}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
