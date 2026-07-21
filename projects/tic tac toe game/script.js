let draw = document.getElementsByClassName("draw")[0]
let win = document.getElementsByClassName("win")[0]
let wtext = document.getElementsByClassName("wtext")[0]
let cell = document.querySelectorAll(".cell")
let restart1 = document.getElementsByClassName("restart")[0]
let restart2 = document.getElementsByClassName("restart")[1]
let player = document.getElementsByClassName("player")[0]

const winningChances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let currentPlayer = "X"
let moves = ["", "", "", "", "", "", "", "", ""]

const checkWinner = () => {
    for (let chance of winningChances) {
        let a = chance[0]
        let b = chance[1]
        let c = chance[2]

        if (moves[a] !== "" && moves[a] === moves[b] && moves[b] === moves[c]) {
            return true
        }
    }

    return false
}

const uiChanger = (index) => {

    if (document.getElementsByClassName(`c${index + 1}`)[0].innerText !== "") return

    moves[index] = currentPlayer
    document.getElementsByClassName(`c${index + 1}`)[0].innerText = currentPlayer

    let winning = checkWinner()

    if (winning) {
        wtext.innerText = `${currentPlayer} wins`
        win.style.display = "flex"
        return
    }

    if (moves.every(cell => cell !== "")) {
        draw.style.display = "flex"
        return
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X"
    if (currentPlayer === "X") {
        player.style.color = "aqua"
    }
    else {
        player.style.color = "rgb(111, 0, 255)"
    }
    player.innerText = `${currentPlayer}'s move`


}

cell.forEach((element, index) => {
    element.addEventListener("click", () => {
        uiChanger(index)
    })
});

restart1.addEventListener("click", () => {
    currentPlayer = "X"
    moves = ["", "", "", "", "", "", "", "", ""]

    cell.forEach((element, index) => {
        element.innerText = ""
    });
    draw.style.display = "none"
    player.innerText = `${currentPlayer}'s move`
    player.style.color = "aqua"
})

restart2.addEventListener("click", () => {
    currentPlayer = "X"
    moves = ["", "", "", "", "", "", "", "", ""]

    cell.forEach((element, index) => {
        element.innerText = ""
    });
    wtext.innerText = ""
    win.style.display = "none"
    player.innerText = `${currentPlayer}'s move`
    player.style.color = "aqua"
})