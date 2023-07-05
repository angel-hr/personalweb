const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const content = document.querySelector(".content");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    content.classList.toggle("active");
})

document.querySelectorAll(".navItem a").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        content.classList.remove("active");
    }));
