const fs = require("fs")
console.log(fs, "running");

let a = fs.writeFileSync("text1.txt", "it is a test file", () => {
    console.log("file 1 done");

});
console.log("done");

console.log("file 2 starting");


fs.writeFile("file2.txt", "it is file 2", () => {
    console.log("done")
})

console.log("file 2 end");

fs.writeFile("file3.txt", "it is file 3", () => {
    console.log("done file 3 writing")

    fs.readFile("file3.txt", (error, data) => {
        console.log(error, data);
        console.log(error, data.toString());

    })
})

console.log("file 2 end");

fs.appendFile("file3.txt", " it is file 4 appending", () => {
    console.log("done file 4 appending")
})

console.log("file 3 end");

