
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

// console.log(c);
// It is always a bad idea to decalre a variable or function at global scope.
// it might not be obvious when playing with node, but it becomes curcial when developing actual we browser script.





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
