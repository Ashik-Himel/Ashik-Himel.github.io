// Preloader
document.querySelector('#home').onload = function() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('#home').style.overflow = 'initial';
}
// Hamburger Menu
let hamburger = document.querySelector('.hamburger');
let navLink = document.querySelectorAll('.nav-link');
let navSection = document.querySelector('.nav-section');
let navScrollHeight = navSection.offsetHeight;

hamburger.onclick = function() {
    navSection.classList.toggle('show-nav');
    hamburger.classList.toggle('cross-hamburger');
}
function navClose() {
    navSection.classList.remove('show-nav');
    hamburger.classList.remove('cross-hamburger');
}
navLink.forEach(n => n.addEventListener('click', navClose));
window.onclick = function(e) {
    if(navSection.contains(e.target)) {}
    else{return navClose();}
}
window.onscroll = function() {
    let scrollLength = window.scrollY;
    if (scrollLength >= navScrollHeight) {navSection.classList.add('nav-sticky');}
    else {navSection.classList.remove('nav-sticky');}
    console.log(scrollLength);
}
// Hire Me Popup
let popupBtn = document.querySelector('.popup-btn');
let popupBtn2 = document.querySelector('.hero-popup-btn');
let crossBtn = document.querySelector('.fa-times-circle');
let popup = document.querySelector('.popup');
let popupBox = document.querySelector('.popup-box');

function activePopup() {
    popup.classList.add('popup-active');
}
popupBtn.addEventListener('click' , activePopup);
popupBtn2.addEventListener('click' , activePopup);
crossBtn.onclick = function() {
    popup.classList.remove('popup-active');
}
function eTargetClosePopup(e) {
    if(popupBox.contains(e.target) + popupBtn.contains(e.target) + popupBtn2.contains(e.target)) {}
    else {return closePopup();}
}
window.onclick = eTargetClosePopup();
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