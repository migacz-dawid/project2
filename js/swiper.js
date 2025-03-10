const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: "auto", 
    centeredSlides: true, 
    spaceBetween: 40, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },
});