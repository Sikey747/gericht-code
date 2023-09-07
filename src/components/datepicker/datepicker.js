//https://air-datepicker.com/

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

let dp = new AirDatepicker('#calendar', {
    selectedDates: [new Date()],
    position: 'bottom center',
    locale:{
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'MM/dd/yyyy',
        timeFormat: 'hh:mm aa',
        firstDay: 0
    }
})


InputArrowTogle();
//функция что изменет стрелку котороа показывает открыт календарь или закрыт
function InputArrowTogle(){
    const arrowIcon = document.querySelector(".input-arrow");

    if(arrowIcon){


    document.addEventListener("click",function(e){
        if(dp.visible){
            arrowIcon.classList.add('input-arrow__open');
        }else{
            arrowIcon.classList.remove('input-arrow__open');
        }

        if (e.target.classList.contains("input-arrow")) {
            if (arrowIcon.classList.contains("input-arrow__open")) {
                arrowIcon.classList.remove('input-arrow__open');
                dp.hide();
            } else {
                arrowIcon.classList.add('input-arrow__open');
                dp.show();
            }
        }
    })
}
        
}