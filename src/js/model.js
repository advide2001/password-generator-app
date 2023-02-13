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
