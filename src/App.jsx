import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AimAssistExperience from "./components/AimAssistExperience";
import MiraProExperience from "./components/MiraProExperience";
import PackExperience from "./components/PackExperience";
import SensitivityExperience from "./components/SensitivityExperience";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ParticleCanvas from "./components/ParticleCanvas";
import { CheckoutProvider } from "./context/CheckoutContext";

export default function App() {
  return (
    <CheckoutProvider>
      <div className="relative min-h-screen bg-[#050505] text-[#F5F5F7] font-sans selection:bg-[#E50914] selection:text-white overflow-x-clip">
      {/* Partículas Vermelhas Cibernéticas em Canvas */}
      <ParticleCanvas />

      {/* Header Fixo / Oculto no Hero e revelado ao rolar */}
      <Header />

      {/* 1. HERO — VÍDEO DO PRODUTO (Fullscreen dedicado ao vídeo) */}
      <Hero />

      {/* 2. AUXÍLIO DE MIRA (Construído pelo Scroll em 3D na Proporção 3:4 inspirado no POTUDO FF) */}
      <AimAssistExperience />

      {/* 3. MIRA PRO (Construído pelo Scroll em 3D com Retículos Táticos) */}
      <MiraProExperience />

      {/* 4. PACK COMPLETO (A Maior Seção — Ecossistema 3D Orbitando o Centro) */}
      <PackExperience />

      {/* 5. GERADOR DE SENSIBILIDADE (Formado pelo Scroll — DPI e Ângulo) */}
      <SensitivityExperience />

      {/* 6. CTA FINAL (Fechamento com Garantia e Acesso VIP) */}
      <FinalCTA />

      {/* 7. FOOTER GAMER */}
      <Footer />
    </div>
    </CheckoutProvider>
  );
}
