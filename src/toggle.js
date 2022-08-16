const toggleButton = document.getElementsByClassName("toggle__button");
const navbarlinks = document.getElementsByClassName("navbar__links");
toggleButton.addEventListener("click", () => {
  navbarlinks.classList.toggle("active");
});
