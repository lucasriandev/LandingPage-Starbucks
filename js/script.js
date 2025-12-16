const mobileBtn = document.querySelector(".btn-mobile");
const navLinks = document.getElementById("nav-links");
const icon = document.querySelector(".btn-mobile i");

//toggle serve para colocar ou nao a class
mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
});
