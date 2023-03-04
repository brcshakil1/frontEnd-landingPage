const mobileNavbar = document.querySelector('.nav-mobile');
let toggle = false; 

document.querySelector('.hamBurger').addEventListener('click', function() {
    toggle = !toggle
    mobileNavbar.style.display = toggle ? 'block' : 'none';

})