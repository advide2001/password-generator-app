class PasswordView {
  _passwordDisplay = document.querySelector(".password__display");
  _copyButton = document.querySelector(".button__copy");

  copyPasswordToClipboard() {
    navigator.clipboard.writeText(this._passwordDisplay.textContent);
  }

  renderCopiedMessage() {
    this._copyButton.textContent = "Copied";
  }

  resetCopiedMessage() {
    this._copyButton.textContent = "Copy";
  }

  renderGeneratedPassword(password) {
    if (this._passwordDisplay.classList.contains("password--placeholder")) {
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
