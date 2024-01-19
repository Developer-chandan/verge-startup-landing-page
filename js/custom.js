const mobileMenu = document.querySelector('.mobile_menu');
const mobileMenuButton = document.querySelector('.navbar_toggle_line');
const mobileMenuCross = document.querySelector('.navbar_toggle_cross');



mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('show');

})

mobileMenuCross.addEventListener('click', () => {
    mobileMenu.classList.add('hide');

})

