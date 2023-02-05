import * as model from "./model.js";
import formView from "./views/formView.js";
import passwordView from "./views/passwordView.js";

const controlLengthSlider = function (currentValue) {
  console.log(currentValue);
};

const init = function () {
  formView.addHandlerPasswordLengthSlider(controlLengthSlider);
};
init();
