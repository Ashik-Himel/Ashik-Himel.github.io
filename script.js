// Preloader
const body = document.querySelector('#home');
const loading = document.querySelector('.loading');

function preloader() {
    loading.style.display = 'none';
    body.style.overflow = 'initial';
}
body.addEventListener('load' , preloader());

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelectorAll('.nav-link');
const navSection = document.querySelector('.nav-section');
const navScrollHeight = navSection.offsetHeight;

function navToggle() {
    navSection.classList.toggle('show-nav');
    hamburger.classList.toggle('cross-hamburger');
}
hamburger.addEventListener('click' , navToggle);

function navClose() {
    navSection.classList.remove('show-nav');
    hamburger.classList.remove('cross-hamburger');
}
navLink.forEach(n => n.addEventListener('click' , navClose));

function eNavClose(e) {
    if(navSection.contains(e.target)) {

    }
    else{
        return navClose();
    }
}
window.addEventListener('click' , eNavClose);

function scrollNav() {
    const scrollLength = window.scrollY;
    if (scrollLength >= navScrollHeight) {
        navSection.classList.add('nav-sticky');
    }
    else {
        navSection.classList.remove('nav-sticky');
    }
    console.log(scrollLength);
}
window.addEventListener('scroll' , scrollNav);

// Theme Toggler
const themeToggler = document.querySelectorAll('.theme-toggler');
const theme = document.querySelector(".root");

function darkOn() {
    themeToggler.forEach(n => n.classList.remove('fa-moon'));
    themeToggler.forEach(n => n.classList.add('fa-sun'));
    theme.classList.add('dark');
}
function darkOff() {
    themeToggler.forEach(n => n.classList.add('fa-moon'));
    themeToggler.forEach(n => n.classList.remove('fa-sun'));
    theme.classList.remove('dark');
}

let checkThemeValue = localStorage.getItem('themeValue');
if(checkThemeValue == '0') {
    darkOff();
}
if(checkThemeValue == '1') {
    darkOn();
}
else {
    darkOff();
}

function themeChanger() {
    let checkThemeValue = localStorage.getItem('themeValue');
    if(checkThemeValue == '0') {
        localStorage.setItem('themeValue' , '1');
        darkOn();
    }
    if(checkThemeValue == '1') {
        localStorage.setItem('themeValue' , '0');
        darkOff();
    }
    else {
        localStorage.setItem('themeValue' ,  '1');
        darkOn();
    }
}
themeToggler.forEach(n => n.addEventListener('click' , themeChanger));

// Messenger Chat Plugin
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "105351811966153");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
FB.init({
    xfbml            : true,
    version          : 'v12.0'
});
};

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Swiper JS
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// Popup
const service1Btn = document.querySelector('.service1-btn');
const service2Btn = document.querySelector('.service2-btn');
const service3Btn = document.querySelector('.service3-btn');
const service1Popup = document.querySelector('.service1-popup');
const service2Popup = document.querySelector('.service2-popup');
const service3Popup = document.querySelector('.service3-popup');
const popupBox = document.querySelectorAll('.popup');
const popupCross = document.querySelectorAll('.popup-cross');

function popupOpen1() {
    service1Popup.style.display = 'block';
}
service1Btn.addEventListener('click' , popupOpen1);
function popupOpen2() {
    service2Popup.style.display = 'block';
}
service2Btn.addEventListener('click' , popupOpen2);
function popupOpen3() {
    service3Popup.style.display = 'block';
}
service3Btn.addEventListener('click' , popupOpen3);

function popupClose() {
    service1Popup.style.display = 'none';
    service3Popup.style.display = 'none';
    service2Popup.style.display = 'none';
}
popupCross.forEach(n => n.addEventListener('click' , popupClose));