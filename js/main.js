var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
});

const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('navLinksMobile');
const menuIcon = document.getElementById('menuIcon');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('scale-y-0');
    mobileMenu.classList.toggle('scale-y-100');

    // Toggle the menu icon between "open" and "close"
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        `;
    } else {
        menuIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        `;
        menuIcon.classList.add('fa-bars');
    }
});

// up to top
(function () {
    const upToTopButton = document.getElementById('upToTopButton');
    
    window.onscroll = function () {
        if (window.scrollY >= 100) {
            upToTopButton.classList.remove('-right-16');
            upToTopButton.classList.add('right-5');
        } else {
            upToTopButton.classList.remove('right-5');
            upToTopButton.classList.add('-right-16');
        }
    };

    upToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
})();

