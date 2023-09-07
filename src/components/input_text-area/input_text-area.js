/* Маски для полів (у роботі) */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
// https://github.com/RobinHerbots/inputmask
// Работа с масками 
// инпут в HTML должен быть обязательно текстовым не число не пароль не телефон не имеил а именно тип текст без этого не работатет 
// дальше мы сами укажем маску которая будет все контролировтаь что бы все корректно вводилось
// const inputMasks = document.querySelectorAll('[data-mask]');
// if (inputMasks.length) {
// 	flsModules.inputmask = Inputmask({"mask": "+38(***) *** ** **"}).mask(inputMasks);
// }
// --еще важынй момент 
// символы и пробелы одинаково будут и в маске и на выходе а вот с числами и буквами нюнсы
// * - это можно вводить любые числа и букавы
// 9 = значет только цифры можно вводить если другие цифры то они будт в маске 9 зарезервированное число 
// а - этачит что только буквы можно вводить
// '?' - если какуето чать кода обязательно надо ввести то ставим этот зана .mask("0.9?9");
// -- регуляріне віражения Inputmask({ regex: "[0-9]*" }).mask(selector);
// --- пример маски для имейал 
// flsModules.inputmask = Inputmask({"mask":  "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]"}).mask(inputMasks);
// так же можно указывать регулярыне выражения что бы уточнять свою маску и то что должен вводить пользователь
// можно указывать и плейс холдеры сразу в анстрйоках маски но лучше их указывать через стил и шаблон отдельно
// более детально про мсаки надо смотреть на офф сайте и в еонтексте тйо задачи что надо выполнить но для стандартных действий этого хватит

// Підключення модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('[data-mask]');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask().mask(inputMasks);
}


//лоника для показа пароля при нажатии
const viewPassBtn = document.querySelectorAll("[data-viewpass]");

if (viewPassBtn.length) {
document.addEventListener("click", function (e) {
    let targetElement = e.target;
    if (targetElement.closest('[data-viewpass]')) {
        let parentElement = targetElement.closest('.password');
        let inputElement = parentElement.querySelector('.password__input');
        if (inputElement) {
            inputElement.type = (inputElement.type === "password") ? "text" : "password";
        }
    }
});
}