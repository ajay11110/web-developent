let systemChoice
let result
let choice

const random = () => {
    systemChoice = Math.ceil(2 * Math.random())
    console.log(systemChoice);
    systemChoiceText(systemChoice)
}

const FinalResult = (userChoice) => {
    if (userChoice == systemChoice) {
        result = 1
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
    else {
        document.getElementsByClassName("final_result")[0].innerText = "You Loose"
        document.getElementsByClassName("final_result")[0].style.color = "rgb(255, 0, 0)"

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
})

rockbtn.addEventListener("click", () => {
    caller(0)

})
paperbtn.addEventListener("click", () => {
    caller(1)

})

scessorbtn.addEventListener("click", () => {
    caller(2)

})

retrybtn.addEventListener("click", retry)

