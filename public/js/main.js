// Variable
const loading = document.querySelector("#preload");
const navMenu = document.querySelector("#navbar-menu");
const navLink = document.querySelectorAll(".navbar-link");
const sections = document.querySelectorAll("section");

// Preloader Animation
window.addEventListener("load", function () {
  loading.classList.add("loading-active");
});

// Show Navbar Menu
const showNavMenu = (navButton) => {
  if (navButton) navMenu.classList.toggle("-translate-x-full");
  else navMenu.classList.add("-translate-x-full");
};

// Scroll Active Menu
document.addEventListener("scroll", () => {
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      navLink.forEach((link) => {
        link.classList.remove("link-active");
        navLink[index].classList.add("link-active");
      });
    }
  });
});
