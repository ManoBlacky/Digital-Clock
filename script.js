var hours = document.querySelector(".hrs");
var minutes = document.querySelector(".min");
var seconds = document.querySelector(".sec");

var txt = document.querySelector("#txt");


function clock() {

    const time = new Date();

    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hrs > 12) {
        hrs = hrs - 12;
        txt.innerHTML = "PM"
    }

    else if (hrs == 0) {
        hrs = 12;
        txt.innerHTML = "AM";
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

}

setInterval(clock, 1000);