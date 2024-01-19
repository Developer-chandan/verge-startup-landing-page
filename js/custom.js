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



  // logo circle 

  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scrollY = window.scrollY;
        var rotation = "rotate(" + scrollY + "deg)";
        document.getElementById("verge_logo").style.transform = rotation;
    });
});



// observer image 

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".visible-image");

  const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";

          } else {
              entry.target.style.opacity = "0";
              // entry.target.style.transform = "translateY(200px)";

          }
      });
  }, { threshold: 0.2 }); // Adjust the threshold as needed

  images.forEach(image => {
      observer.observe(image);
  });
});
