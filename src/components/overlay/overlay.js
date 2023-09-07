// import * as functionModuls from "/src/js/files/functions.js";
import * as menuIcon from './../menu-icon/menu-icon.js';

overlay();

function overlay() {
  const overlay = document.querySelector(".overlay-container");
  const htmlElement = document.querySelector("html");

  // Настраиваем параметры наблюдения (слежения)
  const config = { attributes: true };

  // Создаем новый экземпляр MutationObserver
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      // Проверяем, был ли добавлен класс 'menu-open'
      if (mutation.target.classList.contains("header-menu-open")) {
        overlay.style = "display: block";
        overlay.children[0].classList.toggle("overlay-backdrop-showing");

        document.addEventListener("click",function(e){
            if(e.target.classList.contains("overlay-backdrop")){
                //Добавить сюда что надо ещё закрыть при кдике на бекс дроп
                menuIcon.menuClose();
            }
        })
      } else {
        overlay.style = "display: none";
        overlay.children[0].classList.toggle("overlay-backdrop-showing");
      }
    });
  });

  // Начинаем наблюдение за изменениями
  observer.observe(htmlElement, config);

}
