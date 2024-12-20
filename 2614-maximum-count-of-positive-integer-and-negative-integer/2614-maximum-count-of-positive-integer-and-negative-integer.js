/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    return Math.max(upperBound(nums), lowerBound(nums));

};

function upperBound(nums) {
    let start = 0,
        end = nums.length - 1;

    while (start < end) {
        let middle = Math.ceil((start + end) / 2);
        if (nums[middle] < 0) {
            start = middle;
        } else {
            end = middle - 1;
        }
    }
    return nums[0] >= 0 ? 0 : start + 1;
}

function lowerBound(nums) {
    let start = 0,
        end = nums.length - 1;

    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        if (nums[middle] > 0) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }
    return nums[nums.length - 1] <= 0 ? 0 : nums.length - start;
}


