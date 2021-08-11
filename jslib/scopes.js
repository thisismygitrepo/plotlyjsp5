
// 13 JavaScript Basics of Scope
// 14 JavaScript Returning Functions from Functions
// next is objects.js


/*

Variable defined in global scope can be seen inside functions.
variables defined inside a function die after execution of the function and are not visible outside it.
Variables defined inside a if block are not visible outside it.
*/


let a = "haha";

if (a != '') {
    console.log(a);
    let c = "I am c";
}

console.log(c);  // this is the impact of `let` kw. If changed to `var` instead, it works.

// ==============================================================

// It is always a bad idea to decalre a variable or function at global scope.
// This is done with var or no use of any delcaration.

// it might not be obvious when playing with node, but it becomes curcial when developing actual we browser script.
// This is a big problem and people study how to solve it by avoiding any such delcaration.


// Solution 1: Returning a function


// module revealing pattern
// module pattern

var counter = function(){

    // private stuff
    count = 0;
    function sendMessage(message){
        console.log(message + '----' + count);
    }

    // returned object that exposes only certain things.
    return {
        get: function(){return count;},
        set: function(val){count = val;},

        increment: function(){count += 1;},
        reset: function(){count = 0;},
    }

}();
