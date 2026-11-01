// Single source of truth for the business contact details.
// Import these instead of hardcoding the number / WhatsApp link per page.

export const PHONE_E164 = "+919910070102";
export const PHONE_DISPLAY = "99100 70102";
export const PHONE_DISPLAY_FULL = "+91 99100 70102";
export const TEL_HREF = "tel:+919910070102";
export const EMAIL = "manojsethi@propertyspecialist.in";

/** Build a wa.me link with a properly URL-encoded prefilled message. */
export function whatsapp(text: string): string {
  return `https://wa.me/919910070102?text=${encodeURIComponent(text)}`;
}
