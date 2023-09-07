import * as functionModuls from './../../js/files/functions.js';

menuInit()

const headeMenuOpen = "header-menu-open"
////-- сюда добавить другие класс для открытия других меню filter-menu-open

export function menuInit() {
	const iconMenu = document.querySelectorAll("[data-menu-icon]");
	if (iconMenu.length) {
		document.addEventListener("click", function (e) {
			if (functionModuls.bodyLockStatus && e.target.closest('[data-menu-icon]')) {
				functionModuls.bodyLockToggle();
				document.documentElement.classList.toggle(headeMenuOpen);
				////-- сюда добавить свойсов для открытия других меню document.documentElement.classList.toggle(filterMenuOpen);
			}
		});
	};
}

////-- сюда добавить отдельніе функции для закрытия или открытия других меню 
////-- и если используем овердей не забыть их вызвать там
export function menuOpen() {
	functionModuls.bodyLock();
	document.documentElement.classList.add(headeMenuOpen);
}
export function menuClose() {
	functionModuls.bodyUnlock();
	document.documentElement.classList.remove(headeMenuOpen);
}