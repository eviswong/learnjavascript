'use strict';

function foo() {
    // JS Engine did this for you: 
    // var y;
    var x = 'hello,' + y;

    console.log(x);

    y = 'bob';
}

foo();