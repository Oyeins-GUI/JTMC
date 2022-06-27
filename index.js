const headerLinks = document.querySelector(".header-links");
const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelectorAll(".link");

toggleBtn.addEventListener("click", () => {
   headerLinks.classList.toggle("hide");
});

links.forEach((link) => {
   link.addEventListener("click", () => {
      headerLinks.classList.toggle("hide");
   });
});