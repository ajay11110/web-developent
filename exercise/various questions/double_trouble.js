// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
let count = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let times = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let n = []

let l = arr.length

for (let i = 0; i < l; i++) {
    if (count[i] == 1) {
        for (let j = i + 1; j < l; j++) {
            if (arr[i] == arr[j]) {
                count[j] = 2
                times[i] += 1
            }
        }
    }
    else {
        continue
    }
}

// for (let k = 0; k < arr.length; k++) {
//     if (count[k] == 1) {
//         console.log(arr[k] + " comes for " + times[k] + " times")
//     }

//     else {
//         continue
//     }
// }
for (let o = 0; o < arr.length; o++) {
    for (let m = o; m < arr.length; m++) {
        if (count[m] == 1) {
            n.push(arr[m])
            n.push(arr[m])
        }
    }

}

console.log(n);

