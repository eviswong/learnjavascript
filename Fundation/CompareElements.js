// Find the extreme value in an array of things;

function less(x, y) {
    return x < y;
}

function greater(x, y) {
    return x < y;
}

function extreme(nums, pred) {
    var currentExtreme = nums[0];
    for (var i = 0; i < nums.length; i ++) {
        if (pred(currentExtreme, nums[i])) {
            currentExtreme = nums[i];
        }
    }

    return currentExtreme;
}

console.log(
    extreme(
        new Array(3,2,1,6,5,4,9,8,7), 
        less));