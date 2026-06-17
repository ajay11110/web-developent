startbtn = document.getElementsByClassName("start")[0]
stoptbtn = document.getElementsByClassName("stop")[0]
lapbtn = document.getElementsByClassName("lap")[0]
restartbtn = document.getElementsByClassName("restart")[0]

hourStr = document.getElementsByClassName("hour")[0].innerText
mintStr = document.getElementsByClassName("minit")[0].innerText
secStr = document.getElementsByClassName("sec")[0].innerText
milisecStr = document.getElementsByClassName("milisec")[0].innerText

hour = Number(document.getElementsByClassName("hour")[0].innerText)
mint = Number(document.getElementsByClassName("minit")[0].innerText)
sec = Number(document.getElementsByClassName("sec")[0].innerText)
milisec = Number(document.getElementsByClassName("milisec")[0].innerText)

let currentTimer = ["0", "0", "0", "0"]
let timer
let index = 0

const start = () => {

    if (timer) return

    timer = setInterval(() => {
        milisec += 1
        currentTimer[3] = milisec

        if (milisec == 100) {
            milisec = 0
            sec++
            currentTimer[2] = sec
        }

        if (sec == 60) {
            sec = 0
            mint++
            currentTimer[1] = mint
        }

        if (mint == 60) {
            mint = 0
            hour++
            currentTimer[0] = hour
        }

        document.getElementsByClassName("hour")[0].innerText = String(hour).padStart(2, "0")
        document.getElementsByClassName("minit")[0].innerText = String(mint).padStart(2, "0")
        document.getElementsByClassName("sec")[0].innerText = String(sec).padStart(2, "0")
        document.getElementsByClassName("milisec")[0].innerText = String(milisec).padStart(2, "0")
    }, 10)
}

const stoping = () => {
    clearInterval(timer)
    timer = null
}
startbtn.addEventListener("click", () => {
    stoptbtn.style.display = "block"
    startbtn.style.display = "none"
    lapbtn.style.display = "block"
    restartbtn.style.display = "none"
    start()
})

stoptbtn.addEventListener("click", () => {
    startbtn.style.display = "block"
    stoptbtn.style.display = "none"
    lapbtn.style.display = "none"
    restartbtn.style.display = "block"
    stoping()
})

restartbtn.addEventListener("click", () => {
    document.getElementsByClassName("hour")[0].innerText = "00"
    document.getElementsByClassName("minit")[0].innerText = "00"
    document.getElementsByClassName("sec")[0].innerText = "00"
    document.getElementsByClassName("milisec")[0].innerText = "00"
    document.getElementsByClassName("laps")[0].innerHTML = null
    stoptbtn.style.display = "none"
    startbtn.style.display = "block"
    lapbtn.style.display = "none"
    restartbtn.style.display = "none"
    index = 0
    currentTimer = ["0", "0", "0", "0"]
})

lapbtn.addEventListener("click", () => {
    index++;
    document.getElementsByClassName("laps")[0].innerHTML += `<div class="lapcard">
                <div class="serial">${index}.</div>
                <div class="laptime">${String(currentTimer[0]).padStart(2, "0")} : ${String(currentTimer[1]).padStart(2, "0")} : ${String(currentTimer[2]).padStart(2, "0")} : ${String(currentTimer[3]).padStart(2, "0")} </div>
            </div>`
})