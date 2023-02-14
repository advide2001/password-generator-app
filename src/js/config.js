const MIN_CHARACTER_COUNT = 10; // When only numbers are allowed
const MAX_CHARACTER_COUNT = 94; // When all characters are allowed
const MIN_PASSWORD_LENGTH = 5; // Minimum length of password
const MAX_PASSWORD_LENGTH = 20; // Maximum length of password

// formula for password score: characterCount * log10(passwordLength)
export const WEAK_PASSWORD_SCORE =
  MIN_CHARACTER_COUNT * Math.log10(MIN_PASSWORD_LENGTH);
export const STRONG_PASSWORD_SCORE =
  MAX_CHARACTER_COUNT * Math.log10(MAX_PASSWORD_LENGTH);

// number of password strength categories
export const NUMBER_OF_STRENGTH_LEVELS = 4;
