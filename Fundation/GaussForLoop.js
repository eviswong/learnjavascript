/* 
 * For loop examples
 */

function rangeSum(low, hi) {
    var sum = 0;
    
    for (var i = low; i <= hi; i ++) {
        sum += i;
    }

    return sum;
}

console.log('Result of range sum is ' + rangeSum(1, 100));