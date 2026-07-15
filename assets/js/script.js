const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".parent-list");

btn.addEventListener("click", () => {

    menu.classList.toggle("active");

});