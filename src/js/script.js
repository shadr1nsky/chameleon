const initFaq = () => {
    const faqElArray = document.querySelectorAll(".faq-item");
    if (!faqElArray.length) {
        return
    }
    faqElArray.forEach((faqEl => {
        const faqButtonEl = faqEl.querySelector(".faq-item__button")
        const faqAnswerEl = faqEl.querySelector(".faq-item__answer");
        faqButtonEl.addEventListener("click", (() => {
            console.log(faqEl.dataset.open)
            if (faqEl.dataset.open === 'true') {
                console.log('closing')
                faqEl.dataset.open = "false";
                faqEl.classList.remove("active");
                faqAnswerEl.style.maxHeight = "";
            } else {
                faqElArray.forEach(oldFaqEl => {
                    oldFaqEl.dataset.open = "false"
                    oldFaqEl.classList.remove("active")
                    oldFaqEl.querySelector(".faq-item__answer").style.maxHeight = ""
                })
                console.log('is-open')
                faqEl.dataset.open = "true"
                faqEl.classList.add("active");
                faqAnswerEl.style.maxHeight = `${faqAnswerEl.scrollHeight}px`
            }
        }));
        window.addEventListener("resize", (() => {
            if (!!activeEl.dataset.open && parseInt(activeAnswerEl.style.maxHeight) !== activeAnswerEl.scrollHeight) {
                activeAnswerEl.style.maxHeight = `${activeAnswerEl.scrollHeight}px`
            }
        }))
    }))
}

const initScrolling = () => {
    const el = document.querySelector(".promo-scroll");
    document.addEventListener("scroll", (e) => {
        if (document.documentElement.scrollTop > 0) {
            el.classList.remove("active");
        } else {
            el.classList.add("active");
        }
    })
}

new Swiper('#swiperPromo', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 1000,
    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 5000,
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

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu')
    html = document.querySelector('html')

hamburger.onclick = function (){
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    html.classList.toggle('unscroll')
}

document.addEventListener('DOMContentLoaded', () => {
    initFaq()
    initScrolling()
})
