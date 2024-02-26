const swiper = new Swiper('.swiper', {
   
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 4,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const watchCarousel = (entries) => {
    entries.forEach(entry => {
        if (entry.boundingClientRect.top > 0 && entry.isIntersecting) {
            entry.target.classList.remove("row-hidden");
            entry.target.classList.add("row-enter-animation");
        } else if (entry.boundingClientRect.top < 0 && entry.isIntersecting) {
            entry.target.classList.remove("row-hidden");
            entry.target.classList.add("row-exit-animation");
        } else {
            entry.target.classList.add("row-hidden");
            entry.target.classList.remove("row-enter-animation");
            entry.target.classList.remove("row-exit-animation");
        }
    });
}

const targetElement = document.querySelectorAll('.carousel');

const observer = new IntersectionObserver(watchCarousel, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
})

targetElement.forEach((carousel) => {
    observer.observe(carousel);
})
