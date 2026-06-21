
let word
let smallWord
let wordLength
let passwordLength = 12
let password = []
let result
let point = 0
let strengthresult = "week"

let specialCharacter = document.getElementById("special_character")
let smallLetters = document.getElementById("small_character")
let numbers = document.getElementById("numbers")
let conditions = document.getElementsByClassName("conditions")[0]

let custombtn = document.getElementsByClassName("custom")[0]
let randombtn = document.getElementsByClassName("random")[0]
let generatebtn = document.getElementById("gene")
let copybtn = document.getElementsByClassName("copy")[0]

let showresult = document.getElementsByClassName("result")[0]
let classBtnContainer = document.getElementsByClassName("classbtncon")[0]
let resultcard = document.getElementsByClassName("resultcard")[0]
let strengthcard = document.getElementsByClassName("strenthResult")[0]
let strengthText = document.getElementsByClassName("strengthText")[0]

custombtn.addEventListener("click", () => {

    conditions.style.display = "block"
    generatebtn.style.display = "block"
    customfn()
})

randombtn.addEventListener("click", () => {

    conditions.style.display = "block"
    generatebtn.style.display = "block"
    random()
})

generatebtn.addEventListener("click", () => {
    makepassword()
    resultcard.style.display = "block"
    classBtnContainer.style.display = "none"
})

copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(result)
  alert("Password copied to clipboard")
})

// 32 - 47 special character
//65 - 90 A - Z
//97 - 122 a - z

let customfn = () => {

    passwordLength = Number(prompt("enter lenght of password required (minimum 8)"))
    word = prompt("any special word that will be add")

    wordLength = word.length

    if (passwordLength < (wordLength + 1)) {
        alert("Entered word is long than password size")
    }
}

const random = () => {

    let temp = []
    for (let i = 0; i < 2; i++) {
        temp.push(String.fromCharCode(Math.floor((Math.random() * (90 - 65 + 1)) + 65)))
    }

    word = temp.join("")
    wordLength = word.length
}

const makepassword = () => {
    password = []
    result = null
    let tempsmall = []
    for (let i = 0; i < 2; i++) {
        tempsmall.push(String.fromCharCode(Math.floor((Math.random() * (90 - 65 + 1)) + 65)))
    }
    smallWord = tempsmall.join("")

    if (smallLetters.checked) {
        smallWord = smallWord.toLowerCase()
        word += smallWord
        password.push(word)
        wordLength += 2
    }

    else {
        word += smallWord
        password.push(word)
        wordLength += 2
    }

    if (specialCharacter.checked) {
        password.push(String.fromCharCode(Math.floor((Math.random() * (47 - 32 + 1)) + 32)))
        passwordLength--
    }

    if (numbers.checked) {
        for (let i = 0; i < (passwordLength - wordLength); i++) {
            password.push((Math.floor(Math.random() * 9)).toString())
        }
    }

    result = password.join("")
    strength()
    showresult.innerText = result

    showstrength()
    strengthcard.innerText = strengthresult
    strengthText.style.display = "block"
}

const strength = () => {
    point = 0

    if (/[A-Z]/.test(password)) {
        point++
    }
    if (/[a-z]/.test(password)) {
        point++
    }
    if (/[0-9]/.test(password)) {
        point++
    }
    if (/[^A-Za-z0-9]/.test(password)) {
        point++
    }
}

const showstrength = () => {
    if (point == 1) {
        strengthresult = "Very Weak"
        strengthcard.style.color = 'red'
    }

    else if (point == 2) {
        strengthresult = "Weak"
        strengthcard.style.color = 'yellow'

    }
    else if (point == 3) {
        strengthresult = "Medium"
        strengthcard.style.color = 'yellow'

    }
    else if (point == 4) {
        strengthresult = "Strong"
        strengthcard.style.color = 'rgb(0, 255, 0)'

    }

    strengthcard.style.display = "block"
}