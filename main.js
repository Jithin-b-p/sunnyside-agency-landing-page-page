import "./sass/style.scss";

const navMenu = document.querySelector(".header__navigation");
const menuBtn = document.querySelector(".btn--menu");

menuBtn.addEventListener("click", () => {
  const visibility = navMenu.getAttribute("data-visible");

  if (visibility === "false") {
    navMenu.setAttribute("data-visible", "true");
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    navMenu.setAttribute("data-visible", "false");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});
