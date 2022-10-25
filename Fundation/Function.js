// Define a function
function abs(x) {
    if (x >= 0) {
        return x;
    }

    return -x;
}

// Function is also kinda variable
var absFunc = function(x) {
    if (x >= 0) {
        return x;
    }

    return -x;
}


console.log(absFunc(-2));