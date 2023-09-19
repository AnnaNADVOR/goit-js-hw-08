import Player from '@vimeo/player';
import throttle from 'lodash.throttle'; 
// if (document.hasStorageAccess) {
//   console.log('yes');  
// } else {
//     console.log('no')
// }
// const _ = require('lodash');

console.dir(throttle);

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
const localStorageKey = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate(data) {
    // here add trottle
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    console.log('1 second');
}

const savedTime = localStorage.getItem(localStorageKey); 
console.log('savedTime:',savedTime);

// please add here variable "seconds" (or may be another name) with 0 value
let seconds = 0; 
try {
    const parsedSavedTime = JSON.parse(savedTime);
    console.log('parsedSavedTime:', parsedSavedTime);
    seconds = parsedSavedTime.seconds; 
    // if parse json was success setup into variable "seconds" value from "parsedSavedTime.second"

    // Інфо про трай кетч. 
    // Якщо JSON.parse не спрацює успішно - він же створить помилку, яка відловиться за рахунок catch.
    // При цьому відбудеться ранній вихід з блоку трай на стрічці де викликався JSON.parse. 
    // Тобто тоді наступна строка після JSON.parse, яка знаходиться в блоці try вже не відпрацює
} catch (error) {
    console.log(error.name);
    console.log(error.message); 
}
 player.setCurrentTime(seconds);
// here setup seconds from variable "seconds" into player via setCurrentTime method

