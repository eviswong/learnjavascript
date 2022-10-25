
function foo() {
    for(var i = 0; i < 100; i ++) {
        // Nothing to do;
    }

    i += 100;

    return i;
}

// ES6: Use Let
console.log(foo());