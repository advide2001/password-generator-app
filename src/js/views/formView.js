class FormView {
  _passwordLengthSliderElement = document.querySelector(".slider");
  _passwordLengthElement = document.querySelector(".password__length-number");

  addHandlerPasswordLengthSlider(handlerFunction) {
    this._passwordLengthSliderElement.addEventListener("input", (e) => {
      handlerFunction(e.target.value);
    });
  }

  renderPasswordLength(currentValue) {
    this._passwordLengthElement.textContent = currentValue;
  }
}

export default new FormView();
