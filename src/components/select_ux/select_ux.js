// https://ux-select.com/

import UxSelect from "ux-select/dist/ux-select.min.js";

const selectEl1 = document.querySelector(".book__select");
const selectEl2 = document.querySelector(".book__time");

if(selectEl1){
    const myUxSelect1 = new UxSelect(selectEl1,{
        placeholder: '1 Person',
        clearText:"",
    });
}


if(selectEl2){
const myUxSelect2 = new UxSelect(selectEl2,{
            placeholder: '11:00 AM',
            clearText:"",
        });
}