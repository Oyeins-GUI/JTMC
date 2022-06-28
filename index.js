const navLinks = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".links");

navToggle.addEventListener("click", () => {
   navLinks.classList.toggle("show-links");
});

links.forEach(function (link) {
   link.addEventListener("click", () => {
      navLinks.classList.toggle("show-links");
   });
})