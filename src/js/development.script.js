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
    }))
}

document.addEventListener("DOMContentLoaded", function () {
    const servicesContainer = document.querySelectorAll("[data-services-item]");
    servicesContainer.forEach(service => {
        const descriptionEl = service.querySelector("[data-service-description]");
        if (!descriptionEl) {
            return
        }
        const handleMove = function (e) {
            let x = e.pageX;
            let y = e.pageY;
            descriptionEl.style.left = `${x}px`;
            descriptionEl.style.top = `${y}px`;
            descriptionEl.style.display = `block`;

        }
        service.addEventListener("mouseenter", event => {
            service.addEventListener('mousemove', handleMove)
        })
        service.addEventListener("mouseleave", function (e) {
            descriptionEl.style.display = `none`;
            service.removeEventListener('mouseenter', handleMove)
        })
    })

    new Swiper('#swiperPromo', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 1000,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });

    new Swiper('#swiperPortfolio', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            576: {
                slidesPerView: 'auto',
            },
        }
    });


    new Swiper('#swiperParsing', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu')
    html = document.querySelector('html')

    hamburger.onclick = function () {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        html.classList.toggle('unscroll')
    }

    initFaq()
})

