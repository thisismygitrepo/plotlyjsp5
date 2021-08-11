
// 05 JavaScript Data Types
// 06 JavaScript Type Conversion
// next is expressions.js

let x = 7;
let y = 1.1;
let z = false;
let a = "haha";
let b;
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(z))
console.log(typeof(a))
console.log(typeof(b))


// coercion of data types

let q = 7;
let w = '6';
console.log('Int 7 plus string 6 = ' + q + w);


e = parseInt(w)
console.log(e + q)
console.log(parseFloat('Bob'));  // isNaN() checks this value
console.log(isNaN(parseFloat('Bob')));

console.log(typeof(null)); // object, but should be null primitive. A known bug in JS will never be fixed.
// null is different from undefined whcih you get in let x; here, you get null when e.g. search for string in string and fail to find it.

// __bool__ in Python exist in JS.
// if (null) {}