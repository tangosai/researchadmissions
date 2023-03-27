const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  menuIcon = body.querySelector(".menu-icon");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  menuIcon.classList.toggle("active");
});
