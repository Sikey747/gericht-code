// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "/src/js/files/modules.js";
// Допоміжні функції
import { isMobile, _slideUp, _slideDown, _slideToggle, FLS } from "/src/js/files/functions.js";
// Модуль прокручування до блоку
import { gotoBlock } from "/src/js/files/scroll/gotoblock.js";
//================================================================================================================================================================================================================================================================================================================================

/*
Документація: https://template.fls.guru/template-docs/rabota-s-formami.html
*/

formQuantity()

function formQuantity() {
	document.addEventListener("click", function (e) {
		let targetElement = e.target;
		if (targetElement.closest('[data-quantity-plus]') || targetElement.closest('[data-quantity-minus]')) {
			const valueElement = targetElement.closest('[data-quantity]').querySelector('[data-quantity-value]');
			let value = parseInt(valueElement.value);
			if (targetElement.hasAttribute('data-quantity-plus')) {
				value++;
				if (+valueElement.dataset.quantityMax && +valueElement.dataset.quantityMax < value) {
					value = valueElement.dataset.quantityMax;
				}
			} else {
				--value;
				if (+valueElement.dataset.quantityMin) {
					if (+valueElement.dataset.quantityMin > value) {
						value = valueElement.dataset.quantityMin;
					}
				} else if (value < 1) {
					value = 1;
				}
			}
			targetElement.closest('[data-quantity]').querySelector('[data-quantity-value]').value = value;
		}
	});
}