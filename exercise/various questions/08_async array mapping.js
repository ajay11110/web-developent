//Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newarr = []

async function make(value) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let c = value * 2

            resolve(c)
        }, 500)
    })

}

async function main() {
    for (let i = 0; i < arr.length; i++) {
        let final = await make(arr[i])
        newarr.push(final)
        console.log(final)
    }
}

main()