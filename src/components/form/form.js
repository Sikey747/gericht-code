import Bouncer from "formbouncerjs";

const formBook  = new Bouncer(`#formbook`,{
});

const form1 = document.querySelector("[data-form]");
const validationElements = form1.querySelectorAll(`[data-validation-element]`);
const formBtn = form1.querySelector(`.button`);

//Ркглярные выражения дла разных полей
//уточнять для каждого проекта
const regPasword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/;
const regName = /^[A-Za-z\s-]{2,}$/;
const regZipCode = /^\d{6}$/;
const regEmail =/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
const regCard =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
const regPhone =
  /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

///Если нужны всплывающие фразы
// const snecbarGood = document.querySelector('[data-snackbar-info="OK"]');
// const snecbarBad = document.querySelector('[data-snackbar-info="BAD"]');

if (validationElements.length) {
  formBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const successElements = form1.querySelectorAll(".required_success");
        if (successElements.length === validationElements.length) {
          // snecbarGood?.classList.add("show");
				  // etTimeout(function () { snecbarGood.className = snecbarGood.className.replace("show", ""); }, 3000);
          form1.submit();
        }
    startValidElement(e);
        // snecbarBad?.classList.add("show");
				// setTimeout(function () { snecbarBad.className = snecbarBad.className.replace("show", ""); }, 3000);
  });

  function startValidElement(e) {
    validationElements.forEach((el) => {

    // Сортировка по типу данных и на что дожна быть реакция

      ///password
      if (el.dataset.validationElement === "password") {
        checkInput(regPasword, el);
        el.addEventListener("input", function (e) {
          checkInput(regPasword, el);
          confirmPassword();
        });
      }

      ///confirmPassword
      if (el.dataset.validationElement === "confirmPassword") {
        confirmPassword();
        el.addEventListener("input", function (e) {
          confirmPassword();
        });
      }

      ///email
      if (el.dataset.validationElement === "email") {
        checkInput(regEmail, el);
        el.addEventListener("input", function (e) {
          checkInput(regEmail, el);
        });
      }

      ///phon
      if (el.dataset.validationElement === "phon") {
        checkInput(regPhone, el);
        el.addEventListener("input", function (e) {
          checkInput(regPhone, el);
        });
      }

      ///name
      if (el.dataset.validationElement === "name") {
        checkInput(regName, el);
        el.addEventListener("input", function (e) {
          checkInput(regName, el);
        });
      }

      ///radio
      if (el.dataset.validationElement === "radio") {
        checkRadio(el);
        el.addEventListener("click", function (e) {
          checkRadio(el, e.target);
        });
      }

      ///checkbox
      if (el.dataset.validationElement === "checkbox") {
        checkCheckboxes(el);
        el.addEventListener("input", function (e) {
          checkCheckboxes(el);
        });
      }

      //сама проверка и добавленеи классов
      function checkInput(regExp, el) {
        const inputInfo = el.querySelector(".input-info");
        const input = el.querySelector("input");

        if (!regExp.test(input.value)) {
          inputInfo.classList.add("input-info_show");
          input.classList.remove("required_success");
          input.classList.add("required_errore");
        } else {
          inputInfo.classList.remove("input-info_show");
          input.classList.remove("required_errore");
          input.classList.add("required_success");
        }
      }
      function confirmPassword() {
        let password1 = form1
          .querySelector(`[data-validation-element="password"]`)
          .querySelector("input").value;
        let password2 = form1
          .querySelector(`[data-validation-element="confirmPassword"]`)
          .querySelector("input").value;
        const inputInfo = form1
          .querySelector(`[data-validation-element="confirmPassword"]`)
          .querySelector(".input-info");
        const input = form1
          .querySelector(`[data-validation-element="confirmPassword"]`)
          .querySelector("input");

        if (!(password1 === password2) || !password2) {
          inputInfo.classList.add("input-info_show");
          input.classList.add("required_errore");
          input.classList.remove("required_success");
        } else {
          inputInfo.classList.remove("input-info_show");
          input.classList.remove("required_errore");
          input.classList.add("required_success");
        }
      }
      function checkRadio(el, target) {
        const inputInfo = el.querySelector(".input-info");
        const inputs = el.querySelectorAll("input");

        let isChecked = false; // Флаг для проверки наличия активного радио-инпута

        inputs.forEach((input) => {
          if (input.checked) {
            // Если инпут активен (отмечен)
            isChecked = true;
          }
        });

        if (!isChecked) {
          inputInfo.classList.add("input-info_show");
          //нужные стили радиокнопки которые должны менять свой цвет
          el.classList.remove("required_success");
          el.classList.add("required_errore");
        } else {
          inputInfo.classList.remove("input-info_show");
          //нужные стили радиокнопки которые должны менять свой цвет
          el.classList.remove("required_errore");
          el.classList.add("required_success");
        }
      }
      function checkCheckboxes(el) {
        const inputInfo = el.querySelector(".input-info");
        const checkboxes = el.querySelectorAll(".checkbox__input");

        let isChecked = false; // Флаг для проверки наличия активных чекбоксов

        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            // Если чекбокс активен (отмечен)
            isChecked = true;
          }
        });

        if (!isChecked) {
          inputInfo.classList.add("input-info_show");
          el.classList.remove("required_success");
          el.classList.add("required_errore");
        } else {
          inputInfo.classList.remove("input-info_show");
          el.classList.remove("required_errore");
          el.classList.add("required_success");
        }
      }
    });
  }
}