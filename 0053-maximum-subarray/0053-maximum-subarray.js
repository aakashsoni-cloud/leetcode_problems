/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // Brute force O(N^2)

    // let maxSum = nums[0];
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 0;

    //     for (let j = i; j < nums.length; j++) {
    //         sum += nums[j];
    //         if (sum > maxSum) {
    //             maxSum = sum;
    //         }
    //     }
    // }
    // return maxSum;

    // Optimised 

    let maxSum = nums[0];
    let sum = 0;
    let r = 0;
    while (r < nums.length) {
        sum += nums[r];
        maxSum = Math.max(maxSum, sum)
        if (sum < 0) {
            sum = 0;
        }
        r++;
    }

    return maxSum;
};