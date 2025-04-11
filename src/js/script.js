import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

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

