// // caniuse.com babeljs.io for language versions.
// Youtube series https://www.youtube.com/watch?v=KXxXr0RxGDE&list=PLqkLaKB2GJhWXV9rcarwvn06ISlL_9mPQ&index=3
// Video: 03 Basic JavaScript Syntax
// 04 JavaScript Variables
// Next is dtypes.js

console.log('hi');

q = 1;  // bad habit (not using let or var keywords)
let x = 1;  // this behaves like declaration of variables in all other languages, no subtle ramificaitons about scope as in var.
x = 4; // This is okay, re-assigment, but re-declare is fatal.
const pi = 3.14; // if changes, throws an error.
let y;  // if you print it you get undefined. Could be useful in some cases.
console.log('X value = ' + x)

