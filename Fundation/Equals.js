/*
 * Operator of ==
 */

function eq(x, y) {
    return x == y;
}

function neq(x, y) {
    return !eq(x, y);
}

console.log(eq(1, 2));