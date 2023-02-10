import * as model from "./model.js";
import formView from "./views/formView.js";
import passwordView from "./views/passwordView.js";

function printCurrentState() {
  console.log(JSON.stringify(model.state, null, 2));
}

const controlLengthSlider = function (currentValue) {
  console.log(currentValue);
};

const init = function () {
  formView.addHandlerPasswordLengthSlider(controlLengthSlider);
};
init();
