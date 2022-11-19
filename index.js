const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

toggleBtn.addEventListener("click", () => {
    const isOpened = toggleBtn.ariaExpanded;
    if (isOpened === "false") {
        toggleBtn.setAttribute("aria-expanded", "true");
    } else {
        toggleBtn.setAttribute("aria-expanded", "false");
    }
    navLinks.classList.toggle("show");
});
