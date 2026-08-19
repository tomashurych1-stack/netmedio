/**
 * Formspree konfigurace kontaktního formuláře.
 *
 * Produkční form ID: xbgrqrqb (https://formspree.io/f/xbgrqrqb).
 * Lze přepsat přes VITE_FORMSPREE_FORM_ID.
 */
const FORM_ID = (import.meta.env["VITE_FORMSPREE_FORM_ID"] as string | undefined) ?? "xbgrqrqb";

export const FORMSPREE_FORM_ID = FORM_ID.trim();

export const isFormspreeConfigured = FORMSPREE_FORM_ID.length > 0;

export const FORMSPREE_ENDPOINT = isFormspreeConfigured
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : "";
