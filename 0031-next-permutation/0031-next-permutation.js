/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var reverse = function (arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--
    }
    return arr;
}
var nextPermutation = function (nums) {
    let n = nums.length;
    let findIndex = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            findIndex = i;
            break;
        }
    }

    if (findIndex == -1) {
        reverse(nums, 0, n - 1);
        return nums;
    }

    for (let i = n - 1; i >= findIndex; i--) {
        if (nums[i] > nums[findIndex]) {
            [nums[i], nums[findIndex]] = [nums[findIndex], nums[i]];
            break;
        }
    }

    reverse(nums, findIndex + 1, n - 1);
    return nums;

};