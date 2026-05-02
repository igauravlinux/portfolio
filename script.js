const menuIcon = document.querySelector(".child-1 i");
const navLinks = document.querySelector(".child-1 nav ul");

menuIcon.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
})