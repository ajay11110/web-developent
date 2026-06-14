let systemChoice
let result = 0
let choice

const random = () => {
    systemChoice = Math.ceil(2 * Math.random())
}

const FinalResult = (userChoice) => {
    if (a == systemChoice) {
        result = 1
    }

}

const systemChoiceText = async (systemChoice) => {
    await systemChoice
    if (systemChoice == 0) {
        return "Rock"
    }

    if (systemChoice == 1) {
        return "Paper"
    }

    if (systemChoice == 2) {
        return "Scissors"
    }

}

const finalResultShow = (result) => {
    if (result == 1) {
        document.getElementsByClassName("")[0].innerText = "You Win"
    }
    else {
        document.getElementsByClassName("")[0].innerText = "You Loose"
    }
}

let playbtn = document.getElementsByClassName("play")[0]
let rockbtn = document.getElementsByClassName("rock")[0]
let paperbtn = document.getElementsByClassName("paper")[0]
let scessorbtn = document.getElementsByClassName("scissors")[0]

let show = document.getElementsByClassName("show")[0]

playbtn.addEventListener("click", () => {
    show.style.display = "block"
})

rockbtn.addEventListener("click", () => {
    choice = 0
    finalResultShow(result)
    random()
})
paperbtn.addEventListener("click", () => {
    choice = 1
    finalResultShow(result)
    random()
})
scessorbtn.addEventListener("click", () => {
    choice = 2
    finalResultShow(result)
    random()
})



