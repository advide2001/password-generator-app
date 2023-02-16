class PasswordView {
  _passwordDisplay = document.querySelector(".password__display");
  renderGeneratedPassword(password) {
    if (this._passwordDisplay.classList.contains("password--placeholder")) {
      console.log("placeholder");
      this._passwordDisplay.classList.remove("password--placeholder");
      this._passwordDisplay.classList.add("password--actual");
    }
    this._passwordDisplay.textContent = password;
  }
}
export default new PasswordView();
