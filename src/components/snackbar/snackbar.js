//Фукнкия открытия снекбара по нажатию на обект

document.addEventListener("click", openSnackbarinClick);
document.addEventListener("click", closeSnackbarinClick);

const snackbars = document.querySelectorAll(".snackbar");
const snackbarsCloseBtn = document.querySelector(".snackbar__close");
let snackbarVisible = false; // нужна для отслеживания открыт ли снекбар
const time = 4000; // время на которое видно снекбар главное в стилях указать тоже значение на 0,5 меньше
let timeOut; // Переменная для хранения таймера

function openSnackbarinClick(e) {
  const targetElement = e.target;
  const snackbarInfo = targetElement.dataset.snackbar;

  if (snackbars.length) {
    if (targetElement.hasAttribute("data-snackbar")) {
      openSnackbar(snackbarInfo);
    }
  }
}

function closeSnackbarinClick(e) {
  if (snackbarsCloseBtn) {
    if (e.target.closest(".snackbar__close")) closeSnackbar();
  }
}

function openSnackbar(snackbarInfo) {
    if(!snackbarVisible){
  snackbars.forEach((element) => {
    if (snackbarInfo == element.getAttribute("data-snackbar-info")) {
      element.classList.add("show");
      snackbarVisible = true;
      timeOut = setTimeout(function () {
        if (element.classList.contains("show")) {
          element.classList.remove("show");
          snackbarVisible = false;
        }
      }, time);
    }
    
  });
}
}

function closeSnackbar() {
  snackbars.forEach((element) => {
    if (element.classList.contains("show")) {
      element.classList.remove("show");
      if (timeOut) {
        clearTimeout(timeOut);
        snackbarVisible = false;
      }
    }
  });
}

