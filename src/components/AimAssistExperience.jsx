import React, { useRef, useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useCheckout } from "../hooks/useCheckout";
import {
  Sliders,
  Zap,
  Crosshair,
  Cpu,
  Server,
  Fingerprint,
  Timer,
  Flame,
  Target,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

export default function AimAssistExperience() {
  const containerRef = useRef(null);
  const progress = useScrollProgress(containerRef);
  const { openCheckout } = useCheckout();

  // Active Tab: 'boost' | 'aim' | 'sens' | 'info'
  const [activeTab, setActiveTab] = useState("boost");

  // Apenas botões de ativar (Toggles ON/OFF) — sem sliders nem controles de arrastar
  const [toggles, setToggles] = useState({
    touchBoost: true,
    removeDelay: true,
    gameBoost: true,
    lockHeadshot: true,
    smoothAim: true,
    touchResponse: true,
    dpiOverclock: true,
  });

  // Loader de Injeção Visual
  const [isInjecting, setIsInjecting] = useState(false);
  const [injectPercent, setInjectPercent] = useState(0);
  const [injectComplete, setInjectComplete] = useState(false);

  const toggleSwitch = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleStartInjection = () => {
    if (isInjecting) return;
    setIsInjecting(true);
    setInjectPercent(0);
    setInjectComplete(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= 100) {
        setInjectPercent(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsInjecting(false);
          setInjectComplete(true);
        }, 350);
      } else {
        setInjectPercent(current);
      }
    }, 35);
  };

  // =========================================================================
  // FASES DE MONTAGEM PELO SCROLL (0.0 a 1.0)
  // =========================================================================
  const isExiting = progress > 0.94;
  const exitProgress = isExiting ? (progress - 0.94) / 0.06 : 0;

  // Transformação 3D da Interface Inteira
  let scale = 0.75 + Math.min(progress / 0.8, 1) * 0.25;
  let translateZ = -140 + Math.min(progress / 0.8, 1) * 140;
  let rotateX = Math.max(0, (1 - Math.min(progress / 0.8, 1)) * 12);
  let opacity = Math.min(Math.max(progress * 4.5, 0.15), 1);

  if (isExiting) {
    scale = 1.0 - exitProgress * 0.2;
    translateZ = -exitProgress * 200;
    opacity = 1 - exitProgress * 0.9;
  }

  // Fases internas de montagem
  const stageStructure = Math.min(Math.max((progress - 0.15) / 0.25, 0), 1); // 20% a 40%
  const stageControls = Math.min(Math.max((progress - 0.38) / 0.25, 0), 1);  // 40% a 60%
  const stageDetails = Math.min(Math.max((progress - 0.58) / 0.25, 0), 1);   // 60% a 80%
  const isFullyAssembled = progress >= 0.78;

  return (
    <section
      id="aim-assist"
      ref={containerRef}
      className="relative w-full min-h-[220vh] bg-[#050505] select-none"
    >
      {/* Viewport Fixo na Tela enquanto rola */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-3 sm:px-6">
        
        {/* Iluminação suave vermelha atrás da interface */}
        <div className="absolute w-[800px] h-[600px] bg-[#E50914]/15 rounded-full blur-[180px] pointer-events-none" />

        {/* HUD de Status do Processo de Montagem */}
        <div className="mb-3 flex items-center gap-2.5 px-4 py-1 rounded-full bg-[#0A0A0E]/90 border border-[#FF1E27]/40 backdrop-blur-md font-mono text-[11px] text-neutral-300 shadow-[0_0_15px_rgba(255,30,39,0.25)]">
          <span className="w-2 h-2 rounded-full bg-[#FF1E27] animate-ping" />
          <span className="text-[#FF1E27] font-bold">SOFTWARE APRESENTAÇÃO:</span>
          <span>
            {progress < 0.20 && "01 // MATERIALIZANDO CHASSI 3D"}
            {progress >= 0.20 && progress < 0.40 && "02 // ESTRUTURA & NAVEGAÇÃO"}
            {progress >= 0.40 && progress < 0.60 && "03 // ACOPLANDO BOTÕES"}
            {progress >= 0.60 && progress < 0.80 && "04 // CALIBRANDO TELEMETRIA"}
            {progress >= 0.80 && !isExiting && "05 // PRODUTO 100% MONTADO (INTERATIVO)"}
            {isExiting && "TRANSIÇÃO // PRÓXIMO PRODUTO"}
          </span>
          <span className="text-white/60">({Math.round(progress * 100)}%)</span>
        </div>

        {/* ================================================================= */}
        {/* INTERFACE DO SOFTWARE EM PROPORÇÃO EXATA 3:4                       */}
        {/* ================================================================= */}
        <div
          data-aim-card="true"
          className="relative mx-auto transition-all duration-75 ease-out"
          style={{
            height: "min(540px, 62vh)",
            width: "calc(min(540px, 62vh) * 3 / 4)",
            maxWidth: "92vw",
            aspectRatio: "3 / 4",
            transform: `perspective(1200px) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`,
            opacity: opacity,
          }}
        >
          {/* Carcaça Externa / Moldura de Vidro Gamer com Borda Vermelho Neon (Proporção Exata 3:4) */}
          <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-b from-[#180608] via-[#0C0C12] to-[#07070A] border-2 border-[#FF1E27]/60 shadow-[0_0_60px_rgba(0,0,0,0.95),0_0_30px_rgba(255,30,39,0.25),inset_0_0_20px_rgba(255,30,39,0.1)] backdrop-blur-xl overflow-hidden flex flex-col">
            
            {/* Feixes laser nos 4 cantos */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FF1E27] pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF1E27] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF1E27] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF1E27] pointer-events-none" />

            {/* Modal / Overlay de Injeção Circular Neural (ao clicar em SIMULAR) */}
            {isInjecting && (
              <div className="absolute inset-0 z-50 bg-[#000000]/85 backdrop-blur-md flex flex-col items-center justify-center animate-fadeIn">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-[#FF1E27]/20 border-t-[#FF1E27] animate-spin" />
                  <div className="absolute inset-2 rounded-full border-2 border-[#FF1E27]/10 border-b-[#FF1E27] animate-spin" style={{ animationDirection: "reverse" }} />
                  <span className="font-mono font-bold text-xl text-white text-glow-red">
                    {injectPercent}%
                  </span>
                </div>
                <p className="mt-4 font-orbitron font-bold text-[11px] tracking-[0.25em] text-[#FF1E27] uppercase animate-pulse">
                  APLICANDO CALIBRAÇÃO...
                </p>
                <span className="mt-1 font-mono text-[9px] text-neutral-400">
                  DEMO VISUAL // SEM MODIFICAÇÃO REAL
                </span>
              </div>
            )}

            {/* Container Interno Flexível em Proporção 3:4 */}
            <div className="p-3.5 sm:p-5 flex-1 flex flex-col gap-3 overflow-hidden">
              
              {/* ------------------------------------------------------------- */}
              {/* HEADER DO SOFTWARE: POTUDO FF // AUXÍLIO DE MIRA             */}
              {/* Surge a partir de 20%                                         */}
              {/* ------------------------------------------------------------- */}
              <div
                className="flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-[#14141E]/70 border border-white/10 backdrop-blur-md transition-all duration-300"
                style={{
                  opacity: Math.max(stageStructure, 0.4),
                  transform: `translateY(${(1 - stageStructure) * -15}px)`,
                }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-[#1F070A] border border-[#FF1E27]/70 flex items-center justify-center text-[#FF1E27] shadow-[0_0_12px_rgba(255,30,39,0.5)] flex-shrink-0">
                    <Sliders className="w-4 h-4 text-[#FF1E27]" />
                  </div>
                  <div className="truncate">
                    <h1 className="font-orbitron font-black text-xs sm:text-sm tracking-wider text-white uppercase text-glow-red flex items-center gap-1.5 truncate">
                      <span>{siteConfig.aimAssist.softwareName}</span>
                      <span className="text-[10px] font-mono text-neutral-400 font-normal">
                        // AUXÍLIO DE MIRA
                      </span>
                    </h1>
                    <p className="font-mono text-[9px] text-neutral-400 tracking-wider">
                      {siteConfig.aimAssist.version} • {siteConfig.aimAssist.build}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#0A0A0E] border border-green-500/40 font-mono text-[9px] text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    ONLINE
                  </span>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* TABS DE NAVEGAÇÃO: BOOST | AIM | SENS | INFO                  */}
              {/* Surge a partir de 25%                                         */}
              {/* ------------------------------------------------------------- */}
              <div
                className="grid grid-cols-4 gap-1.5 transition-all duration-300"
                style={{
                  opacity: Math.max(stageStructure, 0.3),
                  transform: `translateY(${(1 - stageStructure) * -10}px)`,
                }}
              >
                {[
                  { id: "boost", label: "BOOST", icon: Zap },
                  { id: "aim", label: "AIM", icon: Crosshair },
                  { id: "sens", label: "SENS", icon: Cpu },
                  { id: "info", label: "INFO", icon: Server },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center justify-center gap-1 py-2 px-1 rounded-xl font-orbitron font-bold text-[10px] sm:text-xs tracking-wider transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-[#B30710] to-[#FF1E27] text-white border border-[#FF1E27] shadow-[0_0_15px_rgba(255,30,39,0.5)]"
                          : "bg-[#0E0E16]/80 text-neutral-400 hover:text-white border border-white/10 hover:border-[#FF1E27]/40"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{tab.label}</span>
                      {isActive && (
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-white rounded-full shadow-[0_0_6px_white]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* ------------------------------------------------------------- */}
              {/* CONTEÚDO DOS CONTROLES — APENAS BOTÕES PARA ATIVAR (TOGGLES)  */}
              {/* Surge a partir de 40%                                         */}
              {/* ------------------------------------------------------------- */}
              <div
                className="flex-1 overflow-y-auto space-y-2.5 pr-0.5 transition-all duration-300"
                style={{
                  opacity: Math.max(stageControls, 0.2),
                  transform: `translateY(${(1 - stageControls) * 15}px)`,
                }}
              >
                {/* ========================================================= */}
                {/* ABA 1: BOOST (Otimizações Tácteis com Botões de Ativar)    */}
                {/* ========================================================= */}
                {activeTab === "boost" && (
                  <div className="space-y-2.5 animate-fadeIn">
                    {/* Botão 1: TOUCH BOOST */}
                    <div
                      onClick={() => toggleSwitch("touchBoost")}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        toggles.touchBoost
                          ? "bg-[#140608]/90 border-[#FF1E27] shadow-[0_0_20px_rgba(255,30,39,0.2)]"
                          : "bg-[#0C0C14]/80 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Fingerprint className={`w-5 h-5 ${toggles.touchBoost ? "text-[#FF1E27]" : "text-neutral-500"}`} />
                          <div>
                            <h3 className="font-orbitron font-bold text-xs text-white tracking-wider">
                              TOUCH BOOST
                            </h3>
                            <p className="font-mono text-[10px] text-neutral-400">
                              Diagnóstico e aceleração de eventos de toque
                            </p>
                          </div>
                        </div>

                        {/* Botão Switch ON / OFF */}
                        <div
                          className={`w-11 h-6 rounded-full p-0.5 transition-colors border flex-shrink-0 ${
                            toggles.touchBoost
                              ? "bg-[#FF1E27] border-[#FF1E27]"
                              : "bg-[#1A1A24] border-neutral-700"
                          }`}
                        >
                          <div
                            className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                              toggles.touchBoost ? "translate-x-5 shadow-[0_0_8px_white]" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>

                      {toggles.touchBoost && (
                        <div className="mt-2.5 pt-2 border-t border-[#FF1E27]/25 font-mono text-[10px] space-y-1 text-neutral-300">
                          <div className="flex justify-between">
                            <span>STATUS:</span>
                            <span className="text-green-400 font-bold">ACTIVE (ACELERADO)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>RESPOSTA DE TOQUE:</span>
                            <span className="text-[#FF1E27] font-bold">FAST (~3.2ms)</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Botão 2: REMOVE DELAY */}
                    <div
                      onClick={() => toggleSwitch("removeDelay")}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        toggles.removeDelay
                          ? "bg-[#140608]/90 border-[#FF1E27] shadow-[0_0_20px_rgba(255,30,39,0.2)]"
                          : "bg-[#0C0C14]/80 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Timer className={`w-5 h-5 ${toggles.removeDelay ? "text-[#FF1E27]" : "text-neutral-500"}`} />
                          <div>
                            <h3 className="font-orbitron font-bold text-xs text-white tracking-wider">
                              REMOVE DELAY
                            </h3>
                            <p className="font-mono text-[10px] text-neutral-400">
                              Prioridade de toque e cancelamento de lag
                            </p>
                          </div>
                        </div>

                        {/* Botão Switch ON / OFF */}
                        <div
                          className={`w-11 h-6 rounded-full p-0.5 transition-colors border flex-shrink-0 ${
                            toggles.removeDelay
                              ? "bg-[#FF1E27] border-[#FF1E27]"
                              : "bg-[#1A1A24] border-neutral-700"
                          }`}
                        >
                          <div
                            className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                              toggles.removeDelay ? "translate-x-5 shadow-[0_0_8px_white]" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>

                      {toggles.removeDelay && (
                        <div className="mt-2.5 pt-2 border-t border-[#FF1E27]/25 font-mono text-[10px] space-y-1 text-neutral-300">
                          <div className="flex justify-between">
                            <span>LATÊNCIA DE ENTRADA:</span>
                            <span className="text-green-400 font-bold">-78% (MINIMIZADA)</span>
                          </div>
                          <div className="flex justify-between text-[9px] text-neutral-400">
                            <span>CANCELAMENTO DE DELAY:</span>
                            <span className="text-green-400 font-bold">ATIVO</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Botão 3: GAME BOOST CORE */}
                    <div
                      onClick={() => toggleSwitch("gameBoost")}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        toggles.gameBoost
                          ? "bg-[#140608]/90 border-[#FF1E27] shadow-[0_0_20px_rgba(255,30,39,0.2)]"
                          : "bg-[#0C0C14]/80 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Flame className={`w-5 h-5 ${toggles.gameBoost ? "text-[#FF1E27]" : "text-neutral-500"}`} />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h3 className="font-orbitron font-bold text-xs text-white tracking-wider">
                                GAME BOOST
                              </h3>
                              <span className="px-1 py-0.2 rounded bg-[#FF1E27]/20 border border-[#FF1E27]/50 font-mono text-[8px] text-[#FF1E27] font-bold">
                                CORE
                              </span>
                            </div>
                            <p className="font-mono text-[10px] text-neutral-400">
                              Otimização máxima de resposta para jogos
                            </p>
                          </div>
                        </div>

                        {/* Botão Switch ON / OFF */}
                        <div
                          className={`w-11 h-6 rounded-full p-0.5 transition-colors border flex-shrink-0 ${
                            toggles.gameBoost
                              ? "bg-[#FF1E27] border-[#FF1E27]"
                              : "bg-[#1A1A24] border-neutral-700"
                          }`}
                        >
                          <div
                            className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                              toggles.gameBoost ? "translate-x-5 shadow-[0_0_8px_white]" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>

                      {toggles.gameBoost && (
                        <div className="mt-2.5 pt-2 border-t border-[#FF1E27]/25 grid grid-cols-2 gap-1.5 font-mono text-[9px]">
                          <div className="p-1.5 rounded bg-black/40 border border-green-500/30 flex items-center justify-between text-neutral-300">
                            <span>TOUCH BOOST</span>
                            <CheckCircle2 className="w-3 h-3 text-green-400" />
                          </div>
                          <div className="p-1.5 rounded bg-black/40 border border-green-500/30 flex items-center justify-between text-neutral-300">
                            <span>FPS LOCK READY</span>
                            <CheckCircle2 className="w-3 h-3 text-green-400" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* ABA 2: AIM (Mira & Estabilização — Apenas Botões Ativar)   */}
                {/* ========================================================= */}
                {activeTab === "aim" && (
                  <div className="space-y-2.5 animate-fadeIn">
                    {/* Botão 1: LOCK HEADSHOT SHOTS */}
                    <div
                      onClick={() => toggleSwitch("lockHeadshot")}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        toggles.lockHeadshot
                          ? "bg-[#140608]/90 border-[#FF1E27] shadow-[0_0_20px_rgba(255,30,39,0.2)]"
                          : "bg-[#0C0C14]/80 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Target className={`w-5 h-5 ${toggles.lockHeadshot ? "text-[#FF1E27]" : "text-neutral-500"}`} />
                          <div>
                            <h3 className="font-orbitron font-bold text-xs text-white tracking-wider">
                              LOCK HEADSHOT SHOTS
                            </h3>
                            <p className="font-mono text-[10px] text-neutral-400">
                              Smart hitbox targeting & precisão angular
                            </p>
                          </div>
                        </div>

                        {/* Botão Switch ON / OFF */}
                        <div
                          className={`w-11 h-6 rounded-full p-0.5 transition-colors border flex-shrink-0 ${
                            toggles.lockHeadshot
                              ? "bg-[#FF1E27] border-[#FF1E27]"
                              : "bg-[#1A1A24] border-neutral-700"
                          }`}
                        >
                          <div
                            className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                              toggles.lockHeadshot ? "translate-x-5 shadow-[0_0_8px_white]" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>

                      {toggles.lockHeadshot && (
                        <div className="mt-2.5 pt-2 border-t border-[#FF1E27]/25 font-mono text-[10px] space-y-1 text-neutral-300">
                          <div className="flex justify-between">
                            <span>ALINHAMENTO DE HITBOX:</span>
                            <span className="text-green-400 font-bold">CALIBRADO</span>
                          </div>
                          <div className="flex justify-between">
                            <span>STATUS DO RECURSO:</span>
                            <span className="text-[#FF1E27] font-bold">ATIVO</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Botão 2: SMOOTH AIM X/Y (Apenas Botão de Ativar — Sem Sliders) */}
                    <div
                      onClick={() => toggleSwitch("smoothAim")}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        toggles.smoothAim
                          ? "bg-[#140608]/90 border-[#FF1E27] shadow-[0_0_20px_rgba(255,30,39,0.2)]"
                          : "bg-[#0C0C14]/80 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Crosshair className={`w-5 h-5 ${toggles.smoothAim ? "text-[#FF1E27]" : "text-neutral-500"}`} />
                          <div>
                            <h3 className="font-orbitron font-bold text-xs text-white tracking-wider">
                              SMOOTH AIM X/Y
                            </h3>
                            <p className="font-mono text-[10px] text-neutral-400">
                              Ultra smooth aim stabilization
                            </p>
                          </div>
                        </div>

                        {/* Botão Switch ON / OFF */}
                        <div
                          className={`w-11 h-6 rounded-full p-0.5 transition-colors border flex-shrink-0 ${
                            toggles.smoothAim
                              ? "bg-[#FF1E27] border-[#FF1E27]"
                              : "bg-[#1A1A24] border-neutral-700"
                          }`}
                        >
                          <div
                            className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                              toggles.smoothAim ? "translate-x-5 shadow-[0_0_8px_white]" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>

                      {toggles.smoothAim && (
                        <div className="mt-2.5 pt-2 border-t border-[#FF1E27]/25 font-mono text-[10px] space-y-1 text-neutral-300">
                          <div className="flex justify-between">
                            <span>ESTABILIZAÇÃO EIXO X/Y:</span>
                            <span className="text-green-400 font-bold">100% SUAVE</span>
                          </div>
                          <div className="flex justify-between">
                            <span>COMPENSAÇÃO DE RECUO:</span>
                            <span className="text-[#FF1E27] font-bold">ENGAGED</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* ABA 3: SENS (Sensibilidade & DPI — Apenas Botões Ativar)   */}
                {/* ========================================================= */}
                {activeTab === "sens" && (
                  <div className="space-y-2.5 animate-fadeIn">
                    {/* Botão 1: TOUCH RESPONSE */}
                    <div
                      onClick={() => toggleSwitch("touchResponse")}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        toggles.touchResponse
                          ? "bg-[#140608]/90 border-[#FF1E27] shadow-[0_0_20px_rgba(255,30,39,0.2)]"
                          : "bg-[#0C0C14]/80 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Zap className={`w-5 h-5 ${toggles.touchResponse ? "text-[#FF1E27]" : "text-neutral-500"}`} />
                          <div>
                            <h3 className="font-orbitron font-bold text-xs text-white tracking-wider">
                              TOUCH RESPONSE
                            </h3>
                            <p className="font-mono text-[10px] text-neutral-400">
                              Optimized touch response (0ms)
                            </p>
                          </div>
                        </div>

                        {/* Botão Switch ON / OFF */}
                        <div
                          className={`w-11 h-6 rounded-full p-0.5 transition-colors border flex-shrink-0 ${
                            toggles.touchResponse
                              ? "bg-[#FF1E27] border-[#FF1E27]"
                              : "bg-[#1A1A24] border-neutral-700"
                          }`}
                        >
                          <div
                            className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                              toggles.touchResponse ? "translate-x-5 shadow-[0_0_8px_white]" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>

                      {toggles.touchResponse && (
                        <div className="mt-2.5 pt-2 border-t border-[#FF1E27]/25 font-mono text-[10px] space-y-1 text-neutral-300">
                          <div className="flex justify-between">
                            <span>LATÊNCIA TÁTIL:</span>
                            <span className="text-green-400 font-bold">0ms DELAY</span>
                          </div>
                          <div className="flex justify-between">
                            <span>FEEDBACK DE TOQUE:</span>
                            <span className="text-white font-bold">INSTANTÂNEO</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Botão 2: DPI OVERCLOCK (Apenas Botão de Ativar — Sem Sliders) */}
                    <div
                      onClick={() => toggleSwitch("dpiOverclock")}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        toggles.dpiOverclock
                          ? "bg-[#140608]/90 border-[#FF1E27] shadow-[0_0_20px_rgba(255,30,39,0.2)]"
                          : "bg-[#0C0C14]/80 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Cpu className={`w-5 h-5 ${toggles.dpiOverclock ? "text-[#FF1E27]" : "text-neutral-500"}`} />
                          <div>
                            <h3 className="font-orbitron font-bold text-xs text-white tracking-wider">
                              DPI OVERCLOCK
                            </h3>
                            <p className="font-mono text-[10px] text-neutral-400">
                              VIP pixel scaling adjustment
                            </p>
                          </div>
                        </div>

                        {/* Botão Switch ON / OFF */}
                        <div
                          className={`w-11 h-6 rounded-full p-0.5 transition-colors border flex-shrink-0 ${
                            toggles.dpiOverclock
                              ? "bg-[#FF1E27] border-[#FF1E27]"
                              : "bg-[#1A1A24] border-neutral-700"
                          }`}
                        >
                          <div
                            className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                              toggles.dpiOverclock ? "translate-x-5 shadow-[0_0_8px_white]" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>

                      {toggles.dpiOverclock && (
                        <div className="mt-2.5 pt-2 border-t border-[#FF1E27]/25 font-mono text-[10px] space-y-1 text-neutral-300">
                          <div className="flex justify-between">
                            <span>ESCALA DE PIXEL:</span>
                            <span className="text-green-400 font-bold">CALIBRADA (VIP)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SENSIBILIDADE:</span>
                            <span className="text-[#FF1E27] font-bold">ALTA VELOCIDADE</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* ABA 4: INFO (Informações do Software)                     */}
                {/* ========================================================= */}
                {activeTab === "info" && (
                  <div className="p-3.5 rounded-2xl bg-[#0C0C14]/90 border border-white/10 space-y-2 font-mono text-[11px] animate-fadeIn">
                    <div className="text-center py-1.5 border-b border-white/10">
                      <h3 className="font-orbitron font-black text-xs sm:text-sm text-white text-glow-red">
                        POTUDO FF // AUXÍLIO DE MIRA
                      </h3>
                      <p className="text-[10px] text-[#FF1E27] mt-0.5">
                        Versão X | Build OB-53 ASSIST
                      </p>
                    </div>

                    <div className="space-y-1.5 text-neutral-300">
                      <div className="flex justify-between">
                        <span>ARQUITETURA:</span>
                        <span className="text-white">64-BIT HARDWARE PRO</span>
                      </div>
                      <div className="flex justify-between">
                        <span>LATÊNCIA:</span>
                        <span className="text-green-400">0.8ms (ULTRA FAST)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>COMPATIBILIDADE:</span>
                        <span className="text-white">MOBILE / EMULADOR</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DEMONSTRAÇÃO:</span>
                        <span className="text-yellow-400">MOCKUP VISUAL INTERATIVO</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ------------------------------------------------------------- */}
              {/* BOTÃO INTERNO: TESTAR CALIBRAÇÃO                              */}
              {/* Surge a partir de 60% com conclusão em 80%                    */}
              {/* ------------------------------------------------------------- */}
              <div
                className="pt-1 transition-all duration-300"
                style={{
                  opacity: Math.max(stageDetails, 0.2),
                  transform: `translateY(${(1 - stageDetails) * 15}px)`,
                }}
              >
                <button
                  onClick={handleStartInjection}
                  disabled={isInjecting}
                  className="w-full py-2.5 px-3 rounded-xl font-orbitron font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-[#101018] hover:bg-[#181824] text-neutral-200 border border-[#FF1E27]/50 hover:border-[#FF1E27] shadow-[0_0_15px_rgba(255,30,39,0.2)] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-[#FF1E27] ${isInjecting ? "animate-spin" : ""}`} />
                  <span>
                    {injectComplete
                      ? "CALIBRADO COM SUCESSO"
                      : isInjecting
                      ? "PROCESSANDO..."
                      : "TESTAR CALIBRAÇÃO"}
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* BOTÃO DE COMPRA DO AUXÍLIO DE MIRA (EMBAIXO DO PRODUTO)             */}
        {/* Idêntico à estrutura da Mira Pro conforme solicitado               */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="relative z-40 mt-4 sm:mt-5 text-center max-w-lg mx-auto transition-all duration-300"
          style={{
            opacity: Math.max(stageDetails, 0.2),
            transform: `translateY(${(1 - stageDetails) * 15}px)`,
          }}
        >
          <a
            href={siteConfig.aimAssist.buyButton.url}
            onClick={(e) => {
              e.preventDefault();
              openCheckout(siteConfig.aimAssist.buyButton.url, "AUXÍLIO DE MIRA");
            }}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4.5 font-orbitron font-black text-sm sm:text-base tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#B30710] via-[#E50914] to-[#FF1E27] cyber-btn border-2 border-[#FF1E27] shadow-[0_0_35px_rgba(229,9,20,0.85)] hover:shadow-[0_0_55px_rgba(255,30,39,1)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>{siteConfig.aimAssist.buyButton.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <p className="mt-2 text-[11px] font-mono text-neutral-400">
            {siteConfig.aimAssist.buyButton.priceTag} • Acesso vitalício imediato • Mobile & Emulador
          </p>
        </div>

        {/* Indicação sutil para continuar rolando para a próxima seção */}
        <div
          className="mt-2.5 font-mono text-[10px] text-neutral-500 tracking-[0.2em] uppercase transition-opacity duration-300"
          style={{ opacity: isFullyAssembled && !isExiting ? 0.8 : 0 }}
        >
          ↓ ROLE PARA CONHECER A MIRA PRO
        </div>

      </div>
    </section>
  );
}
