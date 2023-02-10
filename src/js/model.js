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
