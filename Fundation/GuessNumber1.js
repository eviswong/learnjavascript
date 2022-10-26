/* 
 * A small game in web browser.
 */

var answer = 42;

const input = prompt("Welcome. Please input a number");

if (input < answer) {
    alert("Sorry. It's small.");
} else if (input > answer) {
    alert("Sorry. It's large");
} else {
    alert("Congratulations. You are right.");
}