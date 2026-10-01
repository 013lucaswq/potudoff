import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import TiltCard from "./TiltCard";
import {
  Cpu,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  Gamepad2,
  Crosshair,
} from "lucide-react";

export default function SensitivityGenerator() {
  const [selectedGame, setSelectedGame] = useState(siteConfig.sensitivityGenerator.supportedGames[0].id);
  const [dpi, setDpi] = useState(800);
  const [playstyle, setPlaystyle] = useState("balanced");
  const [calculating, setCalculating] = useState(false);
  const [calculated, setCalculated] = useState(true);
  const [copied, setCopied] = useState(false);

  // Resultados calculados
  const [results, setResults] = useState({
    general: "1.25",
    redDot: "92",
    scope2x: "86",
    scope4x: "78",
    sniper: "65",
    edpi: "1000",
    cm360: "34.6 cm",
    stats: {
      precision: 95,
      control: 92,
      speed: 88,
      stability: 96,
    },
  });

  const handleGenerate = () => {
    setCalculating(true);
    setCalculated(false);

    setTimeout(() => {
      const currentGame = siteConfig.sensitivityGenerator.supportedGames.find((g) => g.id === selectedGame);
      const styleFactor = playstyle === "precision" ? 0.85 : playstyle === "speed" ? 1.25 : 1.0;

      // Algoritmo matemático de conversão baseado no DPI e motor do jogo
      const normalizedDpiFactor = 800 / dpi;
      const baseCalc = (currentGame.baseSens * normalizedDpiFactor * styleFactor).toFixed(2);
      const edpiCalc = Math.round(dpi * parseFloat(baseCalc));
      const cmCalc = ((360 / (dpi * 0.022 * parseFloat(baseCalc))) * 2.54).toFixed(1);

      // Em jogos mobile como Free Fire as miras usam escala de 0 a 100
      const isMobileGame = selectedGame === "freefire";

      setResults({
        general: isMobileGame ? Math.min(100, Math.round(92 * styleFactor)) : baseCalc,
        redDot: isMobileGame ? Math.min(100, Math.round(88 * styleFactor)) : (baseCalc * 0.95).toFixed(2),
        scope2x: isMobileGame ? Math.min(100, Math.round(82 * styleFactor)) : (baseCalc * 0.88).toFixed(2),
        scope4x: isMobileGame ? Math.min(100, Math.round(75 * styleFactor)) : (baseCalc * 0.78).toFixed(2),
        sniper: isMobileGame ? Math.min(100, Math.round(62 * styleFactor)) : (baseCalc * 0.65).toFixed(2),
        edpi: isMobileGame ? "940 pts" : edpiCalc,
        cm360: isMobileGame ? "Giro 180° Fluido" : `${cmCalc} cm`,
        stats: {
          precision: playstyle === "precision" ? 98 : 93,
          control: playstyle === "precision" ? 96 : 90,
          speed: playstyle === "speed" ? 97 : 86,
          stability: 95,
        },
      });

      setCalculating(false);
      setCalculated(true);
    }, 700);
  };

  const handleCopy = () => {
    const textToCopy = `[AUXÍLIO DE MIRA - CONFIGURAÇÃO GERADA]
Jogo: ${siteConfig.sensitivityGenerator.supportedGames.find((g) => g.id === selectedGame)?.name}
DPI: ${dpi}
Estilo: ${playstyle.toUpperCase()}
Geral: ${results.general}
Red Dot / Mira 1x: ${results.redDot}
Mira 2x: ${results.scope2x}
Mira 4x: ${results.scope4x}
Sniper / AWM: ${results.sniper}
eDPI: ${results.edpi}
Calculado via auxiliodemira.pro`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="sensibilidade" className="relative w-full py-24 bg-[#070709] overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#E50914]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#160608] border border-[#FF1E27]/40 text-[#FF1E27] font-orbitron text-xs tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(255,30,39,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-[#FF1E27]" />
            {siteConfig.sensitivityGenerator.badge}
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            GERADOR DE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] via-[#FF1E27] to-[#FF4F57] text-glow-red">
              SENSIBILIDADE
            </span>
          </h2>

          <p className="mt-4 font-rajdhani font-semibold text-lg sm:text-xl text-neutral-300">
            {siteConfig.sensitivityGenerator.tagline}
          </p>

          <p className="mt-3 font-sans text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {siteConfig.sensitivityGenerator.description}
          </p>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* INTERFACE TECNOLÓGICA DA FERRAMENTA                           */}
        {/* -------------------------------------------------------------- */}
        <div className="max-w-5xl mx-auto">
          <TiltCard
            maxTilt={4}
            className="p-6 sm:p-10 bg-gradient-to-b from-[#101015] via-[#0B0B0E] to-[#070709] rounded-2xl border border-[#2B1518] shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_25px_rgba(229,9,20,0.2)]"
          >
            {/* Header da Ferramenta */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#20202A] gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#200A0D] border border-[#FF1E27]/50 flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-[#FF1E27]" />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-lg text-white">
                    SENSITIVITY MATRIX CALCULATOR
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    ALGORITHM: PRO_SENS_ENGINE_v4
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs text-neutral-300">SISTEMA ONLINE</span>
              </div>
            </div>

            {/* Grid de Configurações */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* 1. Seleção de Jogo */}
              <div className="space-y-2">
                <label className="block font-orbitron text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  1. Selecione o Jogo:
                </label>
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="w-full bg-[#14141A] border border-[#2A2A38] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#FF1E27] focus:ring-1 focus:ring-[#FF1E27] transition-all cursor-pointer"
                >
                  {siteConfig.sensitivityGenerator.supportedGames.map((game) => (
                    <option key={game.id} value={game.id} className="bg-[#14141A] text-white">
                      {game.name}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-neutral-500 font-mono">
                  Engine e FOV pré-configurados
                </p>
              </div>

              {/* 2. Seleção de DPI */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-orbitron text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    2. DPI do Mouse:
                  </label>
                  <span className="font-orbitron text-xs font-bold text-[#FF1E27]">
                    {dpi} DPI
                  </span>
                </div>
                {/* Presets Rápidos de DPI */}
                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  {[400, 800, 1200, 1600].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDpi(d)}
                      className={`py-2 rounded font-mono text-xs font-bold transition-all ${
                        dpi === d
                          ? "bg-[#E50914] text-white shadow-[0_0_8px_#FF1E27]"
                          : "bg-[#14141A] border border-[#2A2A38] text-neutral-400 hover:text-white"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min="200"
                  max="3200"
                  step="50"
                  value={dpi}
                  onChange={(e) => setDpi(Number(e.target.value))}
                  className="w-full accent-[#FF1E27] cursor-pointer mt-2"
                />
              </div>

              {/* 3. Estilo de Jogabilidade */}
              <div className="space-y-2">
                <label className="block font-orbitron text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  3. Estilo / Movimentação:
                </label>
                <select
                  value={playstyle}
                  onChange={(e) => setPlaystyle(e.target.value)}
                  className="w-full bg-[#14141A] border border-[#2A2A38] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#FF1E27] focus:ring-1 focus:ring-[#FF1E27] transition-all cursor-pointer"
                >
                  {siteConfig.sensitivityGenerator.playstyles.map((style) => (
                    <option key={style.id} value={style.id} className="bg-[#14141A] text-white">
                      {style.name}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-neutral-500 font-mono">
                  {siteConfig.sensitivityGenerator.playstyles.find((s) => s.id === playstyle)?.desc}
                </p>
              </div>
            </div>

            {/* Botão de Ação GERAR SENSIBILIDADE */}
            <div className="text-center mb-8">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={calculating}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 font-orbitron font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#B30710] to-[#E50914] hover:from-[#E50914] hover:to-[#FF1E27] cyber-btn border-2 border-[#FF1E27] shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:shadow-[0_0_35px_rgba(255,30,39,0.9)] transition-all duration-300 disabled:opacity-50"
              >
                {calculating ? (
                  <>
                    <RotateCcw className="w-5 h-5 text-white animate-spin" />
                    <span>PROCESSANDO MATRIZ...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                    <span>{siteConfig.sensitivityGenerator.ctaButton.text}</span>
                  </>
                )}
              </button>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* PAINEL DE RESULTADOS GERADOS                                   */}
            {/* -------------------------------------------------------------- */}
            {calculated && (
              <div className="p-6 bg-[#0B0B0F] rounded-xl border border-[#252530] relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#1E1E26] gap-3 mb-6">
                  <div>
                    <h4 className="font-orbitron font-bold text-sm sm:text-base text-white flex items-center gap-2">
                      <Crosshair className="w-4 h-4 text-[#FF1E27]" />
                      CALIBRAÇÃO RECOMENDADA
                    </h4>
                    <p className="text-xs text-neutral-400 font-mono">
                      Valores sincronizados para seu DPI e preferências
                    </p>
                  </div>

                  {/* Botão Copiar Configuração */}
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#161620] hover:bg-[#20202E] border border-[#2B2B3D] hover:border-[#FF1E27] text-white font-rajdhani font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">CONFIGURAÇÃO COPIADA!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#FF1E27]" />
                        <span>COPIAR CONFIGURAÇÃO</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Cards de Valores por Mira */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                  <div className="p-3.5 bg-[#121218] rounded-lg border border-[#22222E] text-center">
                    <span className="block text-[11px] font-orbitron text-neutral-400 uppercase">
                      Geral
                    </span>
                    <span className="font-orbitron font-extrabold text-xl text-white text-glow-red mt-1 block">
                      {results.general}
                    </span>
                  </div>
                  <div className="p-3.5 bg-[#121218] rounded-lg border border-[#22222E] text-center">
                    <span className="block text-[11px] font-orbitron text-neutral-400 uppercase">
                      Red Dot / 1x
                    </span>
                    <span className="font-orbitron font-extrabold text-xl text-white text-glow-red mt-1 block">
                      {results.redDot}
                    </span>
                  </div>
                  <div className="p-3.5 bg-[#121218] rounded-lg border border-[#22222E] text-center">
                    <span className="block text-[11px] font-orbitron text-neutral-400 uppercase">
                      Mira 2x
                    </span>
                    <span className="font-orbitron font-extrabold text-xl text-white text-glow-red mt-1 block">
                      {results.scope2x}
                    </span>
                  </div>
                  <div className="p-3.5 bg-[#121218] rounded-lg border border-[#22222E] text-center">
                    <span className="block text-[11px] font-orbitron text-neutral-400 uppercase">
                      Mira 4x
                    </span>
                    <span className="font-orbitron font-extrabold text-xl text-white text-glow-red mt-1 block">
                      {results.scope4x}
                    </span>
                  </div>
                  <div className="p-3.5 bg-[#121218] rounded-lg border border-[#22222E] text-center col-span-2 sm:col-span-1">
                    <span className="block text-[11px] font-orbitron text-neutral-400 uppercase">
                      Sniper / AWM
                    </span>
                    <span className="font-orbitron font-extrabold text-xl text-white text-glow-red mt-1 block">
                      {results.sniper}
                    </span>
                  </div>
                </div>

                {/* Métricas de Precisão e Controle */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#1C1C24] font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-neutral-400 mb-1">
                      <span>PRECISÃO:</span>
                      <span className="text-white font-bold">{results.stats.precision}%</span>
                    </div>
                    <div className="w-full bg-[#1C1C26] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#FF1E27] h-full rounded-full transition-all duration-500"
                        style={{ width: `${results.stats.precision}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-neutral-400 mb-1">
                      <span>CONTROLE:</span>
                      <span className="text-white font-bold">{results.stats.control}%</span>
                    </div>
                    <div className="w-full bg-[#1C1C26] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#FF1E27] h-full rounded-full transition-all duration-500"
                        style={{ width: `${results.stats.control}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-neutral-400 mb-1">
                      <span>VELOCIDADE:</span>
                      <span className="text-white font-bold">{results.stats.speed}%</span>
                    </div>
                    <div className="w-full bg-[#1C1C26] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#FF1E27] h-full rounded-full transition-all duration-500"
                        style={{ width: `${results.stats.speed}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-neutral-400 mb-1">
                      <span>eDPI CALCULADO:</span>
                      <span className="text-white font-bold">{results.edpi}</span>
                    </div>
                    <div className="w-full bg-[#1C1C26] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full w-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
