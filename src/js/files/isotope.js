
// Підключення функціоналу "Чертоги Фрілансера"
import masonry from "isotope-layout/js/layout-modes/masonry.js";
import { isMobile, FLS } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import Isotope from 'isotope-layout/js/isotope.js';


const items = document.querySelector('[data-iso-items]');
if (items) {
	const itemsGrid = new Isotope(items, {
		itemSelector: '[data-iso-item]',

		layoutMode: 'masonry',
		masonry: {
			// fitWidth: true,
			// gutter: 22,
			// columnWidth: '[data-iso-item]',
			// horizontalOrder: true,
		}
	}
	);
	///////////Фильтрация по наажатию со сменой активного класса
	// document.addEventListener("click", filterArticle);

	// function filterArticle(e) {
	// 	const targetElement = e.target;
	// 	if (targetElement.closest('.portfolio-top__link')) {
	// 		const filterValue = targetElement.dataset.filter;
	// 		const filterActiveItem = document.querySelector(".portfolio-link-action")

	// 		if (filterValue === "all") {
	// 			itemsGrid.arrange({ filter: '' });
	// 		} else {
	// 			itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]` });

	// 		}

	// 		filterActiveItem?.classList.remove('portfolio-link-action');
	// 		targetElement.classList.add("portfolio-link-action");

	// 		e.preventDefault();
	// 	}
	// }
}

