//слайдер
const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 5000,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

//меню
const humburger = document.querySelector('.js-humburger'),
    navigation = document.querySelector('.js-navigation');

humburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
    humburger.classList.toggle('active');
})