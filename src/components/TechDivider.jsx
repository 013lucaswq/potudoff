import React from "react";

export default function TechDivider({ label = "SYSTEM_SYNC" }) {
  return (
    <div className="relative w-full py-12 overflow-hidden flex items-center justify-center select-none pointer-events-none">
      {/* Background Soft Glow */}
      <div className="absolute w-96 h-12 bg-[#E50914]/10 blur-3xl -top-6" />

      {/* Main Line with Gradient */}
      <div className="relative w-full max-w-7xl px-4 flex items-center justify-center">
        {/* Left Tech Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#E50914]/40 to-[#FF1E27]" />

        {/* Left Marker Dots */}
        <div className="flex gap-1.5 px-3">
          <span className="w-1 h-1 bg-[#E50914]/40 rounded-full" />
          <span className="w-1.5 h-1.5 bg-[#E50914]/80 rounded-full" />
          <span className="w-2 h-2 bg-[#FF1E27] rounded-full shadow-[0_0_8px_#FF1E27]" />
        </div>

        {/* Central HUD Badge */}
        <div className="relative px-5 py-1.5 bg-[#0B0B0B] border border-[#FF1E27]/50 cyber-btn shadow-[0_0_15px_rgba(255,30,39,0.3)] flex items-center gap-2">
          {/* Pulsing indicator */}
          <span className="w-2 h-2 rounded-full bg-[#FF1E27] animate-ping" />
          <span className="font-orbitron text-[11px] tracking-[0.25em] text-[#FF1E27] font-semibold uppercase">
            {label}
          </span>
          <span className="font-tech text-xs text-neutral-500 font-mono tracking-wider">
            [SYS_OK]
          </span>
        </div>

        {/* Right Marker Dots */}
        <div className="flex gap-1.5 px-3">
          <span className="w-2 h-2 bg-[#FF1E27] rounded-full shadow-[0_0_8px_#FF1E27]" />
          <span className="w-1.5 h-1.5 bg-[#E50914]/80 rounded-full" />
          <span className="w-1 h-1 bg-[#E50914]/40 rounded-full" />
        </div>

        {/* Right Tech Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#E50914]/40 to-[#FF1E27]" />
      </div>

      {/* Decorative Angled Cyber Accents */}
      <div className="absolute bottom-2 flex gap-8 opacity-25 font-mono text-[9px] text-red-500">
        <span>+ + +</span>
        <span>LATENCY_STABLE</span>
        <span>REC_MATRIX_ACTIVE</span>
        <span>+ + +</span>
      </div>
    </div>
  );
}
