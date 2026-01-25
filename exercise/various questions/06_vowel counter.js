//The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = "ajayyadavisahuman"
let vowel = "aeiouAEIOU"




function vwl(a, b) {
    let count = 0
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < 10; j++) {
            if (str[i] == vowel[j]) {
                count++
            }
        }
    }
    return count
}

console.log(`there are ${vwl(str,vowel)} vowels`);