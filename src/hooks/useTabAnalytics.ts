// // hooks/useTabAnalytics.ts
// import { useRef, useEffect } from "react";
// import { trackProfileTabView, trackProfileTabTimeSpent } from "../firebase";

// export const useTabAnalytics = (tabName: string) => {
//   // ✅ Para compatibilidade com componentes existentes
//   const sectionRef = useRef<HTMLDivElement>(null);
//   console.log("tabName", tabName);
//   return { sectionRef };
// };

// // ✅ Novo hook integrado com useActiveSection
// export const useActiveTabAnalytics = (activeSection: string) => {
//   const previousSectionRef = useRef<string | null>(null);
//   const startTimeRef = useRef<number | null>(null);
//   const trackedViewsRef = useRef<Set<string>>(new Set());

//   useEffect(() => {
//     // 🟢 Nova seção ficou ativa
//     if (activeSection && activeSection !== previousSectionRef.current) {
//       // 🔴 Rastrear tempo da seção anterior
//       if (previousSectionRef.current && startTimeRef.current) {
//         const timeSpent = Math.floor(
//           (Date.now() - startTimeRef.current) / 1000
//         );

//         if (timeSpent >= 2) {
//           //   console.log(
//           //     `⏱️ Tempo gasto na seção ${previousSectionRef.current}: ${timeSpent}s`
//           //   );
//           trackProfileTabTimeSpent(previousSectionRef.current, timeSpent);
//         }
//       }

//       // 🟢 Nova seção ativa
//       //   console.log(`👁️ Seção ${activeSection} ficou ativa`);
//       previousSectionRef.current = activeSection;
//       startTimeRef.current = Date.now();

//       // Track view apenas uma vez por sessão
//       if (!trackedViewsRef.current.has(activeSection)) {
//         // console.log(`📍 trackProfileTabView chamada para: ${activeSection}`);
//         trackProfileTabView(activeSection, {
//           user_agent: navigator.userAgent,
//           referrer: document.referrer,
//           screen_resolution: `${window.screen.width}x${window.screen.height}`,
//           device_type: window.innerWidth < 768 ? "mobile" : "desktop",
//           scroll_trigger: true, // Indica que foi ativado por scroll
//         });
//         trackedViewsRef.current.add(activeSection);
//       } else {
//         // console.log(`🔄 View já registrada para: ${activeSection}`);
//       }
//     }
//   }, [activeSection]);

//   // 🧹 Cleanup: rastrear tempo final quando componente desmonta
//   useEffect(() => {
//     return () => {
//       if (previousSectionRef.current && startTimeRef.current) {
//         const timeSpent = Math.floor(
//           (Date.now() - startTimeRef.current) / 1000
//         );
//         if (timeSpent >= 2) {
//           //   console.log(
//           //     `🔚 Tempo final na seção ${previousSectionRef.current}: ${timeSpent}s`
//           //   );
//           trackProfileTabTimeSpent(previousSectionRef.current, timeSpent);
//         }
//       }
//     };
//   }, []);
// };

// hooks/useActiveTabAnalytics.ts
import { useEffect, useRef } from "react";
import { trackProfileTabView, trackProfileTabTimeSpent } from "../firebase";

// Mapeamento das seções para nomes das abas
const sectionToTabName: Record<string, string> = {
  home: "home",
  formation: "formacao",
  experience: "experiencia",
  projects: "projetos",
  competence: "competencias",
  contact: "contato",
};

// Função para detectar tipo de device
const getDeviceType = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("mobile")) return "mobile";
  if (userAgent.includes("tablet")) return "tablet";
  return "desktop";
};

// Função para detectar origem do tráfego
const getTrafficSource = (): string => {
  const referrer = document.referrer;
  if (!referrer) return "direct";
  if (referrer.includes("google")) return "google";
  if (referrer.includes("linkedin")) return "linkedin";
  if (referrer.includes("github")) return "github";
  if (referrer.includes("instagram")) return "instagram";
  return "other";
};

export const useActiveTabAnalytics = (activeSection: string | null) => {
  const startTimeRef = useRef<number>(Date.now());
  const previousSectionRef = useRef<string | null>(null);

  useEffect(() => {
    if (!activeSection) return;

    const tabName = sectionToTabName[activeSection] || activeSection;
    const currentTime = Date.now();

    // Se mudou de seção, registrar tempo gasto na anterior
    if (
      previousSectionRef.current &&
      previousSectionRef.current !== activeSection
    ) {
      const timeSpent = (currentTime - startTimeRef.current) / 1000;
      const previousTabName =
        sectionToTabName[previousSectionRef.current] ||
        previousSectionRef.current;

      // Só registra se passou mais de 2 segundos (evita mudanças muito rápidas)
      if (timeSpent >= 2) {
        trackProfileTabTimeSpent(previousTabName, timeSpent);
      }
    }

    // Registrar visualização da nova aba
    trackProfileTabView(tabName, {
      user_agent: navigator.userAgent,
      referrer: document.referrer,
      device_type: getDeviceType(),
      screen_resolution: `${screen.width}x${screen.height}`,
      source: getTrafficSource(),
      timestamp: new Date().toISOString(),
    });

    // Atualizar referências
    startTimeRef.current = currentTime;
    previousSectionRef.current = activeSection;

    // Console log para debug (remover em produção)
    // console.log(`🔥 Analytics: Aba ${tabName} visualizada`);
  }, [activeSection]);

  // Registrar tempo gasto quando o usuário sair da página
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (previousSectionRef.current) {
        const timeSpent = (Date.now() - startTimeRef.current) / 1000;
        const tabName =
          sectionToTabName[previousSectionRef.current] ||
          previousSectionRef.current;

        if (timeSpent >= 2) {
          trackProfileTabTimeSpent(tabName, timeSpent);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return {
    currentTab: activeSection
      ? sectionToTabName[activeSection] || activeSection
      : null,
    deviceType: getDeviceType(),
    trafficSource: getTrafficSource(),
  };
};
