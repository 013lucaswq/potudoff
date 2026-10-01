/**
 * =========================================================================
 * CONFIGURAÇÃO CENTRAL DA LANDING PAGE — AUXÍLIO DE MIRA (OFICIAL 3D)
 * =========================================================================
 * Altere facilmente preços, links de checkout, textos e mídias por aqui.
 * =========================================================================
 */

export const siteConfig = {
  // Marca & Identidade
  brand: {
    name: "AUXÍLIO DE MIRA",
    tagline: "Controle sua Configuração",
    version: "Version: X | OB - 53",
    creator: "Potudo FF",
    supportEmail: "suporte@auxiliodemira.pro",
    whatsappUrl: "https://wa.me/5500000000000",
    telegramUrl: "https://t.me",
  },

  // 1. HERO / VÍDEO FULLSCREEN
  hero: {
    videoUrl: "/videos/hero_user.mp4",
    remoteVideoUrl: "https://videotourl.com/videos/1790812189189-1b3dd448-1355-4fa9-a878-9e1bc1b76bf4.mp4",
    audioUrl: "/audio/narracao.mp3",
    emptyPlaceholderText: "SEU VÍDEO AQUI",
  },

  // 2. PRODUTO PRINCIPAL: AUXÍLIO DE MIRA (Construído pelo Scroll em 3D)
  aimAssist: {
    badge: "SOFTWARE DE PRECISÃO",
    title: "AUXÍLIO DE MIRA",
    softwareName: "POTUDO FF",
    version: "v4.9 PRO",
    build: "OB-53 NEURAL",
    versionTag: "Version: X | OB - 53",
    creatorTag: "Criador oficial: Potudo FF",
    
    headline: "CONTROLE SUA CONFIGURAÇÃO.",
    subtitle: "Conheça o Auxílio de Mira e explore todos os recursos em uma única interface.",
    
    // Botão de Compra Oficial do Auxílio de Mira:
    buyButton: {
      text: "COMPRAR AUXÍLIO DE MIRA",
      url: "https://zyrocheckout.com/checkout/v5/high/pot",
      priceTag: "Acesso vitalício imediato",
    },

    featuresVisual: [
      { id: "touch-boost", name: "TOUCH BOOST", desc: "Diagnóstico e aceleração de eventos de toque", stat: "ACTIVE (~3.2ms)" },
      { id: "remove-delay", name: "REMOVE DELAY", desc: "Prioridade de toque e cancelamento de latência", stat: "LATENCY: -78%" },
      { id: "game-boost", name: "GAME BOOST CORE", desc: "Otimização máxima de resposta para jogos", stat: "READY" },
      { id: "touch-test", name: "TOUCH TEST", desc: "Teste de precisão e velocidade de reação", stat: "PASSED" },
      { id: "smooth-aim", name: "SMOOTH AIM X/Y", desc: "Estabilização ultra suave de retículo", stat: "ENGAGED" },
      { id: "touch-response", name: "TOUCH RESPONSE", desc: "Otimização instantânea de feedback tátil", stat: "0ms DELAY" },
      { id: "dpi-overclock", name: "DPI OVERCLOCK", desc: "Ajuste e escala de sensibilidade por pixel", stat: "CALIBRATED" },
    ]
  },

  // 3. MIRA PRO (Construído pelo Scroll em 3D)
  miraPro: {
    badge: "RETÍCULOS COMPETITIVOS",
    title: "MIRA PRO",
    subtitle: "CONHEÇA TODOS OS RECURSOS",
    description: "Retículos de alta visibilidade e contraste neon calibrados para máxima precisão em qualquer mapa.",
    price: "R$ 27,00",
    buyButton: {
      text: "COMPRAR MIRA PRO",
      url: "https://zyrocheckout.com/checkout/v5/high/a",
      subtext: "MIRA PRO // CONHEÇA TODOS OS RECURSOS",
    },
    modules: [
      { name: "RETÍCULO ESTÁTICO & DINÂMICO", desc: "Mira com resposta de abertura reativa sob movimento" },
      { name: "CONTRASTE ALTO-RELEVO NEON", desc: "Visibilidade perfeita mesmo em cenários ultra claros ou escuros" },
      { name: "PERFIS DE CAMPEÕES", desc: "Configurações prontas inspiradas em jogadores profissionais" },
      { name: "SEM PERDA DE TAXA DE FPS", desc: "Renderização leve com 0 impacto na performance do jogo" },
    ]
  },

  // 4. PACK COMPLETO (A Maior Seção — Ecossistema 3D Completo)
  pack: {
    badge: "ECOSSISTEMA COMPLETO // ALL-IN-ONE",
    title: "PACK DEFINITIVO",
    headline: "TUDO O QUE VOCÊ PRECISA EM UM SÓ LUGAR.",
    description: "O conjunto definitivo para quem busca dominar todas as frentes competitivas. Uma central completa de ferramentas reunida em uma única suíte.",
    
    price: {
      original: "R$ 97,00",
      current: "R$ 34,99",
      installments: "ou até 6x no cartão / Pix",
      discountBadge: "OFERTA ESPECIAL DEFINITIVA",
    },

    buyButton: {
      text: "COMPRAR PACK COMPLETO",
      url: "https://zyrocheckout.com/checkout/v5/high/potudo",
      subtext: "PACK COMPLETO // ACESSO VITALÍCIO IMEDIATO",
    },

    whatIncludes: [
      "Acesso completo ao Auxílio de Mira (versão mais recente)",
      "Suíte Mira Pro com todos os retículos liberados",
      "Gerador de Sensibilidade com algoritmo integrado",
      "Central de Ferramentas e Otimizadores de latência",
      "Perfis de configuração para múltiplos DPIs e mouses",
      "Acesso vitalício com atualizações de segurança contínuas",
      "Garantia blindada incondicional de 7 dias",
      "Suporte VIP dedicado via WhatsApp e Discord",
    ]
  },

  // 5. GERADOR DE SENSIBILIDADE (Demonstrativo 3D)
  sensitivity: {
    badge: "MATRIZ DE CALIBRAÇÃO",
    title: "GERADOR DE SENSIBILIDADE",
    tagline: "CALIBRAGEM MATEMÁTICA DE ÂNGULO E DPI",
    description: "Demonstração visual do algoritmo de relação angular, DPI e rotação suave para qualquer hardware.",
  },

  // 6. FINAL CTA
  finalCta: {
    badge: "OPORTUNIDADE EXCLUSIVA",
    title: "DOMINE A PRECISÃO HOJE MESMO",
    subtitle: "Junte-se a mais de 24.500 jogadores que transformaram seu controle e desempenho no jogo.",
    ctaButton: {
      text: "COMPRAR AUXÍLIO DE MIRA",
      url: "https://zyrocheckout.com/checkout/v5/high/pot",
    }
  },

  // Links do Menu de Navegação
  navLinks: [
    { label: "Hero", href: "#hero" },
    { label: "Auxílio de Mira", href: "#aim-assist" },
    { label: "Mira Pro", href: "#mira-pro" },
    { label: "Pack", href: "#pack" },
    { label: "Sensibilidade", href: "#sensibilidade" },
  ],

  // Rodapé
  footer: {
    description: "Plataforma gamer premium dedicada à otimização competitiva, precisão motora e demonstração visual de alta performance.",
    disclaimer: "Aviso Legal: Reconstrução visual e demonstração de interface gráfica para apresentação de software e calibração de sensibilidade. Não executamos modificações internas, bypass, injetores ou qualquer alteração protegida em jogos de terceiros.",
    copyright: "© 2026 AUXÍLIO DE MIRA. Todos os direitos reservados. Experiência Gamer Premium 3D."
  }
};
