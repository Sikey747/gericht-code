const dropDownMenu = document.getElementById("nav-menu");

if (dropDownMenu) {
  const allBtn = dropDownMenu.querySelectorAll(".menu__button");

  document.addEventListener("click", (e) => {
    // Если клик произошел вне меню с классом .dropdown_open
    if (!e.target.closest(".menu__item")) {
      const allArrowOpen = dropDownMenu.querySelectorAll(".dropdown__icon");
      const allOpenMenu = dropDownMenu.querySelectorAll(".dropdown_open");

      allArrowOpen.forEach((arrow) => {
        arrow.classList.remove("dropdown__icon_top-menu-open");
        arrow.classList.remove("dropdown__icon_submenu-open");
      });

      allOpenMenu.forEach((menu) => {
        menu.classList.remove("dropdown_open");
      });
    }
  });

  //смена класов по нажати на кнопки 
  allBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation(); // Остановка события click на кнопке

      //Открытие 1 выпадающего меню и смена иконки
      if (e.target.closest(".menu__dropdown-button")) {
        item
          .querySelector(".dropdown__icon_top-menu")
          .classList.toggle("dropdown__icon_top-menu-open");
        item.nextElementSibling.classList.toggle("dropdown_open");
      }

       //Открытие 2 выпадающего меню и смена иконки
      if (e.target.closest(".menu__submenu-dropdown-button")) {
        console.log("1");
        item
          .querySelector(".dropdown__icon_submenu")
          .classList.toggle("dropdown__icon_submenu-open");
        item.nextElementSibling.classList.toggle("dropdown_open");
      }
    });
  });
}

//Если открыто меню а ширина больше мобильного что бы меню мобильнео закрылось
if (dropDownMenu) {
  const mediaQuery = window.matchMedia("(max-width: 767.98px)");
  mediaQuery.addListener(checkMediaQuery);
  function checkMediaQuery(mediaQuery) {
    if (!mediaQuery.matches) {
      if (document.documentElement.classList.contains("menu-open")) {
        document.documentElement.classList.remove("menu-open");
      }
    }
  }
}
