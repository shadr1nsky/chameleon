var swiper = new Swiper('.swiperPromo', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 1000,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

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
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        430: {
            slidesPerView: 'auto',
        },
    }
});

var swiper = new Swiper('.swiperReviews', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
    }
});
