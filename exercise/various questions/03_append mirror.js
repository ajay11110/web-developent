// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// let a=prompt("enter your string")

let a="ajay"
let b=[]
let l=a.length

for(let i=0; i<l;i++) {
b.push(a[l-i-1])
}

let c= b.join('')

console.log(a+c)