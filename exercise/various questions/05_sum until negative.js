 //The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

 let a=[1,2,3,4,5,6,-1,6,7]

function add(a) {
    var sum=0
    
    for(let i=0;a[i]>=0;i++) {
        sum+=a[i]
    }
    return sum
}
console.log("sum is :",add(a))