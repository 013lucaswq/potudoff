import React, { useState, useEffect } from "react";
import { CheckoutContext } from "./checkoutContextValue";
import { X, Lock, ShieldCheck, RefreshCw } from "lucide-react";

export function CheckoutProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const openCheckout = (url, title = "AUXÍLIO DE MIRA") => {
    setCheckoutUrl(url);
    setProductTitle(title);
    setIsLoading(true);
    setIsOpen(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeCheckout = () => {
    setIsOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeCheckout();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <CheckoutContext.Provider value={{ openCheckout, closeCheckout }}>
      {children}

      {/* MODAL DE CHECKOUT INTEGRADO DENTRO DO SITE (SEM ABRIR FORA) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={closeCheckout} />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-2xl h-[94vh] max-h-[820px] bg-[#0A0A0E] border-2 border-[#FF1E27] rounded-2xl shadow-[0_0_60px_rgba(255,30,39,0.5)] flex flex-col overflow-hidden">
            
            {/* Top Bar Cyber */}
            <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#140507] border-b border-[#FF1E27]/40 flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <span className="font-orbitron font-bold text-xs sm:text-sm text-white tracking-wider uppercase truncate">
                  CHECKOUT // {productTitle}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 border border-green-500/40 font-mono text-[9px] text-green-400 flex-shrink-0">
                  <ShieldCheck className="w-3 h-3 text-green-400" />
                  256-BIT SSL
                </span>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={closeCheckout}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#22070A] hover:bg-[#FF1E27] text-neutral-200 hover:text-white border border-[#FF1E27]/60 font-mono text-xs font-bold transition-all cursor-pointer shadow-[0_0_10px_rgba(255,30,39,0.3)]"
                  title="Fechar e voltar ao site"
                >
                  <X className="w-4 h-4" />
                  <span>FECHAR</span>
                </button>
              </div>
            </div>

            {/* Iframe Loading State & Frame */}
            <div className="relative flex-1 w-full bg-white overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 z-20 bg-[#0A0A0E] flex flex-col items-center justify-center gap-3">
                  <RefreshCw className="w-8 h-8 text-[#FF1E27] animate-spin" />
                  <p className="font-orbitron font-bold text-xs text-white tracking-widest uppercase">
                    CARREGANDO CHECKOUT SEGURO...
                  </p>
                  <span className="font-mono text-[10px] text-neutral-400">
                    Aberto diretamente dentro do site
                  </span>
                </div>
              )}

              <iframe
                src={checkoutUrl}
                className="w-full h-full border-0"
                title="Checkout Zyro"
                allow="payment; clipboard-write"
                onLoad={() => setIsLoading(false)}
              />
            </div>

            {/* Bottom Bar Info */}
            <div className="px-4 py-2 bg-[#0E0E14] border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-400 flex-shrink-0">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-green-400" />
                Ambiente criptografado e seguro
              </span>
              <span>Potudo FF Oficial</span>
            </div>

          </div>
        </div>
      )}
    </CheckoutContext.Provider>
  );
}
