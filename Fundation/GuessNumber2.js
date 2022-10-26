/*
 * Guss a number. An idea of binary search.
 */

var input = prompt("Welcome. Please input a number");
var answer = 42;

while (true) {
    if (input < answer) {
        alert("Sorry. It's small.");
        input = prompt("Please input a number again");
    } else if (input > answer) {
        alert("Sorry. It's large");
        input = prompt("Please input a number again");
    } else {
        alert("Congratulations. You are right.");
        break;
    }
}
