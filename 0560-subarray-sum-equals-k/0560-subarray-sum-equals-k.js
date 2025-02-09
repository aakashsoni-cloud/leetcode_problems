/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (num, k) {
    let prefixSum = 0;
    let prefixMap = {};
    prefixMap[0] = 1;

    let count = 0;

    for (let i = 0; i < num.length; i++) {
        prefixSum += num[i];

        let remove = prefixSum - k;

        count += prefixMap[remove] || 0;

        prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1;
    }

    return count;
};