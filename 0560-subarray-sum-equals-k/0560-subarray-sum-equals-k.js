/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    // Better TC: O(N^2);
    /*
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum == k) {
                max++;
            }
        }
    }
    return max
    */


    // Optimsed TC: O(N)
    let prefixMap = {};
    prefixMap[0] = 1;
    let prefixSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        let remove = prefixSum - k;

        if (prefixMap[remove] !== undefined) {
            count += prefixMap[remove];
        }
        prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1;
    }

    return count
};