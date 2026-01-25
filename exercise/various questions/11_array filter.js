// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products = ["laptop", "mouse", "keyboard", "shoes", "shocks", "bag", "molile", "watch", "flour", "spices", "oil"]

let search="laptop"
let a=1
for (let s of products) {
    if (s == search) {
        console.log(`${search} found`)
        break
    } else {
a=0
    }
}

if (a) {
    console.log("enjoy shopping");
    
} else {
            console.log(`${search} is not available we will provided it soon`)
}