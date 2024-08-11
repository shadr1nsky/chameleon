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
})