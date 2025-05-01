/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0;
    let n = nums.length;

    let elem;

    for (let i = 0; i < n; i++) {
        if (count == 0) {
            elem = nums[i];
            count = 1;
        } else if (elem == nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    console.log(elem);

    let count1 = 0;

    for (let i = 0; i < n; i++) {
        if (elem == nums[i]) {
            count1++
        }
    }

    return count1 > Math.floor(n / 2) ? elem : ""
};