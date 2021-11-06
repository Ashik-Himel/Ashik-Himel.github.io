let hamburger = document.querySelector('.hamburger');
let navLink = document.querySelectorAll('.nav-link');
let navSection = document.querySelector('.nav-section');
let navScrollHeight = navSection.offsetHeight;

function navAndCrossToggle() {
    navSection.classList.toggle('show-nav');
    hamburger.classList.toggle('cross-hamburger');
}
function navAndCrossClose() {
    navSection.classList.remove('show-nav');
    hamburger.classList.remove('cross-hamburger');
}
function eTargetNavAndCrossClose(e) {
    if(navSection.contains(e.target)) {
        
    }
    else{
        return navAndCrossClose();
    }
}
function scrollNavSticky() {
    let scrollLength = window.scrollY;
    if (scrollLength >= navScrollHeight) {
        navSection.classList.add('nav-sticky');
    }
    else {
        navSection.classList.remove('nav-sticky');
    }
    console.log(scrollLength);
}

hamburger.onclick = navAndCrossToggle;
navLink.forEach(n => n.addEventListener('click', navAndCrossClose));
window.addEventListener('click' , eTargetNavAndCrossClose);
window.addEventListener('scroll' , scrollNavSticky);

// Hire Me Popup
let popupBtn = document.querySelector('.popup-btn');
let popupBtn2 = document.querySelector('.hero-popup-btn');
let crossBtn = document.querySelector('.fa-times-circle');
let popup = document.querySelector('.popup');
let popupBox = document.querySelector('.popup-box');

function activePopup() {
    popup.classList.add('popup-active');
}
function closePopup() {
    popup.classList.remove('popup-active');
}
function eTargetClosePopup(e) {
    if(popupBox.contains(e.target) + popupBtn.contains(e.target) + popupBtn2.contains(e.target)) {

    }
    else {
        return closePopup();
    }
}

popupBtn.addEventListener('click' , activePopup);
popupBtn2.addEventListener('click' , activePopup);
crossBtn.addEventListener('click' , closePopup);
window.addEventListener('click' , eTargetClosePopup);

// Swiper JS
let swiper = new Swiper('.swiper', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });