const nav = document.querySelector(".nav");
const navBar = document.querySelector(".nav-bar");
const bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  nav.classList.toggle("show");
});

window.addEventListener("scroll", function () {
  navBar.classList.toggle("bordered", window.scrollY > 0);
  nav.classList.toggle("bordered", window.scrollY > 5);
});
