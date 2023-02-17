import {
  WEAK_PASSWORD_SCORE,
  STRONG_PASSWORD_SCORE,
  NUMBER_OF_STRENGTH_LEVELS,
} from "./config";

// State of the application
export const state = {
  passwordStrength: -1, // 0-3, -1 if not computed
  passwordGenerated: "", // Generated from api
  options: {
    passwordLength: 8, // Length of password
    allowUppercase: false,
    allowLowercase: false,
    allowNumbers: false,
    allowSymbols: false,
  },
};

// getter and setter to view and modify the state
export function updatePasswordGenerated(newPassword) {
  state.passwordGenerated = newPassword;
}

export function updatePasswordLength(newLength) {
  state.options.passwordLength = newLength;
}

export function updateAllowUppercase() {
  state.options.allowUppercase = !state.options.allowUppercase;
}

export function updateAllowLowercase() {
  state.options.allowLowercase = !state.options.allowLowercase;
}

export function updateAllowNumbers() {
  state.options.allowNumbers = !state.options.allowLowercase;
}

export function updateAllowSymbols() {
  state.options.allowSymbols = !state.options.allowSymbols;
}

export function updatePasswordStrength(newStrength) {
  state.passwordStrength = newStrength;
}

// function to calculate the password strength based on the given options
export function calculatePasswordStrength() {
  // 0. if no options are selected, throw an error
  if (
    state.options.allowLowercase === false &&
    state.options.allowUppercase === false &&
    state.options.allowNumbers === false &&
    state.options.allowSymbols === false
  )
    throw new Error("No options selected");
  // 1. compute the number of characters in the password based on options
  const characterCount = computeCharacters();
  // 2. figure out the password score
  const passwordScore = computePasswordScore(characterCount);
  // 3. based on password score assign a strength level
  const strength = computePasswordStrength(passwordScore);
  // 4. update the state, if strength levels differ
  if (strength !== state.passwordStrength) {
    updatePasswordStrength(strength);
  }
}

// HELPER FUNCTIONS
// ----------------

// compute the number of characters in the password based on options

function buildCharaterSet() {
  let characterSet = "";
  if (state.options.allowUppercase)
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (state.options.allowLowercase)
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (state.options.allowNumbers) characterSet += "0123456789";
  if (state.options.allowSymbols)
    characterSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  return characterSet;
}

function computeCharacters() {
  let characterCount = 0;
  if (state.options.allowUppercase) characterCount += 26;
  if (state.options.allowLowercase) characterCount += 26;
  if (state.options.allowNumbers) characterCount += 10;
  if (state.options.allowSymbols) characterCount += 32;
  return characterCount;
}

// compute the password score
function computePasswordScore(characterCount) {
  // Password Score is computed as follows: characterCount * log10(passwordLength)
  return characterCount * Math.log10(state.options.passwordLength);
}

// compute the password strength based on the password score
function computePasswordStrength(passwordScore) {
  const xFactor =
    (STRONG_PASSWORD_SCORE - WEAK_PASSWORD_SCORE) / NUMBER_OF_STRENGTH_LEVELS;
  let passwordStrengthLevel = 0;

  if (
    passwordScore > WEAK_PASSWORD_SCORE &&
    passwordScore <= WEAK_PASSWORD_SCORE + xFactor
  )
    passwordStrengthLevel = 0;
  else if (
    passwordScore > WEAK_PASSWORD_SCORE + xFactor &&
    passwordScore <= WEAK_PASSWORD_SCORE + 2 * xFactor
  )
    passwordStrengthLevel = 1;
  else if (
    passwordScore > WEAK_PASSWORD_SCORE + 2 * xFactor &&
    passwordScore <= WEAK_PASSWORD_SCORE + 3 * xFactor
  )
    passwordStrengthLevel = 2;
  else if (passwordScore > WEAK_PASSWORD_SCORE + 3 * xFactor)
    passwordStrengthLevel = 3;

  return passwordStrengthLevel;
}

export function generatePassword() {
  // -------- Make API call here ----------------
  // DUMMY PASSWORD
  updatePasswordGenerated("dummyPassword");
}
