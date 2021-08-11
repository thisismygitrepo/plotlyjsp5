
// 15 JavaScript Object Literals
// 16 JavaScript Module Pattern and Revealing Module Pattern

// Object literal syntax. Looks like JSON but with functions.

car = {'model': 'Nissan',
    getPrice: function(){
        return 2200 + this.model
    }
};

car.color = 'red';  // monkey patch
car['color'] = 22; // access with keys
car[1];  // access with index ==> undef

// ======================================================================================


/* declare vars in main scope is problmeatic as it casuses clollision with libraries and consume mempry so long
the tab is open. this is true for js running in web browser not nde style.
1 solution is use let instead of var which defines against global scope (i.e. widnow and dom in context of web browser)
2 Design pattern: includes IIFE (helps privatizing variables and methods, i.e. encaposulation)
3 use Modules (very recent)
*/

/* functions are the most imortant constructs in JS. The behaviour of this keyword depends on 
the way the function is being called by binding a context to this keyword.
*/

var counter = function () {

    // private stuff only accessible via dot with counter.
    let count = 0;

    // object returned

}();

// ==============================================================================
var qq = new String("haha"); // methods of strings are now available because this is no longer a primitive type
// even for primitve strings, JS coerce them to objects at runtime if needed.
qq.toString();  // back to primitive. The type is no longer object.
let ww = new Number(33);
console.log(typeof(ww));
let prim = ww.valueOf();
console.log(typeof(prim));


// new kwarg: this helps using a function as a constructor, by binding `this` used inside the function to a new namespace.
function Car(make, model){  // object constructor.
    this.make = make;
    this.model = model;
}

mycar = new Car('bmw', 1991);
// thus, if `new` is used in front of an ordinary function, it won't change its behaiour cause it doesn't make use of `this`.
function plain(){
    return 2
}

obj = new plain();
// this new object is empty.
// this is why we say JS is all about functions, you have tricks to change the behaviour of this function at call time.
// if a function is intended to be a constructor, it should start with a capital letter.


// inheritence and classes ? We call it here prototyping and chaining.
// in essence it links objects to each other.
let origCar = {make: 'bmw', year: 1991};
newCar = Object.create(origCar); 
console.log(newCar.make);
console.log(Object.getPrototypeOf(newCar));  // origCar
let myProto = Object.getPrototypeOf(newCar);
origCar.doors = 4;
console.log(newCar.doors);  // 4 !! there is a link! but how do we know that this came from this or that?
console.log(newCar.hasOwnProperty('doors'));  // false.


// classes: just syntactic sugar, nothing new, JS remains object-based.
class Car2{
    constructor(make, year){
        this.make = make;
        this.year = year;
    }
    print(){
        return console.log(this.make + " == " + this.year)
    }
}

myCar = new Car2('bmw', 1991);

class SuperCar extends Car{

}
