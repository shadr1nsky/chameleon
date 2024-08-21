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

const name = document.querySelector('input[name="name"]');
if(name){
    name.addEventListener('keyup', function() {
        this.value = this.value.replace(/http|www|.ru|.com|[0-9]/g, '');
    });
}

let eventCallback = function(e) {
    let el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+_(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
            e.target.value = '';
            return;
        }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
}
let phone_inputs = document.querySelectorAll('input[name="phone"]');
for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCallback);
    }
}


new Swiper('#swiperPromo', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 1000,
    loop: true,
    autoHeight: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
    },
});

new Swiper('#swiperCarousel', {
    direction: 'horizontal',
    slidesPerView: '6',
    spaceBetween: 56,
    loop: true,
    freeMode: true,
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
