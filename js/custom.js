const mobileMenu = document.querySelector('.mobile_menu');
const mobileMenuButton = document.querySelector('.navbar_toggle_line');
const mobileMenuCross = document.querySelector('.navbar_toggle_cross');



mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    if (mobileMenu.classList.contains('hide')) {
        mobileMenu.classList.remove('hide');
        
      } 
    

})

mobileMenuCross.addEventListener('click', () => {
    mobileMenu.classList.add('hide');

    if (mobileMenu.classList.contains('hide')) {
        mobileMenu.classList.remove('show');
      } 

})

function hideMenu() {
    // Get the <ul> element
    var menuList = document.querySelector('ul li a');

    // Hide the menu by setting its display property to 'none'
    mobileMenu.classList.remove('show');
  }