const hamburgerEl = document.querySelector('.hamburger');
const navbarEl = document.querySelector('.navbar');
const closeMenuEl = document.querySelector('.close');


hamburgerEl.addEventListener('click', function(e) {
navbarEl.childNodes[3].classList.toggle("hide-nav");
hamburgerEl.classList.add("hide-nav")
closeMenuEl.classList.remove("cancel");
})

closeMenuEl.addEventListener("click", function(){
    navbarEl.childNodes[3].classList.toggle("hide-nav");
    hamburgerEl.classList.remove("hide-nav")
    closeMenuEl.classList.add("cancel");
})