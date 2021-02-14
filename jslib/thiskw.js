

function first(){
    return this;
}
console.log(first() === global);  // true

function second(){
    'use strict'
    return this;
}
console.log(second() === undefined);  // true


var myObj = {'value': 'My Object'};
global.value = 'Global Version';
function third(arg=1){
    return this.value
}
console.log(third());  // returns global version.
console.log(third.call(myObj, 'haha'));
console.log(third.apply(myObj, ['haha1', 'haha2']));  // returns My Object.

// the dot notation of object method is nothing but a syntactic sugar to method.call(obj) Proof:
function fifth(){
    console.log(this.name  + ' ' + this.surname)
}
cust1 = {name: 'Ali', surname: 'Zamani', print: fifth};
cust2 = {name: 'Lei', surname: 'Guo', print: fifth};

cust1.print()
cust2.print()

