const navbar = document.getElementById('navbar');

// Function to handle scroll event
function handleScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Add or remove the "active" class based on scroll position
  if (scrollPosition >= 30) {
    navbar.classList.add('navactive');
  } else {
    navbar.classList.remove('navactive');
  }
}
window.addEventListener('scroll', handleScroll);




function navtoggler() {
    console.log('clicked');
    var middleLinks = document.getElementById("middlelinks");
    var navLinkOverlay = document.getElementById("navlinkovalay");
  
    middleLinks.classList.toggle('navlinkactive');
    navLinkOverlay.classList.toggle('navlinkactiveovalay');
  
    // Remove class names if navlinkactiveoverlay is clicked
    navLinkOverlay.addEventListener('click', function() {
      middleLinks.classList.remove('navlinkactive');
      navLinkOverlay.classList.remove('navlinkactiveovalay');
    });
  
    // Remove class names if screen width is greater than 999px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 999) {
        middleLinks.classList.remove('navlinkactive');
        navLinkOverlay.classList.remove('navlinkactiveovalay');
      }
    });
  }

  AOS.init({
    duration: 1200,  // Animation duration in milliseconds
    offset: 120,  // Offset (in pixels) from the original trigger point
    easing: 'ease-in-out',  // Easing function for the animation
    delay: 100,  // Delay (in milliseconds) before the animation starts
    once: true,  // Whether the animation should only happen once
    anchorPlacement: 'center',  // Defines vertical anchor placement (top, center, bottom)
  });

  