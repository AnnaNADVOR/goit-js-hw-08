import Player from '@vimeo/player';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

player.on('timeupdate', onTimeUpdate);
function onTimeUpdate(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}

const savedTime = localStorage.getItem("videoplayer-current-time");
console.log('savedTime:',savedTime);

try {
    const parsedSavedTime = JSON.parse(savedTime);
    console.log('parsedSavedTime:', parsedSavedTime);
    player.setCurrentTime(parsedSavedTime.seconds);
} catch (error) {
    console.log(error.name);
    console.log(error.message); 
}

