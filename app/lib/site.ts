// Datos del sitio en un solo lugar: los usan metadata, sitemap, robots y el JSON-LD.
// OJO: si el dominio de produccion no es este, cambialo aqui.
export const SITE_URL = "https://www.drabarcia.com";
export const SITE_NAME = "Dra. Barcia";
export const WHATSAPP_NUMBER = "593995321569";
export const CONTACT_EMAIL = "contacto@drabarcia.com";

// Todo mensaje de WhatsApp que sale de la web empieza con 🌐 para que la
// doctora sepa que el contacto llegó por la página (pedido del 10-11-2026).
export const WHATSAPP_MESSAGE = "🌐 Hola vi su página quiero más información de sus servicios";

export function whatsappLink(extra?: string) {
  const text = extra ? `${WHATSAPP_MESSAGE}\n${extra}` : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
