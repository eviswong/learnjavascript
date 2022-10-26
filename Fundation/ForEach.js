
function dec(number) {
    return number - 1;
}

function inc(number) {
    return number + 1;
}

function sq(number) {
    return number * number;
}

function sqrt(number) {
    return Math.sqrt(number);
}

function foreach(nums, pred) {
    var newArray = [];
    
    for (var i = 0; i < nums.length; i ++) {
        newArray.push(pred(nums[i]));
    }

    return newArray;
}

var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(foreach(numbers, inc));