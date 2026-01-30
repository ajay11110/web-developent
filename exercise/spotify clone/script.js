let hamburger = document.getElementsByClassName("hamburger")[0]
let leftdisplay = document.getElementsByClassName("left")[0]
let hm = "close"

hamburger.addEventListener("click", () => {
    if (hm == "close") {
        leftdisplay.style.display = "block"
        hm = "open"
    }

    else {
        leftdisplay.style.display = "none"
        hm = "close"
    }
})

let player = document.getElementsByClassName("playercard")[0].style
let playerclose = document.getElementsByClassName("playerclose")[0]
playerclose.addEventListener("click", () => {
    player.display = "none"
})

document.querySelectorAll('.rcard').forEach(card => {
    card.addEventListener('click',() => {
    document.getElementsByClassName("playercard")[0].style.display = "block"  
    });
});