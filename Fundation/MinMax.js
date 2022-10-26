function max(x, y) {
    return x > y ? x : y;
}

function min(x, y) {
    return x > y ? y : x;
}

function check(x, y, pred) {
    return pred(x, y);
}

var result = check(1, 2, min);
console.log('Result is ' + result);