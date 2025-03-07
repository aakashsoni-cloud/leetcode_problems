/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;


    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) {
            return mid; // peak index
        }

        if (nums[mid - 1] < nums[mid] && nums[mid] < nums[mid + 1]) {
            if (nums[low] < nums[mid]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        } else {
            high = mid - 1;
        }
    }
};