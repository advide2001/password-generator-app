import * as model from "./model.js";
import formView from "./views/formView.js";
import passwordView from "./views/passwordView.js";

function printCurrentState() {
  console.log(JSON.stringify(model.state, null, 2));
}

function controlPasswordStrength() {
  // 1. Store the previous password stregth, and render strength bar only when strength changes
  const previousPasswordStrength = model.state.passwordStrength;
  // 2. Calculate the password strength
  model.calculatePasswordStrength();
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

const init = function () {
  formView.addHandlerPageLoad(model.state);
  formView.addHandlerPasswordLengthSlider(controlLengthSlider);
  formView.addHandlerPasswordOptions(controlPasswordOptions);
};
init();
