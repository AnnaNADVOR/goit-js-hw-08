import Player from '@vimeo/player';
import throttle from 'lodash.throttle'; 

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
const localStorageKey = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
}

const savedTime = localStorage.getItem(localStorageKey); 
const parsedSavedTime = JSON.parse(savedTime);

let seconds = 0; 
if (parsedSavedTime) {
    seconds = parsedSavedTime.seconds;
} 

player.setCurrentTime(seconds);

