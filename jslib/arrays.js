
// 08 JavaScript Arrays
// next is functions.js

let a = [1, 2, "dfg"];
console.log(typeof(a));
console.log(a[11]);
console.log(a.length);
a[11] = 100;  // this is now a sparse matrix. All indices preceding 11 down to 3 are filled with zeros.
console.log(a.length);
a.push(11);  // this is the good way of adding new element.
a.pop()
console.log(a.length);
