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
  })