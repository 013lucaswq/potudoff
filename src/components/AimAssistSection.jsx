import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import TiltCard from "./TiltCard";
import {
  Crosshair,
  ShieldAlert,
  Cpu,
  Layers,
  CheckCircle2,
  Activity,
  ChevronRight,
} from "lucide-react";

export default function AimAssistSection() {
  const [activeTab, setActiveTab] = useState("with"); // 'without' | 'with'

  const iconMap = {
    Crosshair: Crosshair,
    ShieldAlert: ShieldAlert,
    Cpu: Cpu,
    Layers: Layers,
  };

  const scrollToPack = (e) => {
    e.preventDefault();
    const section = document.querySelector("#pack");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="aim-assist" className="relative w-full py-24 bg-[#050505] overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E50914]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF1E27]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#130708] border border-[#FF1E27]/40 text-[#FF1E27] font-orbitron text-xs tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(255,30,39,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27] animate-ping" />
            {siteConfig.aimAssist.badge}
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            AUXÍLIO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] via-[#FF1E27] to-[#FF4B53] text-glow-red">
              DE MIRA
            </span>
          </h2>

          <p className="mt-4 font-rajdhani font-semibold text-lg sm:text-xl text-neutral-300">
            {siteConfig.aimAssist.tagline}
          </p>

          <p className="mt-3 font-sans text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {siteConfig.aimAssist.description}
          </p>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* MOCKUP / INTERFACE GAMER DE CALIBRAÇÃO (Composição Visual 3D)  */}
        {/* -------------------------------------------------------------- */}
        <div className="relative mb-20">
          <TiltCard
            maxTilt={6}
            className="p-1 sm:p-2 bg-gradient-to-b from-[#1C0D0F] via-[#0D0D11] to-[#08080A] rounded-2xl border border-[#FF1E27]/40 shadow-[0_10px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(229,9,20,0.2)] overflow-hidden"
          >
            {/* Top Bar da Interface Gamer */}
            <div className="px-4 py-3 bg-[#0B0B0E] border-b border-[#22222B] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                </div>
                <span className="font-orbitron text-xs tracking-wider text-neutral-300 font-bold">
                  AIM_CALIBRATOR // ENGINE 4.8
                </span>
              </div>

              {/* Seletor Comparativo Interativo */}
              <div className="flex items-center gap-2 bg-[#141419] p-1 rounded-lg border border-[#262630]">
                <button
                  onClick={() => setActiveTab("without")}
                  className={`px-3 py-1 font-orbitron text-[11px] font-semibold tracking-wider rounded transition-all duration-200 ${
                    activeTab === "without"
                      ? "bg-neutral-800 text-neutral-300 border border-neutral-700"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  MIRA CONVENCIONAL
                </button>
                <button
                  onClick={() => setActiveTab("with")}
                  className={`px-3 py-1 font-orbitron text-[11px] font-bold tracking-wider rounded transition-all duration-200 ${
                    activeTab === "with"
                      ? "bg-[#E50914] text-white shadow-[0_0_12px_#FF1E27]"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  COM AUXÍLIO DE MIRA
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#FF1E27]" />
                  TRACKING: OPTIMAL
                </span>
                <span>CPU: 0.1%</span>
              </div>
            </div>

            {/* Canvas / Tela de Simulação do Alvo */}
            <div className="relative min-h-[380px] sm:min-h-[440px] bg-[#070709] flex items-center justify-center overflow-hidden p-6">
              {/* Grid de fundo */}
              <div className="absolute inset-0 bg-cyber-grid opacity-25" />
              <div className="absolute inset-0 bg-radial-vignette opacity-90" />

              {/* Círculos Concêntricos do Radar / Alvo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#2B1417] flex items-center justify-center">
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-[#3A141A] flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-[#FF1E27]/40 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dashed border-[#FF1E27]/70 animate-spin" />
                  </div>
                </div>

                {/* Linhas transversais da mira */}
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1E27]/60 to-transparent" />
                <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#FF1E27]/60 to-transparent" />

                {/* Retículo Central */}
                <div className="absolute z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF1E27] shadow-[0_0_12px_#FF1E27]" />
                  <div className="absolute w-7 h-7 rounded-full border border-[#FF1E27] animate-ping opacity-60" />
                </div>

                {/* Dispersão de Tiros Simulada */}
                {activeTab === "without" ? (
                  /* Sem Auxílio: Tiros espalhados e inconsistentes */
                  <div className="absolute inset-0 pointer-events-none transition-all duration-500">
                    <span className="absolute top-[22%] left-[30%] w-2.5 h-2.5 rounded-full bg-neutral-400 opacity-80" />
                    <span className="absolute top-[35%] right-[24%] w-2.5 h-2.5 rounded-full bg-neutral-400 opacity-70" />
                    <span className="absolute bottom-[28%] left-[26%] w-2.5 h-2.5 rounded-full bg-neutral-400 opacity-60" />
                    <span className="absolute bottom-[20%] right-[32%] w-2.5 h-2.5 rounded-full bg-neutral-400 opacity-75" />
                    <span className="absolute top-[48%] left-[18%] w-2.5 h-2.5 rounded-full bg-neutral-400 opacity-60" />
                    <span className="absolute top-[18%] right-[42%] w-2.5 h-2.5 rounded-full bg-neutral-400 opacity-80" />
                    <div className="absolute bottom-4 left-4 bg-neutral-900/90 border border-neutral-700 px-3 py-2 rounded text-left">
                      <p className="font-orbitron text-xs text-neutral-300 font-bold">DISPERSÃO ELEVADA</p>
                      <p className="text-[11px] text-neutral-400">Recuo descontrolado e tiros fora do retículo central.</p>
                    </div>
                  </div>
                ) : (
                  /* Com Auxílio de Mira: Tiros agrupados no centro com precisão milimétrica */
                  <div className="absolute inset-0 pointer-events-none transition-all duration-500">
                    <span className="absolute top-[48%] left-[49%] w-3 h-3 rounded-full bg-[#FF1E27] shadow-[0_0_10px_#FF1E27] animate-pulse" />
                    <span className="absolute top-[47%] left-[51%] w-2.5 h-2.5 rounded-full bg-[#FF1E27] shadow-[0_0_8px_#FF1E27]" />
                    <span className="absolute top-[51%] left-[48%] w-2.5 h-2.5 rounded-full bg-[#FF1E27] shadow-[0_0_8px_#FF1E27]" />
                    <span className="absolute top-[50%] left-[52%] w-2.5 h-2.5 rounded-full bg-[#FF1E27] shadow-[0_0_8px_#FF1E27]" />
                    <span className="absolute top-[46%] left-[48%] w-2.5 h-2.5 rounded-full bg-[#FF1E27] shadow-[0_0_8px_#FF1E27]" />
                    <div className="absolute bottom-4 left-4 bg-[#14080A]/95 border border-[#FF1E27]/50 px-3.5 py-2.5 rounded text-left shadow-[0_0_15px_rgba(255,30,39,0.3)]">
                      <p className="font-orbitron text-xs text-[#FF1E27] font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        AGRUPAMENTO MILIMÉTRICO
                      </p>
                      <p className="text-[11px] text-neutral-300">Recuo estabilizado, tiros centralizados e tracking suave.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Informações Flutuantes no Mockup */}
              <div className="absolute top-6 right-6 hidden md:block bg-[#0B0B0E]/90 border border-[#222228] p-3 rounded-lg text-right font-mono text-[11px] space-y-1">
                <p className="text-neutral-400">SMOOTHING CURVE: <span className="text-white font-bold">COSINE_DAMP</span></p>
                <p className="text-neutral-400">OFFSET COMPENSATION: <span className="text-[#FF1E27] font-bold">100%</span></p>
                <p className="text-neutral-400">TARGET HIT PROBABILITY: <span className="text-green-400 font-bold">98.2%</span></p>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* CARDS TECNOLÓGICOS (4 Pilares com 3D Tilt)                    */}
        {/* -------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.aimAssist.features.map((feat) => {
            const IconComponent = iconMap[feat.icon] || Crosshair;
            return (
              <TiltCard
                key={feat.id}
                maxTilt={12}
                className="p-6 bg-gradient-to-b from-[#111116] to-[#0A0A0D] rounded-xl border border-[#222228] hover:border-[#FF1E27]/60 group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#180A0C] border border-[#FF1E27]/40 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(255,30,39,0.4)] group-hover:border-[#FF1E27] transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#FF1E27]" />
                    </div>
                    <span className="font-orbitron text-xs font-bold text-[#FF1E27] px-2.5 py-1 bg-[#1F0A0E] rounded border border-[#FF1E27]/30">
                      {feat.stat}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-[#FF1E27] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#1C1C22] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>SUBSYS_{feat.id.toUpperCase()}</span>
                  <span className="text-[#FF1E27] font-semibold">[READY]</span>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* -------------------------------------------------------------- */}
        {/* BOTÃO DE AÇÃO: VER AUXÍLIO DE MIRA                             */}
        {/* -------------------------------------------------------------- */}
        <div className="mt-16 text-center">
          <a
            href={siteConfig.aimAssist.ctaButton.url}
            onClick={scrollToPack}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 font-orbitron font-bold text-base tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#B30710] to-[#E50914] hover:from-[#E50914] hover:to-[#FF1E27] cyber-btn border-2 border-[#FF1E27] shadow-[0_0_25px_rgba(229,9,20,0.6)] hover:shadow-[0_0_40px_rgba(255,30,39,0.9)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>{siteConfig.aimAssist.ctaButton.text}</span>
            <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-3 font-mono text-xs text-neutral-500">
            Compatível com todos os mouses e configurações. Ativação imediata.
          </p>
        </div>
      </div>
    </section>
  );
}
