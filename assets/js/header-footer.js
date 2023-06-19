const headerSection = document.querySelector(".header-section");
const navArea = document.querySelector(".nav-area");
const navToggler = document.querySelector(".nav-toggler");
const navLink = document.querySelectorAll(".nav-section ul li a");

// Theme Toggler
const themeToggler = document.querySelector("#theme-toggler");
const theme = document.querySelector("html");

function darkEnable() {
  themeToggler.classList.add("fa-sun");
  themeToggler.classList.remove("fa-moon");
  theme.classList.add("dark");
}
function darkDisable() {
  themeToggler.classList.remove("fa-sun");
  themeToggler.classList.add("fa-moon");
  theme.classList.remove("dark");
}

if (localStorage.getItem("themeValue") == "1") {
  darkEnable();
}

function themeChanger() {
  if (localStorage.getItem("themeValue") == "1") {
    localStorage.setItem("themeValue", "0");
    darkDisable();
  } else {
    localStorage.setItem("themeValue", "1");
    darkEnable();
  }
}
themeToggler.addEventListener("click", themeChanger);

// Nav Fix on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    headerSection.style.boxShadow = "var(--box-shadow)";
    headerSection.style.transition = "box-shadow 0.3s ease";
  } else {
    headerSection.style.boxShadow = "none";
  }
});

// Mobile Navigation Toggle
navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("active");
  navArea.classList.toggle("active");
});
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navToggler.classList.remove("active");
    navArea.classList.remove("active");
  })
);
window.addEventListener("click", (e) => {
  if (!headerSection.contains(e.target)) {
    navToggler.classList.remove("active");
    navArea.classList.remove("active");
  }
});

// Current Year
document.querySelector(".current-year").innerHTML = new Date().getFullYear();
