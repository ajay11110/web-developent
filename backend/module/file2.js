// on type module

import {a} from "./file1.js"
console.log(a);


// when a is not exported deas default then use {}
// and if we wanna to use a then we have to export it as default

import b from "./file1.js"
console.log(b);

import {obj} from "./file1.js"
console.log(obj);
console.log(obj.go);
