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


try {
	const tabs = document.querySelectorAll(".catalog_tab");
	const contents = document.querySelectorAll(".catalog_content_item");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Удаляем активный класс у всех табов и контента
			tabs.forEach((t) => t.classList.remove("catalog_tab_active"));
			contents.forEach((c) => (c.style.display = "none"));

			// Добавляем активный класс к нажатому табу и показываем соответствующий контент
			tab.classList.add("catalog_tab_active");
			contents[index].style.display = "flex";
		});
	});

	// Показываем первый контент при загрузке
	contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}