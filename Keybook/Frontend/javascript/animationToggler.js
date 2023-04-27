const hamburger = document.querySelector(".navbar-toggler");
const navIcons = document.querySelector(".nav-icons");
const br1 = document.querySelector(".br-1");
const br2 = document.querySelector(".br-2");
const br3 = document.querySelector(".br-3");
const dropdownToggle = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector("#navbarNav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("girar");
  navIcons.classList.toggle("activado");
  br1.classList.toggle("animado");
  br2.classList.toggle("animado");
  br3.classList.toggle("animado");
});

dropdownToggle.addEventListener("click", function () {
  navbarNav.classList.toggle("show");
});
