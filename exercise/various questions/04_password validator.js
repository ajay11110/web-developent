//The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// 33-47 and 58-64 and 91-96 character special and 123-126, 48-57 numbers , 65-90 uppercase ,  97 -122 small letters

var pass = "fjck4gdwAG"
var a = 1
let l = pass.length

    if (l >= 8) {
        if (checkuppercase(pass) == 1) {
            if (checklowercase(pass) == 1) {
                if (checkdigit(pass) == 1) {
                    console.log("you have created strong password :", pass);

                }

                else {
                    console.log("password should include atleast a digit");
                }
            }

            else {
                console.log("password should include atleast a lowercase letter");
            }
        }

        else {
            console.log("password should include atleast a uppercase letter");
        }
    }
    else {
        console.log("password should include lenth of 8");
        }


function checkuppercase(pass) {
    let c = 0
    for (let b = 0; b < l; b++) {
        let code = pass.charCodeAt(b)
        if (code >= 65 &&code <= 90) {
            c = 1
            break
        }
    }
    return c
}

function checklowercase(pass) {
    let c = 0
    for (let b = 0; b < l; b++) {
         let code = pass.charCodeAt(b)
        if (code >= 97 &&code <= 122) {
            c = 1
            break
        }
    }
    return c
}

function checkdigit(pass) {
    let c = 0
    for (let b = 0; b < l; b++) {
         let code = pass.charCodeAt(b)
        if (code >= 48 &&code <= 57) {
            c = 1
            break
        }
    }
    return c
}