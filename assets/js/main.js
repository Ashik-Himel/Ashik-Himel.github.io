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

// Button Group
const button1 = document.querySelectorAll(".button-group > *:first-child");
const button2 = document.querySelectorAll(".button-group > *:last-child");

button1.forEach((n) =>
  n.addEventListener("mouseover", function () {
    button2.forEach((n) => n.classList.remove("button-alt"));
  })
);
button1.forEach((n) =>
  n.addEventListener("mouseout", function () {
    button2.forEach((n) => n.classList.add("button-alt"));
  })
);
button2.forEach((n) =>
  n.addEventListener("mouseover", function () {
    button1.forEach((n) => n.classList.add("button-alt"));
  })
);
button2.forEach((n) =>
  n.addEventListener("mouseout", function () {
    button1.forEach((n) => n.classList.remove("button-alt"));
  })
);
