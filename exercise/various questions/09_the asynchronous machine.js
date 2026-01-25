//The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

let b = document.getElementById("btn")
let msg
let time = Math.random() * 4

async function msgprovider() {

    return new Promise((resolve) => {
        setTimeout(() => {
            msg = "order placed successfully"
            resolve(msg)
        }, time * 1000)
    })
}

async function printer() {
    let a = await msgprovider()
    document.getElementById("msg").innerHTML = a
}
b.addEventListener("click", printer)

