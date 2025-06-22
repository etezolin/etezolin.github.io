import type { Analytics } from "firebase/analytics";
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// Tipos para dados adicionais
interface AdditionalTrackingData {
  user_agent?: string;
  referrer?: string;
  device_type?: string;
  screen_resolution?: string;
  source?: string;
  [key: string]: string | number | boolean | undefined;
}

// Sua configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrH9oXJTy3tuyUupdYEUBxQqfCwvm7x9E",
  authDomain: "etezolin-ac833.firebaseapp.com",
  projectId: "etezolin-ac833",
  storageBucket: "etezolin-ac833.firebasestorage.app",
  messagingSenderId: "668249899832",
  appId: "1:668249899832:web:46f5619b550abeffa7f7cd",
  measurementId: "G-JJLJZ00T8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

// 🛡️ Proteção contra duplicação do StrictMode
const eventTracker = new Set<string>();

// Função para criar chave única do evento
const createEventKey = (
  eventName: string,
  data: Record<string, unknown>
): string => {
  return `${eventName}_${JSON.stringify(data)}`;
};

// Função para rastrear acesso às abas do perfil
export const trackProfileTabView = (
  tabName: string,
  additionalData?: AdditionalTrackingData
) => {
  const eventData = {
    tab_name: tabName,
    timestamp: new Date().toISOString(),
    ...additionalData,
  };

  // 🛡️ Evitar eventos duplicados do StrictMode
  const eventKey = createEventKey("profile_tab_view", { tab_name: tabName });

  if (eventTracker.has(eventKey)) {
    console.log("🚫 Evento duplicado ignorado (StrictMode):", tabName);
    return;
  }

  eventTracker.add(eventKey);

  // Limpar após 5 segundos para permitir navegação real
  setTimeout(() => {
    eventTracker.delete(eventKey);
  }, 5000);

  // 🐛 DEBUG: Log para testar
  // console.log("🔥 Firebase Analytics - Tab View:", {
  //   event: "profile_tab_view",
  //   data: eventData,
  // });

  // ✅ Verificar se chegou até aqui
  // console.log("📍 trackProfileTabView chamada para:", tabName);

  logEvent(analytics, "profile_tab_view", eventData);
};

// Função para rastrear tempo gasto em cada aba
export const trackProfileTabTimeSpent = (
  tabName: string,
  timeSpent: number
) => {
  // Ignorar tempo muito baixo (provavelmente StrictMode)
  if (timeSpent < 1) {
    // console.log("⏭️ Tempo muito baixo ignorado:", timeSpent, "segundos");
    return;
  }

  const eventData = {
    tab_name: tabName,
    time_spent_seconds: timeSpent,
    timestamp: new Date().toISOString(),
  };

  // 🐛 DEBUG: Log para testar
  // console.log("⏱️ Firebase Analytics - Time Spent:", {
  //   event: "profile_tab_time_spent",
  //   data: eventData,
  // });

  logEvent(analytics, "profile_tab_time_spent", eventData);
};

// Função para rastrear interações específicas dentro das abas
export const trackProfileTabInteraction = (
  tabName: string,
  interactionType: string,
  target?: string
) => {
  const eventData = {
    tab_name: tabName,
    interaction_type: interactionType,
    target: target,
    timestamp: new Date().toISOString(),
  };

  // 🐛 DEBUG: Log para testar
  // console.log("👆 Firebase Analytics - Interaction:", {
  //   event: "profile_tab_interaction",
  //   data: eventData,
  // });

  logEvent(analytics, "profile_tab_interaction", eventData);
};

// Função para rastrear dados demográficos dos visitantes
export const trackVisitorProfile = (source?: string, device?: string) => {
  const eventData = {
    visitor_source: source || "direct",
    device_type: device || "unknown",
    timestamp: new Date().toISOString(),
  };

  // 🐛 DEBUG: Log para testar
  // console.log("👤 Firebase Analytics - Visitor:", {
  //   event: "profile_visitor",
  //   data: eventData,
  // });

  logEvent(analytics, "profile_visitor", eventData);
};

// Função para rastrear conversões (contatos, downloads, etc.)
export const trackProfileConversion = (
  conversionType: string,
  tabOrigin: string
) => {
  const eventData = {
    conversion_type: conversionType,
    origin_tab: tabOrigin,
    timestamp: new Date().toISOString(),
  };

  // 🐛 DEBUG: Log para testar
  // console.log("💰 Firebase Analytics - Conversion:", {
  //   event: "profile_conversion",
  //   data: eventData,
  // });

  logEvent(analytics, "profile_conversion", eventData);
};

export { analytics, app };
