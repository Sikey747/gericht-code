// Підключення плагіна з node_modules
import SimpleBar from 'simplebar';
// Підключення стилів з node_modules
import 'simplebar/dist/simplebar.css';

// Работает только нра внутрених блоках не на глобальном скроле страници
// Зміна дизайну скроллбару
// Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
// Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
// Сніппет(HTML): 

// Додаємо до блоку атрибут data-simplebar

// Також можна ініціалізувати наступним кодом, застосовуючи налаштування

if (document.querySelectorAll('[data-simplebar]').length) {
	document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
		new SimpleBar(scrollBlock, {
			autoHide: false
		});
	});
}
