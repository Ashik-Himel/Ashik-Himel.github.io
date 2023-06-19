const headerSection = document.querySelector(".header-section");
const navArea = document.querySelector(".nav-area");
const navToggler = document.querySelector(".nav-toggler");
const navLink = document.querySelectorAll(".nav-section ul li a");

// Nav Fix on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    headerSection.style.boxShadow = "var(--box-shadow)";
    headerSection.style.transition = "box-shadow 0.3s ease";
  } else {
    headerSection.style.boxShadow = "none";
  }
});

// Scroll To Top
window.addEventListener("scroll", () => {
  const scrollTopIcon = document.querySelector(".scroll-to-top");
  const scrollLength = window.scrollY;
  if (scrollLength >= 200) {
    scrollTopIcon.classList.add("active");
  } else {
    scrollTopIcon.classList.remove("active");
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

// Theme Toggler
const themeToggler = document.querySelector("#theme-toggler");
const theme = document.querySelector("html");

function lightEnable() {
  themeToggler.classList.add("fa-moon");
  theme.classList.add("light");
}
function lightDisable() {
  themeToggler.classList.remove("fa-moon");
  theme.classList.remove("light");
}

if (localStorage.getItem("themeValue") == "1") {
  lightEnable();
}

function themeChanger() {
  if (localStorage.getItem("themeValue") == "1") {
    localStorage.setItem("themeValue", "0");
    lightDisable();
  } else {
    localStorage.setItem("themeValue", "1");
    lightEnable();
  }
}
themeToggler.addEventListener("click", themeChanger);

// Experience Year
const experienceYear = document.querySelectorAll(".experience-year");
const experienceDuration = new Date(
  new Date().getTime() - new Date("2021-01-01").getTime()
);
experienceYear.forEach(
  (n) => (n.innerHTML = experienceDuration.getFullYear() - 1970)
);

// Educations Toggler
const eduTogglerBtn = document.querySelector(".education-toggler-button");
const courseTogglerBtn = document.querySelector(".course-toggler-button");
const educationsCard = document.querySelector(".educations-card");
const coursesCard = document.querySelector(".courses-card");

eduTogglerBtn.addEventListener("click", () => {
  if (!eduTogglerBtn.classList.contains("active")) {
    courseTogglerBtn.classList.remove("active");
    coursesCard.classList.remove("active");
    eduTogglerBtn.classList.add("active");
    educationsCard.classList.add("active");
  }
});
courseTogglerBtn.addEventListener("click", () => {
  if (!courseTogglerBtn.classList.contains("active")) {
    eduTogglerBtn.classList.remove("active");
    educationsCard.classList.remove("active");
    courseTogglerBtn.classList.add("active");
    coursesCard.classList.add("active");
  }
});

// Current Year
document.querySelector(".current-year").innerHTML = new Date().getFullYear();
