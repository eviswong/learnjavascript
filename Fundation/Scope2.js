'use strict';

function foo() {
    var x = 1;

    function bar() {
        console.log(x);
    }

    bar();
}

foo();

// Rule: Inner can get outer.