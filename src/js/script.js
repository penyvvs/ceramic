import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
	close = document.querySelector(".header_menu_close"),
	menu = document.querySelector(".header_menu");

burger.addEventListener("click", () => {
	menu.classList.add("header_menu_active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("header_menu_active");
	document.body.style.overflow = "";
});

try {
    new Swiper('.works_slider', {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
              spaceBetween: 5
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 35
            }
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        modules: [Navigation, Pagination],
    });
} catch (e) {}

