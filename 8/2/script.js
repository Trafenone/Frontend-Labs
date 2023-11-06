let timers = [
    { time: 30, default: 30, interval: null },
    { time: 150, default: 150, interval: null },
    { time: 1800, default: 1800, interval: null }   
];

function startTimer(timerId) {
    if (timers[timerId - 1].interval === null) {
        timers[timerId - 1].interval = setInterval(() => {
            let time = timers[timerId - 1].time;
            const timerElement = document.getElementById(`timer${timerId}`);
            timerElement.textContent = secondsToHms(time);

            if (time <= 0) {
                clearInterval(timers[timerId - 1].interval);
                timers[timerId - 1].interval = null;
            } else {
                timers[timerId - 1].time--;
            }
        }, 1000);
    }
}

function stopTimer(timerId) {
    if (timers[timerId - 1].interval !== null) {
        clearInterval(timers[timerId - 1].interval);
        timers[timerId - 1].interval = null;
    }
}

function resetTimer(timerId) {
    clearInterval(timers[timerId - 1].interval);
    timers[timerId - 1].time = timers[timerId - 1].default;
    timers[timerId - 1].interval = null;
    document.getElementById(`timer${timerId}`).textContent = secondsToHms(timers[timerId - 1].time);
}

function secondsToHms(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;

    let displayHours = hours.toString().padStart(2,'0');
    let displayMinutes = minutes.toString().padStart(2,'0');
    let displaySeconds = sec.toString().padStart(2,'0');

    return `${displayHours}:${displayMinutes}:${displaySeconds}`;
}
