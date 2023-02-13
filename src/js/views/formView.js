class FormView {
  _passwordLengthSliderElement = document.querySelector(".slider");
  _passwordLengthElement = document.querySelector(".password__length-number");
  _optionElementSelected = false;

  // This function selects the option elements from the DOM, only runs once
  _selectOptionElements() {
    this._optionAllowLowercaseElement = document.querySelector(
      ".checkbox__box#include-lowercase"
    );
    this._optionAllowUppercaseElement = document.querySelector(
      ".checkbox__box#include-uppercase"
    );
    this._optionAllowNumbersElement = document.querySelector(
      ".checkbox__box#include-numbers"
    );
    this._optionAllowSymbolsElement = document.querySelector(
      ".checkbox__box#include-symbols"
    );
    this._optionElementSelected = true;
  }

  // This function resets the password length slider to the default value
  _resetPasswordLength(value) {
    this._passwordLengthSliderElement.value = value;
    this._passwordLengthElement.textContent = value;
  }

  // This function handles the initial state of the page when it loads
  addHandlerPageLoad(state) {
    window.addEventListener("load", () => {
      this._resetPasswordLength(state.options.passwordLength);
    });
  }

  // This function handles the movement in the slider input
  addHandlerPasswordLengthSlider(handlerFunction) {
    this._passwordLengthSliderElement.addEventListener("input", (e) => {
      handlerFunction(e.target.value);
    });
  }

  // This function handles the click event on the checkbox
  addHandlerPasswordOptions(handlerFunction) {
    document
      .querySelector(".password__checkbox")
      .addEventListener("click", (e) => {
        // get the closest parent element that has the class of checkbox__box, checkbox__label, or checkbox__input
        const option =
          e.target.closest(".checkbox__box") || // handle click on the box
          e.target.closest(".checkbox__label") || // handle click on the label
          e.target.closest(".checkbox__input"); // handle click on the input
        // guard clause to prevent the handler from running if the click is not on the checkbox
        if (!option) return;
        // call the handler function to further process this click event
        handlerFunction(option.id);
      });
  }

  renderPasswordLength(currentValue) {
    this._passwordLengthElement.textContent = currentValue;
  }

  renderPasswordOptions(optionChecked) {
    // Select the elements, if they have not been selected yet
    if (!this._optionElementSelected) {
      this._selectOptionElements();
    }
    switch (optionChecked) {
      case "include-lowercase":
        this._optionAllowLowercaseElement.classList.toggle(
          "checkbox__box--checked"
        );
        break;
      case "include-uppercase":
        this._optionAllowUppercaseElement.classList.toggle(
          "checkbox__box--checked"
        );
        break;
      case "include-numbers":
        this._optionAllowNumbersElement.classList.toggle(
          "checkbox__box--checked"
        );
        break;
      case "include-symbols":
        this._optionAllowSymbolsElement.classList.toggle(
          "checkbox__box--checked"
        );
        break;
    }
  }
}

export default new FormView();
