let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

let start_btn = document.getElementById('start');
let stop_btn = document.getElementById('stop');
let reset_btn = document.getElementById('reset');
let timer_element = document.getElementById("timer");


start_btn.addEventListener("click", function() {
    timer = setInterval(TimerHandler, 1000);
    reset_btn.disabled = true;
});

stop_btn.addEventListener("click", function() {
    timer = clearInterval(timer);
    reset_btn.disabled = false;
});

reset_btn.addEventListener("click", function() {
    timer = clearInterval(timer);
    reset_btn.disabled = true;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer_element.innerHTML = "00:00:00";
});

function clear() {
    seconds = 0;
    minutes = 0;
    hours = 0;
}

function TimerHandler() {
    seconds ++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours ++;
    }

    //console.log(hours + ":" + minutes + ":" + seconds);

    DisplayTime();
}

function DisplayTime() {

    let secs = seconds;
    let mins = minutes;
    let hrs = hours;

    if(seconds < 10) {
        secs = "0" + seconds;
    }
    if(minutes < 10) {
        mins = "0" + minutes;
    }
    if(hours < 10) {
        hrs = "0" + hours;
    }

    timer_element.innerHTML = (hours + ":" + mins + ":" + secs);
}