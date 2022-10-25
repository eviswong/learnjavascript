'use strict';

function foo(a, b, c) {
    return arguments.length;
}

function get_arguments() {
    var argList = [];
    for (var i = 0; i < arguments.length; i ++) {
        argList.push(arguments[i]);
    }
}

console.log(foo(1,2));
console.log(get_arguments(1,2,3,4,5));