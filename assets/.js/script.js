// 1. Find the button and the menu on the page
const button = document.querySelector(".ham-btn");
const menu = document.querySelector(".menu");

// 2. Menu starts closed
menu.classList.remove("open");

// 3. When button is clicked, open/close the menu
button.addEventListener("click", function () {
    menu.classList.toggle("open");
});