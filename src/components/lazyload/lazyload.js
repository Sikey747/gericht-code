// Документація плагіна: https://github.com/verlok/vanilla-lazyload

import LazyLoad from "vanilla-lazyload";

// Працює з об'єктами з класом ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: '[data-src],[data-srcset]',
	class_loaded: '_lazy-loaded',
	use_native: true
});


// добавить как заглушку
// src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==" data-src=

// Оновити модуль
//lazyMedia.update();
