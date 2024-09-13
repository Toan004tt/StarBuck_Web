const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const listItemNavBar = document.querySelectorAll("header .navbar li");
const handleCheckActive = () => {
  navbar.classList.contains("active")
    ? (menuIcon.style = "color: #fff")
    : (menuIcon.style = "color: var(--second-color)");
};
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
  handleCheckActive();
});
listItemNavBar.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    handleCheckActive();
  });
});