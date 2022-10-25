
function func() {
    var x = 5; // func scope
}

x = x + 2; // Reference error: x is not defined

console.log(x);