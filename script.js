var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
  });


var menu = document.querySelector(".ri-menu-3-line");
var clo = document.querySelector(".ri-close-fill");
var nav = document.querySelector(".respo-nav");

menu.addEventListener("click",function(){
      nav.style.top = "0%";
})

clo.addEventListener("click",function(){
  nav.style.top = "-100%";
})

var store = document.querySelector("#store");
var subMenu = document.querySelector(".submenu");

store.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

store.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})