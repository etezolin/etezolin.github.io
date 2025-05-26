// hooks/useTabAnalytics.ts
import { useRef, useEffect } from "react";
import { trackProfileTabView, trackProfileTabTimeSpent } from "../firebase";

export const useTabAnalytics = (tabName: string) => {
  // ✅ Para compatibilidade com componentes existentes
  const sectionRef = useRef<HTMLDivElement>(null);
  console.log("tabName", tabName);
  return { sectionRef };
};

// ✅ Novo hook integrado com useActiveSection
export const useActiveTabAnalytics = (activeSection: string) => {
  const previousSectionRef = useRef<string | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const trackedViewsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    // 🟢 Nova seção ficou ativa
    if (activeSection && activeSection !== previousSectionRef.current) {
      // 🔴 Rastrear tempo da seção anterior
      if (previousSectionRef.current && startTimeRef.current) {
        const timeSpent = Math.floor(
          (Date.now() - startTimeRef.current) / 1000
        );

        if (timeSpent >= 2) {
          //   console.log(
          //     `⏱️ Tempo gasto na seção ${previousSectionRef.current}: ${timeSpent}s`
          //   );
          trackProfileTabTimeSpent(previousSectionRef.current, timeSpent);
        }
      }

      // 🟢 Nova seção ativa
      //   console.log(`👁️ Seção ${activeSection} ficou ativa`);
      previousSectionRef.current = activeSection;
      startTimeRef.current = Date.now();

      // Track view apenas uma vez por sessão
      if (!trackedViewsRef.current.has(activeSection)) {
        // console.log(`📍 trackProfileTabView chamada para: ${activeSection}`);
        trackProfileTabView(activeSection, {
          user_agent: navigator.userAgent,
          referrer: document.referrer,
          screen_resolution: `${window.screen.width}x${window.screen.height}`,
          device_type: window.innerWidth < 768 ? "mobile" : "desktop",
          scroll_trigger: true, // Indica que foi ativado por scroll
        });
        trackedViewsRef.current.add(activeSection);
      } else {
        // console.log(`🔄 View já registrada para: ${activeSection}`);
      }
    }
  }, [activeSection]);

  // 🧹 Cleanup: rastrear tempo final quando componente desmonta
  useEffect(() => {
    return () => {
      if (previousSectionRef.current && startTimeRef.current) {
        const timeSpent = Math.floor(
          (Date.now() - startTimeRef.current) / 1000
        );
        if (timeSpent >= 2) {
          //   console.log(
          //     `🔚 Tempo final na seção ${previousSectionRef.current}: ${timeSpent}s`
          //   );
          trackProfileTabTimeSpent(previousSectionRef.current, timeSpent);
        }
      }
    };
  }, []);
};
