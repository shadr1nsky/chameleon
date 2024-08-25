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

const hamburgerEl = document.querySelector('.hamburger'),
    menuEl = document.querySelector('.menu'),
    menuOutEl = document.querySelector('.menu-item.out'),
    menuButtonEl = document.querySelector('.menu-button'),
    body = document.querySelector('html')

hamburgerEl.onclick = function () {
    menuEl.classList.toggle('active');
    hamburgerEl.classList.toggle('active');
    body.classList.toggle('unscroll')
}

menuOutEl.onclick = function () {
    menuEl.classList.remove('active');
    hamburgerEl.classList.remove('active');
    body.classList.remove('unscroll')
}

menuButtonEl.onclick = function () {
    menuEl.classList.remove('active');
    hamburgerEl.classList.remove('active');
    body.classList.remove('unscroll')
}

document.getElementById('feedback__wrapper').addEventListener('submit', function(event) {
    event.preventDefault(); // Отмена стандартного отправления формы

    var formData = new FormData();

    // Проверка и добавление только заполненных полей
    var inputs = ['name', 'telegram', 'email', 'phone', 'company', 'description'];
    inputs.forEach(function(input) {
        var inputElement = document.getElementById(input);
        if (inputElement && inputElement.value.trim() !== '') {
            formData.append(input, inputElement.value.trim());
        }
    });

    // Проверка типов файлов
    var fileInput = document.getElementById('feedback-button__input');
    var validTypes = ['text/plain', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    for (var i = 0; i < fileInput.files.length; i++) {
        if (validTypes.includes(fileInput.files[i].type)) {
            formData.append('file', fileInput.files[i]);
        } else {
            alert('Допустимые типы файлов: txt, pdf, doc, docx');
            return; // Прекращаем отправку формы, если тип файла недопустимый
        }
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_form.php', true);

    xhr.onload = function() {
        var messageElement = document.getElementById('form-message');
        if (xhr.status === 200) {
            messageElement.textContent = 'Сообщение успешно отправлено!';
            messageElement.className = 'success active';
            document.getElementById('feedback-form').reset(); // Очистка формы после успешной отправки
        } else {
            messageElement.textContent = 'Ошибка при отправке сообщения.';
            messageElement.className = 'error active';
        }
        messageElement.style.display = 'flex';

        // Скрываем сообщение через 3 секунды
        setTimeout(function() {
            messageElement.className = '';
        }, 3000);
    };

    xhr.send(formData);
});

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

    let inputs = document.querySelectorAll('#feedback-button__input');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.feedback-button__text').innerText;

        input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.feedback-button__text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.feedback-button__text').innerText = labelVal;
        });
    });

    new Swiper('#swiperPromo', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 1000,
        autoHeight: true,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
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

    initFaq()
})

