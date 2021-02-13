
console.log('hi');

q = 1;  // bad habit (not using let or var keywords)
let x = 1;  // this behaves like declaration of variables in all other languages, no subtle ramificaitons about scope as in var.
const pi = 3.14; // if changes, throws an error.
let y;  // if you print it you get undefined. Could be useful in some cases.
console.log('X value = ' + x)

