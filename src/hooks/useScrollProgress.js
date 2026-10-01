import { useState, useEffect, useRef } from "react";

/**
 * Hook para calcular o progresso do scroll de um container específico (0.0 a 1.0)
 * Permite animações sincronizadas diretamente com a posição do scroll.
 */
export function useScrollProgress(containerRef) {
  const [progress, setProgress] = useState(0);
  const rafId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalScrollable = rect.height - windowHeight;

        if (totalScrollable <= 0) {
          setProgress(0);
          return;
        }

        // Progresso relativo ao container
        const currentProgress = -rect.top / totalScrollable;
        const clamped = Math.min(Math.max(currentProgress, 0), 1);
        setProgress(clamped);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [containerRef]);

  return progress;
}
