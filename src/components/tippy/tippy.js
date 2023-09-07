// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Документація плагіна: https://atomiks.github.io/tippyjs/
// Сніппет (HTML): tip (додає атрибут з підказкою для html тега)

// Підключення з node_modules
import tippy from 'tippy.js';

// Підключення стилів з src/scss/libs
import "./tippy.scss";

// Підключення стилів з node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаємо та додаємо в об'єкт модулів
flsModules.tippy = tippy('[data-tippy-content]', {
    content: 'My tooltip!',
});