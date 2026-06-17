let systemChoice
let result = 2
let choice

const random = () => {
    systemChoice = Math.ceil(2 * Math.random())
    console.log(systemChoice);
    systemChoiceText(systemChoice)
}

const FinalResult = (userChoice) => {

    if (userChoice == 0 & systemChoice == 2){
        result = 1
    }
    if (userChoice == 0 & systemChoice == 1){
        result = 0
    }
    if (userChoice == 1 & systemChoice == 0){
        result = 1
    }
    if (userChoice == 1 & systemChoice == 2){
        result = 0
    }
    if (userChoice == 2 & systemChoice == 1){
        result = 1
    }
    if (userChoice == 2 & systemChoice == 0){
        result = 0
    }

        console.log("result", result);

}

const systemChoiceText = async (systemChoice) => {
    await systemChoice
    if (systemChoice == 0) {
        systemChoiceTextShow.innerText = "Rock"
    }

    if (systemChoice == 1) {
        systemChoiceTextShow.innerText = "Paper"
    }

    if (systemChoice == 2) {
        systemChoiceTextShow.innerText = "Scissors"
    }

}

const finalResultShow = (result) => {
    if (result == 1) {
        document.getElementsByClassName("final_result")[0].innerText = "You Win"
        document.getElementsByClassName("final_result")[0].style.color = "rgb(0, 255, 0)"
    }
    if(result == 0) {
        document.getElementsByClassName("final_result")[0].innerText = "You Loose"
        document.getElementsByClassName("final_result")[0].style.color = "rgb(255, 0, 0)"
    }
    if(result == 2) {
        document.getElementsByClassName("final_result")[0].innerText = "Draw"
        document.getElementsByClassName("final_result")[0].style.color = "rgb(109, 109, 109)"

    }
}

const caller = (inputchoice) => {
    choice = inputchoice
    random()
    console.log("user", choice)
    FinalResult(choice)
    finalResultShow(result)
    document.getElementsByClassName("result")[0].style.display = "block"
}

const retry = () => {
    console.log("retry");
    systemChoice = null
    result = 2
    choice = null

    show.style.display = "none"
    playbtn.style.display = "block"
    document.getElementsByClassName("result")[0].style.display = "none"
    rockbtn.style.display = "block"
    paperbtn.style.display = "block"
    scessorbtn.style.display = "block"

}

let playbtn = document.getElementsByClassName("play")[0]
let rockbtn = document.getElementsByClassName("rock")[0]
let paperbtn = document.getElementsByClassName("paper")[0]
let scessorbtn = document.getElementsByClassName("scessors")[0]
let retrybtn = document.getElementsByClassName("retry")[0]

let show = document.getElementsByClassName("show")[0]

let systemChoiceTextShow = document.getElementsByClassName("answer")[0]

playbtn.addEventListener("click", () => {
    show.style.display = "block"
    playbtn.style.display = "none"
})

rockbtn.addEventListener("click", () => {
    caller(0)
    paperbtn.style.display = "none"
    scessorbtn.style.display = "none"

})
paperbtn.addEventListener("click", () => {
    caller(1)
    rockbtn.style.display = "none"
    scessorbtn.style.display = "none"

})

scessorbtn.addEventListener("click", () => {
    caller(2)
    paperbtn.style.display = "none"
    rockbtn.style.display = "none"

})

retrybtn.addEventListener("click", retry)
