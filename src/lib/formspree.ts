/**
 * Formspree konfigurace kontaktního formuláře.
 *
 * TODO (jediná věc, kterou je nutné dokončit před produkcí):
 * doplnit reálné Formspree form ID (např. "mabcwxyz") níže,
 * případně nastavit VITE_FORMSPREE_FORM_ID.
 * Dokud je ID prázdné, formulář se neodesílá a zobrazí uživateli
 * kontaktní e-mail místo falešného úspěchu.
 */
const FORM_ID = (import.meta.env["VITE_FORMSPREE_FORM_ID"] as string | undefined) ?? "xbgrqrqb";

export const FORMSPREE_FORM_ID = FORM_ID.trim();

export const isFormspreeConfigured = FORMSPREE_FORM_ID.length > 0;

export const FORMSPREE_ENDPOINT = isFormspreeConfigured
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : "";
