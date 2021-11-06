const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelectorAll('.nav-link');
const navSection = document.querySelector('.nav-section');
const navScrollHeight = navSection.offsetHeight;

function navAndCrossToggle() {
    navSection.classList.toggle('show-nav');
    hamburger.classList.toggle('cross-hamburger');
}
function navAndCrossClose() {
    navSection.classList.remove('show-nav');
    hamburger.classList.remove('cross-hamburger');
}

hamburger.onclick = navAndCrossToggle;
navLink.forEach(n => n.addEventListener('click', navAndCrossClose));

window.addEventListener('click' , function(e) {
    if(navSection.contains(e.target)) {
        
    }
    else{
        return navAndCrossClose();
    }
});

window.addEventListener('scroll' , function() {
    const scrollLength = window.scrollY;
    if (scrollLength >= navScrollHeight) {
        navSection.classList.add('nav-sticky');
    }
    else {
        navSection.classList.remove('nav-sticky');
    }
    console.log(scrollLength);
});
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });