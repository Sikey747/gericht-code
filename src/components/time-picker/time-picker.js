// https://ui.toast.com/tui-time-picker

import TimePicker from 'tui-time-picker'; 
import "tui-time-picker/dist/tui-time-picker.min.css";

const timePicker = document.querySelector('[data-time-picker]');

const instance = new TimePicker(timePicker,{
  initialHour: 3,
  initialMinute: 3,
  showMeridiem: false,
});
