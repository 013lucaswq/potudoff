import React, { useRef, useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { Volume2, VolumeX } from "lucide-react";

/**
 * =========================================================================
 * HERO — EXCLUSIVO PARA VÍDEO DO PRODUTO (FULLSCREEN) COM ÁUDIO SINCRONIZADO
 * =========================================================================
 */
const VIDEO_URL = siteConfig?.hero?.videoUrl || "/videos/hero_user.mp4";
const REMOTE_URL = siteConfig?.hero?.remoteVideoUrl || "";
const AUDIO_URL = siteConfig?.hero?.audioUrl || "/audio/narracao.mp3";

export default function Hero() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);

  const playAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 1.0;
    const promise = audioRef.current.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsPlayingAudio(true);
          setAudioBlocked(false);
        })
        .catch(() => {
          // Autoplay de som requer interação em certos navegadores
          setIsPlayingAudio(false);
          setAudioBlocked(true);
        });
    }
  };

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      playAudio();
    }
  };

  useEffect(() => {
    // 1. Toca o vídeo
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // 2. Tenta tocar o áudio imediatamente assim que o site abre
    playAudio();

    // 3. Ao primeiro toque, clique ou rolagem em qualquer lugar do site, dispara o áudio caso o navegador tenha bloqueado
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio();
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { passive: true });
    window.addEventListener("touchstart", handleFirstInteraction, { passive: true });
    window.addEventListener("scroll", handleFirstInteraction, { passive: true });
    window.addEventListener("keydown", handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden select-none"
    >
      {/* Elemento de Áudio Oculto */}
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        preload="auto"
        onEnded={() => setIsPlayingAudio(false)}
      />

      {VIDEO_URL && !hasError ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onPlay={playAudio}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-center pointer-events-none"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            {REMOTE_URL && <source src={REMOTE_URL} type="video/mp4" />}
          </video>

          {/* Botão Flutuante de Áudio / Narração */}
          <div className="absolute bottom-6 right-5 sm:bottom-8 sm:right-8 z-30 flex items-center gap-2">
            <button
              onClick={toggleAudio}
              className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 font-mono text-[11px] sm:text-xs uppercase cursor-pointer shadow-lg ${
                isPlayingAudio
                  ? "bg-[#140608]/90 border-[#FF1E27] text-white shadow-[0_0_20px_rgba(255,30,39,0.5)]"
                  : audioBlocked
                  ? "bg-[#250508]/95 border-[#FF1E27] text-white shadow-[0_0_25px_rgba(255,30,39,0.8)] animate-pulse scale-105"
                  : "bg-black/75 border-white/20 text-neutral-300 hover:border-white/40"
              }`}
              title="Ativar/Desativar áudio"
            >
              {isPlayingAudio ? (
                <>
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-1 bg-[#FF1E27] rounded-full animate-bounce h-2.5" />
                    <span className="w-1 bg-[#FF1E27] rounded-full animate-bounce h-1.5" style={{ animationDelay: "150ms" }} />
                    <span className="w-1 bg-[#FF1E27] rounded-full animate-bounce h-3" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span className="font-bold text-[#FF1E27]">NARRADOR ATIVO</span>
                </>
              ) : (
                <>
                  {audioBlocked ? (
                    <Volume2 className="w-4 h-4 text-[#FF1E27] animate-bounce" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-neutral-400" />
                  )}
                  <span>{audioBlocked ? "CLIQUE PARA OUVIR O ÁUDIO" : "OUVIR NARRADOR"}</span>
                </>
              )}
            </button>
          </div>
        </>
      ) : (
        /* Caso não haja vídeo ou URL esteja vazia: Fundo preto com mensagem discreta */
        <div className="w-full h-full flex items-center justify-center bg-[#050505]">
          <span className="font-mono text-sm tracking-[0.3em] uppercase text-neutral-600 border border-neutral-800/80 px-6 py-3 rounded-lg">
            {siteConfig?.hero?.emptyPlaceholderText || "SEU VÍDEO AQUI"}
          </span>
        </div>
      )}
    </section>
  );
}
