function abs(x) {
    if (typeof x !== 'number'){
        throw 'Not a number';
    }

    if (x >= 0) {
        return x;
    }

    return -x;
}

console.log(abs());