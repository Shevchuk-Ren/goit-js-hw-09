"use strict";
import Swal from 'sweetalert2';

const inputHours = document.getElementById('date-selector');
const timerBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMin = document.querySelector('[data-minutes]');
const timerSec = document.querySelector('[data-seconds]');





timerBtn.addEventListener('click', startTimerForEnd);
inputHours.addEventListener('input', onInput)

timerBtn.disabled = true;

// if (Date.now > new Date(inputHours.value).getTime()) {
//     console.log(new Date(inputHours.value).getTime())
//     timerBtn.disabled = false;
//     console.log(timerBtn)
//     return alert("Please choose a date in the future");
// }
// timerBtn.disabled = true;
console.dir(inputHours)
function onInput(event) {

    // let x = event.currentTarget;
    // return x;
    // console.log(`input`, new Date(inputHours.value).getTime())
    //  console.log(`date`, Date.now())
    // console.log(new Date(inputHours.value).getTime())
    if (new Date(inputHours.value).getTime() >= Date.now()) {
        timerBtn.disabled = false;
        // console.log('hhh')

    } else if(new Date(inputHours.value).getTime() <= Date.now()) {
        // console.log('fff')
        timerBtn.disabled = true;
        // return Swal.fire({
        //     title: 'Please choose a date in the future',
        //     showClass: {
        //         popup: 'animate__animated animate__fadeInDown'
        //     },
        //     hideClass: {
        //         popup: 'animate__animated animate__fadeOutUp'
        //     }
           
        // });
        return Swal.fire('Please choose a date in the future')
    }

}


function startTimerForEnd() {
    const currentTime = Date.now();
    const createDataEnd = new Date(inputHours.value).getTime();
   
   
    inputHours.value;
    console.dir(inputHours.value)
   
    
    console.log(`ss`, timerBtn.isActive)
  
    let a = createDataEnd - currentTime;

    

    const intervalId = setInterval(() => {
     

        console.log(`djn`, a)

        const caunterTime = a -= 1000;
        console.log(caunterTime)

        const { days, hours, minutes, seconds } = convertMs(caunterTime);
        console.log(`${days}: ${hours}: ${minutes}: ${seconds}`);
        timerDays.textContent = `${days}`;
        timerHours.textContent = `${hours}`;
        timerMin.textContent = `${minutes}`;
        timerSec.textContent = `${seconds}`;
        console.log(timerDays)

        if (timerDays.textContent == '00' && timerHours.textContent == '00' && timerMin.textContent == '00' && timerSec.textContent == '00') {
            clearInterval(intervalId);
        }
    }, 1000);
    console.log(timerDays)


}
const timer = {
    start() {

        const startTime = Date.now();

    },
}
timer.start();

/*
  * - Принимает время в миллисекундах
  * - Высчитывает сколько в них вмещается часов/минут/секунд
  * - Возвращает обьект со свойствами hours, mins, secs
  * - Адская копипаста со стека 💩
  */
function getTimeComponents(time) {
    console.log(time)
    const hours =
        pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        ;
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
}

/*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
function pad(value) {
    return String(value).padStart(2, '0');
}


// ms - разница между конечной и текущей датой в миллисекунда
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

