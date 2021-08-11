
// 09 Function Declaration
// 10 JavaScript Function Expressions
// next is conditionals.js

function sayHello(name="Bob"){
    let expre = "hello " + name;
    console.log(expre);
    return expre
}

let res = sayHello();

// Anonymous functions (functio expression with no name)
setTimeout(function (){
    console.log("I waited 2 seconds");
}, 1000)


let counter = 0;
function timeout(){
  
    setTimeout(() => {
        console.log("Hi counter = " + counter++);
    }, 1000);
    // timeout();

}

(function (){console.log("Immediate invoke of function expression IIFE");})()
// IFIE immediately invoked function expression.

// lambda funcs (arrow function) anonymous funcs
let add = (a, b) => {return a + b};
// usually used with .map of arrays.