class FormView {
  _passwordLengthSlider = document.querySelector(".slider");

  addHandlerPasswordLengthSlider(handlerFunction) {
    this._passwordLengthSlider.addEventListener("input", (e) => {
      handlerFunction(e.target.value);
    });
  }
}

export default new FormView();
