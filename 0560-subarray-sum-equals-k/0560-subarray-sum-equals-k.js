/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (num, k) {
    let prefixMap = {};
    let prefixSum = 0;
    let count = 0;

    prefixMap[0] = 1;

    for (let i = 0; i < num.length; i++) {
        prefixSum += num[i];
        let remain = prefixSum - k;
        count += prefixMap[remain] || 0;
        prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1;
    }

    return count;
};