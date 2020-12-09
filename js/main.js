document.addEventListener('DOMContentLoaded', function () {
    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        }
    }
    const so = new ScrollObserver('.service_img', cb);
});
