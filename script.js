let minutes, secunds, counterInterval = undefined;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

resetCounter();

function updateCounterEl() {
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function startCounter() {
    if(counterInterval) return;

    counterInterval = setInterval( () => {
        const timerOver = !seconds && !minutes;
        const secondsOver = !seconds;

        if (timerOver) return destroyInterval();

        if (secondsOver) {
            seconds = 59;
            --minutes;
            updateCounterEl();
            return;
        }

        --seconds
        updateCounterEl();

    }, 1000);
}

function pauseCounter() {
    destroyInterval()
}

function destroyInterval() {
    clearInterval(counterInterval);
    counterInterval = undefined;
}

function resetCounter() {
    destroyInterval();
    minutes = 25;
    seconds = 00;
    updateCounterEl();
}
