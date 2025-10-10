const STATIC_USERNAME = import.meta.env.VITE_USERNAME;
const STATIC_PASSWORD = import.meta.env.VITE_PASSWORD;

document.addEventListener("DOMContentLoaded", function () {
  const loginPage = document.getElementById("login-page");
  const mainPage = document.getElementById("main-page");
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");
  const logoutBtn = document.getElementById("logout-btn");

  // Check if user is already logged in (from sessionStorage)
  if (sessionStorage.getItem("isLoggedIn") === "true") {
    showMainPage();
  }

  // Login form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
      // Successful login
      sessionStorage.setItem("isLoggedIn", "true");
      showMainPage();
      errorMessage.classList.add("hidden");
    } else {
      // Failed login
      errorMessage.classList.remove("hidden");
      usernameInput.value = "";
      passwordInput.value = "";
      usernameInput.focus();
    }
  });

  // Logout functionality
  logoutBtn.addEventListener("click", function () {
    sessionStorage.removeItem("isLoggedIn");
    showLoginPage();
  });

  function showMainPage() {
    loginPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
  }

  function showLoginPage() {
    mainPage.classList.add("hidden");
    loginPage.classList.remove("hidden");
    usernameInput.value = "";
    passwordInput.value = "";
    errorMessage.classList.add("hidden");
    usernameInput.focus();
  }
});
