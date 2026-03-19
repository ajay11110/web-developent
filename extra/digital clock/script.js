function time() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours > 12) {
        hours = hours - 12;
        document.getElementsByClassName("ampm")[0].innerText="PM"
    }

    else {
        document.getElementsByClassName("ampm")[0].innerText="AM"
    }

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    document.getElementsByClassName("hour")[0].innerText = hours
    document.getElementsByClassName("minit")[0].innerText = minutes
    document.getElementsByClassName("second")[0].innerText = seconds
}

setInterval(() => {
    time()
}, 500)
