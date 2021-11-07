// Preloader
document.querySelector('#home').onload = function() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('#home').style.overflow = 'initial';
}
// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelectorAll('.nav-link');
const navSection = document.querySelector('.nav-section');
const navScrollHeight = navSection.offsetHeight;

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
    const scrollLength = window.scrollY;
    if (scrollLength >= navScrollHeight) {navSection.classList.add('nav-sticky');}
    else {navSection.classList.remove('nav-sticky');}
    console.log(scrollLength);
}
// Hire Me Popup
const popupBtn = document.querySelector('.popup-btn');
const popupBtn2 = document.querySelector('.hero-popup-btn');
const crossBtn = document.querySelector('.fa-times-circle');
const popup = document.querySelector('.popup');
const popupBox = document.querySelector('.popup-box');

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
const swiper = new Swiper('.swiper', {
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
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });