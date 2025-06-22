import { useEffect, useRef } from "react";
import { trackProfileTabTimeSpent, trackProfileTabView } from "../firebase";

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
