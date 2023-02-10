class FormView {
  _passwordLengthSliderElement = document.querySelector(".slider");
  _passwordLengthElement = document.querySelector(".password__length-number");

  addHandlerPasswordLengthSlider(handlerFunction) {
    this._passwordLengthSliderElement.addEventListener("input", (e) => {
      handlerFunction(e.target.value);
    });
  }

  _resetPasswordLength(value = 8) {
    this._passwordLengthSliderElement.value = value;
    this._passwordLengthElement.textContent = value;
  }

  addHandlerPageLoad(state) {
    window.addEventListener("load", () => {
      this._resetPasswordLength(state.options.passwordLength);
    });
  }

  renderPasswordLength(currentValue) {
    this._passwordLengthElement.textContent = currentValue;
  }
}

export default new FormView();
