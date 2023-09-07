const dropDownMenu = document.querySelectorAll("[data-drop-down]");

if (dropDownMenu.length) {
  document.addEventListener("click", (e) => {
    dropDownMenu.forEach((item) => {
      if (!e.target.closest("[data-drop-down]")) {
        item.classList.remove("drop-down-menu_open");
      }
      if (e.target.closest(".drop-down__butten")) {
        //если то на что мы нажали находиться внутри кнопки конкретного айтема то будет тру
        if (item.querySelector(".drop-down__butten").contains(e.target)) {
          item.classList.toggle("drop-down-menu_open");
        }
      }
    });
  });
}

//многоуровневое меню на мобилках
const submenu = document.querySelectorAll(".navigation__link-inner");

if (submenu.length) {
  document.addEventListener("click", (e) => {
    submenu.forEach((item) => {
      if (item.contains(e.target)) {
        item.nextElementSibling.classList.toggle("submenu_open");
        item
          .querySelector(".navigation__icon")
          .classList.toggle("navigation__icon_active");
      }
    });
  });
}
