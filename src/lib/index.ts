/**
 * Formats a raw phone string into a "XX XXX XXX XXX" (2-3-3-3) group layout.
 * 
 * @param phone - The raw phone number string or number.
 * @returns The formatted phone number string.
 * 
 * @example
 * formatPhoneNumber("09898765432") // "09 898 765 432"
 * formatPhoneNumber("098987654")   // "09 898 765 4"
 */
export const formatPhoneNumber = (phone: string | number): string => {
  if (!phone && phone !== 0) return "";

 
  const digits = String(phone).replace(/\D/g, "");


  const parts = digits.match(/^(\d{1,2})(\d{1,3})?(\d{1,3})?(\d{1,3})?/);

  if (!parts) return digits;


  return [parts[1], parts[2], parts[3], parts[4]]
    .filter(Boolean)
    .join(" ");
};