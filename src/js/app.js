// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window['FLS'] = false;

// Підключення основного файлу стилів
import "../scss/style.scss";

// Если надо реакт
// import Index from './react/Index.jsx';

import * as flsFunctions from "./files/functions.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();
/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
// и для полноценнго блока 100vh у первого блока с учетом шапки
// flsFunctions.fullVHfix();
/* Форматування чисел */
// import './libs/wNumb.min.js';
//Фикс для актуальной высоты шапки и что бы она всегда была выше контента
flsFunctions.headerHeigh();

//Ui-ux components
import swiper from "./../components/swiper/swiper.js";
import selectUx from "/src/components/select_ux/select_ux.js";
import datapicer from "/src/components/datepicker/datepicker.js";
import overlay from './../components/overlay/overlay.js';
import popup from "/src/components/popup/popup.js";
import tab from "/src/components/tab/tab.js";
import dynamicAdapt from './../components/dynamic_adapt/dynamic_adapt.js';
import form from './../components/form/form.js';
import lazyLoad from './../components/lazyload/lazyload.js';
// import radio from "/src/components/radio/radio.js";
// import menuIcon from './../components/menu-icon/menu-icon.js';
// import menurippleEffect from './../components/rippleEffect/rippleEffect.js';
// import sticky from "/src/components/sticky/sticky.js";
// import timePicker from "/src/components/time-picker/time-picker.js";
// import progressBar from "/src/components/progress-bar/progress-bar.js";
// import header from "/src/components/header/header.js";
// import dropDownMenu from "/src/components/drop-down-menu/drop-down-menu.js";
// import input from "/src/components/input_text-area/input_text-area.js";
// import showMore from "/src/components/showmore/showmore.js";
// import countdown from "/src/components/countdown/countdown.js";
// import snacbar from "/src/components/snackbar/snackbar.js";
// import select from "/src/components/select/select.js";
// import starRaiting from "/src/components/star_rating/star_rating.js";
// import quantity from "/src/components/quantity/quantity.js";
// import range from "/src/components/range/range.js";
// import accordionSpollers from "/src/components/accordion_spollers/accordion_spollers.js";
// import tippy from './../components/tippy/tippy.js';
// import inputmask from './../components/input_text-area/input_text-area.js';
// import selectMax from './../components/select-max/select-max.js';
// import breadcrumb from './../components/breadcrumb/breadcrumb.js';
// import castomScroll from '/src/components/castomScroll/castomScroll.js'; 
// import customСursor from './../components/custom-сursor/custom-сursor.js';
// import parallaxMouse from '/src/components/parallax-mouse/parallax-mouse.js';
// import parallax from './../components/parallax/parallax.js';
// import gallery from "./files/gallery.js";
// import isotope from "./files/isotope.js";

// import watcher from './../components/watcher/watcher.js'; // Для анимаций и отслеживания элементов
import * as scrollFunction from './../components/scroll-function/scroll-function.js';
// scrollFunction.digitsCounter();  // Анимция чисел при скроле
scrollFunction.headerScroll();   // Скрывание скрола при прокрутке  
scrollFunction.pageNavigation(); // Скрол по странице по айдишнику

//========================================================================================================================================================

// import * as flsForms from "./files/forms/forms.js";

/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formFieldsInit({
// 	viewPass: false,
// 	autoHeight: false
// });

/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

/* Підключаємо файли зі своїм кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================

/* Модуль для смены активного класса при смене старници
// flsFunctions.activeHeaderUrl();

/* Модуль для смены активного класса в хедере при клике по айдишнику секции и при скролле */
// flsFunctions.chengeActiveClassHeaderAnyType();

// графики 
// https://github.com/nhn/tui.chart

// таблица 
// https://github.com/nhn/tui.grid
// https://gridjs.io/

// библа для работы с круглыми интерфейсами
// https://wheelnavjs.softwaretailoring.net/index.html
