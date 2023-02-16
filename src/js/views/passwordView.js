class PasswordView {
  _passwordDisplay = document.querySelector(".password__display");
  _copyButton = document.querySelector(".button__copy");

  copyPasswordToClipboard() {
    navigator.clipboard.writeText(this._passwordDisplay.textContent);
  }

  renderCopiedMessage() {
    // TODO: change the text in the button from "Copy" to "Copied"
    console.log("copied");
  }

  resetCopiedMessage() {
    // TODO: change the text in the button from "Copied" to "Copy"
  }

  renderGeneratedPassword(password) {
    if (this._passwordDisplay.classList.contains("password--placeholder")) {
      console.log("placeholder");
      this._passwordDisplay.classList.remove("password--placeholder");
      this._passwordDisplay.classList.add("password--actual");
    }
    this._passwordDisplay.textContent = password;
  }

  addHandlerCopyButton(handlerFunction) {
    this._copyButton.addEventListener("click", (e) => {
      e.preventDefault();
      handlerFunction();
    });
  }
}
export default new PasswordView();
