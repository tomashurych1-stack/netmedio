/**
 * Google Tag Manager helpers.
 * Kontejner GTM-KGPS3CV3 je vložen v src/routes/__root.tsx.
 * Zde jsou pouze dataLayer eventy — konfiguraci tagů řeší GTM.
 */

export const GTM_ID = "GTM-KGPS3CV3";

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushEvent(payload: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Zabrání duplicitnímu odeslání stejného eventu při jednom kliknutí (dvojklik, bubbling). */
const recent = new Map<string, number>();

function pushOnce(key: string, payload: DataLayerEvent, windowMs = 1000) {
  const now = Date.now();
  const last = recent.get(key);
  if (last && now - last < windowMs) return;
  recent.set(key, now);
  pushEvent(payload);
}

export function trackPhoneClick(value: string) {
  pushOnce(`click_phone:${value}`, { event: "click_phone", contact_method: "phone", contact_value: value });
}

export function trackEmailClick(value: string) {
  pushOnce(`click_email:${value}`, { event: "click_email", contact_method: "email", contact_value: value });
}

/** Volat POUZE po skutečně úspěšné odpovědi formuláře. */
export function trackLead(formName: string) {
  pushOnce(`generate_lead:${formName}`, { event: "generate_lead", form_name: formName }, 3000);
}
