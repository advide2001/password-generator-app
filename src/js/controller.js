import { WARNING_MESSAGES } from "./config.js";
import * as model from "./model.js";
import formView from "./views/formView.js";
import passwordView from "./views/passwordView.js";

function printCurrentState() {
  console.log(JSON.stringify(model.state, null, 2));
}

function controlPasswordStrength() {
  // 1. Store the previous password stregth, and render strength bar only when strength changes
  const previousPasswordStrength = model.state.passwordStrength;
  // 2. Calculate the password strength, only when at least one option is selected
  if (
    model.state.options.allowLowercase ||
    model.state.options.allowUppercase ||
    model.state.options.allowNumbers ||
    model.state.options.allowSymbols
  ) {
    model.calculatePasswordStrength();
  }
  // 3. Render the strength bar only when strength changes
  if (previousPasswordStrength !== model.state.passwordStrength)
    formView.renderPasswordStrength(model.state.passwordStrength);
}

const controlLengthSlider = function (currentValue) {
  // 1. Update passwordLength in the state
  model.updatePasswordLength(currentValue);
  // 2. Update the change to the UI
  formView.renderPasswordLength(currentValue);
  // 3. Calculate the password strength and render it to the UI
  controlPasswordStrength();
};

const controlPasswordOptions = function (optionSelected) {
  // 1. Update the state
  switch (optionSelected) {
    case "include-lowercase":
      model.updateAllowLowercase();
      break;
    case "include-uppercase":
      model.updateAllowUppercase();
      break;
    case "include-numbers":
      model.updateAllowNumbers();
      break;
    case "include-symbols":
      model.updateAllowSymbols();
      break;
  }
  // 2. Update the UI
  formView.renderPasswordOptions(optionSelected);
  // 3. Calculate the password strength and render it to the UI
  controlPasswordStrength();
};

const controlGeneratePassword = function () {
  // 1. Validate the password generation
  // 1.1. if no options are selected, render an warning message and return
  if (
    !model.state.options.allowLowercase &&
    !model.state.options.allowUppercase &&
    !model.state.options.allowNumbers &&
    !model.state.options.allowSymbols
  ) {
    formView.renderWarningMessage(WARNING_MESSAGES.NO_OPTIONS_SELECTED);
    return;
  }
  // 1.2. if password strength is weak, render a warning message and return
  if (model.state.passwordStrength === 0) {
    formView.renderWarningMessage(WARNING_MESSAGES.WEAK_PASSWORD);
    return;
  }

  // 2. generate the password
  model.generatePassword();
  // 3. render the password to the UI
  passwordView.renderGeneratedPassword(model.state.passwordGenerated);
};

function controlCopyButton() {
  // Gaurd clause to prevent copying empty password
  if (!model.state.passwordGenerated) return;

  // 1. copy the password to the clipboard from the element
  passwordView.copyPasswordToClipboard();
  // 2. render the copied message to the UI
  passwordView.renderCopiedMessage();
  // 3. reset the copied message after 5 seconds
  setTimeout(() => {
    passwordView.resetCopiedMessage();
  }, 2000);
}

const init = function () {
  formView.addHandlerPageLoad(model.state);
  formView.addHandlerPasswordLengthSlider(controlLengthSlider);
  formView.addHandlerPasswordOptions(controlPasswordOptions);
  formView.addHandlerGeneratePassword(controlGeneratePassword);
  passwordView.addHandlerCopyButton(controlCopyButton);
};
init();
