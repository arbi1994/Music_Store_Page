const burgerMenu = document.querySelector(".burger-menu");
const span = document.querySelectorAll("span");

burgerMenu.addEventListener("click", () => {
    span.forEach((line) => {
        line.classList.toggle('active');
    });
});