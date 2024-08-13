const initFaq = () => {
    const faqElArray = document.querySelectorAll(".faq-item");
    if (!faqElArray.length) {
        return
    }
    faqElArray.forEach((faqEl => {
        const faqButtonEl = faqEl.querySelector(".faq-item__button")
        const faqAnswerEl = faqEl.querySelector(".faq-item__answer");
        faqButtonEl.addEventListener("click", (() => {
            if (faqEl.dataset.open === 'true') {
                faqEl.dataset.open = "false";
                faqEl.classList.remove("active");
                faqAnswerEl.style.maxHeight = "";
            } else {
                faqElArray.forEach(oldFaqEl => {
                    oldFaqEl.dataset.open = "false"
                    oldFaqEl.classList.remove("active")
                    oldFaqEl.querySelector(".faq-item__answer").style.maxHeight = ""
                })
                faqEl.dataset.open = "true"
                faqEl.classList.add("active");
                faqAnswerEl.style.maxHeight = `${faqAnswerEl.scrollHeight+27}px`
            }
        }));
    }))
}

new Swiper('#swiperPromo', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 1000,
    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 2000,
    },
});

new Swiper('#swiperCarousel', {
    direction: 'horizontal',
    slidesPerView: '6',
    spaceBetween: 56,
    loop: true,
    freeMode: true,
    // autoplay: {
    //     delay: 1000,
    // },
});

new Swiper('#swiperClients', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        430: {
            slidesPerView: 'auto',
        },
    }
});

new Swiper('#swiperReviews', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        400: {
            slidesPerView: 'auto',
        },
    }
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu')
html = document.querySelector('html')

hamburger.onclick = function () {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    html.classList.toggle('unscroll')
}

document.addEventListener('DOMContentLoaded', () => {
    initFaq()
})
