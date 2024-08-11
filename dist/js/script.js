var swiper = new Swiper('.swiperCarousel', {
    direction: 'horizontal',
slidesPerView: '6',
    spaceBetween: 56,
    loop: true,
    freeMode: true,
    // autoplay: {
    //     delay: 1000,
    // },
});

var swiper = new Swiper('.swiperClients', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper('.swiperReviews', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
