class PasswordView {
  renderGeneratedPassword(password) {
    const passwordDisplay = document.querySelector(".password__display");

    if (passwordDisplay.classList.contains("password--placeholder")) {
      console.log("placeholder");
      passwordDisplay.classList.remove("password--placeholder");
      passwordDisplay.classList.add("password--actual");
    }
    passwordDisplay.textContent = password;
  }
}
export default new PasswordView();
