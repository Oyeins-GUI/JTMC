const navLinks = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".links");

// set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener("click", () => {
   navLinks.classList.toggle("show-links");
});

links.forEach(function (link) {
   link.addEventListener("click", () => {
      navLinks.classList.toggle("show-links");
   });
})