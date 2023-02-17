const MIN_CHARACTER_COUNT = 10; // When only numbers are allowed
const MAX_CHARACTER_COUNT = 91; // When all characters are allowed
const MIN_PASSWORD_LENGTH = 5; // Minimum length of password
const MAX_PASSWORD_LENGTH = 20; // Maximum length of password

// formula for password score: characterCount * log10(passwordLength)
export const WEAK_PASSWORD_SCORE =
  MIN_CHARACTER_COUNT * Math.log10(MIN_PASSWORD_LENGTH);
export const STRONG_PASSWORD_SCORE =
  MAX_CHARACTER_COUNT * Math.log10(MAX_PASSWORD_LENGTH);

// number of password strength categories
export const NUMBER_OF_STRENGTH_LEVELS = 4;

// Warning messages
export const WARNING_MESSAGES = {
  NO_OPTIONS_SELECTED: "Please select at least one option",
  WEAK_PASSWORD:
    "Password is too weak. Please select more options or increase password length",
};
