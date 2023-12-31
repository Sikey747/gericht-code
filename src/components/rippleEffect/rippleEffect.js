// Модуль "Ripple effect" =======================================================================================================================================================================================================================
// Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html

rippleEffect();
function rippleEffect() {
  // Подія кліку на кнопці
  document.addEventListener("click", function (e) {
    const targetItem = e.target;
    if (targetItem.closest("[data-ripple]")) {
      // Константи
      const button = targetItem.closest("[data-ripple]");
      const ripple = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      // Формування елементу
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${
        e.pageX - (button.getBoundingClientRect().left + scrollX) - radius
      }px`;
      ripple.style.top = `${
        e.pageY - (button.getBoundingClientRect().top + scrollY) - radius
      }px`;
      ripple.classList.add("ripple");

      // Видалення існуючого елементу (опціонально)
      button.dataset.ripple === "once" && button.querySelector(".ripple")
        ? button.querySelector(".ripple").remove()
        : null;

      // Додавання елементу
      button.appendChild(ripple);

      // Отримання часу дії анімації
      const timeOut = getAnimationDuration(ripple);

      // Видалення елементу
      setTimeout(() => {
        ripple ? ripple.remove() : null;
      }, timeOut);

      // Функтія отримання часу дії анімації
      function getAnimationDuration() {
        const aDuration = window.getComputedStyle(ripple).animationDuration;
        return aDuration.includes("ms")
          ? aDuration.replace("ms", "")
          : aDuration.replace("s", "") * 1000;
      }
    }
  });
}

/// функцию что ко всем кнопкам доовляет рипл эфект
// const allBtn = document.querySelectorAll(".button");
// const dataName = "data-ripple";
// addDataAtribite(allBtn, dataName);

// export function addDataAtribite(array, dataName) {
//   for (var i = 0; i < array.length; i++) {
// 	console.log(array[i]);
//     if (array[i].classList.contains("button")) {
// 		array[i].setAttribute(dataName,"");
//     }
//   }
// }
