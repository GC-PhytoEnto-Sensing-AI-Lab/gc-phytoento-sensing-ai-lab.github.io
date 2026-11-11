const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#primary-menu");
const navLinks = [...document.querySelectorAll("[data-page-link]")];
const currentPage = document.body.dataset.page;

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  navMenu.classList.toggle("is-open", !isExpanded);
});

navLinks.forEach((link) => {
  const isCurrentPage = link.dataset.pageLink === currentPage;
  link.classList.toggle("active", isCurrentPage);
  if (isCurrentPage) link.setAttribute("aria-current", "page");

  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
