// Модуль "Сustom сursor" =======================================================================================================================================================================================================================
customCursor(true)
export function customCursor(isShadowTrue) {
	const wrapper = document.querySelector('[data-custom-cursor]') ? document.querySelector('[data-custom-cursor]') : document.documentElement;
	if (wrapper && !isMobile.any()) {
		// Створюємо та додаємо об'єкт курсору
		const cursor = document.createElement('div');
		cursor.classList.add('fls-cursor');
		cursor.style.opacity = 0;
		cursor.insertAdjacentHTML('beforeend', `<span class="fls-cursor__pointer"></span>`);
		isShadowTrue ? cursor.insertAdjacentHTML('beforeend', `<span class="fls-cursor__shadow"></span>`) : null;
		wrapper.append(cursor);

		const cursorPointer = document.querySelector('.fls-cursor__pointer');
		const cursorPointerStyle = {
			width: cursorPointer.offsetWidth,
			height: cursorPointer.offsetHeight
		}
		let cursorShadow, cursorShadowStyle;
		if (isShadowTrue) {
			cursorShadow = document.querySelector('.fls-cursor__shadow');
			cursorShadowStyle = {
				width: cursorShadow.offsetWidth,
				height: cursorShadow.offsetHeight
			}
		}
		function mouseActions(e) {
			if (e.type === 'mouseout') {
				cursor.style.opacity = 0;
			} else if (e.type === 'mousemove') {
				cursor.style.removeProperty('opacity');
				if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || (window.getComputedStyle(e.target).cursor !== 'none' && window.getComputedStyle(e.target).cursor !== 'default')) {
					cursor.classList.add('_hover');
				} else {
					cursor.classList.remove('_hover');
				}
			} else if (e.type === 'mousedown') {
				cursor.classList.add('_active');

			} else if (e.type === 'mouseup') {
				cursor.classList.remove('_active');
			}
			cursorPointer ? cursorPointer.style.transform = `translate3d(${e.clientX - cursorPointerStyle.width / 2}px, ${e.clientY - cursorPointerStyle.height / 2}px, 0)` : null;
			cursorShadow ? cursorShadow.style.transform = `translate3d(${e.clientX - cursorShadowStyle.width / 2}px, ${e.clientY - cursorShadowStyle.height / 2}px, 0)` : null;
		}

		window.addEventListener('mouseup', mouseActions);
		window.addEventListener('mousedown', mouseActions);
		window.addEventListener('mousemove', mouseActions);
		window.addEventListener('mouseout', mouseActions);
	}
}