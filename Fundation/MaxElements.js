// elements in $nums should be all positives.
function maxElement(nums) {
    var currentMax = -1;
    for (var i = 0; i < nums.length; i ++) {
        if (nums[i] > currentMax) {
            currentMax = nums[i];
        }
    }

    return currentMax;
}

console.log(maxElement(new Array(3, 2, 1, 5, 6, 7, 10, 9, 8)));