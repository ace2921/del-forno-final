var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        // clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// const swiper = new Swiper('.swiper', {
//     slidesPerView: 3,
//     centeredSlides: true,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'fraction',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     virtual: {
//         slides: (function () {
//             const slides = [];
//             for (var i = 0; i < 600; i += 1) {
//                 slides.push('Slide ' + (i + 1));
//             }
//             return slides;
//         })(),
//     },
// });


window.onscroll = ()=>{
    stickyNav()
}

let navbar = document.getElementById('navbar');

let sticky = navbar.offsetTop;

let  stickyNav = () =>{
    if(window.pageYOffset >= sticky){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
}