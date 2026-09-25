// Eventos estandar de Meta. El pixel se inicializa en app/layout.tsx.
declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

// Contact = inicia conversacion | Lead = deja sus datos | Schedule = quiere agendar
export type MetaEvent = "Contact" | "Lead" | "Schedule";

export function trackMeta(event: MetaEvent, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", event, params);
}
