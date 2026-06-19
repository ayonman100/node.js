// ============================
// ES MODULES - UTILITIES FILE
// ============================

// Named export: add function
export const add = (a, b) => a + b;

// Named export: capitalize first letter
export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// Named export: constant version
export const APP_VERSION = "1.0.0";

// Default export: format currency
export default function formatCurrency(amount) {
  return `₦${amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}