/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (num, k) {
    let prefixMap = {};
    prefixMap[0] = 1;
    let n = num.length;

    let count = 0;
    let prefixSum = 0;

    for (let i = 0; i < n; i++) {
        prefixSum += num[i];
        let remain = prefixSum - k;
        // find the remain in map
        count += prefixMap[remain] || 0;
        prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1
    }
    return count;
};