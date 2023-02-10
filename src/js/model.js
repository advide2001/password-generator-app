export const state = {
  passwordStrength: "", // 0-3
  passwordGenerated: "", // Generated from api
  options: {
    passwordLength: 8, // Length of password
    allowUppercase: false,
    allowLowercase: false,
    allowNumbers: false,
    allowSymbols: false,
  },
};

export function updatePasswordLength(newLength) {
  state.options.passwordLength = newLength;
}

export function updateAllowUppercase(newValue) {
  state.options.allowUppercase = newValue;
}

export function updateAllowLowercase(newValue) {
  state.options.allowLowercase = newValue;
}

export function updateAllowNumbers(newValue) {
  state.options.allowNumbers = newValue;
}

export function updateAllowSymbols(newValue) {
  state.options.allowSymbols = newValue;
}
